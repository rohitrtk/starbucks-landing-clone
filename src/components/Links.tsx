import React, { createRef } from "react";

import "../styles/Links.css";

import links from "../content/links.json";

const Links = () => {
  return (
    <div className="footer-links">
      <div className="footer-links-container grid-col-5">
        {links.map(({ title, links }) => {
          return <LinkContainer title={title} links={links} />;
        })}
      </div>
      <div className="footer-links-container">
        {links.map(({ title, links }) => (
          <MobileLinkContainer title={title} links={links} />
        ))}
      </div>
    </div>
  );
};

export default Links;

interface LinkContainerProps {
  title: string;
  links: string[];
}

const LinkContainer = ({ title, links }: LinkContainerProps) => {
  return (
    <section className="link-section">
      <h3 className="footer-link-title">{title}</h3>
      {links.map((link) => {
        return (
          <p className="footer-link">
            <a href="/">{link}</a>
          </p>
        );
      })}
    </section>
  );
};

const MobileLinkContainer = ({ title, links }: LinkContainerProps) => {
  const dropdownButtonRef = createRef<HTMLButtonElement>();
  const dropdownInfoRef = createRef<HTMLDivElement>();

  const toggleDropdownButton = () => {
    dropdownButtonRef.current?.classList.toggle("open");
    dropdownInfoRef.current?.classList.toggle("hidden");
  };

  return (
    <section className="link-section-dropdown">
      <div className="footer-link-dropdown" onClick={toggleDropdownButton}>
        <h3 className="footer-link-title">{title}</h3>
        <button className="dropdown" ref={dropdownButtonRef}>
          <span className="dropdown-left" />
          <span className="dropdown-right" />
        </button>
      </div>
      <div className="footer-link-dropdown-info hidden" ref={dropdownInfoRef}>
        {links.map((link) => {
          return (
            <p className="footer-link">
              <a href="/">{link}</a>
            </p>
          );
        })}
      </div>
    </section>
  );
};

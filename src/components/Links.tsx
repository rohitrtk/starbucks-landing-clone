import React from "react";

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

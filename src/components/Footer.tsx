import React from "react";

import Links from "./Links";
import Social from "./Social";

import "./../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <Links />
          <div className="divider" />
          <Social />
          <Privacy />
          <p>© 2022 Starbucks Coffee Company. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const Privacy = () => {
  return (
    <div className="footer-privacy">
      <span>
        <a href="/" className="text-sm">
          Privacy Statement
        </a>
      </span>
      {"|"}
      <span>
        <a href="/">Terms of Use</a>
      </span>
      {"|"}
      <span>
        <a href="/">Partners</a>
      </span>
    </div>
  );
};

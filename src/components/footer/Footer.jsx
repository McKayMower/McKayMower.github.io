import React from "react";
import "./footer.css";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#top" className="footer-logo">
        McKay Mower
      </a>
      <ul className="permalinks">
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#About Me">About Me</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>

      <div className="footer-socials">
        <a href="https://facebook.com/mckay.mower" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://github.com/McKayMower" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/mmower777/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; McKay Mower. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;

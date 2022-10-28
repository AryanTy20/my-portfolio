import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiMail,
} from "react-icons/fi";
import "./style.scss";

const Footer = () => {
  return (
    <section className="footer">
      <h1>
        Build By <span> Aryan Tirkey</span>
      </h1>
      <div className="socials">
        <a href="https://github.com/aryanty20" target={"_blank"}>
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/aryan-tirkey-744616234/"
          target={"_blank"}
        >
          <FiLinkedin />
        </a>
        <a href="https://www.instagram.com/_aryan_ty_" target={"_blank"}>
          <FiInstagram />
        </a>
        <a href="https://twitter.com/aryanty21" target={"_blank"}>
          <FiTwitter />
        </a>
        <a className="mail" href="mailto:devty007@gmail.com" target={"_blank"}>
          <FiMail />
        </a>
      </div>
      <div className="email">
        <a href="mailto:devty007@gmail.com">Devty007@gmail.com</a>
      </div>
    </section>
  );
};

export default Footer;

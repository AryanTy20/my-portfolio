import React, { useEffect, useState } from "react";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiMail,
} from "react-icons/fi";

import { motion } from "framer-motion";
import "./style.scss";

const Footer = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const interval = setTimeout(() => setShow(true), 2300);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: show ? 1 : 0,
        transition: {
          duration: 0.3,
        },
      }}
      className="footer"
    >
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
        <a
          className="mail"
          href="mailto:aryantirk3y@gmail.com"
          target={"_blank"}
        >
          <FiMail />
        </a>
      </div>
      <div className="email">
        <a href="mailto:aryantirk3y@gmail.com">aryantirk3y@gmail.com</a>
      </div>
    </motion.section>
  );
};

export default Footer;

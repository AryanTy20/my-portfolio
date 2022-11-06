import React, { useRef } from "react";
import "./style.scss";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../../Hooks";

const Contact = () => {
  const contactRef = useRef(null);
  const isVisible = useIntersectionObserver(contactRef);
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 200,
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 200,
        transition: {
          duration: 0.5,
        },
      }}
      className="contact"
      id="contact"
    >
      <h1 ref={contactRef}>04. What's Next ?</h1>
      <h2>Get In Touch</h2>
      <p>
        I’m currently looking for any new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I’ll try my
        best to get back to you!
      </p>
      <a href="mailto:aryantirk3y@gmail.com">
        <button>Say Hello</button>
      </a>
    </motion.section>
  );
};

export default Contact;

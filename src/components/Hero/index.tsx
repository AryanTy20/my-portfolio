import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./style.scss";

const Hero = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => setShow(true), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const heroVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const items = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        // delay: 0.8,
        duration: 0.3,
      },
    },
  };

  return (
    <motion.section
      variants={heroVariants}
      initial="hidden"
      animate={show ? "show" : ""}
      whileInView="visible"
      viewport={{ once: true }}
      className="hero"
      id="main"
    >
      <motion.h1 variants={items}>Hi, my name is </motion.h1>
      <motion.h2 variants={items}>Aryan Tirkey.</motion.h2>
      <motion.h3 variants={items}>I'm Fullstack Web Developer.</motion.h3>
      <motion.p variants={items}>
        I'm an ambitious self-taught Full Stack Developer / Freelancer with a
        strong desire to learn new things, expanding my skillset upto date.
        Learning how things works always passionate me.
      </motion.p>
      <motion.h4 variants={items}>Got idea's or Project to work on ?</motion.h4>
      <motion.a variants={items} href="mailto:aryantirk3y@gmail.com">
        <button>Contact Me</button>
      </motion.a>
    </motion.section>
  );
};

export default Hero;

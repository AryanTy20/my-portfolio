import React, { useEffect, useRef } from "react";
import { useIntersectionObserver } from "../../Hooks";
import { motion } from "framer-motion";
import "./style.scss";

const Experience = () => {
  const experienceRef = useRef(null);
  const isVisible = useIntersectionObserver(experienceRef);

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 200,
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 70 : 200,
        transition: {
          duration: 0.5,
        },
      }}
      className="experience"
      id="experience"
    >
      <h1 ref={experienceRef}>Experience</h1>
      <article>
        <h2>Fresher</h2>
      </article>
    </motion.section>
  );
};
export default Experience;

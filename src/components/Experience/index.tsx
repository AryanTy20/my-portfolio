import {motion} from "framer-motion";
import {useRef} from "react";
import {useIntersectionObserver} from "../../Hooks";
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
        y: isVisible ? 0 : 200,
        transition: {
          duration: 0.5,
        },
      }}
      className="experience"
      id="experience"
    >
      <h1 ref={experienceRef}>Experience</h1>
      <div className="exp">
        <h3>1. Roxiler Systems (2 jan 2023 - present)</h3>
        <p>Currently working as an intern as Software Engineer at Roxiler Systems .
          Helping company in migrating project from rails to nestjs and vice-versa .
          Remote development in aws / docker . Getting experience of site deployement and testing . </p>
      </div>
      <article>


        {/* <h2>Fresher</h2> */}
      </article>
    </motion.section>
  );
};
export default Experience;

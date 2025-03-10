import React from "react";
import { motion } from "framer-motion";
import { experience } from "../Datas/Datas";
import ExperienceCard from "./ExperienceCard";
import { container } from "../generaic_functions/MotionFunc";
const Experience = () => {
  console.log("ex", experience[0]?.company);
  return (
    <div className="text-gray-200 mb-4 border-b mr-10">
      <motion.div
        variants={container(0.5, 100)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center text-4xl my-16"
      >
        Experience
      </motion.div>
      {experience.map((exp, key) => (
        <motion.div
          key={key}
          variants={{
            hidden: { opacity: 0, x: key % 2 === 0 ? -200 : 200 }, // Move from left/right
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.7, ease: "easeInOut" },
            },
            exit: {
              opacity: 0,
              x: key % 2 === 0 ? -200 : 200,
              transition: { duration: 0.5 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          exit="exit" // 🔥 Fix: Use "exit" instead of "hidden"
          viewport={{ once: false, amount: 0.2 }}
          className="m-4 p-4 hover:bg-gray-700 transition-all duration-500"
        >
          <ExperienceCard exp={exp} />
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;

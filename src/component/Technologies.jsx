import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { SiApachekafka } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { motion } from "framer-motion";
import { container } from "../generaic_functions/MotionFunc";

const iconVariants = (duration) => ({
  hidden: { opacity: 0, y: 20 }, // Initially hidden
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration,
      ease: "easeInOut",
    },
  },
  exit: { opacity: 0, y: 20, scale: 0.9, transition: { duration: 0.5 } }, // Fades out on exit
});

const Technologies = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      variants={iconVariants(0.5)}
      viewport={{ once: false, amount: 0.3 }} // Resets on scroll
      className="text-gray-200 border-b border-b-gray-100 mx-auto mr-10 z-10"
    >
      {/* Tech Stacks Heading */}
      <motion.div
        variants={container(0.3, 100)}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false, amount: 0.3 }}
        className="text-center text-4xl my-16"
      >
        Tech Stacks
      </motion.div>

      {/* Tech Stack Icons */}
      <motion.div
        variants={container(0.3, -100)}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-wrap justify-center items-center gap-4 mb-10"
      >
        {/* React */}
        <motion.div
          variants={iconVariants(2)}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false }}
          className="border-4 border-b-gray-500 rounded-2xl p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-500" />
        </motion.div>

        {/* Spring Boot */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false }}
          className="border-4 border-b-gray-500 rounded-2xl p-4"
        >
          <BiLogoSpringBoot className="text-7xl text-green-500" />
        </motion.div>

        {/* Redis */}
        <motion.div
          variants={iconVariants(2)}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false }}
          className="border-4 border-b-gray-500 rounded-2xl p-4"
        >
          <DiRedis className="text-7xl text-red-500" />
        </motion.div>

        {/* Kafka */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false }}
          className="border-4 border-b-gray-500 rounded-2xl p-4"
        >
          <SiApachekafka className="text-7xl text-gray-500" />
        </motion.div>

        {/* MySQL */}
        <motion.div
          variants={iconVariants(2)}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false }}
          className="border-4 border-b-gray-500 rounded-2xl p-4"
        >
          <GrMysql className="text-7xl text-blue-500" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Technologies;

import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
    exit: { opacity: 0, x: 100, transition: { duration: 0.5 } },
  };

  return (
    <div className="mr-10 z-10 text-gray-200 border-b border-t border-b-gray-300 ">
      {/* About Me Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false, amount: 0.3 }}
        className="text-center my-8"
      >
        <span className="text-2xl">About</span>
        <span className="opacity-40 text-2xl"> Me </span>
      </motion.div>

      {/* About Me Content */}
      <div className="flex flex-col justify-between items-center m-4 gap-4 lg:m-10 md:flex-col lg:flex-row">
        {/* Animated Description */}
        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.3 }}
          className="font-medium text-xl tracking-tight transition-all duration-500 lg:w-3/4"
        >
          I am Deepak Kumar, a passionate and driven Computer Science Engineer
          with a strong foundation in Java, Spring Boot, and backend
          development. With a deep interest in software architecture,
          microservices, and problem-solving, I thrive on building efficient and
          scalable applications. My academic journey at VSB Engineering College,
          where I maintain a CGPA of 8.3/10, has shaped my technical expertise,
          complemented by hands-on experience in Spring Boot, Kafka, Redis, and
          MySQL. As a Software Developer Intern at Kapture CX, I worked
          extensively on microservices, event-driven architectures, and frontend
          technologies like React.js, gaining a well-rounded skill set. My
          projects, including a Turf Booking System and a Money Management App,
          reflect my ability to design and develop robust applications. Beyond
          academics, I am an athlete and a leader, having won championships in
          athletics and football, showcasing my determination and teamwork. My
          goal is to continuously learn, innovate, and contribute to impactful
          software solutions while evolving into a skilled full-stack developer.
        </motion.p>

        {/* Animated Profile Image */}
        <motion.img
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.3 }}
          src="./DeepakAd.jpeg"
          alt="Deepak Ad"
          className="rounded-full lg:w-1/4 w-32 md:w-32 m-4 items-center"
        />
      </div>
    </div>
  );
};

export default AboutMe;

import React from "react";
import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: { opacity: 0, y: -100, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className="text-gray-400 m-0">
      {/* Animated Hero Section */}
      <motion.div
        variants={heroVariants}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false, amount: 0.3 }}
        className="group mb-5"
      >
        {/* Name with hover effect */}
        <span className="text-3xl font-bold lg:mt-16 lg:text-8xl lg:ml-8 bg-gradient-to-r from-gray-700 via-slate-400 to-blue-900 tracking-tight bg-clip-text text-transparent">
          Deepak Kumar
          <div className="w-0 mx-1 bg-gradient-to-r from-gray-500 via-slate-500 to-blue-500 group-hover:w-3/4 h-[2px] transition-all duration-500"></div>
        </span>

        {/* Title */}
        <span className="bg-gradient-to-r from-gray-500 via-slate-500 to-blue-700 bg-clip-text text-2xl tracking-tight text-transparent lg:ml-10 lg:text-3xl">
          Full Stack Developer
        </span>
      </motion.div>
    </div>
  );
};

export default Hero;

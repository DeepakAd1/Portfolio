import React from "react";
import { projects } from "../Datas/Datas";
import FlippingCard from "./FlippingCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      className="text-gray-200 mb-4 border-b mr-10"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="text-4xl text-center m-16">Projects</div>
      <motion.div
        className="flex flex-wrap justify-center gap-6"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6, ease: "easeOut", staggerChildren: 0.3 }}
      >
        {projects.map((project, ind) => (
          <FlippingCard key={ind} project={project} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;

import React from "react";
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import { motion } from "framer-motion";
import { container } from "../generaic_functions/MotionFunc";
const NavBar = () => {
  return (
    <nav className=" mb-8 flex items-center justify-between py-6">
      <motion.div variants={container(0.2,-100)} initial="hidden" animate="visible" className="flex flex-shrink-0 items-center ">
        <b className="text-4xl text-white ">AD</b>
      </motion.div>
      <motion.div variants={container(0.2,100)} initial="hidden" animate="visible" className="flex gap-6 mr-4 text-4xl text-white">
        <FaLinkedin className="hover:scale-115 transition-all duration-500 hover:text-blue-500"/>
        <FaGithub className="hover:scale-115 transition-all duration-500"/>
        <FaInstagram className="hover:scale-115 transition-all duration-500 hover:text-pink-500"/>
      </motion.div>
    </nav>
  );
};

export default NavBar;

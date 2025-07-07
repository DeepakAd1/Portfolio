import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { container } from "../generaic_functions/MotionFunc";
import { Contacts } from "../Datas/Datas";

const NavBar = () => {
  return (
    <nav className="mb-8 flex items-center justify-between py-6">
      <motion.div
        variants={container(0.2, -100)}
        initial="hidden"
        animate="visible"
        className="flex flex-shrink-0 items-center"
      >
        <b className="text-4xl text-white">AD</b>
      </motion.div>

      <motion.div
        variants={container(0.2, 100)}
        initial="hidden"
        animate="visible"
        className="flex gap-6 mr-4 text-4xl text-white"
      >
        <a
          href={Contacts.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:scale-115 transition-all duration-500 hover:text-blue-500" />
        </a>

        <a
          href={Contacts.gitHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:scale-115 transition-all duration-500" />
        </a>

        <a
          href={Contacts.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:scale-115 transition-all duration-500 hover:text-pink-500" />
        </a>
      </motion.div>
    </nav>
  );
};

export default NavBar;

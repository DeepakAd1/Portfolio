import React from "react";
import { motion } from "framer-motion";
import { Contacts } from "../Datas/Datas";

const shakeAnimation = {
  hidden: { opacity: 0, y: 50 }, // Hidden state (fades out & moves down)
  visible: {
    opacity: 1,
    y: 0,
    x: [-10, 10, -10, 10, 0], // Shake effect
    transition: {
      delay: 1, // 1-second delay before appearing
      duration: 0.6, // Fade-in duration
      ease: "easeInOut",
      x: { duration: 0.2, repeat: 10, repeatType: "reverse" }, // Repeated shake
    },
  },
  exit: { opacity: 0, y: 20, transition: { duration: 0.5 } }, // Fades out when out of view
};

const Contact = () => {
  return (
    <motion.div
      className="text-gray-200 mb-4 border-b mr-10"
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      variants={shakeAnimation}
      viewport={{ once: false, amount: 0.3 }} // Triggers when 30% of the div is visible
    >
      <h1 className="text-center text-4xl my-16"> Get in Touch</h1>
      <div className="text-center tracking-tighter my-8">
        <p className="my-4">{Contacts.addr}</p>
        <a href="#" className="border-b">
          {Contacts.mail}
        </a>
        <p className="my-4">{Contacts.phn}</p>
      </div>
    </motion.div>
  );
};

export default Contact;

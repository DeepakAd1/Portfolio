import React, { useState } from "react";
import { motion } from "framer-motion";
import { Contacts } from "../Datas/Datas";
import EmailContact from "./EmailContact";

const shakeAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    x: [-10, 10, -10, 10, 0],
    transition: {
      delay: 1,
      duration: 0.6,
      ease: "easeInOut",
      x: { duration: 0.2, repeat: 10, repeatType: "reverse" },
    },
  },
  exit: { opacity: 0, y: 20, transition: { duration: 0.5 } },
};

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <motion.div
      className="text-gray-200 mb-4 border-b mr-10"
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      variants={shakeAnimation}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h1 className="text-center text-4xl my-16">Get in Touch</h1>
      <div className="text-center tracking-tighter my-8">
        <p className="my-4">{Contacts.addr}</p>
        <button
          className="text-blue-400 underline"
          onClick={() => setShowForm(!showForm)}
        >
          {Contacts.mail}
        </button>

        <p className="my-4">{Contacts.phn}</p>
      </div>
      {showForm && <EmailContact />}
    </motion.div>
  );
};

export default Contact;

import React, { useState , useRef } from "react";
import { motion } from "framer-motion";
import { Contacts } from "../Datas/Datas";
import EmailContact from "./EmailContact";
import { MdPhone, MdEmail } from "react-icons/md";
import { isMobile } from "react-device-detect";

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

  const ref = useRef()

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

      <div className="text-center tracking-tighter my-8 space-y-4">

        {/* Mail with icon */}
        <button
          className="text-blue-400 underline flex items-center justify-center gap-2 mx-auto"
          onClick={() => setShowForm(!showForm)}
        >
          <MdEmail size={20} />
          {Contacts.mail}
        </button>

        {/* Phone with icon and mobile detection */}
        <div className="flex items-center justify-center gap-2 text-blue-400">
          <MdPhone size={20} />
          {isMobile ? (
            <a href={`tel:${Contacts.phn}`} className="underline">
              {Contacts.phn}
            </a>
          ) : (
            <span>{Contacts.phn}</span>
          )}
        </div>

        {/* Address */}
        <p className="my-4">{Contacts.addr}</p>
      </div>

      {/* Show Email Contact Form */}
      {showForm && <EmailContact ref={ref}/>}
    </motion.div>
  );
};

export default Contact;

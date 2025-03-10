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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat optio
          deserunt fugit minus molestiae? Delectus inventore placeat
          voluptatibus libero aspernatur soluta odit officiis harum, esse
          doloremque reprehenderit, quia quidem voluptates? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Et unde dolores ipsum vitae
          provident dicta blanditiis beatae, eligendi culpa quidem iure eius
          obcaecati itaque molestias cum ex quas, a similique! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Repellat, eius sint non maiores
          neque alias culpa animi ut atque esse perferendis inventore deserunt
          fuga officia commodi numquam, architecto veritatis totam! Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Neque sint alias, eius
          vel tempora quis repellendus dicta, exercitationem ratione eos odio
          quaerat earum ut? Perferendis eos ea saepe error consequatur.
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

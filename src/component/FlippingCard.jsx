import React, { useState } from "react";
import { motion } from "framer-motion";
import "./FlippingCard.css";

const FlippingCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flip-card mb-10"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={()=>setIsFlipped(!isFlipped)}
    >
      {/* Flip Container */}
      <motion.div
        className="flip-card-inner"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front Side (Image & Name Centered) */}
        <div className="flip-card-front">
          <h3 className="project-name">{project.name}</h3>
          <img
            src={project.image}
            alt={project.name}
            className="project-image"
          />
        </div>

        {/* Back Side (Full Description & Tech Stack) */}
        <div className="flip-card-back">
          <h3 className="project-name">{project.name}</h3>
          <p className="project-description text-neutral-400">
            {project.description}
          </p>
          <div className="tech-stack-container">
            {project.techStacks.map((tech, index) => (
              <span key={index} className="tech-stack">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FlippingCard;

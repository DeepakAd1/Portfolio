import React from "react";

const ExperienceCard = ({exp}) => {
    console.log(exp.Role)
  return (
    <div>
        <div className="text-white flex flex-wrap lg:justify-center">
          <div className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-neutral-400">{exp?.year}</p>
          </div>
          <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">
              {exp?.Role} -{" "}
              <span className="text-sm text-purple-100 hover:text-red-700 hover:cursor-grab">{exp?.company}</span>
            </h6>
            <p className="mb-2 text-neutral-400">{exp?.handsOn}</p>
            {exp?.techStacks.map((tech, ind) => (
              <span key={ind} className="mr-2 rounded bg-neutral-700 px-2 py-1 text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
    </div>
  );
};

export default ExperienceCard;

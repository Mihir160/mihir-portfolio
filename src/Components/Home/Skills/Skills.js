import React from "react";
import htmlIcon from "../../../image/icons/HTML.png";
import cssIcon from "../../../image/icons/css.png";
import tailwindIcon from "../../../image/icons/tailwind.png";
import bootstrapIcon from "../../../image/icons/Bootsrap.png";
import javascriptIcon from "../../../image/icons/JavaScript.png";
import reactIcon from "../../../image/icons/react.png";
import nodeIcon from "../../../image/icons/node.png";
import mongodbIcon from "../../../image/icons/mongodb.png";

const Skills = () => {
  return (
    <div id="skill">
      <div className="lg:mx-28">
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <h1 className="text-2xl font-bold text-[#00df9a]">Skills</h1>
          <div className="relative mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* HTML */}
            <div
              data-aos="flip-left"
              className="flex flex-col text-center justify-between overflow-hidden transition-shadow duration-200 rounded-lg shadow-xl group hover:shadow-2xl shadow-[#00df9a]"
            >
              <img src={htmlIcon} alt="HTML Icon" />
              <h1 className="text-2xl font-bold mb-2">HTML</h1>
            </div>

            {/* CSS */}
            <div
              data-aos="flip-left"
              className="flex text-center shadow-[#00df9a] flex-col justify-between overflow-hidden transition-shadow duration-200 rounded shadow-xl group hover:shadow-2xl"
            >
              <img src={cssIcon} alt="CSS Icon" />
              <h1 className="text-2xl font-bold mb-2">CSS</h1>
            </div>

            {/* Tailwind */}
            <div
              data-aos="flip-left"
              className="flex flex-col justify-between shadow-[#00df9a] text-center overflow-hidden transition-shadow duration-200 rounded shadow-xl group hover:shadow-2xl"
            >
              <img src={tailwindIcon} alt="Tailwind CSS Icon" />
              <h1 className="text-2xl font-bold mb-2">Tailwind</h1>
            </div>

            {/* Bootstrap */}
            <div
              data-aos="flip-left"
              className="flex flex-col justify-between shadow-[#00df9a] text-center overflow-hidden transition-shadow duration-200 rounded shadow-xl group hover:shadow-2xl"
            >
              <img src={bootstrapIcon} alt="Bootstrap Icon" />
              <h1 className="text-2xl font-bold mb-2">Bootstrap</h1>
            </div>

            {/* JavaScript */}
            <div
              data-aos="flip-left"
              className="flex flex-col justify-between shadow-[#00df9a] text-center overflow-hidden transition-shadow duration-200 rounded shadow-xl group hover:shadow-2xl"
            >
              <img src={javascriptIcon} alt="JavaScript Icon" />
              <h1 className="text-2xl font-bold mb-2">JavaScript</h1>
            </div>

            {/* React */}
            <div
              data-aos="flip-left"
              className="flex flex-col justify-between shadow-[#00df9a] text-center overflow-hidden transition-shadow duration-200 rounded shadow-xl group hover:shadow-2xl"
            >
              <img src={reactIcon} alt="React Icon" />
              <h1 className="text-2xl font-bold mb-2">React</h1>
            </div>

            {/* Node.js */}
            <div
              data-aos="flip-left"
              className="flex flex-col justify-between shadow-[#00df9a] text-center overflow-hidden transition-shadow duration-200 rounded shadow-xl group hover:shadow-2xl"
            >
              <img src={nodeIcon} alt="Node.js Icon" />
              <h1 className="text-2xl font-bold mb-2">Node.js</h1>
            </div>

            {/* MongoDB */}
            <div
              data-aos="flip-left"
              className="flex flex-col justify-between shadow-[#00df9a] text-center overflow-hidden transition-shadow duration-200 rounded shadow-xl group hover:shadow-2xl"
            >
              <img src={mongodbIcon} alt="MongoDB Icon" />
              <h1 className="text-2xl font-bold mb-2">MongoDB</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React, { useEffect, useState } from "react";
import { FaLaptop, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => setProjectsData(data));
  }, []);

  return (
    <div id="project" className="container mx-auto p-4 md:p-10">
      <h1 className="text-2xl font-bold text-[#00df9a]">Projects</h1>

      {projectsData.map((project) => (
        <section
          key={project._id}
          className="relative p-4 md:py-10 md:px-0 md:p-10 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1"
        >
          <div data-aos="fade-right">
            <img
              className="w-full md:max-w-3xl rounded-lg shadow-lg shadow-[#00df9a]"
              src={project.img1}
              alt=""
            />
          </div>
          <div
            data-aos="fade-left"
            className="content bg-[#0b4231] rounded-lg p-2 pt-8 md:p-12 pb-12 lg:w-[50%] w-full lg:absolute top-20 right-6"
          >
            <div className="flex justify-between font-bold text-sm">
              <p>{project.title}</p>
            </div>
            <h2 className="text-3xl font-semibold mt-4 md:mt-10 text-[#00df9a]">
              {project.title1}
            </h2>
            <p className="my-3 text-justify font-medium lg:text-[14px] leading-relaxed">
              {project.description}
            </p>

            <div className="flex gap-4">
              <a href={project.livelink}>
                <FaLaptop className="text-2xl"></FaLaptop>
              </a>
              <a href={project.githublink}>
                <FaGithub className="text-2xl"></FaGithub>
              </a>
              <Link to={`projects/${project._id}`}>
                <button className="btn btn-sm text-white btn-outline hover:bg-[#00df9a]">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Projects;

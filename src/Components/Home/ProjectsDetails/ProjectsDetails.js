import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaLaptop, FaGithub } from "react-icons/fa";
import Footer from "../Footer/Footer";

const ProjectsDetails = () => {
  const projectsData = useLoaderData();

  const {
    img2,
    img3,
    img4,
    fulldescription1,
    fulldescription2,
    fulldescription3,
    fulldescription4,
    fulldescription5,
    livelink,
    githublink,
  } = projectsData[0];

  return (
    <div className="lg:mx-32">
      <section className="container mx-auto p-4 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div data-aos="fade-right">
            <img
              className="w-full md:max-w-2xl rounded-lg shadow-lg shadow-[#00df9a]"
              src={img4}
              alt=""
            />
          </div>
          <div data-aos="fade-left" className="content">
            <img
              className="w-full md:max-w-2xl rounded-lg shadow-lg shadow-[#00df9a]"
              src={img3}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto p-4 md:p-10">
        <div data-aos="fade-right">
          <img
            className="w-full md:max-w-2xl rounded-lg shadow-lg shadow-[#00df9a]"
            src={img2}
            alt=""
          />
        </div>
      </section>
      <div className="mt-8">
        <h1 className="text-2xl font-bold text-[#00df9a]">Overview</h1>
      </div>
      <div className="px-4 mb-12 mt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="p-8 rounded shadow-xl bg-[#0b4231] text-white sm:p-16">
          <ul>
            <li>
              <p className="mb-4">{fulldescription1}</p>
            </li>
            <li>
              <p className="mb-4">{fulldescription2}</p>
            </li>
            <li>
              <p className="mb-4">{fulldescription3}</p>
            </li>
            <li>
              <p className="mb-4">{fulldescription4}</p>
            </li>
            <li>
              <p className="mb-4">{fulldescription5}</p>
            </li>
          </ul>
          <div className="mt-2">
            <h1 className="text-2xl font-bold text-[#00df9a]">Links</h1>
          </div>
          <div className="flex mt-2 gap-4">
            <a href={livelink}>
              <FaLaptop className="text-2xl" />
            </a>
            <a href={githublink}>
              <FaGithub className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsDetails;

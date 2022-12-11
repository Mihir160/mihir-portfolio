import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaLaptop, FaGithub } from "react-icons/fa";
const ProjectsDetails = () => {
    const projectsData = useLoaderData()
    // console.log(projectsData[0].description)
    console.log(projectsData)
    const { img2, img3, img4, fulldescription1, fulldescription2, fulldescription3, fulldescription4, fulldescription5 } = projectsData[0]


    return (
        <div className='lg:mx-32'>
            <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
                <section className="relative px-10 md:p-0 transform duration-500 ">
                    <div data-aos="fade-right">
                        <img className="xl:max-w-2xl lg:mx-4 rounded-lg shadow-lg shadow-[#00df9a]" src={img4} alt="" />
                    </div>
                    <div data-aos="fade-left" className="content rounded-lg  p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-20 right-6">
                        <img className="xl:max-w-2xl  lg:-mx-44 lg:mt-44 rounded-lg shadow-lg shadow-[#00df9a]" src={img3} alt="" srcset="" />
                    </div>
                </section>
            </section>
            <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
                <section className="relative px-10 md:p-0 transform duration-500 ">
                    <div data-aos="fade-right" >
                        <img className="xl:max-w-2xl lg:mt-44 lg:mx-4 rounded-lg shadow-lg shadow-[#00df9a]" src={img2} alt="" />
                    </div>
                </section>
            </section>
            <div>
                <h1 className=' text-2xl font-bold text-[#00df9a]'>Overview</h1>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="p-8 rounded shadow-xl bg-[#0b4231] sm:p-16">
                    <div className="flex flex-col lg:flex-row">
                        <div className="">
                            <p className="mb-4 text-base ">
                              {fulldescription1}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetails;
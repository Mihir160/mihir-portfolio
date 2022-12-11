import { useEffect, useState } from "react";
import { FaLaptop, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";



const Projects = () => {
    const [projectsData, setProjectsData] = useState([])
    useEffect(() => {
        fetch('https://mihir-portfolio-server.vercel.app/projects')
            .then(res => res.json())
            .then(data => setProjectsData(data))
    }, [])

    return (
        <div id='project' className="lg:mx-20">
            <h1 className='text-2xl font-bold text-[#00df9a]'>Projects</h1>


            {
                projectsData.map(projects => <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
                    <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
                        <div data-aos="fade-right">
                            <img className="xl:max-w-3xl lg:mx-4 rounded-lg shadow-lg shadow-[#00df9a]" src={projects.img1} alt="" />
                        </div>
                        <div data-aos="fade-left" className="content bg-[#0b4231] rounded-lg  p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-20 right-6">
                            <div className="flex justify-between font-bold text-sm">
                                <p>{projects.title} </p>

                            </div>
                            <h2 className="text-3xl font-semibold mt-4 md:mt-10 text-[#00df9a]">{projects.title1}</h2>
                            <p className="my-3 text-justify font-medium  leading-relaxed ">{projects.description}</p>

                            <div className="flex gap-4">
                                <a href={projects.livelink}><FaLaptop className='text-2xl'></FaLaptop></a>
                                <a href={projects.githublink}><FaGithub className='text-2xl'></FaGithub></a>
                                <Link to={`projects/${projects._id}`}><button className='btn btn-sm text-white btn-outline hover:bg-[#00df9a]'>Details</button></Link>
                              
                            </div>
                        </div>
                    </section>
                </section>)
            }
            {/*              
            <section  className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
                <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
                    <div data-aos="fade-right">
                    <img className="xl:max-w-3xl lg:mx-4 rounded-lg shadow-lg shadow-[#00df9a]" src={project1img1} alt="" />
                    </div>
                    <div data-aos="fade-left"  className="content bg-[#0b4231] rounded-lg  p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-20 right-6">
                        <div className="flex justify-between font-bold text-sm">
                            <p>Tech Exchange </p>

                        </div>
                        <h2 className="text-3xl font-semibold mt-4 md:mt-10 text-[#00df9a]">Resale Market site</h2>
                        <p className="my-3 text-justify font-medium  leading-relaxed "> Tech exchange is a website for buying old mobiles. Buyers can buy old mobiles through this website. the first home page has 3 categories, if you click on the category button we can see the category products.</p>

                        <div className="flex gap-4">
                            <a href="https://used-products-resale-45da8.web.app/"><FaLaptop className='text-2xl'></FaLaptop></a>
                            <a href="https://github.com/Mihir160/b612-used-products-resale-clients-side"><FaGithub className='text-2xl'></FaGithub></a>
                        </div>
                    </div>
                </section>
            </section>


            <section data-aos="fade-left" className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
                <section className="relative px-10 md:p-0 transform duration-500 lg:flex  lg:flex-row-reverse hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
                    <img className="xl:max-w-3xl lg:mx-4 rounded-lg shadow-lg shadow-[#00df9a]" src={project2img1} alt="" />
                    <div className="content bg-[#0b4231] rounded-lg  p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-20 lg:right-1/2 lg:mx-24">
                        <div className="flex justify-between font-bold text-sm">
                            <p> XtreameClean </p>

                        </div>
                        <h2 className="text-3xl font-semibold mt-4 md:mt-10 text-[#00df9a]">A personal cleaning service website</h2>
                        <p className="my-3 text-justify font-medium  leading-relaxed">House office and other cleaning service websites. When we go to the home page, we see only three services. If we click to see all then we will get all services.</p>

                        <div className="flex gap-4">
                            <a href="https://b6a11-service-review.web.app/"><FaLaptop className='text-2xl'></FaLaptop></a>
                            <a href="https://github.com/Mihir160/b6a11-service-review-client-side"><FaGithub className='text-2xl'></FaGithub></a>
                        </div>
                    </div>
                </section>
            </section>

            <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
                <section className="relative px-10 md:p-0 transform duration-500 lg:flex hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
                    <img className="xl:max-w-3xl lg:mx-4 rounded-lg shadow-lg shadow-[#00df9a]" src={project3img1} alt="" />
                    <div className="content bg-[#0b4231] rounded-lg  p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-20 right-6">
                        <div className="flex justify-between font-bold text-sm">
                            <p> Code Stack </p>
                        </div>
                        <h2 className="text-3xl font-semibold mt-4 md:mt-10 text-[#00df9a]"> Online Learning  platform site</h2>
                        <p className="my-3 text-justify font-medium  leading-relaxed"> We can purchase different types of courses through this website. If we click course then it will show how many courses there are.</p>

                        <div className="flex gap-4">
                            <a href="https://code-stack-1a5a8.web.app/"><FaLaptop className='text-2xl'></FaLaptop></a>
                            <a href="https://github.com/Mihir160/b610-learning-platform-client-side"><FaGithub className='text-2xl'></FaGithub></a>
                        </div>
                    </div>
                </section>
            </section> */}

            <div></div>

            {/* <div className="text-center mt-4">
                <button className='btn btn-sm text-white btn-outline hover:bg-[#00df9a]'>See All</button>
            </div> */}


        </div>
    );
};

export default Projects;
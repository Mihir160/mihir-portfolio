import { FaLaptop, FaGithub } from "react-icons/fa";
import project1img1 from '../../../image/projectimage/project1img1.png'
import project1img2 from '../../../image/projectimage/project1img2.png'
import project1img3 from '../../../image/projectimage/project1img3.png'
import project2img1 from '../../../image/projectimage/project2img1.png'
import project2img2 from '../../../image/projectimage/project2img2.png'
import project2img3 from '../../../image/projectimage/project2img3.png'
import project3img1 from '../../../image/projectimage/project3img1.png'
import project3img2 from '../../../image/projectimage/project3img2.png'
import project3img3 from '../../../image/projectimage/project3img3.png'

const Projects = () => {

    return (
        <div id="project" className='lg:mx-28'>
            <h1 className='text-2xl font-bold'>Projects</h1>
            <div>
                {/* first project */}
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">

                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg text-[#00df9a] mb-6 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
                                    Tech Exchange
                                    <br className="hidden md:block" />
                                    Resale Market{' '}
                                    <span className="inline-block text-deep-purple-accent-400">
                                        site
                                    </span>
                                </h2>
                                <p className="text-base  md:text-lg">
                                    Tech exchange is a website for buying old mobiles. Buyers can buy old mobiles through this website. the first home page has 3 categories, if you click on the category button we can see the category products.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <a href="https://used-products-resale-45da8.web.app/"><FaLaptop className='text-2xl'></FaLaptop></a>
                                <a href="https://github.com/Mihir160/b612-used-products-resale-clients-side"><FaGithub className='text-2xl'></FaGithub></a>
                            </div>
                        </div>
                        <div className="flex items-center justify-center -mx-4 lg:pl-8">
                            <div className="flex flex-col items-end px-3">

                                <img
                                    className=" object-cover mb-6 rounded shadow-lg h-28 shadow-[#00df9a]   sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-96"
                                    src={project1img2}
                                    alt=""
                                />
                                <img
                                    className="  object-cover w-32 h-20 rounded shadow-lg shadow-[#00df9a] sm:h-32 xl:h-40 sm:w-32 xl:w-96"
                                    src={project1img3}
                                    alt=""
                                />
                            </div>
                            <div className="px-3">
                                <img
                                    className="  object-cover w-40 h-40 rounded shadow-lg shadow-[#00df9a] sm:h-64 xl:h-80 sm:w-64 xl:w-full"
                                    src={project1img1}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {/* second project */}
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div className="flex items-center justify-center -mx-4 lg:pl-8">
                            <div className="flex flex-col items-end px-3">
                                <img
                                    className=" object-cover shadow-[#00df9a] mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                                    src={project2img2}
                                    alt=""
                                />
                                <img
                                    className="  object-cover shadow-[#00df9a] w-32 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                                    src={project2img3}
                                    alt=""
                                />
                            </div>
                            <div className="px-3">
                                <img
                                    className=" object-fill shadow-[#00df9a] w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-96"
                                    src={project2img1}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">

                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg text-[#00df9a] mb-6 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
                                    XtreameClean

                                    <br className="hidden md:block" />
                                    A personal cleaning{' '}
                                    <span className="inline-block text-deep-purple-accent-400">
                                        service website
                                    </span>
                                </h2>
                                <p className="text-base  md:text-lg">
                                    House office and other cleaning service websites. When we go to the home page, we see only three services. If we click to see all then we will get all services.

                                </p>
                            </div>
                            <div className="flex gap-4">
                                <a href="https://b6a11-service-review.web.app/"><FaLaptop className='text-2xl'></FaLaptop></a>
                                <a href="https://github.com/Mihir160/b6a11-service-review-client-side"><FaGithub className='text-2xl'></FaGithub></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                {/* first project */}
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">

                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg text-[#00df9a] mb-6 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
                                    Code Stack
                                    <br className="hidden md:block" />
                                    Online Learning{' '}
                                    <span className="inline-block text-deep-purple-accent-400">
                                        platform site
                                    </span>
                                </h2>
                                <p className="text-base  md:text-lg">
                                    We can purchase different types of courses through this website. If we click course then it will show how many courses there are. Now if you click on the course names on the left side, the course detail will go. If we get to the end of the course cards If you click the button, you will go to the details button.

                                </p>
                            </div>
                            <div className="flex gap-4">
                                <a href="https://code-stack-1a5a8.web.app/"><FaLaptop className='text-2xl'></FaLaptop></a>
                                <a href="https://github.com/Mihir160/b610-learning-platform-client-side"><FaGithub className='text-2xl'></FaGithub></a>
                            </div>
                        </div>
                        <div className="flex items-center justify-center -mx-4 lg:pl-8">
                            <div className="flex flex-col items-end px-3">
                                <img
                                    className=" mb-6  object-fill rounded shadow-lg shadow-[#00df9a] h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-96"
                                    src={project3img2}
                                    alt=""
                                />
                                <img
                                    className=" w-32  object-cover h-20 rounded shadow-lg shadow-[#00df9a] sm:h-32 xl:h-40 sm:w-32 xl:w-96"
                                    src={project3img3}
                                    alt=""
                                />
                            </div>
                            <div className="px-3">
                                <img
                                    className=" w-40 h-40   rounded shadow-lg shadow-[#00df9a] sm:h-64 xl:h-80 sm:w-64 xl:w-full"
                                    src={project3img1}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-4">
                <button className='btn btn-sm text-white btn-outline hover:bg-[#00df9a]'>See All</button>
            </div>


        </div>
    );
};

export default Projects;
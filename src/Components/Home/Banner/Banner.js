import React from 'react';

const Banner = () => {
    return (
        <div className="px-4 lg:mx-28  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div>
                <div className="lg:pr-10">
                    <p className='text-[#00df9a] mb-8'>Hi, My Name is</p>
                    <h5 className="mb-4 text-4xl lg:text-6xl font-extrabold  leading-none">
                        Mihir Roy.
                        <br/>
                        I'm a MERN{' '}
                        <span className="inline-block mt-4 text-deep-purple-accent-400">
                            Stack Developer
                        </span>
                    </h5>
                    <p className="mb-6 text-[#00df9a] ">
                      I build interactive websites than run across platforms & devices
                    </p>

                </div>
          
            </div>
        </div>
    );
};

export default Banner;
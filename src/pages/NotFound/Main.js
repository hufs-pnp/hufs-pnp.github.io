import React from 'react';

import ParticlesBg from 'particles-bg';
import bannerlogo from '../../static/images/logo_black.png';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <section className="text-gray-700 body-font bg-transparent min-h-screen">
            <ParticlesBg type="cobweb" bg={true} />
            <div className="container mx-auto flex md:px-5 md:py-24 pt-32 pb-10 md:flex-row flex-col-reverse items-center">
                <div className="md:mt-52 my-1 xl:pl-32 md:pl-1 lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left md:mb-16 md:mb-0 items-center text-center">
                    <div className="title-font sm:text-6xl text-5xl mb-4 font-medium text-gray-900 h-10 sm:h-20">
                        404
                    </div>
                    <p className="text-3xl">
                        Page Not Found
                    </p>
                    <Link to="/">
                        <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg m-8">
                            Home
                            <svg
                                className="w-6 h-6 mt-0.5 ml-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                ></path>
                            </svg>
                        </button>
                    </Link>
                </div>
                <div className='xl:pt-8 xl:pl-1 lg:w-1/3 lg:pt-24 lg:pl-4 md:w-1/2 md:pt-40 md:pl-32 pt-12 pb-4'>
                    <img
                        class="xl:h-80 lg:h-64 md:h-52 sm:h-40 h-32"
                        src={bannerlogo}
                        alt="bannerlogo"
                    />
                </div>
            </div>
        </section>
    );
};

export default Main;

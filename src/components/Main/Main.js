import React from 'react';

import ParticlesBg from 'particles-bg';
import Typewriter from '../../modules/Typewriter/Typewriter';
import bannerlogo from '../../static/images/logo_black.png';
const Main = () => {
    return (
        <section className="text-gray-700 body-font bg-transparent relative">
            <ParticlesBg type="cobweb" bg={true} />
            <div className="container mx-auto flex md:px-5 md:py-24 pt-32 pb-10 md:flex-row flex-col-reverse items-center">
                <div className="md:mt-52 my-1 xl:pl-32 md:pl-1 lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left md:mb-16 md:mb-0 items-center text-center">
                    <div className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 h-20">
                        <Typewriter
                            options={{
                                strings: [
                                    '열정을 가진 자들이 <br /> 모여 세상을 개척한다.',
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <p className="leading-relaxed">
                        PnP에서는 혼자서 하기 어려운 것들을 선후배의 도움을 받아
                        소속감을 가지고 협력하며,
                    </p>
                    <p className="mb-1 leading-relaxed">
                        다양한 활동 경험을 통해 뛰어난 개발자로 성장할 수 있는
                        기회를 만들어갑니다.
                    </p>
                    {/* <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg animate-bounce">
                            지원하기
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
                    </div> */}
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

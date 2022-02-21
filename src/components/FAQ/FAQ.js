import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ParticlesBg from 'particles-bg';
/*
<div className="containerpy-6">
                <Link to="/FAQ">
                    <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg m-8">
                        FAQ
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
</div> */

const FAQ = () => {
    const [SearchTerm, setSearchTerm] = useState('');

    return (
        <section className="text-gray-800 body-font relative">
            <ParticlesBg type="cobweb" bg={true} />
            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 border border-gray-200 shadow-md">
                <h2 className="text-indigo-600 text-2xl mb-1 font-medium title-font">
                        Frequently Asked Question
                    </h2>
                    <p className="leading-relaxed mt-2 mb-5 text-gray-600">
                        PNP FAQ 게시판입니다. 궁금하신 내용을 검색해주세요~
                    </p>
                
                <button className="text-white bg-indigo-500 border-0 w-full mt-5 py-2 px-20 focus:outline-none hover:bg-indigo-600 rounded test-xs lg:text-base animate-bounce mt-2">
                    FAQ 게시판 바로가기
                </button>
                <p className="text-xs text-gray-500 mt-3">
                        직접 운영진에 질문하시려면 아래의 카카오톡 플러스칱구를 이용해 질문해주세요~
                    </p>
                    <a
                            className="text-center sm:text-left"
                            href="http://pf.kakao.com/_kBSxes/chat"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                    <button className="text-white bg-indigo-500 border-0 w-full mt-5 py-2 px-20 focus:outline-none hover:bg-indigo-600 rounded test-xs lg:text-base animate-bounce mt-2">
                        카카오플러스친구 문의하기
                    </button>
                    </a>
                </div>
            </div>
            
        </section>
    );
};

export default FAQ;

import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ParticlesBg from 'particles-bg';
import Fade from 'react-reveal/Fade';
import Scrollup from '../../components/Scrollup';
import FAQDATA from './FAQDATA.json'

const FAQ = () => {
    const [SearchTerm, setSearchTerm] = useState('');
    
  return (
    <section className="text-gray-800 body-font relative">
    <Header />
    <ParticlesBg type="cobweb" bg={true} />
    <Fade Bottom>
        <div className="flex relative">
            <div className="hidden lg:block container px-5 py-24 md:w-1/3 mt-4">
                <div className="bg-white rounded-lg p-8 flex flex-col w-full relative z-10 border border-gray-200 shadow-md">
                    <h2 className="text-indigo-600 text-2xl mb-1 font-medium title-font">
                        Frequently Asked Question
                    </h2>
                    <p className="leading-relaxed mt-2 mb-5 text-gray-600">
                        PNP FAQ 게시판입니다. 궁금하신 내용을 검색해주세요~
                    </p>
                <div className="flex-auto flex-shrink-0 space-x-2">
                    <input
                        className="bg-white rounded border w-2/3 xl:w-3/4 border-gray-400 focus:outline-none focus:border-indigo-500 text-xs xl:text-base px-2 py-2 mb-4"
                        placeholder="검색어 입력"
                        type ="text"
                        onChange={event=>{
                            setSearchTerm(event.target.value);
                        }}
                    />                   
                    <button className="text-white bg-indigo-500 border-0 w-1/4 xl:w-1/5 py-2 px-4 mb-4 focus:outline-none hover:bg-indigo-600 rounded text-xs xl:text-base">
                        검색
                    </button>
                </div>
                    <p className="text-xs text-gray-500 mt-3">
                        찾는 질문이 없으시면 아래의 카카오톡 플러스친구를 이용해 질문해주세요~
                    </p>
                    <a
                        className="text-center sm:text-left"
                        href="https://open.kakao.com/o/saiwA5hh"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <button className="text-white bg-indigo-500 border-0 w-full mt-5 py-2 px-20 focus:outline-none hover:bg-indigo-600 rounded text-xs xl:text-base animate-bounce">
                        카카오플러스친구 문의하기
                    </button>
                    </a>
                </div>
            </div>
        <div className="mt-24 mx-4 flex-row flex-1 space-y-3">
            <div className="mt-16 md:mt-0 block lg:hidden container bg-white rounded-lg p-8 flex flex-col mx-auto relative z-10 border border-gray-200 shadow-md">
                
                    <h2 className="text-indigo-600 text-2xl mb-1 font-medium title-font">
                        Frequently Asked Question
                    </h2>
                    <p className="leading-relaxed mt-2 mb-5 text-gray-600">
                        PNP FAQ 게시판입니다. 궁금하신내용을 검색해주세요~
                    </p>
                <div className="flex-auto flex-shrink-0 space-x-2">
                    <input
                        className="bg-white rounded border w-2/3 md:w-2/3 border-gray-400 focus:outline-none focus:border-indigo-500 text-xs md:text-base px-2 py-2 mb-4"
                        placeholder="검색어 입력"
                        type="text"
                        onChange={event=>{
                            setSearchTerm(event.target.value);
                        }}
                    />
                    <button className="text-white bg-indigo-500 border-0 w-1/4 py-2 px-4 mb-4 focus:outline-none hover:bg-indigo-600 rounded text-xs md:text-base">
                        검색
                    </button>
                </div>
                    <p className="text-xs text-gray-500 mt-3">
                        찾는 질문이 없으시면 아래의 카카오톡 플러스친구를 이용해 질문해주세요~
                    </p>
                    <a
                        className="text-center sm:text-left"
                        href="https://open.kakao.com/o/saiwA5hh"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <button className="text-white bg-indigo-500 border-0 w-full mt-5 py-2 px-20 focus:outline-none hover:bg-indigo-600 rounded text-xs md:text-base animate-bounce mt-2">
                        카카오플러스친구 문의하기
                    </button>
                    </a>
                
            </div>

            {FAQDATA.filter((val)=>{
                if (val.Question.includes(SearchTerm) || val.Answer.includes(SearchTerm)){
                    return val
                } else if (SearchTerm ==""){
                    return val
                }
            }).map((val,key)=>{
                if (val.Button){
                    return (
                        <div className ="lg:mt-24 bg-white rounded-lg p-8 flex flex-col  md:ml-auto relative z-10 border border-gray-200 shadow-md">
                            <div className="text-left text-indigo-600 text-xl mb-1 font-medium title-font item px-6 py-3 bg-indigo-100 rounded-lg mb-8">
                                {val.Question}
                            </div>
                            <div class="text-gray-800 px-3 text-base body-font relative item py-4 bg-blue-100 rounded-lg">
                                {val.Answer}
                            </div>
                            <a
                                className="text-center sm:text-left"
                                href="https://open.kakao.com/o/saiwA5hh"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="text-white bg-indigo-400 border-0 mt-4  py-2 px-20 focus:outline-none hover:bg-indigo-600 rounded text-base animate-bounce mt-2">
                                    카카오플러스친구 문의하기
                                </button>
                            </a>
                        </div>
                    )
                }
                else{
                    return (
                        <div className ="lg:mt-24 bg-white rounded-lg p-8 flex flex-col  md:ml-auto relative z-10 border border-gray-200 shadow-md">
                            <div className="text-left text-indigo-600 text-xl mb-1 font-medium title-font item px-6 py-3 bg-indigo-100 rounded-lg mb-8">
                                {val.Question}
                            </div>
                            <div class="text-gray-800 px-3 text-base body-font relative item py-4 bg-blue-100 rounded-lg">
                                {val.Answer}
                            </div>
                        </div>
                    )

                }
                
            })}      
        </div>
    </div>
        
    <div className="containerpy-6">
            <Link to="/">
                <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg m-8">
                    Main
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
    </div >
    </Fade>
    <Footer/>
    <Scrollup />
    </section>
  );
};

export default FAQ;
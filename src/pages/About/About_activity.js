import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Scrollup from '../../components/Scrollup';

const About_activity = () => {
  return (
    <div>
      <Header />
        <div class="mt-40 lg:mt-24">
            <div className="flex flex-col text-center w-full">
              <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                About
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                학회소개
              </h1>
            </div>
            <div className="flex flex-wrap lg:flex lg:flex-row place-content-center mt-8">
                <Link to="/About">
                    <button className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
                        학회소개
                    </button>
                </Link>
                <Link to="/About_activity">
                    <button className="text-gray-600 bg-white border-b-2 border-indigo-400 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
                        학회활동
                    </button>
                </Link>
                    <Link to="/About_history">
                    <button className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
                        연혁
                    </button>
                </Link>

                <Link to="/About_leader">
                    <button className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
                        학회장
                    </button>
                </Link>
                <Link to="/About_professor">
                  <button className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
                    교수
                  </button>
                </Link>
            </div>
        </div>

      <section
      className="text-gray-700 body-font border-t border-gray-200">
      <div className="flex flex-wrap mt-8 mb-80 xl:mb-96">
          <Fade bottom>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    ></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    스터디 및 튜터링
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    학회원들과 함께 협력하며, 컴퓨터 기술 및 이론에 관한 학습을
                    통해 자신의 소프트웨어 분야의 전문성을 키워갑니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    세미나
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    개강 총회, 종강 총회, 정기 회의를 진행하여 학회원들과 친목을
                    도모하고 원활하고 활발한 활동을 진행합니다. 매 학기 말
                    서로의 프로젝트를 발표를 통해 공유합니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    ></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    프로젝트
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    공모전, 대회, 해커톤 등 다양한 대외활동 또는 자체 개발
                    프로젝트에 참여하며 자신만의 프로젝트를 완성해나갑니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z "/>
                        <line x1={9} y1={22} x2={9} y2={12}/>
                        <line x1={15} y1={12} x2={15} y2={22}/>
                        <line x1={9} y1={12} x2={15} y2={12}/>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    홈커밍데이
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                  졸업하신 선배님을 초청하여 선후배간의 만남의 장을 마련합니다. 
                  행사를 통해 졸업생 선배들에게 실무경험과, 현업에서 필요한 
                  각종 정보들을 들을 수 있습니다. 
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 14s1.5 2 4 2 4-2 4-2"/>
                        <circle cx={12} cy={12} r={10} />
                        <line x1={9} y1={9} x2={9.01} y2={9}/>
                        <line x1={15} y1={9} x2={15.01} y2={9}/>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                  봉사 활동
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                  국내, 해외 봉사 활동에 참여하여 자신의 IT정보를 전달하며 전세계 구성원들과 IT 정보격차해소에 기여합니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75"/>
                        <circle cx={9} cy={7} r={4}/>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    총회
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                  개강 총회, 종강 총회, 정기 회의를 진행하여 학회원들과 친목을 도모하고 
                  원활하고 활발한 활동을 진행합니다. 매 학기 말 서로의 프로젝트를 발표를 
                  통해 공유합니다.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        
      </section>
    <Footer />
    <Scrollup />
    </div>
  );
};

export default About_activity;

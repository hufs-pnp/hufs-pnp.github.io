import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import professor from '../../static/images/professor/professor.png'
import Scrollup from '../../components/Scrollup';

const About_leader = () => {
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
                    <button className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
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
                    <button className="text-gray-600 bg-white border-b-2 border-indigo-400 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg"> 
                        교수
                    </button>
                </Link>
            </div>
        </div>
        
      <section className = "text-gray-700 body-font border-t border-gray-200 lg:mb-32 xl:mb-60">
            <div class="mt-8">
                <div className="flex flex-col text-center w-full">
                    <h2 className="text-indigo-500 tracking-widest font-medium title-font mb-1">
                        지도교수
                    </h2>
                    <h1 className=" text-2xl font-medium title-font text-gray-900">
                        이재혁 교수님
                    </h1>
                </div>
            </div>
            <Fade bottom>
            <div class ="flex flex-wrap justify-center">
            <div className="flex flex-wrap text-center mb-8 mt-12 mx-8">
                <div class="mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="xl:flex">
                    <div class="xl:flex">
                    <img
                        class="object-covel"
                        src={professor}
                    />
                    </div>
                    <div class="p-8 text-justy-center">
                        <h2 class=" text-indigo-500 tracking-widest font-medium title-font mb-1">2000~</h2>
                        <h1 class="font-medium title-font mb-4 text-gray-900">경력</h1>
                        <p className="lg:text-lg mx-auto leading-relaxed text-base mt-3 text-justify-center lg:whitespace-nowrap">
                        서울공대 제어계측공학과 학사(1986) </p>
                        <p className="lg:text-lg mx-auto leading-relaxed text-base mt-3 text-justify-center lg:whitespace-nowrap">
                        한국과학기술원 전기 및 전자공학과 석사(1988)</p>
                        <p className="lg:text-lg mx-auto leading-relaxed text-base mt-3 text-justify-center lg:whitespace-nowrap">
                        한국과학기술원 전기 및 전자공학과 박사(1994)</p>
                        <p className="lg:text-lg mx-auto leading-relaxed text-base mt-3 text-justify-center lg:whitespace-nowrap">
                        한국과학기술원 전기 및 전자공학과 Post-Doc(1994-1995)</p>
                        <p className="lg:text-lg mx-auto leading-relaxed text-base mt-3 text-justify-center lg:whitespace-nowrap">
                        한국외대 디지털정보공학과 교수(1995-현재)</p>
                        <p className="lg:text-lg mx-auto leading-relaxed text-base mt-3 text-justify-center lg:whitespace-nowrap">
                        대한전자공학회 정회원 </p>
                        <p className="lg:text-lg mx-auto leading-relaxed text-base mt-3 text-justify-center lg:whitespace-nowrap">
                        IEEE member</p>
                        <p className="lg:text-lg mx-auto leading-relaxed text-base mt-3 text-justify-center lg:whitespace-nowrap">
                        한국외대 과학기술학회 PNP 지도교수(2000-현재)</p>
                        <p className="lg:text-lg mx-auto leading-relaxed text-base mt-3 text-justify-center lg:whitespace-nowrap">
                        한국외대 컴퓨터공학부 학부장(2021)</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </Fade>
      </section>
      <Footer />
      <Scrollup />
    </div>
  );
};

export default About_leader;

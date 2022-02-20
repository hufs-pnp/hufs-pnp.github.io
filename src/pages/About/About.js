import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import mainlogo from '../../static/images/about/main.png'
import hufslogo from '../../static/images/about/school.png'
import finalgoal from '../../static/images/about/success.png'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Scrollup from '../../components/Scrollup';

const About = () => {
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
            <button className="text-gray-600 bg-white border-b-2 border-indigo-400 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
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
            <button className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
              교수
            </button>
          </Link>

        </div>
      </div>
      <section
      id="about"
      className="text-gray-700 body-font border-t border-gray-200"
      >
      
      <Fade bottom>
        <div className="flex flex-col text-center w-full mb-8 mt-8">
          <div class="w-4/5 mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div class="md:flex">
              <div class="md:flex-shrink-0">
              <img
                class="h-48 w-full object-cover md:h-full md:w-60"
                src={mainlogo}
              />
              </div>
              <div class="p-8">
                <h2 class="text-indigo-500 tracking-widest font-medium title-font mb-1">Introduction</h2>
                <h1 class="font-medium title-font mb-4 text-gray-900">PnP 학회(Passion & Pinoneer)</h1>
                <p className="lg:w-4/5 mx-auto leading-relaxed text-base mt-3 text-justify">
                  PnP는 Passion & Pioneer, “열정을 가진 자들이 모여 세상을 개척한다”라는 의미를 가지고 있습니다. 1999년 디지털정보공학과 소속 학회로 설립되어 학부 개편에 따라 현재
                  컴퓨터공학부에 소속되어 있는 학술 학회입니다.컴퓨터공학부 학부생들이 개발자로 성장하기 위해 자신의 목표를 찾고,같은 목표를 가지고 있는 학우들과 함께 학습 및 연구를 통해 자신의
                  프로젝트를 완성해나가고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-center w-full mb-8 mt-8">
          <div class="w-4/5 mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div class="md:flex">
              <div class="md:flex-shrink-0">
              <img
                class="h-48 w-full object-cover md:h-full md:w-60"
                src={hufslogo}
              />
              </div>
              <div class="p-8">
                  <h2 className="text-indigo-500 tracking-widest font-medium title-font xl:ml-16 2xl:ml-64 mb-1">Our Goal</h2>
                  <h1 className="font-medium title-font mb-4 text-gray-900 xl:ml-16 2xl:ml-72 text-center">학회 목적</h1>
                  <div class = "space-y-2">
                    <p className ="lg:w-4/5 xl:ml-16 2xl:ml-72 text-lg mt-3 text-left ">
                    1. 자신이 되고자 하는 목표를 찾기                                                             
                    </p>
                    <p className="lg:w-4/5 xl:ml-16 2xl:ml-72 lg:whitespace-nowrap text-lg mt-3 text-left ">
                    2. 컴퓨터 기술 및 이론에 관한 학습을 통해 자신의 소프트웨어 분야 전문성 증진
                    </p>
                    <p className="lg:w-4/5 xl:ml-16 2xl:ml-72 text-lg mt-3 text-left">
                    3. 학회원들과 함께 협력하며 자신의 프로젝트를 완성
                    </p>
                    <p className="lg:w-4/5 xl:ml-16 2xl:ml-72 text-lg mt-3 text-left">
                    4. 실무 경험과 현업에서 필요한 각종 정보를 공유
                    </p>
                    <p className="lg:w-4/5 xl:ml-16 2xl:ml-72 text-lg mt-3 text-left">
                    5. 선후배 간의 친목을 증진
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col text-center w-full mb-8 mt-8">
          <div class="w-4/5 mx-auto bg-white rounded-xl shadow-md overflow-hidden ">
            <div class="md:flex">
              <div class="md:flex-shrink-0">
              <img
                class="h-48 w-full object-cover md:h-full md:w-60"
                src={finalgoal}
              />
              </div>
              <div class="p-8">
                <h2 class="text-indigo-500 tracking-widest font-medium title-font mb-1">Final Goal</h2>
                <h1 class="font-medium title-font mb-4 text-gray-900">최종 목표</h1>
                <p className="lg:w-4/5 mx-auto leading-relaxed text-xl font-bold italic mt-3 text-justify">
                "혼자서 하기 어려운 것들을 선후배의 도움을 받아 소속감을 가지고 협력하며 다양한 활동 경험을 통해 뛰어난 개발자로 성장할 수 있는 기회를 만들어갑니다."
                </p>
                
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

export default About;

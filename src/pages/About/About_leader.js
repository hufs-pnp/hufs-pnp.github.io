import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import heo from '../../static/images/leaders/20202021.png'
import park from '../../static/images/leaders/2019.png'
import jung from '../../static/images/leaders/2018.png'
import kim from '../../static/images/leaders/2022.png'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
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
                    <button className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-indigo-600 hover:border-black-800 text-lg">
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
                    <button className="text-gray-600 bg-white border-b-2 border-indigo-400 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
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
      <section className= "border-t border-gray-200 md:mg-32 lg:mb-0">
      <div className="flex flex-wrap justify-center gap-4">
      <Fade bottom>
      <div className="flex flex-col text-center md:w-1/3 lg:w-1/4  mb-8 mt-12">
          <div class="mx-auto bg-white rounded-xl shadow-md overflow-hidden ">
            <div class="md:flex-col">
              <div class="md:flex-shrink-0">
              <img
                class="object-cover md:h-full md:w-full"
                src={kim}
              />
              </div>
              <div class="p-8">
                <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">2022</h2>
                <h1 class="sm:text-2xl font-medium title-font mb-4 text-fuchsia-900">김태우</h1>
                <p className="mx-auto leading-relaxed text-base mt-3 text-justify-center lg:whitespace-nowrap">
                컴퓨터전자시스템공학부 17학번
                <br/>이메일 : epiclog@naver.com
                </p>
              </div>
            </div>
          </div>
        </div>
      <div className="flex flex-col text-center md:w-1/3 lg:w-1/4  mb-8 mt-12">
          <div class="mx-auto bg-white rounded-xl shadow-md overflow-hidden ">
            <div class="md:flex-col">
              <div class="md:flex-shrink-0">
              <img
                class="object-cover md:h-full md:w-full"
                src={heo}
              />
              </div>
              <div class="p-8">
                <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">2020-2021</h2>
                <h1 class="sm:text-2xl font-medium title-font mb-4 text-gray-900">허성일</h1>
                <p className="mx-auto leading-relaxed text-base mt-3 text-justify-center lg:whitespace-nowrap">
                컴퓨터전자시스템공학부 16학번
                <br/>이메일 : tjddlf101@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-center md:w-1/3 lg:w-1/4  mb-8 mt-12">
          <div class="mx-auto bg-white rounded-xl shadow-md overflow-hidden ">
            <div class="md:flex-col">
              <div class="md:flex-shrink-0">
              <img
                class="object-cover md:h-full md:w-full"
                src={park}
              />
              </div>
              <div class="p-8">
                <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">2019</h2>
                <h1 class="sm:text-2xl font-medium title-font mb-4 text-gray-900">박기웅</h1>
                <p className="mx-auto leading-relaxed text-base mt-3 text-justify-center lg:whitespace-nowrap">
                컴퓨터전자시스템공학부 16학번
                <br/>이메일 : psh090953@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-center md:w-1/3 lg:w-1/4 mb-8 mt-12">
          <div class="mx-auto bg-white rounded-xl shadow-md overflow-hidden ">
            <div class="md:flex-col">
              <div class="md:flex-shrink-0">
              <img
                class="object-cover md:h-full md:w-full"
                src={jung}
              />
              </div>
              <div class="p-8">
                <h2 class="text-indigo-500 tracking-widest font-medium title-font mb-1">2018</h2>
                <h1 class="font-medium title-font mb-4 text-gray-900">정희택</h1>
                <p className="mx-auto leading-relaxed text-base mt-3 text-justify-center lg:whitespace-nowrap">
                디지털정보공학과 12학번
                <br/>이메일 : XXXXX@gmail.com
                </p>
              </div>
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

export default About_leader;

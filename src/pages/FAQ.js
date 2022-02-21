import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticlesBg from 'particles-bg';
import Fade from 'react-reveal/Fade';
import Scrollup from '../components/Scrollup';

const FAQ = () => {
    const [title, setTitle] = useState('');
    const [content] = useState('');

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
                                PNP FAQ 게시판입니다.
                            </p>
                            <p className="text-xs text-gray-500 mt-1 mb-3">
                                찾는 질문이 없으시면 아래의 카카오톡 플러스칱구를 이용해 질문해주세요!
                            </p>
                            <a
                                className="text-center sm:text-left"
                                href="http://pf.kakao.com/_kBSxes/chat"
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
                                    value={title}
                                    onChange={({ target: { value } }) => setTitle(value)}
                                />
                                <a
                                    href={
                                        'mailto:tjddlf101@hufs.ac.kr?subject=' +
                                        title +
                                        '&body=' +
                                        content
                                    }
                                >
                                </a>
                                <button className="text-white bg-indigo-500 border-0 w-1/4 py-2 px-4 mb-4 focus:outline-none hover:bg-indigo-600 rounded text-xs md:text-base">
                                    검색
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-3">
                                찾는 질문이 없으시면 아래의 카카오톡 플러스칱구를 이용해 질문해주세요~
                            </p>
                            <a
                                className="text-center sm:text-left"
                                href="http://pf.kakao.com/_kBSxes/chat"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="text-white bg-indigo-500 border-0 w-full mt-5 py-2 px-20 focus:outline-none hover:bg-indigo-600 rounded text-xs md:text-base animate-bounce mt-2">
                                    카카오플러스친구 문의하기
                                </button>
                            </a>

                        </div>
                        <div className="lg:mt-24 bg-white rounded-lg p-8 flex flex-col  md:ml-auto relative z-10 border border-gray-200 shadow-md">
                            <button className="text-left text-indigo-600 text-xl mb-1 font-medium title-font item px-6 py-3 bg-indigo-100 rounded-lg mb-8">
                                학회지원은 언제 있나요?
                            </button>
                            <div class="text-gray-800 px-3 text-base body-font relative item py-4 bg-blue-100 rounded-lg">
                                <p>학회 정기 지원은 1학기/2학기 총 2번 있습니다. 봄학기에는 2월말에서 3월초 가을학기에는 8월말에서 9월초 학회원을 모집하니다. 모집방식 및 세부 일정은은 학회 홈페이지에 공지하며 에브리타임/플러스친구 등 커뮤니티를 통해 자세한 일정이 제공됩니다. 참고해주세요 </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-8 flex flex-col md:ml-auto  relative z-10 border border-gray-200 shadow-md">
                            <button className="text-left text-indigo-600 px-3 text-xl mb-1 font-medium title-font item px-6 py-3 bg-indigo-100 rounded-lg mb-8">
                                학회에 개인적으로 질문사항이 있습니다 어떻게 문의할 수 있을까요?
                            </button>
                            <div class="text-gray-800 px-3 text-base body-font relative item py-4 bg-blue-100 rounded-lg">
                                <p>2021년 8월부터 카카오톡 플러스친구를 통해 문의사항을 받고 있습니다. 스터디, 대외활동, 공모전 참여와 같은 학회활동에 관해서 질문하시고 있으신 분은 아래 링크를 클릭하신 뒤 카카오톡 플러스 친구를 추가해주세요. 질문하신 내용은 1~2일 안에 답변해드릴 예정입니다.</p>
                            </div>
                            <a
                                className="text-center sm:text-left"
                                href="http://pf.kakao.com/_kBSxes/chat"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="text-white bg-indigo-400 border-0 mt-4  py-2 px-20 focus:outline-none hover:bg-indigo-600 rounded text-base animate-bounce mt-2">
                                    카카오플러스친구 문의하기
                                </button>
                            </a>
                        </div>

                        <div className="bg-white rounded-lg p-8 flex flex-col md:ml-auto  relative z-10 border border-gray-200 shadow-md">
                            <button className="text-left text-indigo-600 text-xl mb-1 font-medium title-font item px-6 py-3 bg-indigo-100 rounded-lg mb-8">
                                어떻게 활동 하나요?
                            </button>

                            <div class="text-left text-gray-800 px-3 text-base body-font relative item py-4 bg-blue-100 rounded-lg">
                                <p>학회 활동은 분야별 소규모 팀을 구성하여 진행합니다! </p>
                                <p>알고리즘/Web/App/AI/Data/게임/ 보안 7가지 분야가 있습니다.</p>
                                <p>각 분야는 스터디 / 프로젝트 팀으로 나누어집니다.</p>
                                <p>해당 분야를 처음 접한다면 스터디 팀에서 일정 수준의 기본 역량을 갖추고 프로젝트 팀에서 활동을 할 수 있습니다. 스터디를 참여하지 않았더라도 실력이 있다고 판단되면 바로 프로젝트 팀으로 활동할 수 있습니다.</p>
                                <p>팀 활동 이외에도 주기적으로 학회원 모두가 참석하여 정기회의를 진행합니다. 회의를 통해 서로의 활동을 공유하고 이벤트, 프로젝트 및 세미나 발표를 진행합니다. </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-8 flex flex-col md:ml-auto  relative z-10 border border-gray-200 shadow-md">
                            <button className="text-left text-indigo-600 text-xl mb-1 font-medium title-font item px-6 py-3 bg-indigo-100 rounded-lg mb-8">
                                타학과도 지원가능한가요?
                            </button>

                            <div class="text-gray-800 px-3 text-base body-font relative item py-4 bg-blue-100 rounded-lg">
                                <p>물론입니다. 지원가능합니다~ 2021년 8월부로 학칙을 확인한 결과 타학과를 학회원으로 받는 것에 문제가 없는 것을 확인하였습니다. 다만 학과 지원을 받고 있으므로 타학과 학생이실 경우 회비를 일정부분 내셔야 하는 부분을 인지하고 계시면 좋을 것 같습니다. 실력있는 이중/부전공생들은 얼른 학회에 지원해주세요~</p>
                            </div>
                        </div>
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
            <Footer />
            <Scrollup />
        </section>
    );
};

export default FAQ;
import React, { useState } from 'react';
import ParticlesBg from 'particles-bg';
import Footer from '../../components/Footer/Footer';
import Scrollup from '../../components/Scrollup';
import BlogItem from './BlogItem';
import { Link } from 'react-router-dom';
import classNames from "classnames";
import Header from '../../components/Header/Header';


const Blog = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <section id="Blog" className="text-gray-700 body-font bg-transparent relative">
      <ParticlesBg type="ball" bg={true} />
      <Header />
      <div className="container px-5 py-24 mx-auto">
        <div className='mt-16 md:mt-0'>
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              Blog
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Blog
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-3 -mb-5">
              PnP 사람들의 Blog를 소개합니다.
            </p>
          </div>
        </div>
        <div className="absolute z-50 sticky top-32 flex flex-col text-xs sm:static sm:text-base sm:flex-row place-content-center text-center">
          <div className="sm:hidden self-center bg-white w-full py-2 z-50 border-b-2 border-indigo-400 ">
            <button
              onClick={() => setMenuToggle(!menuToggle)}
            >
              {menuToggle ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className={classNames("md:block", { hidden: !menuToggle })}>
            <Link to="/Blog">
              <button className="w-full sm:w-auto text-gray-600 bg-white border-b-2 border-indigo-400 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
                ALL
              </button>
            </Link>
            <Link to="/Blog_web">
              <button className="w-full sm:w-auto text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
                WEB
              </button>
            </Link>
            <Link to="/Blog_ai">
              <button className="w-full sm:w-auto text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
                AI
              </button>
            </Link>
            <Link to="/Blog_game">
              <button className="w-full sm:w-auto text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
                GAME
              </button>
            </Link>
            <Link to="/Blog_data">
              <button className="w-full sm:w-auto text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
                DATA
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          <BlogItem />
        </div>


      </div>
      <br /><br /><br /><br />

      <Footer />
      <Scrollup />
    </section>
  );
};

export default Blog;

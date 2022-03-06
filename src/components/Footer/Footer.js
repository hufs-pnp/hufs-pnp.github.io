import React from 'react';

const Footer = () => {
    const currentDay = new Date();
    const currentYear = currentDay.getFullYear();

    return (
        <footer className="text-gray-700 body-font">
            <div className="bg-gray-200">
                <div className="container mx-auto pt-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">
                        © {currentYear} PnP
                    </p>
                    <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
                        경기도 용인시 처인구 모현읍 외대로 81, 한국외국어대학교
                        글로벌캠퍼스 공과대학 316호
                    </span>
                </div>
                <div className="container mx-auto pb-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
                        Developed by 김대원, 김시현, 김주원, 김태우, 이지석, 허성일
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

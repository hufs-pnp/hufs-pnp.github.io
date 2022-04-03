import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Main from './Main'


const NotFound = () => {
    return (
        <div>
            <Header />
            <Main />
            <div className='sm:absolute sm:bottom-0 w-full'>
                <Footer />
            </div>
        </div>
    );
};

export default NotFound;
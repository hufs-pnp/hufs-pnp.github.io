import React from 'react';
import Header from '../../components/Header';
import Introduce from './Students/Introduce';
import MakeChart from './Students/MakeChart';
import ShowMember from './Students/ShowMember';
import Buttons from './Students/Buttons';
import Footer from '../../components/Footer';
import Scrollup from '../../components/Scrollup';

const Members = () => {
  return (
    <div class="flex flex-col">
      <Header />
      <Introduce />
      <Buttons />
      <MakeChart />
      {/* <MakeChart/> */}
      <div className="container px-5 pt-2 pb-24 mx-auto">
        <ShowMember />
      </div>
      <Footer />
      <Scrollup />

    </div>
  )
};

export default Members;
//<div class="flex flex-row ">
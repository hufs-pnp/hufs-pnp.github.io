import React from 'react';
import Header from '../../components/Header';
import Introduce from './Students/Introduce';
import MakeChart from './Students/MakeChart';
import ShowMember from './Students/ShowMember';
import Buttons from './Students/Buttons';
import Footer from '../../components/Footer';

const Members = () => {
  return (
    <div class="flex flex-col">
      <Header />
      <Introduce />
      <Buttons />
      <MakeChart />
      {/*<MakeChart/>*/}
      <ShowMember />
      <Footer />
    </div>
  )
};

export default Members;
//<div class="flex flex-row ">
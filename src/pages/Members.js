import React from 'react';
import { Route } from 'react-router-dom'
import Header from '../components/Header';
import Introduce from '../components/Member/Daewon/Students/Introduce';
import MakeChart from '../components/Member/Daewon/Students/MakeChart';
import ShowMember from '../components/Member/Daewon/Students/ShowMember';
import Buttons from '../components/Member/Daewon/Buttons';

const Members = () => {
  return (
    <div>
      {/* 그 라우터 추가한 거 page에서 하기 componenet에서 하지 말고 */}
      {/*<Header />*/}
      <Header></Header>
      <Introduce></Introduce>
      <Buttons></Buttons>
      <MakeChart></MakeChart>
      <ShowMember></ShowMember>
    </div>
  )
};

export default Members;
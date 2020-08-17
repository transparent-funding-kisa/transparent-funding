import React from 'react';
import Banner from './Banner';
import DetailTab from './DetailTab';
import Sidebar from './Sidebar';
import MainPage from './MainPage';

function Detail() {
  return (
    <>
      <Banner></Banner>
      <DetailTab></DetailTab>
      <MainPage></MainPage>
      <Sidebar></Sidebar>
    </>
  );
}

export default Detail;

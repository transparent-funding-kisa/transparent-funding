import React from 'react';

import Sidebar from './Sidebar';

import MainPage0 from './MainPage0';
import MainPage1 from './MainPage1';
import MainPage2 from './MainPage2';
import MainPage3 from './MainPage3';
import MainPage4 from './MainPage4';
import Lab from './Lab';


import MainPageStory from './MainPageStory';
import MainPageReward from './MainPageReward';
import MainPageNews from './MainPageNews';
import MainPageCommunity from './MainPageCommunity';
import Lab from './Lab';


function MainPage(props) {
  const Idx = parseInt(props.Idx);

  switch (Idx) {
    case 0:
      return <MainPageStory />;
    case 1:
      return <MainPageReward />;
    case 2:
      return <MainPageNews />;
    case 3:
      return <MainPageCommunity />;
    case 4:
      return <Lab />;
    default:
      return <div>Not Found</div>;
  }
}

export default MainPage;

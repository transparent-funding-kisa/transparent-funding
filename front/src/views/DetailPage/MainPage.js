import React from 'react';
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
import React from 'react';
import Sidebar from './Sidebar';
import { makeStyles } from '@material-ui/core/styles';

import MainPage0 from './MainPageStory';
import MainPage1 from './MainPageReward';
import MainPage2 from './MainPageNews';
import MainPage3 from './MainPageCommunity';
import MainPage4 from './MainPage4';
import Lab from './Lab';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
//css 적용이 안됩니다..

function MainPage(props) {
  const Idx = parseInt(props.Idx);

  // return (
  //   <React.Fragment>
  //     <CssBaseline />
  //     <Container fixed>
  //       <Typography
  //         component="div"
  //         style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
  //       />
  //     </Container>
  //   </React.Fragment>
  // );
  switch (Idx) {
    case 0:
      return <MainPage0 />;
    case 1:
      return <MainPage1 />;
    case 2:
      return <MainPage2 />;
    case 3:
      return <MainPage3 />;
    case 4:
      return <Lab />;
    default:
      return <div>Not Found</div>;
  }
}

export default MainPage;

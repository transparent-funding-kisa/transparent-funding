import React from 'react';
import Banner from './Banner';
import DetailTab from './DetailTab';
import Sidebar from './Sidebar';
import MainPage from './MainPage';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import PrimarySearchAppBar from "../../components/commons/Menu"

function Detail() {
  const [idx, setIdx] = React.useState(0);

  function onCilck(value) {
    setIdx(parseInt(value));
    console.log(idx);
  }

  return (
    <>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <Banner></Banner>
      <DetailTab onChange={onCilck}></DetailTab>
      <>
        <CssBaseline />
        <Container maxWidth="lg" fixed>
          <MainPage Idx={idx}></MainPage>
          <Sidebar></Sidebar>
        </Container>
      </>
    </>
  );
}

export default Detail;

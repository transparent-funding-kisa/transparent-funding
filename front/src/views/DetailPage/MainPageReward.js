import React from 'react';
import Table from './DetailRewardTable';
const mainStyle = {
  border: '15px',
  float: 'left',
  display: 'flex',
  flexDirection: 'column',
  height: '500px',
  width: '700px',

  marginLeft: '200px',
};
function MainPage1() {
  return (
    <span style={mainStyle}>
      <Table name="나이키 신발" material="가죽" color="black"></Table>
    </span>
  );
}

export default MainPage1;

import React from 'react';
import Sidebar from './Sidebar';
import styles from './view_css/Detail.css';
//css 적용이 안됩니다..

const mainStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const imgStyle = {
  height: '302px',
  width: '477px',
};

// const pStyle = {
//   textAlign: 'center',
// };

function MainPage() {
  return (
    <div style={mainStyle}>
      <img src={require('../components/images/shoes1.jpg')} style={imgStyle} />
      <h1>test</h1>
    </div>
  );
}

export default MainPage;

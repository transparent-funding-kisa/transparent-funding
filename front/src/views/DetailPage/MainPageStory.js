import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const mainStyle = {
  border: '15px',
  float: 'left',
  display: 'flex',
  flexDirection: 'column',
  height: '500px',
  width: '700px',

  marginLeft: '200px',
};

const imgStyle = {
  height: '401px',
  width: '632px',
};

const data = {
  summary:
    '30% 향료와 전통 기법을 접목하여 제조한 오일 베이스로 만든 향기 3종 (경희궁의 아침, 성산봉의 봄날, 오대산의 아침)을 만나보세요. 향기로 떠나는 추억 여행. 조선의 향기!',
};
function MainPage(props) {
  const Idx = props.Idx;

  return (
    <>
      <span style={mainStyle}>
        <img
          src={require('../../components/images/shoes1.jpg')}
          style={imgStyle}
        />
        <br />
        <p>
          <b>{data.summary}</b>
        </p>
      </span>
    </>
  );
}

export default MainPage;

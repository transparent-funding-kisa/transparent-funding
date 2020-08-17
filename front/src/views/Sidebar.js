import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const dummy = {
  day: 5,
  percent: 540,
  money: 20000,
  personnel: 26,
};

function Sidebar(props) {
  return (
    <>
      <div display="inline">
        <Typography variant="h4" component="h2">
          {dummy.day}일 남음
        </Typography>

        <Typography variant="h4" component="h2">
          {dummy.percent}% 달성 <br />
          {dummy.money}원 펀딩 <br />
          {dummy.personnel}명의 서포터
        </Typography>

        <Button variant="contained" color="primary">
          펀딩하기
        </Button>
        {/* <Button variant="contained"></Button>
        <Button variant="contained">문의</Button>
        <Button variant="contained">공유하기</Button> */}
      </div>
    </>
  );
}
export default Sidebar;

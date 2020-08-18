import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const dummy = {
  success: false,
  day: 5,
  percent: 54,
  money: 20000,
  personnel: 26,
};

const useStyles = makeStyles({
  root: {
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    border: '3px solid black',
    padding: '10px',
    borderRadius: '30px',
  },
});

function Sidebar(props) {
  const classes = useStyles();

  return (
    <>
      <span className={classes.root}>
        <Typography variant="h4" component="h2">
          {dummy.day}일 남음 <br />
          <LinearProgress
            variant="determinate"
            color="secondary"
            value={dummy.percent}
            style={{ marginTop: '15px' }}
          />
        </Typography>

        {/* 왜작동안할까요..? */}

        <Box mt={5}>
          <Box mb={5}>
            <Typography>
              <b>{dummy.percent}</b>% 달성
            </Typography>
          </Box>
          <Box mb={5}>
            <Typography>
              <b>{dummy.money}</b>원 펀딩
            </Typography>
          </Box>

          <Box mb={5}>
            <Typography>
              <b>{dummy.personnel}</b>명의 서포터
            </Typography>
          </Box>

          <Button variant="contained" color="primary">
            펀딩하기
          </Button>
        </Box>
      </span>
    </>
  );
}
export default Sidebar;

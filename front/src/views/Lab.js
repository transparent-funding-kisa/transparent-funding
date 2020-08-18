import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const mainStyle = {
  border: '15px',
  float: 'left',
  display: 'flex',
  flexDirection: 'column',
  height: '500px',
  width: '700px',

  marginLeft: '200px',
  // alignItems: 'center',
};

const dummy = {
  count: 1104,
  list: [
    { id: 1, name: '홍길동', money: 10000 },
    { id: 2, name: '작명', money: 30000 },
    { id: 3, name: '힘듦', money: 1000 },
    { id: 4, name: '그만', money: 15000 },
  ],
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

function MainPage4() {
  const classes = useStyles();
  const text = '안녕?';
  return (
    <span style={mainStyle}>
      <p style={{ fontSize: '28px' }}>
        프로젝트에 {dummy.count}명의 참여가 이루어졌습니다.
      </p>
      <List className={classes.root}>
        {dummy.list.map((value, idx) => {
          return (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={value.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {value.money}원
                      </Typography>
                      {' 3 달전'}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          );
        })}
      </List>

      {/* <ul style={{ listStyle: 'none', paddingLeft: '0px' }}>
        {dummy.list.map((value, idx) => {
          return (
            <li>
              <strong>{value.name}</strong>님이 <strong>{value.money}</strong>원
              펀딩으로 참여 하셨습니다.
            </li>
          );
        })}
      </ul> */}
    </span>
  );
}

export default MainPage4;

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';

// import Accordion from './accordion';
// import FundingApply1 from '../../views/FundingApply1';
// import FundingApply2 from '../../views/FundingApply2';
// import FundingApply3 from '../../views/FundingApply3';
// import FundingApply4 from '../../views/FundingApply4';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  button: {
    left: '83%',
  },
}));

export default function PermanentDrawerLeft(props) {
  const [value, setValue] = useState(1);
  const classes = useStyles();
  let render = 1;
  let inputNum = parseInt(props.value, 10);

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            투명 펀딩
          </Typography>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            href="/main"
          >
            메인 페이지
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <a href="/funding-apply">
          <HomeIcon
            color="primary"
            style={{
              marginTop: '15px',
              marginLeft: '15px',
              cursor: 'pointer',
              fontSize: 50,
            }}
            onClick
          ></HomeIcon>
        </a>

        <b>조현학의 펀딩작성 페이지</b>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['기본 요건', '기본 정보', '스토리 작성', '리워드 설계'].map(
            (text, index) => (
              <ListItemLink
                onClick={() => {
                  props.onClick(index + 1);
                }}
              >
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </ListItemLink>
            ),
          )}
        </List>
        <Divider />
        <List>
          {['위험요인&정책', '메이커 정보', '개발자 정보'].map(
            (text, index) => (
              <ListItemLink
                onClick={() => {
                  props.onClick(index + 5);
                }}
              >
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </ListItemLink>
            ),
          )}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <Typography paragraph>{render}</Typography>
        <Typography paragraph></Typography> */}
      </main>
    </div>
  );
}

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Accordion from "./accordion";
import HomeIcon from "@material-ui/icons/Home";
import FundingApply2 from "../../views/FundingApply2";
import FundingApply3 from "../../views/FundingApply3";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
}));

export default function PermanentDrawerLeft(props) {
  const [value, setValue] = useState(1);
  const classes = useStyles();
  let render = 1;
  let inputNum = parseInt(props.value, 10);

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

  if (inputNum === 0) render = <Accordion></Accordion>;
  else if (inputNum === 1) render = <div>1번째 페이지</div>;
  else if (inputNum === 2) render = <FundingApply2></FundingApply2>;
  else if (inputNum === 3) render = <FundingApply3></FundingApply3>;
  else if (inputNum === 4) render = <div>4번째 페이지</div>;
  else if (inputNum === 5) render = <div>5번째 페이지</div>;
  else if (inputNum === 6) render = <div>6번째 페이지</div>;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            투명 펀딩
          </Typography>
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
        <a href="/FundingApply/0">
          <HomeIcon
            color="primary"
            style={{
              marginTop: "15px",
              marginLeft: "15px",
              cursor: "pointer",
              fontSize: 50,
            }}
          ></HomeIcon>
        </a>

        <b>조현학의 펀딩작성 페이지</b>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {["기본 요건", "기본 정보", "스토리 작성", "리워드 설계"].map(
            (text, index) => (
              <ListItemLink href={index + 1}>
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </ListItemLink>
            )
          )}
        </List>
        <Divider />
        <List>
          {["위험요인&정책", "메이커 정보", "개발자 정보"].map(
            (text, index) => (
              <ListItemLink href={index + 5}>
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </ListItemLink>
            )
          )}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>{render}</Typography>
        <Typography paragraph></Typography>
      </main>
    </div>
  );
}

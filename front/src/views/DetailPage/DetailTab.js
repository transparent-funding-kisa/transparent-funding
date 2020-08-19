// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`wrapped-tabpanel-${index}`}
//       aria-labelledby={`wrapped-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Typography>{children}</Typography>}
//     </div>
//   );
// }

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//     maxWidth: 800,
//   },
// });

// function DetailTab() {
//   const classes = useStyles();
//   const [value, setValue] = useState(2);
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//     console.log(value);
//   };

//   return (
//     <>
//       <Paper square className={classes.root} style={{ marginLeft: '20%' }}>
//         <Tabs
//           value={value}
//           indicatorColor="primary"
//           textColor="primary"
//           onChange={handleChange}
//         >
//           <Tab label="스토리" />
//           <Tab label="펀딩 안내" />
//           <Tab label="새소식" />
//           <Tab label="커뮤니티" />
//           <Tab label="서포터" />
//         </Tabs>
//       </Paper>
//       <TabPanel value={value} index="one">
//         Item One
//       </TabPanel>
//     </>
//   );
// }

// export default DetailTab;

import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MainPage2 from './MainPage1';
import MainPage from './MainPage';
import Sidebar from './Sidebar';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <span
      display="inline"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        // <Box p={5}>
        //   {children}
        //   <Typography display="inline">{children}</Typography>
        // </Box>
        <div>{children}</div>
      )}
    </span>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '800',
  },
}));

export default function FullWidthTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    // event.preventDefault();
    setValue(newValue);
    props.onChange(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
    console.log(value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="standard"
          aria-label="full width tabs example"
          centered
        >
          <Tab label="스토리" {...a11yProps(0)} />
          <Tab label="리워드 안내" {...a11yProps(1)} />
          <Tab label="새소식" {...a11yProps(2)} />
          <Tab label="커뮤니티" {...a11yProps(3)} />
          <Tab label="서포터" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      {/* <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      > */}
      {/* <TabPanel value={value} index={0} dir={theme.direction}>
        <MainPage></MainPage>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <MainPage2></MainPage2>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        새소식
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        커뮤니티
      </TabPanel>
      <TabPanel value={value} index={4} dir={theme.direction}>
        서포터
      </TabPanel> */}
      {/* </SwipeableViews> */}
    </div>
  );
}

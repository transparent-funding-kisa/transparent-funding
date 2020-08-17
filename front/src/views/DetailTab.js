import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 800,
  },
});

function DetailTab() {
  const classes = useStyles();
  const [value, setValue] = useState(2);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };

  return (
    <>
      <Paper square className={classes.root} style={{ marginLeft: '20%' }}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          <Tab label="스토리" />
          <Tab label="펀딩 안내" />
          <Tab label="새소식" />
          <Tab label="커뮤니티" />
          <Tab label="서포터" />
        </Tabs>
      </Paper>
      <TabPanel value={value} index="one">
        Item One
      </TabPanel>
    </>
  );
}

export default DetailTab;

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
    sidebarAboutBox: {
      display: 'flex',
      padding: theme.spacing(1),
      backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
      display: 'flex',
      marginTop: theme.spacing(3),
    },
  }));

  export const ranking = {
    title: '투크는 누가 만들었을까? 투크의 개발자가 궁금하다면 클릭하세요',
    description: [ 
      {des: '투크는 누가 만들었을까? 투크의 개발자가 궁금하다면 클릭하세요', url : '#' }
    ],
    archives: [
      { title: '대형빈백', url: '#' },
      { title: '아로마테라피', url: '#' },
      { title: '이지핏베개', url: '#' },
      { title: '손목보호대', url: '#' },
      { title: '토퍼', url: '#' }
    ],
    social: [
      { name: 'Twitter', icon: TwitterIcon },
      { name: 'Facebook', icon: FacebookIcon },
    ],
  };

  export default function Sidebar(props) {
    const classes = useStyles();
    const { archives, description, social, title } = props;
  
    return (
      <Grid item xs={12} >
        <Paper elevation={0} className={classes.sidebarAboutBox}>
          <Typography variant="h6" gutterBottom>
          {archives.title}
           </Typography>
          <Typography>{title}</Typography>
        </Paper>
        <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
          실시간 랭킹
        </Typography>
        {archives.map((archive) => (
          <Link display="block" variant="body1" href={archive.url} key={archive.title}>
            {archive.title}
          </Link>
        ))}
        <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
          투크 공유하기
        </Typography>
        {social.map((network) => (
          <Link display="block" variant="body1" href="#" key={network}>
            <Grid container direction="row" spacing={1} alignItems="center">
              <Grid item>
                <network.icon />
              </Grid>
              <Grid item>{network.name}</Grid>
            </Grid>
          </Link>
        ))}
      </Grid>
    );
  }
  
  Sidebar.propTypes = {
    archives: PropTypes.array,
    description: PropTypes.string,
    social: PropTypes.array,
    title: PropTypes.string,
  };
  
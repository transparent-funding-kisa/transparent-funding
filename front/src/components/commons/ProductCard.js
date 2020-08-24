import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom"


//const cards = [1, 2, 3, 4, 5, 6];
const dataList = [
  {
  name : "대형빈백",
  age : '418%',
},
{
  name : "아로마테라피",
  age : '482%',
},
{
  name : "이지핏베개",
  age : 2,
},
{
  name : "손목보호대",
  age : 2,
},
{
  name : "면도기크리너",
  age : 2,
},
{
  name : "면 토퍼",
  age : 2,
}
]

 const useStyles = makeStyles((theme) => ({
 cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  // cardMedia: {
  //   width: 160,
  // },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  }

}));



export default function FundProduct() {
  const classes = useStyles();
  return(

<Container className={classes.cardGrid} maxWidth="md">
{/* End hero unit */}
<Grid container spacing={3}>
  {dataList.map((data, index) => (
    <Grid item key={index} xs={12} sm={6} md={4} >
    <Link to="//Detail/:1">
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {data.name}
            
          </Typography>
          <Typography>
            {data.age}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
          <Button size="small" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
      </Link>
    </Grid>

  ))}
</Grid>
</Container>
  )
}

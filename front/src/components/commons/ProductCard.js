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
  name : "라하츠",
  age : "설거지와 세균제거까지 싹 !다용도초음파 세척기 라하츠!",
  image : "https://i.postimg.cc/34gRj5QF/image.png"
},
{
  name : "무엔진오일",
  age : '무엔진오일 1309KM 주행 신기록. 엔진오일 첨가제 [프로렉스21]',
  image : "https://i.postimg.cc/Lg2sNCHK/image.png"
},
{
  name : "비타민젤리",
  age : "비오틴과 비타민 가득! 맛있고 쉽게 챙기는 이너뷰티 '핑크 구미 베어'",
  image :"https://i.postimg.cc/H8zkKwxJ/image.png"
},
{
  name : "흑당고",
  age : "[1억앵콜] 한번에 모공 싹, 장벽 꽉! 평점 만점받은 흑당고가 뭐길래?",
  image :"https://i.postimg.cc/bdh07qr8/image.png"
},
{
  name : "만능멀티쿠커",
  age : "[요리,이걸로 끝] 튀김/전골/구이/탕/찜을 모두 하나로?! 만능멀티쿠커",
  image : "https://i.postimg.cc/VNgJF59Q/image.png"},
{
  name : "스윗드림램프",
  age : "[투크 선공개] 당신의 하루를 포근히 감싸줄 ON:U스윗드림램프",
 image : "https://i.postimg.cc/1tSX77Jq/image.png"}
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
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image = {data.image}
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
            더보기 >
          </Button>
          <Button size="small" color="primary">
            문의하기 >
          </Button>
        </CardActions>
      </Card>
    </Grid>

  ))}
</Grid>
</Container>
  )
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    minWidth: 100,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
  },
  pos: {
    fontSize: 13,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const list = props.list.map((data) => (
    <li>
      <Typography color="textSecondary" variant="overline">
        {data}
      </Typography>
    </li>
  ));

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.head}
        </Typography>
        <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>{list}</ul>
        <Typography className={classes.pos} color="textSecondary">
          {props.body}
        </Typography>
      </CardContent>
    </Card>
  );
}
OutlinedCard.defaultProps = { head: "", body: "", list: [] };

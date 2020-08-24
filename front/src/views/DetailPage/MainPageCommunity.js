import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  text: {
    '& > *': {
      margin: theme.spacing(1),
      width: '500px',
    },
  },
  root: {
    border: '15px',
    float: 'left',
    display: 'flex',
    flexDirection: 'column',
    height: '500px',
    width: '700px',
    marginLeft: '200px',
  },
  btn: {
    width: '500px',
  },
}));
let tA = [];

function MainPage3() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [textArray, setTextArray] = useState([]);
  const classes = useStyles();

  const handleDelete = (id) => {
    const ul = document.querySelector('ul');
    const br = document.createElement('br');

    ul.innerHTML = '';
    const newArray = tA.filter(function (node) {
      return parseInt(node.id) !== parseInt(id);
    });

    newArray.forEach((node) => {
      ul.appendChild(node);
    });
    tA = newArray;
    setCount(tA.length);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    setCount(tA.length + 1);
    setText('');
    const ul = document.querySelector('ul');
    const newValue = document.createElement('li');
    const btn = document.createElement('button');
    const br = document.createElement('br');

    newValue.id = Date.now();
    newValue.innerText = text + '   ';
    btn.innerText = '삭제';
    btn.addEventListener('click', () => {
      handleDelete(newValue.id);
    });
    ul.appendChild(newValue);
    newValue.appendChild(btn);
    tA.push(newValue);
    console.log(tA);
  };

  return (
    <span className={classes.root}>
      <br />
      <p>
        <strong>익명 게시판 {count}</strong>
      </p>
      <form>
        <TextField
          className={classes.text}
          name="text"
          onChange={handleChange}
          value={text}
        ></TextField>
        <Button
          className={classes.btn}
          variant="contained"
          onClick={handleClick}
        >
          글 남기기
        </Button>
      </form>
      <br />
      <Divider></Divider>
      <br />
      <ul></ul>
    </span>
  );
}

export default MainPage3;

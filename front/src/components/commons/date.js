import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Cookies from 'universal-cookie';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers() {
  const classes = useStyles();
  const cookies = new Cookies();

  const [date, setDate] = React.useState(() => {
    if (cookies.get('date')) return cookies.get('date');
    return ' ';
  });
  const handleDate = (e) => {
    setDate(e.target.value);
    cookies.set('date', e.target.value);
  };
  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        type="date"
        className={classes.textField}
        defaultValue={date}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleDate}
      />
    </form>
  );
}

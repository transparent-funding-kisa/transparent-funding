import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Cookies from 'universal-cookie';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();

  const cookies = new Cookies();

  const [age, setAge] = React.useState(() => {
    if (cookies.get('age')) return cookies.get('age');
    return ' ';
  });

  const handleChange = (event) => {
    var value = event.target.value;
    props.onChange(event);
    setAge(event.target.value);
    cookies.set('age', event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label"></InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          defaultValue="의류"
          value={age}
          onChange={handleChange}
          // onChange={(e) => {
          //   handleChange(e);

          //   //handleChange(e);
          // }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'의류'}>의류</MenuItem>
          <MenuItem value={'식품'}>식품</MenuItem>
          <MenuItem value={'가구'}>가구</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

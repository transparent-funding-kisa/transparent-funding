import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
  container: {
    maxWidth: 600,
  },
});

export default function SimpleTable(props) {
  const classes = useStyles();

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>품명 및 모델명</strong>
            </TableCell>
            <TableCell align="right">
              <strong>제품 소재</strong>
            </TableCell>
            <TableCell align="right">
              <strong>색상</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableCell component="th" scope="row">
            {props.name}
          </TableCell>
          <TableCell align="right">{props.material}</TableCell>
          <TableCell align="right">{props.color}</TableCell>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import React from 'react';
import DiaLog from '@material-ui/core/Dialog';
import DiaLogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { MenuIcon } from '@material-ui/core';
import { Typography } from '@material-ui/core';


 
import {Router,Route,IndexRoute,Link} from 'react-router';


const headers = {withCredentials:true}

const styles = theme =>({
    hidden :{
        display:'none'
    }
})



class Mypage extends React.Component{

    render(){
    
        const {classes}= this.props;
        return(
            <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" color="inherit">
      Mypage
    </Typography>
    </Toolbar>
              
   </AppBar>
         
            
      
       
      
       )
    }
}
export default Mypage;
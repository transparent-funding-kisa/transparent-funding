import React from 'react';
import DiaLog from '@material-ui/core/Dialog';
import DiaLogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'

const styles = theme =>({
    hidden :{
        display:'none'
    }
})



class Signup extends React.Component{

    render(){
    
        const {classes}= this.props;
        return(
            <div>
            

            <center>
            <DialogTitle>Create new account</DialogTitle><br></br>

            <TextField label ="name "type="text" name = "user id "/><br></br>
            <TextField label ="id "type="text" name = "user id "/><br></br>
            <TextField label ="password"type="text" name = "user password "/><br></br><br></br>

            <Button variant="contained" color="primary" > 완료 </Button> <br></br>
            <br></br>
            
            <Button variant="contained" color="primary" > login </Button>
            </center>
            </div>
      
       
      
       )
    }
}
export default Signup;
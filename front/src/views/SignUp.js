import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
            
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
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
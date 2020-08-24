import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme =>({
    hidden :{
        display:'none'
    }
})

class Signin extends React.Component{

    render(){
    
        const {classes}= this.props;
        return(


            <div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <center>
            

            <DialogTitle>로그인 하기</DialogTitle><br></br>

            <TextField label ="id "type="text" name = "user id "/><br></br>
            <TextField label ="password"type="text" name = "user password "/><br></br><br></br>

            <a href="/signup/0"><Button variant="contained" color="primary" > login </Button> </a> <br></br>
            <br></br>
            
            
            <Button variant="contained" color="primary"  href="/Signup" > sign up </Button>
            </center>
            </div>
      
       
      
       )
    }
}
export default Signin;
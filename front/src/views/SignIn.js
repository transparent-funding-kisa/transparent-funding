import React,{useEffect} from 'react'
import {post} from 'axios'
import axios from 'axios';

import DialogTitle from '@material-ui/core/DialogTitle';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Cookies from 'universal-cookie';

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

const cookie = new Cookies();



const styles = theme =>({
    hidden :{
        display:'none'
    }
})




class Signin extends React.Component{

    constructor(props){
        super(props)
        this.state = {
           
            userEmail:props.userEmail,
            userPassword:props.userPassword
        }
    }
    login =()=>{
        const url = "http://localhost:8080/api/signin";
        const formData = new FormData();
      
        const data = {
           
            email : this.state.userEmail,
            password : this.state.userPassword
        }
        console.log(formData);
        return post(url, data);}

       
       

       
    handleFormSubmit=(e)=>{
        e.preventDefault()
        this.login( ).then(response => { 
            console.log(response)
            alert("로그인 성공");
            window.location.replace("/main");
            cookie.set("jwt", response.data ,{ path: 'http://localhost:8080/api/signin' });
           
        })
        .catch(error => {
            console.log(error.response)
            alert("로그인 실패");
        });
    }

    handleValueChange=(e)=>{
        let nextState ={};
        nextState[e.target.name]=e.target.value;
        this.setState(nextState);
    }
   
         

      

    render(){
    
        
        return(

            <form onSubmit={this.handleFormSubmit}>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <center>
            <DialogTitle>로그인 </DialogTitle>
            
             <TextField label ="email "input type="text" name="userEmail" value={this.state.userEmail} onChange={this.handleValueChange}/><br></br>
            <TextField label ="password "input type="text" name="userPassword" value={this.state.userPassword} onChange={this.handleValueChange}/>
           <br></br> <br></br> <Button variant="contained" type ="submit"  color="primary">로그인</Button> <br></br> <br></br>
           <Button variant="contained"  color="primary"  href="/signup">회원가입</Button> 
            </center>
        </form>
       
      
       )
    }
}
export default Signin;

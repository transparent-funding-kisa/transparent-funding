
import React,{useEffect} from 'react'
import {post} from 'axios'
import axios from 'axios';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


axios.defaults.withCredentials=true;
const headrs = {withCredentials:true};




class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userName:props.userName,
            userEmail:props.userEmail,
            userPassword:props.userPassword
        }
    }
    sign =()=>{
        const url = "http://localhost:8080/api/signup";
        const formData = new FormData();
        console.log(this.state.userName);
        const data = {
            name : this.state.userName,
            email : this.state.userEmail,
            password : this.state.userPassword
        }
        console.log(formData);
        return post(url, data);
    }
    handleFormSubmit=(e)=>{
        e.preventDefault()
        this.sign( ).then(response => { 
            console.log(response);
            alert("회원가입 완료");
            
            window.location.replace("/signin");
        })
        .catch(error => {
            console.log(error.response)

        });
    }

    handleValueChange=(e)=>{
        let nextState ={};
        nextState[e.target.name]=e.target.value;
        this.setState(nextState);
    }
    render(){
    
        const {classes}= this.props;

        return (
            <form onSubmit={this.handleFormSubmit}>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <center>
                <DialogTitle>회원가입 </DialogTitle>
                <TextField label ="id " input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}/><br></br>
                 <TextField label ="email "input type="text" name="userEmail" value={this.state.userEmail} onChange={this.handleValueChange}/><br></br>
                <TextField label ="password "input type="text" name="userPassword" value={this.state.userPassword} onChange={this.handleValueChange}/>
               <br></br> <br></br> <Button variant="contained" type ="submit"  color="primary">제출</Button> <br></br> <br></br>
               <Button variant="contained"  color="primary"v href="/signin">로그인</Button> 
                </center>
            </form>
        )
    }

}




export default Signup

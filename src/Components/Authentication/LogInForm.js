import React,{useContext, useRef, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../Store/AuthContext';

// Styled components
import {FormContainer, Form, Label, Input, Button, ToggleButton,ForgotButton } from './AuthStyledComponents'



function LogInForm() {

    const userInputEmail = useRef();
    const userInputPassword = useRef();

    const AuthCntx = useContext(AuthenticationContext);

    const Navigate = useNavigate();


    const handleFormSubmit = (e) => {
        e.preventDefault();

        const  enteredEmail = userInputEmail.current.value;
        const enteredPassword = userInputPassword.current.value;
        
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB8PZ7dyMV1RlPAiConsdPAQszUAEsecfI';
        
        fetch(url,{
            method:"POST",
            body:JSON.stringify({
                email:enteredEmail,
                password:enteredPassword,
                returnSecureToken:true
            }),
            headers:{
                'Content-Type' : 'application/json'
            }
        }).then((res)=>{
           
            if(res.ok){
                return res.json();
            }else{
                return res.json().then((data)=>{
                    if(data && data.error && data.error.message){
                        let errMessage = "Authentication Failed, " + data.error.message;
                        throw new Error(errMessage);
                    }
                })
            }
        }).then((data)=>{
            console.log(data);
            AuthCntx.LogIn(data.idToken);
            localStorage.setItem('email',data.email);
            Navigate("/welcomepage");

        }).catch((err)=>{
            console.log(err);
        })

    }

    
  return (
    <FormContainer>
    <Form onSubmit={handleFormSubmit}>
       <h1 style={{ textAlign: "center", color: "#2192FF" }}>
        LogIn
      </h1>
        <Label htmlFor='email'>Email</Label>
        <Input type='email' id='email' ref={userInputEmail} required/>

        <Label typeof='password'>Password</Label>
        <Input type='password' id='password' minLength='7' ref={userInputPassword} required/>
        <Button>Login</Button>
    </Form>
    <Link to='/resetpassword'><ForgotButton type='button'>Forgot password?</ForgotButton></Link><br/>
    <Link to='/'><ToggleButton type='button' >new account? SignUp</ToggleButton></Link>
    </FormContainer>

  )
}

export default LogInForm
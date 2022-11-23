import React,{useState,useRef} from 'react'

// Styled components
import {FormContainer, Form, Label, Input, Button, ToggleButton } from './AuthStyledComponents'



function AuthForm() {
    const [isLogIn, setIsLogIn] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const userInputEmail = useRef();
    const userInputPassword = useRef();

    const toggleButton = () => {
        setIsLogIn((toggle)=>!toggle);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const  enteredEmail = userInputEmail.current.value;
        const enteredPassword = userInputPassword.current.value;
        let url;
        if(isLogIn){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB8PZ7dyMV1RlPAiConsdPAQszUAEsecfI';
        }else{
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB8PZ7dyMV1RlPAiConsdPAQszUAEsecfI';  
        }
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
            setIsLoading(false);
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
        }).then((res)=>{
            console.log(res);
            console.log("User Sucessfully logged in")
        }).catch((err)=>{
            console.log(err);
        })

    }
  return (
    <FormContainer>
    <Form onSubmit={handleFormSubmit}>
       <h1 style={{ textAlign: "center", color: "#2192FF" }}>
        {isLogIn ? "Login" : "Signup"}
      </h1>
        <Label htmlFor='email'>Email</Label>
        <Input type='email' id='email' ref={userInputEmail} required/>

        <Label typeof='password'>Password</Label>
        <Input type='password' id='password' minLength='7' ref={userInputPassword} required/>
        {!isLoading && (<Button>{isLogIn ? 'Login' : 'Create account'}</Button>)}
    </Form>
    <ToggleButton type='button' onClick={toggleButton}>{isLogIn ? 'create new account' : 'Have an account? Login'}</ToggleButton>
    </FormContainer>

  )
}

export default AuthForm
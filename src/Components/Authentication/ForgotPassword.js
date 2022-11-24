import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../HeaderNavs/NavBar';

//styled components
import { ResetPassContainer, ResetPassForm, ResetPassLabel, ResetPassInput, ResetPassBTN, BackBTN } from './AuthStyledComponents';

function ForgotPassword() {
    const UserInputEmail = useRef();
    const handleForgotPassword = (e) => {
        e.preventDefault();
        const enteredEmail = UserInputEmail.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyB8PZ7dyMV1RlPAiConsdPAQszUAEsecfI',{
            method:"POST",
            body:JSON.stringify({
                requestType:"PASSWORD_RESET",
                email:enteredEmail
            }),
            headers:{
                'Content-Type':'application/json'
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
        }).catch((err)=>{
            alert(err.meassage);
        })
    }
  return (
    <ResetPassContainer>
        <NavBar/>
        <ResetPassForm onSubmit={handleForgotPassword}>
            <ResetPassLabel>Enter your email:</ResetPassLabel><br/>
            <ResetPassInput type='email' ref={UserInputEmail} required/><br/>
            <ResetPassBTN>Change Password</ResetPassBTN>
            <Link to='/loginpage'><BackBTN>Back</BackBTN></Link>
        </ResetPassForm>
    </ResetPassContainer>
  )
}

export default ForgotPassword
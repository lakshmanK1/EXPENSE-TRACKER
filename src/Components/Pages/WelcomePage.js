import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthenticationContext } from '../Store/AuthContext'
import { Container, HeaderText, MessageDiv, Span, Text, EmailVerifyBTN } from './PageStyledComponents'

function WelcomePage() {

  const AuthCntx = useContext(AuthenticationContext);

  const VerifyEmailId = () => {
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyB8PZ7dyMV1RlPAiConsdPAQszUAEsecfI',{
      method:"POST",
      body:JSON.stringify({
        requestType:"VERIFY_EMAIL",
        idToken:AuthCntx.token
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
    alert(err.message);
  })
  }

  return (
    <Container>
        <MessageDiv>
            <Text>your profile is Incomplete,<Link to='/welcomepage/updateUserdetails'><Span>Complete now</Span></Link></Text>
        </MessageDiv>
        

        <HeaderText>Welcome to Expense Tracker Application</HeaderText>         
        <EmailVerifyBTN onClick={VerifyEmailId}>Verify Email</EmailVerifyBTN>

        <hr/>
    </Container>
  )
}

export default WelcomePage
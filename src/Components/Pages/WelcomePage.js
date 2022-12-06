import React from 'react'
import { Link } from 'react-router-dom'
import ExpenseList from '../Expense/ExpenseList';
import NavBar from '../HeaderNavs/NavBar';
import {useSelector} from 'react-redux'
import DarkThemeProvider from '../HeaderNavs/DarkThemeToggle';
import { Container, HeaderText, MessageDiv, Span, Text, EmailVerifyBTN, MainHead, AddExpenseButton, ExpenseBTNdiv } from './PageStyledComponents'

function WelcomePage() {

  const {token} = useSelector(state => state.Auth);

  const VerifyEmailId = () => {
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyB8PZ7dyMV1RlPAiConsdPAQszUAEsecfI',{
      method:"POST",
      body:JSON.stringify({
        requestType:"VERIFY_EMAIL",
        idToken:token
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
      <NavBar/>
      <MainHead>
        <hr/>
      <MessageDiv>
            <Text>your profile is Incomplete,<Link to='/welcomepage/updateUserdetails'><Span>Complete now</Span></Link></Text>
      </MessageDiv>
        <HeaderText>Welcome to Expense Tracker Application</HeaderText>  <hr/> 
      </MainHead> 
             
        <EmailVerifyBTN onClick={VerifyEmailId}>Verify Email</EmailVerifyBTN><br/>


      <ExpenseBTNdiv>
        <Link to='/AddExpenseDetails'>
          <AddExpenseButton>ADD EXPENSE</AddExpenseButton>
        </Link>
      </ExpenseBTNdiv>  

        <ExpenseList/>
    </Container>
  )
}

export default WelcomePage
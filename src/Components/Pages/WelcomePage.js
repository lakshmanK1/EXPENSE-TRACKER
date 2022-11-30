import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ExpenseData from '../Expense/ExpenseData';
import ExpenseForm from '../Expense/ExpenseForm';
import ExpenseList from '../Expense/ExpenseList';
import NavBar from '../HeaderNavs/NavBar';
import { AuthenticationContext } from '../Store/AuthContext'
import { Container, HeaderText, MessageDiv, Span, Text, EmailVerifyBTN, MainHead, AddExpenseButton, ExpenseBTNdiv } from './PageStyledComponents'

function WelcomePage() {

  // related to ExpenseForm
  const [isForm, setIsForm] = useState(false);

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

  const showForm =()=>{
    setIsForm(true)
  }

  const hideForm=()=>{
    setIsForm(false);
  }


  const editData = () => {
    setEditExpense(true);
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

        {!isForm && 
          <ExpenseBTNdiv>
          <AddExpenseButton onClick={showForm}>ADD EXPENSE</AddExpenseButton>
        </ExpenseBTNdiv>}

        {isForm && <ExpenseForm onHide={hideForm}/>}
        <ExpenseList/>

    </Container>
  )
}

export default WelcomePage
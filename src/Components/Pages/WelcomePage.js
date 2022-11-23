import React from 'react'
import { Link } from 'react-router-dom'
import { Container, HeaderText, MessageDiv, Span, Text } from './PageStyledComponents'

function WelcomePage() {
  return (
    <Container>
        <MessageDiv>
            <Text>your profile is Incomplete,<Link to='/welcomepage/updateUserdetails'><Span>Complete now</Span></Link></Text>
        </MessageDiv>
        <HeaderText>Welcome to Expense Tracker Application</HeaderText>
        <hr/>
    </Container>
  )
}

export default WelcomePage
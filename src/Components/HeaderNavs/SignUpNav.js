import React from 'react'
import {HiOutlineLink} from 'react-icons/hi'


// styled components
import { NavContainer, Span, Icon, IconDiv } from './NavStylesComponents'

function SignUpNav() {
  return (
    <NavContainer>
      <IconDiv>
      <HiOutlineLink style={{width:'35px',height:'25px',color:'#2192FF',cursor:'pointer'}}/>
      <Icon>MyWebLink</Icon>
      </IconDiv>
        <Span>HOME</Span>
        <Span>PRODUCTS</Span>
        <Span>ABOUT US</Span>
    </NavContainer>
  )
}

export default SignUpNav
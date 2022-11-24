import React from 'react'
import SignUpForm from './SignUpForm';
import NavBar from '../HeaderNavs/NavBar';

//styled
import { Wrapper } from './AuthStyledComponents';



function SignUpPage() {
  return(
    <>
    <NavBar/>
    <Wrapper>
    <SignUpForm/>
    </Wrapper>
    </>
  
  );
}

export default SignUpPage
import React from 'react'
import SignUpForm from './SignUpForm';
import SignUpNav from '../HeaderNavs/SignUpNav';

//styled
import { Wrapper } from './AuthStyledComponents';



function SignUpPage() {
  return(
    <>
    <SignUpNav/>
    <Wrapper>
    <SignUpForm/>
    </Wrapper>
    </>
  
  );
}

export default SignUpPage
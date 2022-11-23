import React from 'react'
import AuthForm from './AuthForm'
import AuthNav from '../HeaderNavs/AuthNav';

//styled
import { Wrapper } from './AuthStyledComponents';



function AuthPage() {
  return(
    <>
    <AuthNav/>
    <Wrapper>
    <AuthForm/>
    </Wrapper>
    </>
  
  );
}

export default AuthPage
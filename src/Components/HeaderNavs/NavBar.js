import React from 'react'
import {HiOutlineLink} from 'react-icons/hi'
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import { AuthActions } from '../Store/Redux/Auth-Slice';
import { ThemeActions } from '../Store/Redux/Theme-Slice';


// styled components
import { NavContainer, Span, Icon, IconDiv, AuthDiv } from './NavStylesComponents'

function NavBar() {

  const {isLoggedIn} = useSelector(state => state.Auth);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(AuthActions.logOut());
  }

  const changeThemeHandler = () => {
    console.log("click");
    dispatch(ThemeActions.Theme());
  };

  return (
    <NavContainer>
      <IconDiv>
      <HiOutlineLink style={{width:'35px',height:'25px',color:'#2192FF',cursor:'pointer'}}/>
      <Icon>MyWebLink</Icon>
      <button onClick={changeThemeHandler}>toggle</button>
      </IconDiv>
        <Span>HOME</Span>
        <Span>PRODUCTS</Span>
        <Span>ABOUT US</Span>
        <AuthDiv>
          {!isLoggedIn && <Link to='/loginpage' style={{textDecoration:'none'}}><Span>LOGIN</Span></Link>}
          {isLoggedIn && <Link to='/' style={{textDecoration:'none'}}><Span onClick={logoutHandler}>LOGOUT</Span></Link>}
        </AuthDiv>
    </NavContainer>
  )
}

export default NavBar
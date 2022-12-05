import React, { useContext, useEffect } from "react";
import SignUpPage from "./Components/Authentication/SignUpPage";
import { Routes, Route } from "react-router-dom";
import LogInPage from "./Components/Authentication/LogInPage";
import { AuthenticationContext } from "./Components/Store/AuthContext";
import WelcomePage from "./Components/Pages/WelcomePage";
import Updatadetails from "./Components/Pages/Updatadetails";
import ForgotPassword from "./Components/Authentication/ForgotPassword";
import ExpenseForm from "./Components/Expense/ExpenseForm";
import {useSelector, useDispatch} from 'react-redux'
import { sendDataHandler, fetchDataHandler } from "./Components/Store/Redux/Expense-Actions";

// For Tostify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let isInitial = true;
function App() {
  const AuthCntx = useContext(AuthenticationContext);
  
  const dispatch = useDispatch();

  const ExpenseData = useSelector(state => state.Expense);

  useEffect(()=>{
    dispatch(fetchDataHandler());
  },[dispatch]);

  useEffect(()=>{
    if(isInitial){
      isInitial = false;
      return;
    }
    dispatch(sendDataHandler(ExpenseData));
  },[ExpenseData, dispatch]);


  return (
    <React.Fragment>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<SignUpPage/>} exact/>
        <Route path="/loginpage" element={<LogInPage/>} exact/>
        {AuthCntx.isLoggedIn && <Route path="/welcomepage" element={<WelcomePage/>} exact/>}
        {AuthCntx.isLoggedIn && <Route path="/welcomepage/updateUserdetails" element={<Updatadetails/>} exact/>}
        {!AuthCntx.isLoggedIn && <Route path='/resetpassword' element={<ForgotPassword/>} exact/>}
        <Route path="/AddExpenseDetails" element={<ExpenseForm/>} exact/>
        <Route path="/UpdateExpenseDetails/:id" element={<ExpenseForm/>} exact/>
      </Routes>
    </React.Fragment>
  );
}

export default App;

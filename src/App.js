import React, { useContext } from "react";
import SignUpPage from "./Components/Authentication/SignUpPage";
import { Routes, Route } from "react-router-dom";
import LogInPage from "./Components/Authentication/LogInPage";
import { AuthenticationContext } from "./Components/Store/AuthContext";
import WelcomePage from "./Components/Pages/WelcomePage";
import Updatadetails from "./Components/Pages/Updatadetails";
import ForgotPassword from "./Components/Authentication/ForgotPassword";


function App() {
  const AuthCntx = useContext(AuthenticationContext);
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<SignUpPage/>} exact/>
        <Route path="/loginpage" element={<LogInPage/>} exact/>
        {AuthCntx.isLoggedIn && <Route path="/welcomepage" element={<WelcomePage/>} exact/>}
        {AuthCntx.isLoggedIn && <Route path="/welcomepage/updateUserdetails" element={<Updatadetails/>} exact/>}
        {!AuthCntx.isLoggedIn && <Route path='/resetpassword' element={<ForgotPassword/>} exact/>}
      </Routes>
    </React.Fragment>
  );
}

export default App;

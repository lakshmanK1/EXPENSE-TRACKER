import React, { useContext } from "react";
import SignUpPage from "./Components/Authentication/SignUpPage";
import { Routes, Route } from "react-router-dom";
import LogInPage from "./Components/Authentication/LogInPage";
import { AuthenticationContext } from "./Components/Store/AuthContext";
import WelcomePage from "./Components/Pages/WelcomePage";


function App() {
  const AuthCntx = useContext(AuthenticationContext);
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<SignUpPage/>} exact/>
        <Route path="/loginpage" element={<LogInPage/>} exact/>
        {AuthCntx.isLoggedIn && <Route path="/welcomepage" element={<WelcomePage/>} exact/>}
      </Routes>
    </React.Fragment>
  );
}

export default App;

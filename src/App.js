import React from "react";
import SignUpPage from "./Components/Authentication/SignUpPage";
import { Routes, Route } from "react-router-dom";
import LogInPage from "./Components/Authentication/LogInPage";


function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<SignUpPage/>} exact/>
        <Route path="/loginpage" element={<LogInPage/>} exact/>
      </Routes>
    </React.Fragment>
  );
}

export default App;

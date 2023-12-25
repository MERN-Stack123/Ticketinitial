import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "../component/SignUp";
import ForgotPassword from "../component/ForgotPassword";
import SignIn from "../component/SignIn";
import LandingPage from "../pages/LandingPage";


const AppRoutes = () => {
    return (
      <Router>
        <Routes>
           <Route path="/" element={<LandingPage/>}/>
           <Route path="signup" element={<SignUp/>} />
           <Route path="signin" element={<SignIn/>}/>
           <Route path="forgotpassword" element={<ForgotPassword/>}/>
        </Routes>
      </Router>
    );
  };
  
  export default AppRoutes;
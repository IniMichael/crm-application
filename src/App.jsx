import React, { useState } from "react";
import "./LogIn.css";
import "./UserDashboard.css";
import UserDashboard from "./pages/UserDashboard.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { AuthProvider } from "./auth/AuthContext";


function App() {
  return (
    <Router>
        <AuthProvider>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
      </Routes>
        </AuthProvider>
    </Router>
  );
}

export default App;

import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import HomeIndex from "../pages/HomePage/index";
import LoginPage from "../pages/LoginPage/index.jsx";

import { AuthProvider, AuthContext } from '../contexts/auth';

export default function AppRoutes() {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);
    if (loading) {
      return <div className="loading">Carregando...</div>
    }
    if (!authenticated) {
      return <Navigate to={"/login"} />
    }
    return children;
  }
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<LoginPage />}></Route>
          <Route exact path="/" element={<Private><HomeIndex /></Private>}></Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

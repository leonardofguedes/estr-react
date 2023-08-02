import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/auth-context";
import Login from "../pages/login";
import PrivateRouter from "./private-routes";
import Home from "../pages/home/index";
import Lista from "../pages/list/index";

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRouter />}>
            <Route path="/home" element={<Home />} />
            <Route path="/lista" element={<Lista />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;

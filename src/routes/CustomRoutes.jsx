import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Employee from "../pages/Employees/Employee";
import LayoutMain from "../layout/main/LayoutMain";
import PreLoader from "../components/PreLoader";
import LayoutAuth from "../layout/auth/LayoutAuth";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Error403 from "../pages/error/Error403";

const CustomRoutes = () => {
  return (
    <div id="main-wrapper">
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path="employee" element={<Employee />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/auth/*" element={<LayoutAuth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/Loading" element={<PreLoader />} />
        <Route path="*" element={<Error403 />} />
      </Routes>
    </div>
  );
};

export default CustomRoutes;

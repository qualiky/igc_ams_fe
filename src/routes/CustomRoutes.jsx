import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import LayoutMain from "../layout/main/LayoutMain";
import PreLoader from "../components/PreLoader";
import LayoutAuth from "../layout/auth/LayoutAuth";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/Register";
import Error403 from "../pages/error/Error403";
import AddEmployee from "../pages/Employees/_sections/add-employee";
import EmployeeList from "../pages/Employees/_sections/Employee";
import Employee from "../pages/Employees";
import UserProfile from "../pages/profile/user-profile";
import EmployeeDetail from "../pages/Employees/_sections/employee-detail";
import AddEmployeeBankDetails from "../pages/Employees/_sections/add-bank-details";

const CustomRoutes = () => {
  return (
    <div id="main-wrapper">
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path="employee" element={<Employee />}>
            <Route index element={<EmployeeList />} />
            <Route path="add-employee" element={<AddEmployee />} />
            <Route
              path="add-bank-details"
              element={<AddEmployeeBankDetails />}
            />
            <Route path="details/:id" element={<EmployeeDetail />} />
          </Route>
          <Route path="user-profile" element={<UserProfile />} />
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

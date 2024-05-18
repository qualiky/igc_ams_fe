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
import AddEducation from "../pages/Employees/_sections/add-education";
import ProtectedRoute from "./PrivateRoutes";
import EditBankView from "../pages/Employees/_views/edit-bank-view";
import EditAccountInfo from "../pages/Employees/_views/edit-account-view";
import EditEducationView from "../pages/Employees/_views/edit-education-view";

const CustomRoutes = () => {
  return (
    <div id="main-wrapper">
      <Routes>
        {/* Auth Routes */}
        <Route path="/auth/*" element={<LayoutAuth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Main Layout - Protected Routes */}
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<ProtectedRoute element={Home} />} />
          <Route
            path="employee"
            element={<ProtectedRoute element={Employee} />}
          >
            <Route index element={<ProtectedRoute element={EmployeeList} />} />
            <Route
              path="add-employee"
              element={<ProtectedRoute element={AddEmployee} />}
            />
            <Route
              path="edit-employee/:id"
              element={<ProtectedRoute element={EditAccountInfo} />}
            />
            <Route
              path="details/:id"
              element={<ProtectedRoute element={EmployeeDetail} />}
            />
            <Route
              path="add-bank-details"
              element={<ProtectedRoute element={AddEmployeeBankDetails} />}
            />
            <Route
              path="edit-bank-details/:id"
              element={<ProtectedRoute element={EditBankView} />}
            />
            <Route
              path="add-education"
              element={<ProtectedRoute element={AddEducation} />}
            />
            <Route
              path="edit-education/:id"
              element={<ProtectedRoute element={EditEducationView} />}
            />
          </Route>
          <Route
            path="user-profile"
            element={<ProtectedRoute element={UserProfile} />}
          />
        </Route>

        <Route path="/Loading" element={<PreLoader />} />
        <Route path="*" element={<Error403 />} />
      </Routes>
    </div>
  );
};

export default CustomRoutes;

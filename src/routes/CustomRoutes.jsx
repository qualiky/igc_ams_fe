import { useRoutes } from "react-router-dom";
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
import CoreHr from "../pages/core-hr";
import HrView from "../pages/core-hr/_views/HrView";
import AddPersonalIdentification from "../pages/Employees/_sections/add-personal-information";
import EditPersonalInfoView from "../pages/Employees/_views/edit-personal-info-view";
import Sales from "../pages/sales/Sales";

const CustomRoutes = () => {
  const routes = useRoutes([
    {
      path: "/auth/*",
      element: <LayoutAuth />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
    {
      path: "/",
      element: <LayoutMain />,
      children: [
        { path: "/", element: <ProtectedRoute element={Home} /> },
        {
          path: "employee",
          element: <ProtectedRoute element={Employee} />,
          children: [
            { path: "", element: <EmployeeList /> },
            { path: "add-employee", element: <AddEmployee /> },
            { path: "edit-employee/:id", element: <EditAccountInfo /> },
            { path: "details/:id", element: <EmployeeDetail /> },
            { path: "add-bank-details", element: <AddEmployeeBankDetails /> },
            { path: "edit-bank-details/:id", element: <EditBankView /> },
            { path: "add-education", element: <AddEducation /> },
            { path: "edit-education/:id", element: <EditEducationView /> },
            {
              path: "add-identification-information",
              element: <AddPersonalIdentification />,
            },
            {
              path: "edit-identification-information/:id",
              element: <EditPersonalInfoView />,
            },
          ],
        },
        {
          path: "core-hr",
          element: <ProtectedRoute element={CoreHr} />,
          children: [{ path: "", element: <HrView /> }],
        },

        {
          path: "sales",
          element: <ProtectedRoute element={Sales} />,
          children: [{ path: "", element: <Sales /> }],
        },

        { path: "user-profile", element: <UserProfile /> },
      ],
    },
    { path: "/Loading", element: <PreLoader /> },
    { path: "*", element: <Error403 /> },
  ]);

  return routes;
};

export default CustomRoutes;

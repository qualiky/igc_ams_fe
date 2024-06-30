import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { paths } from "../routes/path";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("");
  let location = useLocation();

  useEffect(() => {
    const parts = location.pathname.split("/");
    setActiveMenu(parts[1] || "");
  }, [location]);

  return (
    <>
      <div className="deznav">
        <div className="deznav-scroll">
          <ul className="metismenu" id="menu">
            <li className="menu-title"></li>

            <li
              className={`${
                activeMenu === "" ? "mm-active" : ""
              } cursor-pointer`}
            >
              <Link to={paths.dashboard.root}>
                <div className="menu-icon">
                  <Icon
                    icon="solar:home-angle-2-bold-duotone"
                    className={`text-${
                      activeMenu == "" ? "[#0D99FF] " : "[#888888] "
                    } text-2xl `}
                  />
                </div>
                <span className="nav-text">Home</span>
              </Link>
            </li>

            <li
              className={`${
                activeMenu == "employee" ? "mm-active" : ""
              } cursor-pointer`}
            >
              <a
                className={`has-arrow ${
                  activeMenu == "employee" ? "" : "bg-white"
                }`}
              >
                <div className="menu-icon">
                  <Icon
                    icon="uim:user-nurse"
                    className={`text-${
                      activeMenu == "employee" ? "[#0D99FF] " : "[#888888] "
                    } text-2xl `}
                  />
                </div>
                <span
                  className={`nav-text ${
                    activeMenu == "employee" ? "" : "text-black"
                  }`}
                >
                  Employee
                </span>
              </a>
              <ul className="sub-menu pl-3">
                <li>
                  <Link to={paths.dashboard.employee.employee}>List</Link>
                </li>
                <li>
                  <Link to={paths.dashboard.employee.addEmployee}>
                    Add Employee
                  </Link>
                </li>
              </ul>
            </li>

            <li
              className={`${
                activeMenu == "sales" ? "mm-active" : ""
              } cursor-pointer`}
            >
              <Link to={paths.dashboard.sales.root}>
                <div className="menu-icon">
                  <Icon
                    icon="solar:dollar-bold-duotone"
                    className={`text-${
                      activeMenu == "sales" ? "[#0D99FF] " : "[#888888] "
                    } text-2xl `}
                  />
                </div>
                <span className="nav-text">Sales</span>
              </Link>
            </li>

            <li
              className={`${
                activeMenu == "core-hr" ? "mm-active" : ""
              } cursor-pointer`}
            >
              <Link to={paths.dashboard.coreHr}>
                <div className="menu-icon">
                  <Icon
                    icon="solar:users-group-rounded-bold-duotone"
                    className={`text-${
                      activeMenu == "core-hr" ? "[#0D99FF] " : "[#888888] "
                    } text-2xl `}
                  />
                </div>
                <span className="nav-text">Core HR</span>
              </Link>
            </li>
            <li
              className={`${
                activeMenu == "leave" ? "mm-active" : ""
              } cursor-pointer`}
            >
              <Link to={paths.dashboard.leave.leave}>
                <div className="menu-icon">
                  <Icon
                    icon="uim:calender"
                    className={`text-${
                      activeMenu == "leave" ? "[#0D99FF] " : "[#888888] "
                    } text-2xl `}
                  />
                </div>
                <span className="nav-text">Leave</span>
              </Link>
            </li>
          </ul>
          <div className="help-desk py-3 px-[1.5rem]">
            <a className="btn btn-primary py-[5px] cursor-pointer px-3 text-[13px] rounded text-white bg-primary leading-5 inline-block border border-primary font-medium">
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

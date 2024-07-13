import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { paths } from "../routes/path";
import PropTypes from "prop-types";

const MenuItem = ({ to, icon, text, activeMenu, name }) => (
  <li className={`${activeMenu == name ? "mm-active" : ""} cursor-pointer`}>
    <Link to={to}>
      <div className="menu-icon">
        <Icon
          icon={icon}
          className={`text-${
            activeMenu == to ? "[#0D99FF]" : "[#888888]"
          } text-2xl`}
        />
      </div>
      <span className="nav-text">{text}</span>
    </Link>
  </li>
);

MenuItem.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
  activeMenu: PropTypes.string,
  name: PropTypes.string,
};

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("");

  let location = useLocation();

  useEffect(() => {
    const parts = location.pathname.split("/");
    setActiveMenu(parts[1] || "");
  }, [location]);

  return (
    <div className="deznav">
      <div className="deznav-scroll">
        <ul className="metismenu" id="menu">
          <li className="menu-title"></li>

          <MenuItem
            to="/"
            icon="solar:home-angle-2-bold-duotone"
            text="Home"
            activeMenu={activeMenu}
            name=""
          />
          <li
            className={`${
              activeMenu === "employee" ? "mm-active" : ""
            } cursor-pointer`}
          >
            <a
              className={`has-arrow ${
                activeMenu === "employee" ? "" : "bg-white"
              }`}
            >
              <div className="menu-icon">
                <Icon
                  icon="uim:user-nurse"
                  className={`text-${
                    activeMenu === "employee" ? "[#0D99FF]" : "[#888888]"
                  } text-2xl`}
                />
              </div>
              <span
                className={`nav-text ${
                  activeMenu === "employee" ? "" : "text-black"
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

          <MenuItem
            to="sales"
            icon="solar:dollar-bold-duotone"
            text="Sales"
            name="sales"
            activeMenu={activeMenu}
          />
          <MenuItem
            to={paths.dashboard.coreHr}
            name="core-hr"
            icon="solar:users-group-rounded-bold-duotone"
            text="Core HR"
            activeMenu={activeMenu}
          />
          <MenuItem
            to={paths.dashboard.leave.leave}
            icon="uim:calender"
            text="Leave"
            activeMenu={activeMenu}
            name="leave"
          />
          <MenuItem
            to={paths.dashboard.project.project}
            name="project"
            icon="fluent:tasks-app-28-filled"
            text="Project"
            activeMenu={activeMenu}
          />
        </ul>
        <div className="help-desk py-3 px-[1.5rem]">
          <a className="btn btn-primary py-[5px] cursor-pointer px-3 text-[13px] rounded text-white bg-primary leading-5 inline-block border border-primary font-medium">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

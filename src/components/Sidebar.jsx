import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

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
            <li className="menu-title">YOUR COMPANY</li>

            <li
              className={`${
                activeMenu !== "employee" && activeMenu === ""
                  ? "mm-active"
                  : ""
              } cursor-pointer`}
            >
              <Link to="/">
                <div className="menu-icon">
                  <Icon
                    icon="lets-icons:home-light"
                    className="text-[#888888] text-2xl font-regular"
                  />
                </div>
                <span className="nav-text">Home</span>
              </Link>
            </li>

            <li>
              <a className="has-arrow ">
                <div className="menu-icon">
                  <Icon
                    icon="lets-icons:home-light"
                    className="text-[#888888] text-2xl font-regular"
                  />
                </div>
                <span className="nav-text">Employee</span>
              </a>
              <ul className="sub-menu">
                <li>
                  <Link to="/employee">List</Link>
                </li>
                <li>
                  <Link to="/employee/add-employee">Add Employee</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="core-hr">
                <div className="menu-icon">
                  <Icon
                    icon="lets-icons:home-light"
                    className="text-[#888888] text-2xl font-regular"
                  />
                </div>
                <span className="nav-text">Core HR</span>
              </Link>
            </li>
            <li>
              <a className="has-arrow ">
                <div className="menu-icon">
                  <Icon
                    icon="lets-icons:home-light"
                    className="text-[#888888] text-2xl font-regular"
                  />
                </div>
                <span className="nav-text">Core HR</span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="task.html">Tasks</a>
                </li>
                <li>
                  <a href="task-summary.html">Task Summary</a>
                </li>
              </ul>
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

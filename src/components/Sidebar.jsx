import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("");
  let location = useLocation();

  console.log(activeMenu);
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
              <Link to="/">
                <div className="menu-icon">
                  <Icon
                    icon="lets-icons:home-light"
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
                    icon="ph:user-thin"
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
                  <Link to="/employee">List</Link>
                </li>
                <li>
                  <Link to="/employee/add-employee">Add Employee</Link>
                </li>
              </ul>
            </li>

            <li
              className={`${
                activeMenu == "sales" ? "mm-active" : ""
              } cursor-pointer`}
            >
              <Link to="sales">
                <div className="menu-icon">
                  <Icon
                    icon="arcticons:moneytracker"
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
              <Link to="core-hr">
                <div className="menu-icon">
                  <Icon
                    icon="ph:users-thin"
                    className={`text-${
                      activeMenu == "core-hr" ? "[#0D99FF] " : "[#888888] "
                    } text-2xl `}
                  />
                </div>
                <span className="nav-text">Core HR</span>
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

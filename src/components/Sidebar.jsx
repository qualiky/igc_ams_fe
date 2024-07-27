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
          className={`bg-${
            activeMenu == to ? "[#0D99FF]" : "[#888888]"
          } text-2xl `}
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
    <div className="deznav chatbox" id="sidebarMain">
      <div className="deznav-scroll flex flex-col justify-between">
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
              className={`has-arrow dark:bg-[#242424]  ${
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
                className={`nav-text dark:text-white ${
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
            to={paths.dashboard.chat.root}
            name="conversation"
            icon="line-md:chat-twotone"
            text="Conversation"
            activeMenu={activeMenu}
          />

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
            text="Attendence"
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
            to={paths.dashboard.clients.root}
            name="client"
            icon="solar:users-group-two-rounded-bold-duotone"
            text="Manage Clients"
            activeMenu={activeMenu}
          />
          <MenuItem
            to={paths.dashboard.project.project}
            name="project"
            icon="fluent:tasks-app-28-filled"
            text="Project"
            activeMenu={activeMenu}
          />
          <MenuItem
            to={paths.dashboard.receipt.receipt}
            name="receipt"
            icon="solar:money-bag-bold-duotone"
            text="Receipt"
            activeMenu={activeMenu}
          />
          <MenuItem
            to={paths.dashboard.ticket.root}
            name="ticket"
            icon="lets-icons:ticket-alt-duotone"
            text="Support"
            activeMenu={activeMenu}
          />
        </ul>
        <div className="help-desk md:hidden lg:flex py-3 ps-2  flex-row justify-center  gap-2 mt-10">
          <a
            href="https://pirus.app"
            target="_blank"
            type="button"
            className="mr-1 mb-2 inline-block rounded font-medium py-[5px] px-[15px] text-[13px] border border-primary text-white bg-primary hover:bg-hover-primary hover:border-hover-primary duration-300 btn-sm"
          >
            Contact
            {/* <Icon icon="solar:call-chat-bold-duotone" /> */}
          </a>
          <a
            type="button"
            target="_blank"
            href="https://pirus.app/#pricing"
            className="mr-1 mb-2 inline-block rounded font-semibold py-[0.438rem] px-4 text-xs border border-primary text-primary hover:bg-primary hover:text-white duration-300 btn-xs"
          >
            Pricing
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

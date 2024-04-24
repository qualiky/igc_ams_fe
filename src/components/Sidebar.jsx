import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { SideNavItems } from "../_mock/sidebar-items";

const Sidebar = () => {
  return (
    <>
      <div className="deznav">
        <div className="deznav-scroll">
          <ul className="metismenu" id="menu">
            <li className="menu-title">YOUR COMPANY</li>
            {SideNavItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.route}
                    className={`${item.sub_menu ? "has-arrow" : ""}`}
                  >
                    <div className="menu-icon">
                      <Icon
                        icon="lets-icons:home-light"
                        className="text-[#888888] text-2xl font-regular"
                      />
                    </div>
                    <span className="nav-text">{item?.title}</span>
                  </Link>
                  {item.sub_menu && (
                    <ul className="sub-menu">
                      {item.sub_menu.map((subMenu, subIndex) => (
                        <li key={subIndex}>
                          <a href="index-2.html">{subMenu.title}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
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

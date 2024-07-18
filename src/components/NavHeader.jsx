import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import toggleSidebar from "../features/reducer/project/projectSlice";

const NavHeader = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleSidebar());
    console.log("toggle");
  };
  return (
    <>
      <div className="nav-header">
        <Link to="/" className="brand-logo w-full h-auto">
          <img src="/assets/logo/logo.png" className="" />
        </Link>
        <div className="nav-control">
          <div className="hamburger" onClick={handleToggle}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavHeader;

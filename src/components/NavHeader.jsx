import React from "react";
import { Link } from "react-router-dom";

const NavHeader = () => {
  return (
    <>
      <div className="nav-header">
        <Link to="/" className="brand-logo w-full h-auto">
          <img src="/assets/logo/logo.png" className="" />
        </Link>
        <div className="nav-control">
          <div className="hamburger">
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

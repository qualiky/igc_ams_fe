import React from "react";
import { Outlet } from "react-router-dom";

const LayoutAuth = () => {
  return (
    <>
      <div
        className="h-[100vh] selection:text-white selection:bg-primary"
        data-typography="poppins"
        data-theme-version="light"
        data-layout="vertical"
        data-nav-headerbg="black"
        data-headerbg="color_1"
      >
        <div className="authincation min-h-[100vh] h-full flex">
          <div className="container-fluid h-full pt-0 w-full px-[12.5px]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutAuth;

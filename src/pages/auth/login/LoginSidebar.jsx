import React from "react";
import { Link } from "react-router-dom";

const LoginSidebar = () => {
  return (
    <>
      <div className="lg:w-1/2 w-full">
        <div className="pages-left h-full bg-white dark:bg-[#242424]">
          <div className="login-content text-center lg:pt-[70px] lg:pl-[70px] sm:pt-10 sm:pl-[51px] pt-[14px] pl-[14px]">
            <Link className="">
              <img
                src="/assets/logo/logo.svg"
                className="mb-4 inline-block size-[70%] logo-dark"
                alt=""
              />
            </Link>
          </div>
          <div className="login-media text-center sm:mt-20 mt-5">
            <img
              src="/assets/images/login.png"
              alt=""
              className="max-lg:w-[60%] w-[70%] inline-block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSidebar;

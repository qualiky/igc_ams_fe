import React from "react";

const LoginSidebar = () => {
  return (
    <>
      <div className="lg:w-1/2 w-full">
        <div className="pages-left h-full bg-white dark:bg-[#242424]">
          <div className="login-content text-center lg:pt-[70px] lg:pl-[70px] sm:pt-10 sm:pl-[51px] pt-[14px] pl-[14px]">
            <a href="index-2.html">
              <img
                src="/assets/images/logo-full.png"
                className="mb-4 inline-block dark:hidden logo-dark"
                alt=""
              />
            </a>
            <a href="index-2.html">
              <img
                src="/assets/images/logi-white.png"
                className="mb-4 hidden dark:inline-block logo-light"
                alt=""
              />
            </a>
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

import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="row h-full">
        <div className="lg:w-1/2 w-full mx-auto self-center">
          <div className="login-form mx-auto max-w-[600px] lg:px-[50px] lg:py-0 sm:p-[25px] p-[14px]">
            <div className="text-center">
              <h3 className="title mb-2">Sign In</h3>
              <p className="mb-4">
                Sign in to your account to start using W3CRM
              </p>
            </div>
            <form action="https://w3crm.dexignzone.com/tailwind/demo/index.html">
              <div className="mb-6">
                <label className="mb-1 text-dark">Email</label>
                <input
                  type="email"
                  className="form-control relative text-[13px] text-body-color h-[2.813rem] border border-b-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full"
                  value="hello@example.com"
                />
              </div>
              <div className="mb-6 relative">
                <label className="mb-1 text-dark">Password</label>
                <input
                  type="password"
                  id="dz-password"
                  className="form-control relative text-[13px] h-[2.813rem] border border-b-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full text-body-color"
                  value="123456"
                />
                <span className="show-pass eye absolute right-5 bottom-[10px] text-body-color cursor-pointer">
                  <i className="fa fa-eye-slash"></i>
                  <i className="fa fa-eye"></i>
                </span>
              </div>
              <div className="form-row flex justify-between mt-6 mb-2">
                <div className="mb-6">
                  <div className="leading-normal block min-h-[1.3125rem] pl-[1.5em] custom-checkbox mb-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="form-check-input ml-[-1.5em]"
                      id="customCheckBox1"
                      required=""
                    />
                    <label
                      className="mt-[5px] text-body-color ml-[0.3125rem]"
                      htmlFor="customCheckBox1"
                    >
                      Remember my preference
                    </label>
                  </div>
                </div>
                <div className="mb-6">
                  <a
                    href="page-forgot-password.html"
                    className="sm:text-sm text-xs text-primary whitespace-nowrap dark:text-white"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className="text-center mb-6">
                <Link
                  type="submit"
                  to="/"
                  className="block w-full rounded font-medium text-[15px] max-xl:text-xs leading-5 py-[0.719rem] max-xl:px-4 px-[1.563rem] max-xl:py-2.5 border border-primary text-white bg-primary hover:bg-hover-primary hover:border-hover-primary duration-300 mb-2"
                >
                  Sign In
                </Link>
              </div>
              <h6 className="login-title text-center relative mb-12 flex center z-[1] items-center">
                <span>Or continue with</span>
              </h6>

              <div className="mb-4">
                <ul className="flex self-center justify-center">
                  <li>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/"
                      className="fab fa-facebook-f w-10 h-10 leading-[2.5rem] rounded-full text-white text-center bg-facebook"
                    ></a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.google.com/"
                      className="fab fa-google-plus-g w-10 h-10 leading-[2.5rem] rounded-full text-white text-center bg-google-plus mx-2"
                    ></a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/"
                      className="fab fa-linkedin-in w-10 h-10 leading-[2.5rem] rounded-full text-white text-center bg-linkedin mr-2"
                    ></a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://twitter.com/"
                      className="fab fa-twitter w-10 h-10 leading-[2.5rem] rounded-full text-white text-center bg-twitter"
                    ></a>
                  </li>
                </ul>
              </div>
              <p className="text-center mb-2">
                Not registered?
                <a
                  className="text-sm text-primary dark:text-white"
                  href="page-register.html"
                >
                  Register
                </a>
              </p>
            </form>
          </div>
        </div>
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

              <p className="mb-4 xl:text-xl sm:text-base text-sm xl:leading-[1.5] text-black mx-auto max-w-[500px] dark:text-white">
                CRM dashboard uses line charts to visualize customer-related
                metrics and trends over time.
              </p>
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
      </div>
    </>
  );
};

export default Login;

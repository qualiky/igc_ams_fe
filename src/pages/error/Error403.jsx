import React from "react";
import { Link } from "react-router-dom";

const Error403 = () => {
  return (
    <>
      <div className="flex min-h-[100vh] h-full">
        <div className="container mt-0">
          <div className="row justify-center h-full items-center">
            <div className="md:w-1/2">
              <div className="error-page h-[100vh] p-12 relative bg-blend-luminosity bg-cover">
                <div className="error-inner z-[1] absolute left-[50%] top-[50%] max-w-[600px] translate-y-[-50%] translate-x-[-50%] p-5 w-full text-center">
                  <div
                    className="dz-error animate-dzerror relative font-black text-secondary lg:leading-[200px] lg:text-[200px] sm:leading-[150px] sm:text-[150px] leading-[80px] text-[80px] max-sm:tracking-[5px] dark:text-[#828690]"
                    data-text="403"
                  >
                    403
                  </div>
                  <h4 className="error-head sm:mb-10 mb-[30px] sm:text-[30px] text-xl leading-[1.4]">
                    <i className="fa fa-times-circle text-danger"></i> Forbidden
                    Error!
                  </h4>
                  <h2 className="error-head sm:text-[30px] text-lg sm:mb-10 mb-[30px] leading-[1.4] text-[#1c1c4e] font-medium">
                    You do not have permission to view this resource.
                  </h2>
                  <Link
                    to="/"
                    className="btn inline-block bg-secondary text-white rounded-md border border-secondary py-[0.719rem] px-[1.563rem] max-xl:py-2.5 max-xl:px-4 text-[15px] max-xl:text-xs font-medium leading-4"
                  >
                    BACK TO HOMEPAGE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error403;

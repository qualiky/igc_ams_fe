import { Link } from "react-router-dom";
import { paths } from "./path";

const RoleBasesGuard = () => {
  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="card flex min-h-[100vh] h-full">
          <div className="container mt-0">
            <div className="row justify-center h-full items-center">
              <div className="md:w-full">
                <div className="error-page h-[100vh] p-12 relative bg-blend-luminosity bg-cover">
                  <div className="error-inner z-[1] absolute left-[50%] top-[50%] max-w-auto translate-y-[-50%] translate-x-[-50%] p-5 w-full text-center">
                    <div
                      className="dz-error animate-dzerror relative font-black text-secondary lg:leading-[200px] lg:text-[90px] sm:leading-[100px] sm:text-[80px] leading-[80px] text-[40px] max-sm:tracking-[5px] dark:text-[#828690]"
                      data-text="Permission Denied"
                    >
                      Permission Denied
                    </div>
                    <h4 className="error-head sm:mb-10 mb-[30px] text-[30px] text-xl leading-[1.4]">
                      <i className="fa fa-times-circle text-danger"></i> Service
                      Unavailable Please Contact Administrator
                    </h4>
                    <Link
                      to={paths.dashboard.root}
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
      </div>
    </div>
  );
};

export default RoleBasesGuard;

import { Link } from "react-router-dom";
import EmployeeDataTable from "../_components/employee-data-table";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllEmployees } from "../../../features/reducer/employee/employeeSlice";
import { getAllEmployeeData } from "../../../selectors/selectors";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react/dist/iconify.js";

const EmployeeList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEmployees({ populate: null }));
  }, [dispatch]);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const { isLoading } = useSelector(getAllEmployeeData);

  const handleReload = () => {
    dispatch(getAllEmployees({ populate: null }));
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="xl:w-1/4 lg:w-1/2 sm:w-1/2">
            <div className="widget-stat card">
              <div className="sm:p-6 p-4">
                <h4 className="card-title capitalize mb-2">Total Employee</h4>
                <h3 className="xl:text-2xl mb-2">3280</h3>
                <div className="progress mb-2 h-[5px] overflow-hidden bg-[#f6f6f6] dark:bg-[#1E1E1E] rounded-md flex">
                  <div
                    className="progress-bar animate-myanimation whitespace-nowrap rounded-md bg-primary"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 sm:w-1/2">
            <div className="widget-stat card">
              <div className="sm:p-6 p-4">
                <h4 className="card-title capitalize mb-2">New Employee</h4>
                <h3 className="xl:text-2xl mb-2">245</h3>
                <div className="progress mb-2 h-[5px] overflow-hidden bg-[#f6f6f6] dark:bg-[#1E1E1E] rounded-md flex">
                  <div
                    className="progress-bar animate-myanimation whitespace-nowrap rounded-md bg-warning"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 sm:w-1/2">
            <div className="widget-stat card">
              <div className="sm:p-6 p-4">
                <h4 className="card-title capitalize mb-2">Male Employee</h4>
                <h3 className="xl:text-2xl mb-2">28</h3>
                <div className="progress mb-2 h-[5px] overflow-hidden bg-[#f6f6f6] dark:bg-[#1E1E1E] rounded-md flex">
                  <div
                    className="progress-bar animate-myanimation whitespace-nowrap rounded-md bg-red"
                    style={{ width: "76%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 sm:w-1/2">
            <div className="widget-stat card">
              <div className="sm:p-6 p-4">
                <h4 className="card-title capitalize mb-2">Female Employee</h4>
                <h3 className="xl:text-2xl mb-2">25160$</h3>
                <div className="progress mb-2 h-[5px] overflow-hidden bg-[#f6f6f6] dark:bg-[#1E1E1E] rounded-md flex">
                  <div className=" w-[30%] progress-bar animate-myanimation whitespace-nowrap rounded-md bg-success"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="card overflow-hidden relative">
              <div className="card-body p-0">
                <div className="overflow-x-auto active-projects style-1">
                  <div className="tbl-caption flex justify-between items-center flex-wrap p-5 relative z-[2]">
                    <h4 className="max-sm:mb-2.5 text-xl font-medium">
                      Employees
                    </h4>
                    <div className="flex gap-2">
                      <Link
                        to="/employee/add-employee"
                        className="py-[5px] px-3 cursor-pointer text-[13px] rounded text-white bg-primary  leading-[18px] inline-block border border-primary btn-sm duration-500 hover:bg-hover-primary "
                      >
                        + Add Employee
                      </Link>
                      <a
                        className="btn btn-secondary flex cursor-pointer items-center gap-2 py-[5px] px-3 text-[13px] rounded text-white bg-secondary  border border-secondary btn-sm "
                        onClick={handleReload}
                      >
                        <Icon icon="uim:process" />
                        Refresh
                      </a>
                    </div>
                  </div>

                  {!isLoading ? (
                    <EmployeeDataTable />
                  ) : (
                    <div className="h-[350px] w-full bg-white dark:bg-[#1E1E1E]">
                      <div className="animate-pulse px-5">
                        {Array.from({ length: 10 }).map((_, index) => (
                          <div
                            key={index}
                            className={`h-4 ${
                              index % 2 === 0 ? "bg-gray-200" : "bg-gray-300"
                            } mb-6 rounded dark:bg-[#242424] ${
                              index === 0 ? "mt-3" : ""
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeList;

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

  const { isLoading } = useSelector(getAllEmployeeData);

  const handleReload = () => {
    dispatch(getAllEmployees({ populate: null }));
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
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
                        className="py-[5px] px-3 cursor-pointer text-[13px] rounded text-white bg-primary leading-[18px] inline-block border border-primary btn-sm duration-500 hover:bg-hover-primary "
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
                    <div className="h-[350px] w-full bg-white">
                      <div className="animate-pulse px-5">
                        {Array.from({ length: 10 }).map((_, index) => (
                          <div
                            key={index}
                            className={`h-4 ${
                              index % 2 === 0 ? "bg-gray-200" : "bg-gray-300"
                            } mb-6 rounded ${index === 0 ? "mt-3" : ""}`}
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

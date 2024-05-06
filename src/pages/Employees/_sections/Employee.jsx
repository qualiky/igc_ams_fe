import { Link } from "react-router-dom";
import EmployeeDataTable from "./data-table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { getEmployees } from "../../../features/reducer/employee/employeeSlice";
// import { getAllEmployee } from "../../../selectors/selectors";

const EmployeeList = () => {
  const dispatch = useDispatch();

  // const { employee } = useSelector(getAllEmployee);

  // useEffect(() => {
  //   dispatch(getEmployees());
  // }, [dispatch]);

  // useEffect(() => {
  //   console.log(employee || "");
  // }, [employee]);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="w-full">
            <div className="card overflow-hidden relative">
              <div className="card-body p-0">
                <div className="overflow-x-auto active-projects style-1">
                  <div className="tbl-caption flex justify-between items-center flex-wrap p-5 relative z-[2]">
                    <h4 className="max-sm:mb-2.5">Employees</h4>
                    <div className="flex gap-2">
                      <Link
                        to="/employee/add-employee"
                        className="py-[5px] px-3 cursor-pointer text-[13px] rounded text-white bg-primary leading-[18px] inline-block border border-primary btn-sm duration-500 hover:bg-hover-primary "
                      >
                        + Add Employee
                      </Link>
                      <Link
                        to="/employee/invite-employee"
                        className="btn btn-secondary py-[5px] px-3 text-[13px] rounded text-white bg-secondary leading-[18px] inline-block border border-secondary btn-sm "
                      >
                        + Invite Employee
                      </Link>
                    </div>
                  </div>

                  <EmployeeDataTable />
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

/* eslint-disable no-unused-vars */

import * as yup from "yup";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getAllEmployeeData,
  getAllLeaveData,
} from "../../../selectors/selectors";
import { Link, useNavigate } from "react-router-dom";
import LeaveDataTable from "../_components/leave-data-table";
import { Icon } from "@iconify/react/dist/iconify.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import CustomSelect from "../../../components/inputs/custom-select";
import CustomInputs from "../../../components/inputs/custom-inputs";
import { getAllLeave } from "../../../features/reducer/leave/leaveSlice";
import TableSkeleton from "../../../components/skeleton/TableSkeleton";

const leaveSchema = yup.object().shape({
  inTime: yup.string(),
  outTime: yup.string(),
  date: yup.string().required(),
  attendanceStatus: yup.string().required(),
  attendingEmployeeId: yup.string().required(),
});

const LeaveView = () => {
  const [selectedEmployee, setSelectedEmployee] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { isLoading } = useSelector(getAllLeaveData);

  useEffect(() => {
    dispatch(getAllLeave({ populate: null }));
  }, [dispatch]);

  const {
    control,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(leaveSchema),
    defaultValues: {
      inTime: "00:00:00.000",
      outTime: "00:00:00.000",
      date: "",
      attendanceStatus: "",
      attendingEmployeeId: "",
    },
  });

  const onSubmit = (data) => {
    const modifiedData = {
      ...data,
      inTime: data.inTime ? `${data.inTime}:00.000` : data.inTime,
      outTime: data.outTime ? `${data.outTime}:00.000` : data.outTime,
    };
    console.log(modifiedData);

    reset();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = date.getDate();
    const month = monthNames[date.getMonth()];

    return `${month} ${day}`;
  };

  const handleView = (id) => {
    navigate(`/employee/details/${id}`);
  };

  const handleReload = () => {
    dispatch(getAllLeave({ populate: null }));
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
                    <h4 className="max-sm:mb-2.5 text-xl font-medium">Leave</h4>
                    <div className="flex gap-2">
                      <Link
                        to="/employee/add-employee"
                        className="py-[5px] px-3 cursor-pointer text-[13px] rounded text-white bg-primary leading-[18px] inline-block border border-primary btn-sm duration-500 hover:bg-hover-primary "
                      >
                        + Add New
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

                  {!isLoading ? <LeaveDataTable /> : <TableSkeleton />}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------Modal------------------------- */}

        <div
          className="modal fade fixed top-0 right-0 overflow-y-auto overflow-x-hidden dz-scroll w-full h-full z-[1055] translate-y-[-50px] dz-modal-box model-close"
          id="exampleModal1"
          style={{ display: modalOpen ? "block" : "none" }}
        >
          <div className="modal-dialog modal-dialog-center max-w-[500px] mx-auto my-[1.75rem] w-auto relative pointer-events-none">
            <div className="modal-content mx-[10px] flex flex-col relative rounded-md bg-white dark:bg-[#242424] w-full pointer-events-auto">
              <div className="modal-header flex justify-between items-center flex-wrap py-4 px-[1.875rem] relative z-[2] border-b border-b-color">
                <h1 className="modal-title text-lg">Add Attendance</h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setModalOpen(false)}
                ></button>
              </div>
              {/* <form onSubmit={handleSubmit(onSubmit)}>
                <div className="modal-body relative px-[1.875rem] pb-10">
                  <div className="row mt-4">
                    <CustomSelect
                      label="Select Employee"
                      options={selectedEmployee}
                      control={control}
                      errors={errors}
                      name="attendingEmployeeId"
                      width="full"
                    />
                    <CustomInputs
                      control={control}
                      name="inTime"
                      type="time"
                      value="09:30"
                      label="In Time"
                      errors={errors}
                      width="w-1/2 w-full"
                    />
                    <CustomInputs
                      control={control}
                      name="outTime"
                      type="time"
                      value="06:00"
                      label="Out Time"
                      errors={errors}
                      width="w-1/2 w-full"
                    />
                  </div>

                  <div className="row mt-4">
                    <div className="w-full">
                      <CustomSelect
                        label="Attendence Status"
                        options={[
                          { label: "Present", value: "Present" },
                          { label: "Absent", value: "Absent" },
                          { label: "Part Time", value: "Part Time" },
                        ]}
                        control={control}
                        errors={errors}
                        name="attendanceStatus"
                        width="full"
                      />

                      <CustomInputs
                        control={control}
                        name="date"
                        type="date"
                        label="Date"
                        errors={errors}
                        width="full"
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer flex items-center justify-end flex-wrap py-4 px-[1.875rem] border-t border-b-color">
                  <button
                    type="button"
                    className="close-btn btn xl:py-[0.719rem] py-2.5 xl:px-[1.563rem] px-4 m-1 duration-300 xl:text-[15px] text-[13px] font-medium rounded text-danger bg-danger-light leading-5 inline-block border border-danger-light btn-danger light hover:text-white hover:bg-danger"
                    onClick={() => setModalOpen(false)}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit(onSubmit)}
                    className="save-btn btn btn-primary xl:py-[0.719rem] py-2.5 xl:px-[1.563rem] px-4 m-1 duration-300 xl:text-[15px] text-[13px] font-medium rounded text-white bg-primary leading-5 inline-block border border-primary hover:bg-hover-primary"
                  >
                    Add
                  </button>
                </div>
              </form> */}
            </div>
          </div>
        </div>
        <div
          className="modal-backdrop"
          style={{ display: modalOpen ? "" : "none" }}
        ></div>
        {/* ----------------------Modal Ends------------------------- */}
      </div>
    </>
  );
};

export default LeaveView;

import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AnalyticsCoreHr from "../_sections/analytics";
import {
  addAttendence,
  getAttendence,
} from "../../../features/reducer/core-hr/attendenceSlice";
import CustomSelect from "../../../components/inputs/custom-select";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import CustomInputs from "../../../components/inputs/custom-inputs";
import { getAllEmployees } from "../../../features/reducer/employee/employeeSlice";
import {
  getALlAttendence,
  getAllEmployeeData,
} from "../../../selectors/selectors";
import TableSkeletonLoader from "../../../components/skeleton/Table";
import { Icon } from "@iconify/react/dist/iconify.js";
import AvatarByName from "../../Employees/_components/avatar-by-name";

const attendenceSchema = yup.object().shape({
  inTime: yup.string(),
  outTime: yup.string(),
  date: yup.string().required(),
  attendanceStatus: yup.string().required(),
  attendingEmployeeId: yup.string().required(),
});

const HrView = () => {
  const [selectedEmployee, setSelectedEmployee] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAttendence());
    dispatch(getAllEmployees({ populate: "attendanceInfos" }));
  }, [dispatch]);

  const navigate = useNavigate();

  const { employeeData, isLoading } = useSelector(getAllEmployeeData);

  const { allAttendence } = useSelector(getALlAttendence);

  useEffect(() => {
    setSelectedEmployee(
      employeeData.map((item) => {
        return {
          label: item?.attributes?.firstName + " " + item?.attributes?.lastName,
          value: item?.id,
        };
      })
    );
  }, [employeeData]);

  const {
    control,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(attendenceSchema),
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

    dispatch(addAttendence({ data: modifiedData }));

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

  const maxAttendanceInfosLength = employeeData.reduce((max, employee) => {
    const attendanceInfosLength =
      employee?.attributes?.attendanceInfos?.data?.length || 0;
    return Math.max(max, attendanceInfosLength);
  }, 0);

  const handleView = (id) => {
    navigate(`/employee/details/${id}`);
  };

  console.log(employeeData);
  const handleReload = () => {
    dispatch(getAllEmployees({ populate: null }));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="w-full">
          <div className="row">
            <div className="w-full">
              <AnalyticsCoreHr />
              <div className="card flex flex-col h-auto">
                <div className="card-body p-0">
                  <div className="tbl-caption flex justify-between items-center flex-wrap p-5 relative z-[2]">
                    <h4 className="max-sm:mb-2.5 font-medium text-xl">
                      Attendance
                    </h4>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        className="py-[5px] px-3 text-[13px] rounded text-white bg-primary leading-[18px] inline-block border border-primary btn-sm duration-500 hover:bg-hover-primary dz-modal-btn"
                        onClick={() => setModalOpen(true)}
                      >
                        + Add Attendance
                      </button>
                      <a
                        className="btn btn-secondary flex cursor-pointer items-center gap-2 py-[5px] px-3 text-[13px] rounded text-white bg-secondary  border border-secondary btn-sm "
                        onClick={handleReload}
                      >
                        <Icon icon="uim:process" />
                        Refresh
                      </a>
                    </div>
                  </div>
                  <div className="overflow-x-auto active-projects style-1 attendance-tbl ">
                    <table id="attendance-tbl" className="table w-full">
                      <thead>
                        <tr>
                          <th className="text-[13px] py-2.5 pl-4 pr-0 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left style-1">
                            Employee Name
                          </th>
                          {employeeData[1]?.attributes?.attendanceInfos?.data?.map(
                            (date, dateIndex) => {
                              return (
                                <th
                                  key={dateIndex}
                                  className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1"
                                >
                                  <span className="">
                                    {formatDate(date?.attributes?.date)}
                                  </span>
                                  {/* <p className="text-[10px] text-primary">MO</p> */}
                                </th>
                              );
                            }
                          )}

                          {/* <th className="text-center text-[13px] py-[15px] pr-[5px] pl-[25px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span>Total</span>
                          </th> */}
                        </tr>
                      </thead>
                      {isLoading ? (
                        <TableSkeletonLoader />
                      ) : (
                        <tbody>
                          {employeeData?.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-1.5 px-5 font-normal whitespace-nowrap">
                                  <div className="products flex items-center">
                                    {/* <img
                                      src="assets/images/contacts/pic2.jpg"
                                      className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                      alt=""
                                    /> */}
                                    <AvatarByName
                                      firstname={item?.attributes?.firstName}
                                      lastname={item?.attributes?.lastName}
                                    />
                                    <div>
                                      <h6 className="text-sm">
                                        {item?.attributes?.firstName}{" "}
                                        {item?.attributes?.lastName}
                                      </h6>
                                      <span className="text-xs">
                                        {item?.attributes?.primaryEmail}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                {item?.attributes?.attendanceInfos?.data?.map(
                                  (attendance, indexNew) => {
                                    return (
                                      <>
                                        {attendance?.attributes
                                          ?.attendanceStatus === "Present" ? (
                                          <td
                                            key={indexNew}
                                            className="border-b text-center border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap"
                                          >
                                            <span className="text-success">
                                              <i className="fa-solid fa-check"></i>
                                            </span>
                                          </td>
                                        ) : (
                                          <td
                                            key={index}
                                            className="border-b text-center border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap"
                                          >
                                            <span className="text-danger">
                                              <i className="fa-regular fa-xmark font-black"></i>
                                            </span>
                                          </td>
                                        )}
                                      </>
                                    );
                                  }
                                )}
                                {/* <td className="text-center border-b border-[#E6E6E6] dark:border-[#444444] py-[15px] pr-[7px] pl-[25px]">
                                <span className="text-body-color dark:text-white text-[13px]">
                                  28/31
                                </span>
                              </td> */}
                              </tr>
                            );
                          })}
                        </tbody>
                      )}
                    </table>
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
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                    </form>
                  </div>
                </div>
              </div>
              <div
                className="modal-backdrop"
                style={{ display: modalOpen ? "" : "none" }}
              ></div>
              {/* ----------------------Modal Ends------------------------- */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HrView;

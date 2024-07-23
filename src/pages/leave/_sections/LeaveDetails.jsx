/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getSingleLeave,
  getYearlySingleLeave,
} from "../../../features/reducer/leave/leaveSlice";
import ReactApexChart from "react-apexcharts";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import CustomInputs from "../../../components/inputs/custom-inputs";
import CustomTextArea from "../../../components/inputs/custom-textarea";
import { useSelector } from "react-redux";
import { getSingleLeaveData } from "../../../selectors/selectors";
import { findGap, formatDate } from "../../../const/format-date";

const LeaveDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { leaveDetail, yearlyLeaveDetail } = useSelector(getSingleLeaveData);

  useEffect(() => {
    dispatch(getSingleLeave(id));
  }, [dispatch, id]);

  useEffect(() => {
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!!leaveDetail?.attributes?.applyingEmployee?.data?.id) {
      dispatch(
        getYearlySingleLeave(
          leaveDetail?.attributes?.applyingEmployee?.data?.id
        )
      );
    }
  }, [dispatch, leaveDetail?.attributes?.applyingEmployee?.data?.id]);

  const [sickLeaveseries] = useState([44, 20, 35]);

  const [annualLeaveseries] = useState([44, 20, 55]);

  const [options] = useState({
    chart: {
      type: "donut",
    },
    labels: ["Taken", "Available", "Total"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  const leaveSchema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().required(),
    lineManager: yup.string().required(),
    startDate: yup.string().required(),
    endDate: yup.string().required(),
    message: yup.string().email().required(),
  });

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(leaveSchema),
    defaultValues: {
      fullName:
        leaveDetail?.attributes?.applyingEmployee?.data?.attributes?.firstName +
          " " +
          leaveDetail?.attributes?.applyingEmployee?.data?.attributes
            ?.firstName ?? "N/A",
      email:
        leaveDetail?.attributes?.applyingEmployee?.data?.attributes
          ?.primaryEmail ?? "N/A  ",
      lineManager:
        leaveDetail?.attributes?.approvingLineManager?.data?.attributes
          ?.firstName +
          " " +
          leaveDetail?.attributes?.approvingLineManager?.data?.attributes
            ?.lastName ?? "N/A",
      startDate: formatDate(leaveDetail?.attributes?.leaveStartDay) ?? "N/A",
      endDate: formatDate(leaveDetail?.attributes?.leaveEndDay) ?? "N/A",
      message: leaveDetail?.attributes?.leaveDescriptionMessage ?? "N/A",
    },
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="w-full">
          <div className="profile card card-body p-4 pb-0">
            <div className="profile-head">
              <div className="photo-content relative">
                {/* <div className="cover-photo rounded"></div> */}
              </div>
              <div className="sm:flex block sm:py-[0.9375rem] sm:px-5 max-sm:pb-5">
                <div className="profile-photo mt-[-10px] sm:w-[6.65rem] w-[5rem] relative sm:mr-2.5 max-sm:mb-[1.25rem] max-sm:mx-auto  z-[1]">
                  {leaveDetail?.attributes?.applyingEmployee?.data?.attributes
                    ?.profileImage?.data?.url ? (
                    <img
                      src={
                        leaveDetail?.attributes?.applyingEmployee?.data
                          ?.attributes?.profileImage?.data?.url
                      }
                      className="max-w-full h-auto rounded-full"
                      alt="Logo Image"
                    />
                  ) : (
                    <img
                      src="/assets/logo/default-user.png"
                      className="max-w-full h-auto rounded-full bg-gray-100 p-3"
                      alt="Logo Image"
                    />
                  )}
                </div>
                <div className="sm:flex block w-full max-sm:text-center">
                  <div className="profile-name px-4 pt-2">
                    <h4 className="text-primary text-lg">
                      {
                        leaveDetail?.attributes?.applyingEmployee?.data
                          ?.attributes?.firstName
                      }{" "}
                      {
                        leaveDetail?.attributes?.applyingEmployee?.data
                          ?.attributes?.lastName
                      }
                    </h4>
                    <p className="mb-4">
                      {formatDate(
                        leaveDetail?.attributes?.applyingEmployee?.data
                          ?.attributes?.createdAt
                      )}
                    </p>
                  </div>
                  {/* <div className="profile-email px-2 pt-2">
                    <h4 className="text-[#464a53] text-lg">hello@email.com</h4>
                    <p className="mb-4">Email</p>
                  </div> */}
                  <div className="dropdown ml-auto max-sm:absolute max-sm:top-[1.875rem] max-sm:right-[1.875rem]">
                    <a
                      className="p-[0.4375rem] w-[2.4rem] h-[2.4rem] bg-primary-light text-primary rounded-md flex justify-center items-center dz-dropdown duration-500 hover:bg-primary btn-primary light"
                      data-dz-dropdown="DzProfileDropdown"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24"></rect>
                          <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                          <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                          <circle fill="#000000" cx="19" cy="12" r="2"></circle>
                        </g>
                      </svg>
                    </a>
                    <ul
                      id="DzProfileDropdown"
                      className="dz-dropdown-menu dropdown-menu-end absolute translate-x-[-195px] translate-y-[18px] overflow-hidden rounded-md z-[9] bg-white dark:bg-[#242424] shadow-[0_0_3.125rem_0_rgba(82,63,105,0.15)] min-w-[13rem] text-left hidden"
                    >
                      <li className="dropdown-item py-2 px-[1.25rem] block w-full text-body-color text-[13px] hover:bg-[#f8f9fa] hover:text-primary dark:hover:bg-transparent dark:hover:text-white">
                        <i className="fa fa-user-circle text-primary mr-2"></i>{" "}
                        View profile
                      </li>
                      <li className="dropdown-item py-2 px-[1.25rem] block w-full text-body-color text-[13px] hover:bg-[#f8f9fa] hover:text-primary dark:hover:bg-transparent dark:hover:text-white">
                        <i className="fa fa-users text-primary mr-2"></i> Add to
                        close friends
                      </li>
                      <li className="dropdown-item py-2 px-[1.25rem] block w-full text-body-color text-[13px] hover:bg-[#f8f9fa] hover:text-primary dark:hover:bg-transparent dark:hover:text-white">
                        <i className="fa fa-plus text-primary mr-2"></i> Add to
                        group
                      </li>
                      <li className="dropdown-item py-2 px-[1.25rem] block w-full text-body-color text-[13px] hover:bg-[#f8f9fa] hover:text-primary dark:hover:bg-transparent dark:hover:text-white">
                        <i className="fa fa-ban text-primary mr-2"></i> Block
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="xl:w-[70%] lg:w-2/3">
          <div className="card flex flex-col max-sm:mb-[30px] profile-card">
            {/* <div className="card-header flex justify-between items-center flex-wrap sm:p-[30px] p-5 relative z-[2] border-b border-b-color">
              <h6 className="text-[15px] font-medium text-dark title relative">
                Account setup
              </h6>
            </div> */}
            <form className="profile-form">
              <div className="sm:p-10 sm:pb-2.5 p-[25px] pb-0">
                <div className="row">
                  <div className="sm:w-1/2 w-full mb-[5px]">
                    <CustomInputs
                      control={control}
                      name="fullName"
                      type="text"
                      label="Full Name"
                      errors={errors}
                      width="w-full"
                      disabled
                    />
                  </div>
                  <div className="sm:w-1/2 w-full mb-[5px]">
                    <CustomInputs
                      control={control}
                      name="email"
                      type="text"
                      label="Email"
                      errors={errors}
                      width="w-full"
                      disabled
                    />
                  </div>
                  <div className="sm:w-1/2 w-full mb-[5px]">
                    <CustomInputs
                      control={control}
                      name="lineManager"
                      type="text"
                      label="Line Manager"
                      errors={errors}
                      width="w-full"
                      disabled
                    />
                  </div>
                  <div className="sm:w-1/2 w-full mb-[5px]">
                    <CustomInputs
                      control={control}
                      name="startDate"
                      type="text"
                      label="Start Date"
                      errors={errors}
                      width="w-full"
                      disabled
                    />
                  </div>
                  <div className="sm:w-1/2 w-full mb-[5px]">
                    <CustomInputs
                      control={control}
                      name="endDate"
                      type="text"
                      label="End Date"
                      errors={errors}
                      width="w-full"
                      disabled
                    />
                  </div>
                  <div className="sm:w-1/2 w-full mb-[5px]">
                    <label className="text-body-color form-label">
                      Number of Days
                    </label>
                    <input
                      type="text"
                      disabled
                      className="form-control relative text-[13px] text-body-color h-[2.813rem] border border-b-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full hover:border-primary"
                      value={findGap(
                        leaveDetail?.attributes?.leaveStartDay,
                        leaveDetail?.attributes?.leaveEndDay
                      )}
                    />
                  </div>
                  <div className="sm:w-full w-full mb-[5px]">
                    <CustomTextArea
                      name="message"
                      control={control}
                      label="Description"
                      errors={errors}
                      width="w-full"
                      // disabled
                    />
                  </div>
                </div>
              </div>
              <div className="sm:py-5 sm:px-10 p-[25px] flex items-center justify-between border-t border-b-color">
                <button className="btn btn-primary sm:py-[0.719rem] py-2.5 sm:px-[1.563rem] px-4 sm:text-[15px] text-[13px] font-medium rounded text-white bg-primary leading-5 inline-block border border-primary duration-500 hover:bg-hover-primary">
                  UPDATE
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="xl:w-[30%] lg:w-1/3 w-full">
          <div className="clearfix">
            <div className="card text-center flex flex-col max-sm:mb-[30px]">
              <div className="card-body">
                <div className="p-5">
                  <h2 className="mb-5 text-xl font-medium">Annual Leave</h2>
                  <div id="chart">
                    <ReactApexChart
                      options={options}
                      series={sickLeaveseries}
                      type="donut"
                    />
                  </div>
                  <div id="html-dist"></div>
                </div>
              </div>
              <div className="card-footer  block border-t border-b-color">
                <div className="p-5">
                  <h2 className="mb-5 text-xl font-medium">Sick Leave</h2>
                  <div id="chart">
                    <ReactApexChart
                      options={options}
                      series={annualLeaveseries}
                      type="donut"
                    />
                  </div>
                  <div id="html-dist"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveDetails;

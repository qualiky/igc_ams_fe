import Breadcumb from "../../components/Breadcumb";

// import "../../../public/assets/vendor/apexchart/apexchart.min.js";
import HomeAnalytics from "./_sections/HomeAnalytics.jsx";
import { useSelector } from "react-redux";
import {
  getAllClientList,
  getAllEmployeeData,
} from "../../selectors/selectors.js";
import { base_img_url } from "../../utils/base_img_url.js";
import AvatarCoreHr from "../core-hr/_components/AvatarCoreHr.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAllHomeData } from "../../features/reducer/home/homeSlice.js";
import { useDispatch } from "react-redux";
import { getAllClient } from "../../features/reducer/client/clientSlice.js";
import { paths } from "../../routes/path.js";
import TableSkeleton from "../../components/skeleton/TableSkeleton.jsx";
import AvatarByNameRect from "../../components/AvatarByNameRect.jsx";
import { formatDate } from "../../const/format-date.js";

const Home = () => {
  const { employeeData } = useSelector(getAllEmployeeData);

  const dispatch = useDispatch();

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    dispatch(getAllHomeData());
    dispatch(getAllClient());

    window.scrollTo(0, 0);
  }, [dispatch]);

  const navigate = useNavigate();

  const { allClient, isLoading } = useSelector(getAllClientList);

  const handleNavigateToDetail = (id) => {
    navigate(paths.dashboard.clients.details(id));
  };
  return (
    <>
      <div className="content-body">
        {/* row 	 */}
        <Breadcumb title="Dashboard" subtitle="Home" />
        <div className="container-fluid">
          <div className="row">
            <HomeAnalytics />

            <div className="2xl:w-1/2 w-full active-p">
              <div className="card">
                <div className="card-body p-0">
                  <div className="overflow-x-auto active-projects">
                    <div className="p-5">
                      <h4 className="heading">Manage Client</h4>
                    </div>
                    {isLoading ? (
                      <TableSkeleton />
                    ) : (
                      <table id="reports-tbl" className="table w-full">
                        <thead>
                          <tr>
                            <th className="text-[13px] py-2.5 pl-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                              Full Name
                            </th>
                            <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                              Company Info
                            </th>
                            <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                              Company Contact
                            </th>

                            <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                              Location
                            </th>
                            <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-right">
                              Joined Date
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {allClient?.map((item, index) => (
                            <tr
                              key={index}
                              onClick={() => handleNavigateToDetail(1)}
                              className="cursor-pointer hover:bg-primary-light"
                            >
                              <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap">
                                <div className="flex items-center">
                                  {/* <AvatarByNameRect
                                    name={
                                      item?.attributes?.clientContactPersonName
                                    }
                                  /> */}
                                  <img
                                    src={
                                      base_img_url +
                                      item?.attributes?.logo?.data?.attributes
                                        ?.url
                                    }
                                    className="w-[2.25rem] h-[2.25rem] inline-block mr-2.5 relative object-cover rounded-full"
                                  />
                                  <div>
                                    <h6 className="text-sm">
                                      {
                                        item?.attributes
                                          ?.clientContactPersonName
                                      }
                                    </h6>
                                    <span className="text-body-color dark:text-white text-xs block">
                                      {
                                        item?.attributes
                                          ?.clientContactPersonEmail
                                      }
                                    </span>
                                    <span className="text-body-color dark:text-white text-xs">
                                      {
                                        item?.attributes
                                          ?.clientContactPersonNumber
                                      }
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap">
                                <div>
                                  <h6 className="text-sm">
                                    {item?.attributes?.companyName}
                                  </h6>
                                  <span className="text-body-color text-xs text-primary underline">
                                    {item?.attributes?.clientEmail}
                                  </span>
                                </div>
                              </td>
                              <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap">
                                <span className="text-body-color dark:text-white">
                                  {item?.attributes?.clientContactNumber}
                                </span>
                              </td>
                              <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap">
                                <span className="text-body-color dark:text-white">
                                  {item?.attributes?.clientAddress}
                                </span>
                              </td>
                              <td className="border-b text-end border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap">
                                <span className="text-body-color dark:text-white">
                                  {formatDate(item?.attributes?.createdAt)}
                                </span>
                              </td>
                              {/* <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap text-right">
                          <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-success bg-success-light">
                            Active
                          </span>
                        </td> */}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="2xl:w-1/4 md:w-1/2 w-full up-shd">
              <div className="card flex flex-col">
                <div className="card-header flex justify-between px-5 pt-6 relative z-[2] pb-1">
                  <h4 className="heading">Upcoming Schedules</h4>
                </div>
                <div className="card-body schedules-cal p-2">
                  <input
                    type="text"
                    className="form-control hidden"
                    id="datetimepicker1"
                  />
                  <div className="calendar-container"></div>
                  <div className="events">
                    <h6 className="text-sm uppercase border-t border-[#E6E6E6] dark:border-transparent text-primary px-5 py-[9px]">
                      events
                    </h6>
                    <div className="event-scroll overflow-x-hidden overflow-y-auto relative h-[140px] px-5">
                      <div className="event-media flex items-center justify-between py-2.5 border-b border-[#E6E6E6] dark:border-transparent">
                        <div className="flex items-center">
                          <div className="event-box bg-primary-light h-[55px] w-[55px] py-1 text-center rounded-md leading-[9px]">
                            <h5 className="text-xl font-semibold text-primary">
                              27
                            </h5>
                            <span className="text-body-color dark:text-white text-[13px]">
                              Mon
                            </span>
                          </div>
                          <div className="event-data ml-2">
                            <h5 className="mb-0">
                              <a>Sales Training</a>
                            </h5>
                            <span className="text-body-color text-[13px]">
                              August 27, 2024
                            </span>
                          </div>
                        </div>
                        <span className="text-secondary dark:text-white text-sm">
                          12:05 PM
                        </span>
                      </div>
                      <div className="event-media flex items-center justify-between py-2.5 border-b border-[#E6E6E6] dark:border-transparent">
                        <div className="flex items-center">
                          <div className="event-box bg-primary-light h-[55px] w-[55px] py-1 text-center rounded-md leading-[9px]">
                            <h5 className="text-xl font-semibold text-primary">
                              20
                            </h5>
                            <span className="text-body-color dark:text-white text-[13px]">
                              Mon
                            </span>
                          </div>
                          <div className="event-data ml-2">
                            <h5 className="text-[15px]">
                              <a>Team Dinner</a>
                            </h5>
                            <span className="text-body-color text-[13px]">
                              July 30, 2024
                            </span>
                          </div>
                        </div>
                        <span className="text-secondary dark:text-white text-sm">
                          12:05 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="2xl:w-1/4 md:w-1/2 up-shd">
              <div className="card flex flex-col">
                <div className="card-header flex justify-between px-5 pt-6 relative z-[2]">
                  <h4 className="heading">Projects Status</h4>
                  <select className="nice-select text-primary px-2.5 bg-transparent border-0 text-[13px] font-medium-normal outline-none relative focus:ring-0">
                    <option value="Today">Today</option>
                    <option value="Week">Week</option>
                    <option value="Month">Month</option>
                  </select>
                </div>
                <div className="card-body p-5">
                  <div
                    id="projectChart"
                    className="project-chart flex justify-center"
                  ></div>
                  <div className="project-date">
                    <div className="project-media flex items-center justify-between py-2.5">
                      <p className="text-secondary dark:text-body-color leading-[1.8]">
                        <svg
                          className="mr-2 inline-block"
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.5"
                            width="12"
                            height="12"
                            rx="3"
                            fill="var(--primary)"
                          />
                        </svg>
                        Completed Projects
                      </p>
                      <span className="text-body-color text-[13px]">
                        1 Projects
                      </span>
                    </div>
                    <div className="project-media flex items-center justify-between py-2.5">
                      <p className="text-secondary dark:text-body-color leading-[1.8]">
                        <svg
                          className="mr-2 inline-block"
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.5"
                            width="12"
                            height="12"
                            rx="3"
                            fill="#3AC977"
                          />
                        </svg>
                        Progress Projects
                      </p>
                      <span className="text-body-color text-[13px]">
                        1 Projects
                      </span>
                    </div>
                    <div className="project-media flex items-center justify-between py-2.5">
                      <p className="text-secondary dark:text-body-color leading-[1.8]">
                        <svg
                          className="mr-2 inline-block"
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.5"
                            width="12"
                            height="12"
                            rx="3"
                            fill="#FF5E5E"
                          />
                        </svg>
                        Cancelled
                      </p>
                      <span className="text-body-color text-[13px]">
                        1 Projects
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="2xl:w-3/4 w-full bst-seller">
              <div className="card flex flex-col">
                <div className="card-body">
                  <div className="overflow-x-auto active-projects style-1 ItemsCheckboxSec shorting ">
                    <div className="tbl-caption flex justify-between items-center flex-wrap p-5 relative z-[2]">
                      <h4 className="max-sm:mb-2.5">Employees</h4>
                      <div className="flex gap-3">
                        <Link
                          className="py-[5px] px-3 text-[13px] rounded text-white bg-primary leading-[18px] inline-block border border-primary btn-sm duration-500 hover:bg-hover-primary offcanvas-toggle"
                          // data-dz-offcanvas="offcanvasExample2"
                          to="/employee/add-employee"
                        >
                          + Add Employee
                        </Link>
                        <Link
                          type="button"
                          to="/employee"
                          className="btn btn-secondary py-[5px] px-3 text-[13px] rounded text-white bg-secondary leading-[18px] inline-block border border-secondary dz-modal-btn"
                          data-dz-modal="Employeemodal"
                        >
                          View All
                        </Link>
                      </div>
                    </div>
                    <table id="empoloyees-tbl" className="table w-full">
                      <thead>
                        <tr>
                          <th className="text-[13px] py-2.5 pl-4 pr-0 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <div className="form-check custom-checkbox ms-0">
                              <input
                                type="checkbox"
                                className="form-check-input checkAll ml-0"
                                id="checkAll2"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="checkAll2"
                              ></label>
                            </div>
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                            Employee ID
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                            Employee Name
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                            Email Address
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                            Contact Number
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                            Gender
                          </th>

                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-right">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {employeeData?.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap">
                                <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="customCheckBox0100"
                                    required=""
                                  />
                                  <label
                                    className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                    htmlFor="customCheckBox0100"
                                  ></label>
                                </div>
                              </td>
                              <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                                <span className="text-body-color dark:text-white text-[13px]">
                                  000{item?.id}
                                </span>
                              </td>
                              <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                                <div className="products flex items-center">
                                  {item?.attributes?.profileImage?.data
                                    ?.attributes?.url ? (
                                    <img
                                      src={
                                        base_img_url +
                                        item?.attributes?.profileImage?.data
                                          ?.attributes?.url
                                      }
                                      className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                      alt=""
                                    />
                                  ) : (
                                    <AvatarCoreHr
                                      firstname={item?.attributes?.firstName}
                                      lastname={item?.attributes?.lastName}
                                    />
                                  )}

                                  <div>
                                    <h6 className="text-sm whitespace-nowrap">
                                      <a>
                                        {item?.attributes?.firstName}{" "}
                                        {item?.attributes?.lastName}
                                      </a>
                                    </h6>
                                    <span className="text-body-color dark:text-white text-[13px]">
                                      {item?.attributes?.userName}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                                <a className="text-primary dark:text-white">
                                  {item?.attributes?.primaryEmail || "N/A"}
                                </a>
                              </td>

                              <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                                <span className="text-body-color dark:text-white text-[13px]">
                                  {item?.attributes?.gender || "N/A"}
                                </span>
                              </td>
                              <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                                <span className="text-body-color dark:text-white text-[13px]">
                                  N/A
                                </span>
                              </td>
                              <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-5 font-normal text-right whitespace-nowrap">
                                <span
                                  className={`text-xs py-[5px] px-3 rounded font-medium leading-[1.5]  ${
                                    index % 3 !== 0
                                      ? "bg-success-light text-success"
                                      : " bg-danger-light text-danger"
                                  }`}
                                >
                                  {index % 3 !== 0 ? "Active" : "In active"}
                                </span>
                              </td>
                            </tr>
                          );
                        })}

                        {/* <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap">
                            <div className="form-check custom-checkbox block min-h-[1.3125rem] mb-0.5 text-sm pl-[1.5em] font-semibold">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="customCheckBox104"
                                required=""
                              />
                              <label
                                className="form-check-label ml-[0.3125rem] text-sm text-secondary dark:text-white mt-[0.1875rem] font-normal"
                                htmlFor="customCheckBox104"
                              ></label>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              1001
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic2.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm whitespace-nowrap">
                                  <a>Ricky Antony</a>
                                </h6>
                                <span className="text-body-color dark:text-white text-[13px]">
                                  Web Designer
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <a className="text-primary dark:text-white">
                              abc@gmail.com
                            </a>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              +91 123 456 7890
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              Male
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              USA
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-5 font-normal text-right whitespace-nowrap">
                            <span className="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-danger bg-danger-light">
                              Pending
                            </span>
                          </td>
                        </tr> */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployees } from "../../../features/reducer/employee/employeeSlice";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllEmployeeData } from "../../../selectors/selectors";
import { base_img_url } from "../../../utils/base_img_url";
import AvatarCoreHr from "../_components/AvatarCoreHr";
import AnalyticsCoreHr from "../_sections/analytics";
import { getAttendence } from "../../../features/reducer/core-hr/attendenceSlice";

const attendenceSchema = yup.object().shape({
  inTime: yup.string().required(),
  outTime: yup.string().required(),
  date: yup.string().required(),
  attendanceStatus: yup.string().required(),
  didArriveLate: yup.string().required(),
  didArriveEarly: yup.string().required(),
  employee: yup.string(),
});

const HrView = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  const { employeeData } = useSelector(getAllEmployeeData);

  useEffect(() => {
    dispatch(getAttendence());
  }, [dispatch]);

  const navigate = useNavigate();
  const handleView = (id) => {
    navigate(`/employee/details/${id}`);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="w-full">
          <div className="row">
            <div className="w-full">
              <AnalyticsCoreHr />
              <div className="card flex flex-col">
                <div className="card-body p-0">
                  <div className="overflow-x-auto active-projects style-1 attendance-tbl ">
                    <div className="tbl-caption flex justify-between items-center flex-wrap p-5 relative z-[2]">
                      <h4 className="max-sm:mb-2.5">Attendance</h4>
                      <div>
                        {/* <!-- Button trigger modal --> */}
                        <button
                          type="button"
                          className="py-[5px] px-3 text-[13px] rounded text-white bg-primary leading-[18px] inline-block border border-primary btn-sm duration-500 hover:bg-hover-primary dz-modal-btn"
                          onClick={() => setModalOpen(true)}
                        >
                          + Mark Attendance
                        </button>
                      </div>
                    </div>
                    <table id="attendance-tbl" className="table w-full">
                      <thead>
                        <tr>
                          <th className="text-[13px] py-2.5 pl-4 pr-0 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left style-1">
                            Employee Name
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">1</span>
                            <p className="text-[10px] text-primary">MO</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">2</span>
                            <p className="text-[10px] text-primary">Tu</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">3</span>
                            <p className="text-[10px] text-primary">We</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">4</span>
                            <p className="text-[10px] text-primary">Th</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">5</span>
                            <p className="text-[10px] text-primary">Fr</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">6</span>
                            <p className="text-[10px] text-primary">Sa</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">7</span>
                            <p className="text-[10px] text-primary">MO</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">8</span>
                            <p className="text-[10px] text-primary">Tu</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">9</span>
                            <p className="text-[10px] text-primary">We</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">10</span>
                            <p className="text-[10px] text-primary">Th</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">11</span>
                            <p className="text-[10px] text-primary">Fr</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">12</span>
                            <p className="text-[10px] text-primary">Sa</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">13</span>
                            <p className="text-[10px] text-primary">MO</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">14</span>
                            <p className="text-[10px] text-primary">Tu</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">15</span>
                            <p className="text-[10px] text-primary">We</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">16</span>
                            <p className="text-[10px] text-primary">Th</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">17</span>
                            <p className="text-[10px] text-primary">Fr</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">18</span>
                            <p className="text-[10px] text-primary">Sa</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">19</span>
                            <p className="text-[10px] text-primary">MO</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">20</span>
                            <p className="text-[10px] text-primary">Tu</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">21</span>
                            <p className="text-[10px] text-primary">We</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">22</span>
                            <p className="text-[10px] text-primary">Th</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">23</span>
                            <p className="text-[10px] text-primary">Fr</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">24</span>
                            <p className="text-[10px] text-primary">Sa</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">25</span>
                            <p className="text-[10px] text-primary">MO</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">26</span>
                            <p className="text-[10px] text-primary">Tu</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">27</span>
                            <p className="text-[10px] text-primary">We</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">28</span>
                            <p className="text-[10px] text-primary">Th</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">29</span>
                            <p className="text-[10px] text-primary">Fr</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">30</span>
                            <p className="text-[10px] text-primary">Sa</p>
                          </th>
                          <th className="text-[13px] py-[15px] px-[5px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span className="">31</span>
                            <p className="text-[10px] text-primary">MO</p>
                          </th>
                          <th className="text-center text-[13px] py-[15px] pr-[5px] pl-[25px] bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap style-1">
                            <span>Total</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 20 }, (_, index) => (
                          <tr key={index}>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-1.5 px-5 font-normal whitespace-nowrap">
                              <div className="products flex items-center">
                                <img
                                  src="assets/images/contacts/pic2.jpg"
                                  className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                  alt=""
                                />
                                <div>
                                  <h6 className="text-sm">Moni Antony</h6>
                                  <span className="text-xs">Web Designer</span>
                                </div>
                              </div>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-danger">
                                <i className="fa-regular fa-xmark font-black"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-danger">
                                <i className="fa-regular fa-xmark font-black"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-danger">
                                <i className="fa-regular fa-xmark font-black"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-danger">
                                <i className="fa-regular fa-xmark font-black"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-danger">
                                <i className="fa-regular fa-xmark font-black"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[15px] px-[7px] font-normal whitespace-nowrap">
                              <span className="text-success">
                                <i className="fa-solid fa-check"></i>
                              </span>
                            </td>
                            <td className="text-center border-b border-[#E6E6E6] dark:border-[#444444] py-[15px] pr-[7px] pl-[25px]">
                              <span className="text-body-color dark:text-white text-[13px]">
                                28/31
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
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
                    <div className="modal-body relative p-[1.875rem]">
                      <div className="row">
                        <div className="xl:w-1/2 w-full">
                          <label className="text-body-color mt-4">
                            In Time<span className="text-danger">*</span>
                          </label>
                          <div className="flex items-stretch flex-wrap relative w-full">
                            <input
                              type="time"
                              className="w-full relative bg-transparent text-[13px] h-[2.813rem] border border-b-color text-body-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none"
                              value="09:30"
                            />
                          </div>
                        </div>
                        <div className="xl:w-1/2 w-full">
                          <label className="text-body-color mt-4">
                            Out Time<span className="text-danger">*</span>
                          </label>
                          <div className="flex items-stretch flex-wrap relative w-full">
                            <input
                              type="time"
                              className="w-full relative bg-transparent text-[13px] h-[2.813rem] border border-b-color text-body-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none"
                              value="09:30"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="w-full">
                          <label className="text-body-color dark:text-white">
                            Employee<span className="text-danger">*</span>
                          </label>

                          <div
                            className="nice-select style-1 py-1.5 px-3 bg-transparent text-[13px] font-normal outline-none relative focus:ring-0 border border-b-color text-[#a5a5a5] h-[2.813rem] leading-[1.813rem]"
                            tabIndex="0"
                          >
                            <span className="current">Select</span>
                            <ul className="list">
                              <li
                                data-value="Please select"
                                data-display="Select"
                                className="option selected"
                              >
                                Please select
                              </li>
                              <li data-value="html" className="option">
                                Julia Koch
                              </li>
                              <li data-value="css" className="option">
                                Gina Reinhart
                              </li>
                              <li data-value="javascript" className="option">
                                Yang Huiyan
                              </li>
                            </ul>
                          </div>
                          <label className="text-body-color mt-4">
                            Attendance Date
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control relative text-[13px] text-body-color h-[2.813rem] border border-b-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full"
                            type="date"
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
                        className="save-btn btn btn-primary xl:py-[0.719rem] py-2.5 xl:px-[1.563rem] px-4 m-1 duration-300 xl:text-[15px] text-[13px] font-medium rounded text-white bg-primary leading-5 inline-block border border-primary hover:bg-hover-primary"
                      >
                        Save changes
                      </button>
                    </div>
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

import { useDispatch, useSelector } from "react-redux";
import { getAllEmployees } from "../../../features/reducer/employee/employeeSlice";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllEmployeeData } from "../../../selectors/selectors";
import { base_img_url } from "../../../utils/base_img_url";
import RectAvatarByName from "../../Employees/_components/rect-avatar-by-name";
import AvatarByName from "../../Employees/_components/avatar-by-name";
import AvatarCoreHr from "../_components/AvatarCoreHr";

const HrView = () => {
  const dispatch = useDispatch();

  const { employeeData } = useSelector(getAllEmployeeData);

  console.log(employeeData);
  useEffect(() => {
    dispatch(getAllEmployees());
  }, [dispatch]);

  const navigate = useNavigate();
  const handleView = (id) => {
    navigate(`/employee/details/${id}`);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="xl:w-9/12 col-xxl-8">
          <div className="row">
            <div className="w-full">
              <div className="card flex flex-col">
                <div className="card-body p-0">
                  <div className="tbl-caption flex justify-between items-center flex-wrap p-5 relative z-[2]">
                    <h4 className="max-sm:mb-2.5 font-bold text-xl">
                      Employees
                    </h4>
                    <div className="flex gap-2">
                      <Link
                        to="/employee/add-employee"
                        className="py-[5px] px-3 cursor-pointer text-[13px] rounded text-white bg-primary leading-[18px] inline-block border border-primary btn-sm duration-500 hover:bg-hover-primary "
                      >
                        + Add Employee
                      </Link>
                    </div>
                  </div>
                  <div className="overflow-x-auto active-projects style-1">
                    <table id="empoloyees-tbl" className="table">
                      <thead>
                        <tr>
                          <th className="text-[13px] py-2.5 pl-4 pr-0 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left">
                            ID
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left sorting">
                            Employee Name
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left sorting">
                            Email Address
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left sorting">
                            DOB
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left sorting">
                            Gender
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left sorting">
                            Location
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-right sorting">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {employeeData?.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap">
                                <span className="text-body-color dark:text-white text-[13px]">
                                  {item?.id}
                                </span>
                              </td>
                              <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                                <div className="products flex items-center">
                                  {item?.attributes?.profileImage?.data !=
                                  null ? (
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
                                    <h6 className="text-sm whitespace-nowrap hover:font-bold cursor-pointer">
                                      {item?.attributes?.firstName}{" "}
                                      {item?.attributes?.lastName}
                                    </h6>
                                    <span className="text-body-color dark:text-white text-xs">
                                      {item?.attributes?.userName}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                                <span className="text-[13px] text-primary">
                                  {item?.attributes?.primaryEmail || "-"}
                                </span>
                              </td>
                              <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                                <span className="text-body-color dark:text-white text-[13px]">
                                  {item?.attributes?.dateOfBirth || "-"}
                                </span>
                              </td>
                              <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                                <span className="text-body-color dark:text-white text-[13px]">
                                  {item?.attributes?.gender || "-"}
                                </span>
                              </td>
                              <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
                                <span className="text-body-color dark:text-white text-[13px]">
                                  Delhi
                                </span>
                              </td>
                              <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap text-right">
                                <span
                                  onClick={() => handleView(item?.id)}
                                  className="text-xs py-[5px] px-3 rounded font-medium text-success bg-[#56f080]-light hover:bg-[#bae3c1] hover:text-black cursor-pointer"
                                >
                                  Active
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="card flex flex-col">
                <div className="card-body p-0">
                  <div className="overflow-x-auto active-projects style-1 attendance-tbl">
                    <div className="tbl-caption flex justify-between items-center flex-wrap p-5 relative z-[2]">
                      <h4 className="max-sm:mb-2.5">Attendance</h4>
                      <div>
                        {/* <!-- Button trigger modal --> */}
                        <button
                          type="button"
                          className="py-[5px] px-3 text-[13px] rounded text-white bg-primary leading-[18px] inline-block border border-primary btn-sm duration-500 hover:bg-hover-primary dz-modal-btn"
                          data-dz-modal="exampleModal1"
                        >
                          + Mark Attendance
                        </button>
                      </div>
                    </div>
                    <table id="attendance-tbl" className="table">
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
                        <tr>
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
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-1.5 px-5 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm">Joney Antony</h6>
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
                            <span className="text-danger">
                              <i className="fa-regular fa-xmark font-black"></i>
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
                          <td className="text-center border-b border-[#E6E6E6] dark:border-[#444444] py-[15px] pr-[7px] pl-[25px]">
                            <span className="text-body-color dark:text-white text-[13px]">
                              28/31
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-1.5 px-5 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic3.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm">Peter Oliver</h6>
                                <span className="text-xs">Web Designer</span>
                              </div>
                            </div>
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
                            <span className="text-danger">
                              <i className="fa-regular fa-xmark font-black"></i>
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
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-1.5 px-5 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic2.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm">Ricky Antony</h6>
                                <span className="text-xs">Web Designer</span>
                              </div>
                            </div>
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
                            <span className="text-danger">
                              <i className="fa-regular fa-xmark font-black"></i>
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
                            <span className="text-danger">
                              <i className="fa-regular fa-xmark font-black"></i>
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
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-1.5 px-5 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic2.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm">Elijah James</h6>
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
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-1.5 px-5 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm">Ricky Antony</h6>
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
                            <span className="text-danger">
                              <i className="fa-regular fa-xmark font-black"></i>
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
                          <td className="text-center border-b border-[#E6E6E6] dark:border-[#444444] py-[15px] pr-[7px] pl-[25px]">
                            <span className="text-body-color dark:text-white text-[13px]">
                              28/31
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-1.5 px-5 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic3.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm">Ricky James</h6>
                                <span className="text-xs">Web Designer</span>
                              </div>
                            </div>
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
                            <span className="text-danger">
                              <i className="fa-regular fa-xmark font-black"></i>
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
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-1.5 px-5 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic2.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm">Ricky Antony</h6>
                                <span className="text-xs">Web Designer</span>
                              </div>
                            </div>
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
                            <span className="text-danger">
                              <i className="fa-regular fa-xmark font-black"></i>
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
                            <span className="text-danger">
                              <i className="fa-regular fa-xmark font-black"></i>
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
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-1.5 px-5 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic1.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm">Ricky Antony</h6>
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
                            <span className="text-danger">
                              <i className="fa-regular fa-xmark font-black"></i>
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
                          <td className="text-center border-b border-[#E6E6E6] dark:border-[#444444] py-[15px] pr-[7px] pl-[25px]">
                            <span className="text-body-color dark:text-white text-[13px]">
                              28/31
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-1.5 px-5 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic3.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm">James Antony</h6>
                                <span className="text-xs">Web Designer</span>
                              </div>
                            </div>
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
                            <span className="text-danger">
                              <i className="fa-regular fa-xmark font-black"></i>
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
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-1.5 px-5 font-normal whitespace-nowrap">
                            <div className="products flex items-center">
                              <img
                                src="assets/images/contacts/pic2.jpg"
                                className="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
                                alt=""
                              />
                              <div>
                                <h6 className="text-sm">Ricky Antony</h6>
                                <span className="text-xs">Web Designer</span>
                              </div>
                            </div>
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
                            <span className="text-danger">
                              <i className="fa-regular fa-xmark font-black"></i>
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
                            <span className="text-danger">
                              <i className="fa-regular fa-xmark font-black"></i>
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
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-1/4 col-xxl-4">
          <div className="row">
            <div className="xl:w-full md:w-1/2 w-full">
              <div className="card flex flex-col">
                <div className="card-header flex justify-between items-center px-5 pt-6 relative z-[2]">
                  <h4 className="max-sm:mb-2.5">Attendance</h4>
                  <select className="nice-select text-primary px-2.5 bg-transparent border-0 text-[13px] font-medium-normal outline-none relative focus:ring-0">
                    <option value="All Time">All Time</option>
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
                      <span className="text-body-color dark:text-white text-sm">
                        125 Projects
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
                      <span className="text-body-color dark:text-white text-sm">
                        125 Projects
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
                      <span className="text-body-color dark:text-white text-sm">
                        125 Projects
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
                            fill="#FF9F00"
                          />
                        </svg>
                        Yet to Start
                      </p>
                      <span className="text-body-color dark:text-white text-sm">
                        125 Projects
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-full md:w-1/2 w-full">
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
                    <div className="dz-scroll event-scroll overflow-x-hidden overflow-y-auto relative h-[144px] px-5">
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
                            <h5 className="mb-0">
                              <a href="javascript:void(0)">
                                Development planning
                              </a>
                            </h5>
                            <span className="text-body-color text-[13px]">
                              w3it Technologies
                            </span>
                          </div>
                        </div>
                        <span className="text-secondary text-sm">12:05 PM</span>
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
                              <a href="javascript:void(0)">
                                Development planning
                              </a>
                            </h5>
                            <span className="text-body-color text-[13px]">
                              w3it Technologies
                            </span>
                          </div>
                        </div>
                        <span className="text-secondary text-sm">12:05 PM</span>
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
                              <a href="javascript:void(0)">
                                Development planning
                              </a>
                            </h5>
                            <span className="text-body-color text-[13px]">
                              w3it Technologies
                            </span>
                          </div>
                        </div>
                        <span className="text-secondary text-sm">12:05 PM</span>
                      </div>
                    </div>
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

export default HrView;

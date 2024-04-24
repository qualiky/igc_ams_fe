import React from "react";
import AddEmployee from "../../sections/modal/AddEmployee";

const tableHead = [
  { id: 1, title: "Employee ID" },
  { id: 2, title: "Full Name" },
  { id: 3, title: "Department" },
  { id: 4, title: "Email Address" },
  { id: 5, title: "Contact Number" },
  { id: 6, title: "Gender" },
  { id: 7, title: "Location" },
  { id: 8, title: "Status" },
];

const TableRow = () => {
  return (
    <>
      <tr role="row" class="odd">
        <td class="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap sorting_1">
          <span class="text-body-color dark:text-white text-[13px]">1001</span>
        </td>
        <td class="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
          <div class="products flex items-center">
            <img
              src="assets/images/contacts/pic2.jpg"
              class="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
              alt=""
            />
            <div>
              <h6 class="text-sm whitespace-nowrap">Liam Antony</h6>
              <span class="text-body-color dark:text-white text-xs">
                Web Designer
              </span>
            </div>
          </div>
        </td>
        <td class="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
          <span class="text-body-color dark:text-white text-[13px]">
            Computer Science
          </span>
        </td>
        <td class="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
          <span class="text-[13px] text-primary">abc@gmail.com</span>
        </td>
        <td class="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
          <span class="text-body-color dark:text-white text-[13px]">
            +91 123 456 7890
          </span>
        </td>
        <td class="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
          <span class="text-body-color dark:text-white text-[13px]">Male</span>
        </td>
        <td class="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
          <span class="text-body-color dark:text-white text-[13px]">Delhi</span>
        </td>
        <td class="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap text-right">
          <span class="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-success bg-success-light">
            Active
          </span>
        </td>
      </tr>
      <tr role="row" class="even">
        <td class="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 pl-4 pr-0 font-normal whitespace-nowrap sorting_1">
          <span class="text-body-color dark:text-white text-[13px]">1001</span>
        </td>
        <td class="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
          <div class="products flex items-center">
            <img
              src="assets/images/contacts/pic1.jpg"
              class="inline-block mr-2.5 w-[2.813rem] min-w-[2.813rem] h-[2.813rem] rounded-md relative object-cover avatar-md"
              alt=""
            />
            <div>
              <h6 class="text-sm whitespace-nowrap">Noah Oliver</h6>
              <span class="text-body-color dark:text-white text-xs">
                Web Designer
              </span>
            </div>
          </div>
        </td>
        <td class="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
          <span class="text-body-color dark:text-white text-[13px]">
            Computer Science
          </span>
        </td>
        <td class="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
          <span class="text-[13px] text-primary">abc@gmail.com</span>
        </td>
        <td class="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
          <span class="text-body-color dark:text-white text-[13px]">
            +91 123 456 7890
          </span>
        </td>
        <td class="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
          <span class="text-body-color dark:text-white text-[13px]">Male</span>
        </td>
        <td class="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap">
          <span class="text-body-color dark:text-white text-[13px]">Delhi</span>
        </td>
        <td class="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-2.5 px-4 font-normal whitespace-nowrap text-right">
          <span class="text-xs py-[5px] px-3 rounded font-medium leading-[1.5] text-danger bg-danger-light">
            Inactive
          </span>
        </td>
      </tr>
    </>
  );
};
const Employee = () => {
  return (
    <>
      <div className="content-body">
        {/* <!-- row -->	 */}
        <div className="page-titles dark:bg-[#242424] flex items-center justify-between relative border-b border-[#E6E6E6] dark:border-[#444444] flex-wrap z-[1] py-[0.6rem] sm:px-[1.95rem] px-[1.55rem] bg-white">
          <ol className="text-[13px] flex items-center flex-wrap bg-transparent">
            <li>
              <h5 className="sm:text-[17px] text-[15px] mr-8">Employee</h5>
            </li>
            <li>
              <a className="text-[#828690] dark:text-white text-[13px]">
                <svg
                  className="mb-[3px] mr-1 inline-block"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.125 6.375L8.5 1.41667L14.875 6.375V14.1667C14.875 14.5424 14.7257 14.9027 14.4601 15.1684C14.1944 15.4341 13.8341 15.5833 13.4583 15.5833H3.54167C3.16594 15.5833 2.80561 15.4341 2.53993 15.1684C2.27426 14.9027 2.125 14.5424 2.125 14.1667V6.375Z"
                    stroke="#2C2C2C"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.375 15.5833V8.5H10.625V15.5833"
                    stroke="#2C2C2C"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Home{" "}
              </a>
            </li>
            <li className="pl-2 before:content-['/'] before:font-[simple-line-icons] before:font-black before:text-xl before:leading-4 before:pr-2 before:float-left before:text-primary text-primary font-medium">
              <a>Employee</a>
            </li>
          </ol>
          <a
            className="text-primary dark:text-white text-[0.8125rem] leading-[1.5] offcanvas-toggle"
            href="#offcanvasExample1"
            data-dz-offcanvas="offcanvasExample1"
          >
            + Add Task
          </a>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="w-full">
              <div class="card overflow-hidden relative">
                <div class="card-body p-0">
                  <div class="overflow-x-auto active-projects style-1">
                    <div class="tbl-caption flex justify-between items-center flex-wrap p-5 relative z-[2]">
                      <h4 class="max-sm:mb-2.5">Employees</h4>
                      <div className="flex gap-2">
                        <a
                          class="py-[5px] px-3 text-[13px] rounded text-white bg-primary leading-[18px] inline-block border border-primary btn-sm duration-500 hover:bg-hover-primary offcanvas-toggle"
                          data-dz-offcanvas="offcanvasExample2"
                          href="#offcanvasExample"
                        >
                          + Add Employee
                        </a>
                        <button
                          type="button"
                          class="btn btn-secondary py-[5px] px-3 text-[13px] rounded text-white bg-secondary leading-[18px] inline-block border border-secondary btn-sm dz-modal-btn"
                          data-dz-modal="Employeemodal"
                        >
                          + Invite Employee
                        </button>
                      </div>
                    </div>
                    <div
                      id="empoloyees-tblwrapper_wrapper"
                      class="dataTables_wrapper no-footer"
                    >
                      <div class="dt-buttons">
                        <button
                          class="dt-button buttons-excel buttons-html5 btn btn-sm border-0"
                          tabIndex="0"
                          aria-controls="empoloyees-tblwrapper"
                          type="button"
                        >
                          <span>
                            <i class="fa-solid fa-file-excel"></i> Export Report
                          </span>
                        </button>{" "}
                      </div>
                      <table
                        id="empoloyees-tblwrapper"
                        class="table dataTable no-footer"
                        role="grid"
                        aria-describedby="empoloyees-tblwrapper_info"
                      >
                        <thead>
                          <tr role="row">
                            {tableHead.map((item, index) => {
                              return (
                                <th
                                  key={index}
                                  class="text-[13px] py-2.5 pl-4 pr-0 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left sorting_asc"
                                  tabIndex="0"
                                  aria-controls="empoloyees-tblwrapper"
                                  rowSpan="1"
                                  colSpan="1"
                                  ariaSort="ascending"
                                  ariaLabel="Employee ID: activate to sort column descending"
                                >
                                  {item.title}
                                </th>
                              );
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          <TableRow />
                          <TableRow />
                          <TableRow />
                          <TableRow />
                          <TableRow />
                        </tbody>
                      </table>
                      <div
                        class="dataTables_info"
                        id="empoloyees-tblwrapper_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 to 10 of 12 entries
                      </div>
                      <div
                        class="dataTables_paginate paging_simple_numbers"
                        id="empoloyees-tblwrapper_paginate"
                      >
                        <a
                          class="paginate_button previous disabled"
                          aria-controls="empoloyees-tblwrapper"
                          data-dt-idx="0"
                          tabIndex="0"
                          id="empoloyees-tblwrapper_previous"
                        >
                          <i class="fa-solid fa-angle-left"></i>
                        </a>
                        <span>
                          <a
                            class="paginate_button current"
                            aria-controls="empoloyees-tblwrapper"
                            data-dt-idx="1"
                            tabIndex="0"
                          >
                            1
                          </a>
                          <a
                            class="paginate_button "
                            aria-controls="empoloyees-tblwrapper"
                            data-dt-idx="2"
                            tabIndex="0"
                          >
                            2
                          </a>
                        </span>
                        <a
                          class="paginate_button next"
                          aria-controls="empoloyees-tblwrapper"
                          data-dt-idx="3"
                          tabIndex="0"
                          id="empoloyees-tblwrapper_next"
                        >
                          <i class="fa-solid fa-angle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AddEmployee />
    </>
  );
};

export default Employee;

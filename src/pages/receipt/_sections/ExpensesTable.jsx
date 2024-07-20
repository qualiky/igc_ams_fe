import { Link } from "react-router-dom";
import { paths } from "../../../routes/path";
import { useSelector } from "react-redux";
import { getAllExpenditureReceipt } from "../../../selectors/selectors";
import { formatDate } from "../../../const/format-date";
import { Icon } from "@iconify/react/dist/iconify.js";

const ExpensesTable = () => {
  const expenditureReceipt = useSelector(getAllExpenditureReceipt);

  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="xl:w-full">
          <div className="card h-auto">
            <div className="tbl-caption flex justify-between items-center flex-wrap py-4 px-5 relative z-[2] border-b border-[#E6E6E6] dark:border-transparent">
              <h4 className="heading text-xl font-medium">All Expenses</h4>
              <div className="flex gap-4">
                <Link
                  type="button"
                  to={paths.dashboard.receipt.analytics}
                  className="mr-1 mb-2 inline-block rounded font-medium xl:text-[15px] text-xs leading-5 xl:py-[0.719rem] xl:px-[1.563rem] py-2.5 px-4 border border-primary text-white bg-primary hover:bg-hover-primary hover:border-hover-primary duration-300 m-0"
                >
                  <i className="fa-brands fa-accusoft mr-2"></i>Analytics
                </Link>
                <Link
                  type="button"
                  to={paths.dashboard.receipt.addReceipt}
                  className="mr-1 mb-2 flex items-center gap-3 rounded font-medium xl:text-[15px] text-xs leading-5 xl:py-[0.719rem] xl:px-[1.563rem] py-2.5 px-4 border border-primary text-primary bg-white hover:bg-primary-light hover:border-hover-primary duration-300 m-0"
                >
                  <Icon icon="subway:add" /> Add New
                </Link>
              </div>
            </div>
            <div className="p-0">
              <div className="overflow-x-auto active-projects style-1">
                <div
                  id="empoloyees-tbl_wrapper"
                  className="dataTables_wrapper no-footer h-full"
                >
                  <div className="dt-buttons">
                    <button
                      className="dt-button buttons-excel buttons-html5 btn btn-sm border-0"
                      tabIndex="0"
                      aria-controls="empoloyees-tbl"
                      type="button"
                    >
                      <span>
                        <i className="fa-solid fa-file-excel"></i> Export Report
                      </span>
                    </button>{" "}
                  </div>
                  <table
                    id="empoloyees-tbl"
                    className="table dataTable no-footer"
                    role="grid"
                    aria-describedby="empoloyees-tbl_info"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          className="text-[13px] py-2.5 pl-4 pr-0 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left sorting_asc"
                          tabIndex="0"
                          aria-controls="empoloyees-tbl"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="REFERENCE: activate to sort column descending"
                          style={{ width: "100.115px" }}
                        >
                          ID
                        </th>
                        <th
                          className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left sorting"
                          tabIndex="0"
                          aria-controls="empoloyees-tbl"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="PRODUCT: activate to sort column ascending"
                          style={{ width: "212.208px" }}
                        >
                          Receipt Title
                        </th>
                        <th
                          className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left sorting"
                          tabIndex="0"
                          aria-controls="empoloyees-tbl"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="STATUS: activate to sort column ascending"
                          style={{ width: "94.9375px" }}
                        >
                          CREATED AT
                        </th>
                        <th
                          className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left sorting"
                          tabIndex="0"
                          aria-controls="empoloyees-tbl"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="DATE: activate to sort column ascending"
                          style={{ width: "124.469px" }}
                        >
                          BILLED DATE
                        </th>
                        <th
                          className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-left sorting"
                          tabIndex="0"
                          aria-controls="empoloyees-tbl"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="PRODUCT: activate to sort column ascending"
                          style={{ width: "212.208px" }}
                        >
                          TRANSCATION TYPE
                        </th>
                        <th
                          className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium bg-none whitespace-nowrap text-right sorting"
                          tabIndex="0"
                          aria-controls="empoloyees-tbl"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="AMOUNT: activate to sort column ascending"
                          style={{ width: "86.8125px" }}
                        >
                          AMOUNT
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {expenditureReceipt?.map((item, index) => (
                        <tr
                          key={index}
                          role="row"
                          className="odd cursor-pointer hover:bg-primary-light "
                        >
                          <td
                            style={{ padding: "25px 0px 25px 0px" }}
                            className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[2rem] pl-4 pr-0 font-normal whitespace-nowrap sorting_1"
                          >
                            <span className="text-body-color dark:text-white">
                              00{item?.id}
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[2rem] px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white">
                              {item?.attributes?.title}
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[2rem] px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white">
                              {formatDate(item?.attributes?.createdAt)}
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[2rem] px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white">
                              {item?.attributes?.billedDate}
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[2rem] px-4 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white">
                              {item?.attributes?.transactionType}
                            </span>
                          </td>
                          <td
                            style={{ padding: "5px 0px 5px 0px" }}
                            className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[2rem] px-4 font-normal whitespace-nowrap text-right"
                          >
                            <span className="text-body-color text-danger dark:text-white">
                              {item?.attributes?.amount}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div
                    className="dataTables_info"
                    id="empoloyees-tbl_info"
                    role="status"
                    aria-live="polite"
                  ></div>
                  <div
                    className="dataTables_paginate paging_simple_numbers"
                    id="empoloyees-tbl_paginate"
                  >
                    <a
                      className="paginate_button previous disabled"
                      aria-controls="empoloyees-tbl"
                      data-dt-idx="0"
                      tabIndex="0"
                      id="empoloyees-tbl_previous"
                    >
                      <i className="fa-solid fa-angle-left"></i>
                    </a>
                    <span>
                      <a
                        className="paginate_button current"
                        aria-controls="empoloyees-tbl"
                        data-dt-idx="1"
                        tabIndex="0"
                      >
                        1
                      </a>
                      <a
                        className="paginate_button "
                        aria-controls="empoloyees-tbl"
                        data-dt-idx="2"
                        tabIndex="0"
                      >
                        2
                      </a>
                    </span>
                    <a
                      className="paginate_button next"
                      aria-controls="empoloyees-tbl"
                      data-dt-idx="3"
                      tabIndex="0"
                      id="empoloyees-tbl_next"
                    >
                      <i className="fa-solid fa-angle-right"></i>
                    </a>
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

export default ExpensesTable;

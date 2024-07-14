import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const FinanceView = () => {
  const handleReload = () => {
    window.location.reload();
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
                      Finance
                    </h4>
                    <div className="flex gap-2">
                      <Link
                        to="/finance/add-finance"
                        className="py-[5px] px-3 cursor-pointer text-[13px] rounded text-white bg-primary leading-[18px] inline-block border border-primary btn-sm duration-500 hover:bg-hover-primary "
                      >
                        + Add New
                      </Link>
                      <a
                        className="btn btn-secondary flex cursor-pointer items-center gap-2 py-[5px] px-3 text-[13px] rounded text-white bg-secondary border border-secondary btn-sm"
                        onClick={handleReload}
                      >
                        <Icon icon="uim:process" />
                        Refresh
                      </a>
                    </div>
                  </div>
                  <div className="overflow-x-auto active-projects">
                    <table
                      id="finance-tbl1"
                      className="table-auto w-full border-collapse"
                    >
                      <thead>
                        <tr>
                          <th className="text-[13px] py-2.5 pl-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium border-b border-[#E6E6E6] dark:border-[#444444] whitespace-nowrap text-left">
                            Account Title
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium border-b border-[#E6E6E6] dark:border-[#444444] whitespace-nowrap text-left">
                            Amount
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium border-b border-[#E6E6E6] dark:border-[#444444] whitespace-nowrap text-left">
                            Account No
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium border-b border-[#E6E6E6] dark:border-[#444444] whitespace-nowrap text-left">
                            Branch Code
                          </th>
                          <th className="text-[13px] py-2.5 px-4 bg-[#F0F4F9] text-[#374557] capitalize font-medium border-b border-[#E6E6E6] dark:border-[#444444] whitespace-nowrap text-right">
                            Branch Name
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap">
                            <a
                              href="javascript:void(0)"
                              className="text-primary dark:text-white"
                            >
                              Saving
                            </a>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              5000 $
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              1234500000000
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              0123456
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap text-right">
                            <span className="text-body-color dark:text-white text-[13px]">
                              Bank Al Habib
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap">
                            <a
                              href="javascript:void(0)"
                              className="text-primary dark:text-white"
                            >
                              Saving
                            </a>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              6000 $
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              1234500000000
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              0123456
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap text-right">
                            <span className="text-body-color dark:text-white text-[13px]">
                              Industrial and Commercial Bank of China Limited
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap">
                            <a
                              href="javascript:void(0)"
                              className="text-primary dark:text-white"
                            >
                              Saving
                            </a>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              5000 $
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              1234500000000
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap">
                            <span className="text-body-color dark:text-white text-[13px]">
                              0123456
                            </span>
                          </td>
                          <td className="border-b border-[#E6E6E6] dark:border-[#444444] text-[13px] py-[1.125rem] px-5 font-normal whitespace-nowrap text-right">
                            <span className="text-body-color dark:text-white text-[13px]">
                              Bank of China
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
      </div>
    </>
  );
};

export default FinanceView;

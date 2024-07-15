import { useSelector } from "react-redux";
import {
  getAllEmployeeData,
  getAllLeaveData,
} from "../../../selectors/selectors";
import { Link, useNavigate } from "react-router-dom";
import { base_img_url } from "../../../utils/base_img_url";
import AvatarByName from "../../Employees/_components/avatar-by-name";
import { useDispatch } from "react-redux";
import { getAllLeave } from "../../../features/reducer/leave/leaveSlice";
import { useEffect } from "react";
import { paths } from "../../../routes/path";

const LeaveDataTable = () => {
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/employee/details/${id}`);
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });
  };

  const { leaveData } = useSelector(getAllLeaveData);

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className=" flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white dark:text-white sm:pl-0"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      Leave Type
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      Leave Start Day
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
                    >
                      Leave End Day
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white dark:bg-[#242424]">
                  {leaveData?.map((person, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                        <div className="flex items-center">
                          {person?.attributes?.applyingEmployee?.data
                            ?.attributes?.profileImage?.data?.attributes
                            ?.url ? (
                            <div className="h-14 w-14 flex-shrink-0 m-1 mr-2">
                              <img
                                className="h-14 w-14 rounded-full object-cover"
                                src={
                                  base_img_url +
                                  person?.attributes?.applyingEmployee?.data
                                    ?.attributes?.profileImage?.data?.attributes
                                    ?.url
                                }
                                alt=""
                              />
                            </div>
                          ) : (
                            <AvatarByName
                              firstname={
                                person?.attributes?.applyingEmployee?.data
                                  ?.attributes?.firstName
                              }
                              lastname={
                                person?.attributes?.applyingEmployee?.data
                                  ?.attributes?.firstName
                              }
                            />
                          )}
                          <div className="ml-4">
                            <Link
                              to={paths.dashboard.leave.details(person?.id)}
                              className="font-medium text-gray-900 dark:text-white"
                            >
                              {
                                person?.attributes?.applyingEmployee?.data
                                  ?.attributes?.firstName
                              }{" "}
                              {
                                person?.attributes?.applyingEmployee?.data
                                  ?.attributes?.lastName
                              }
                            </Link>
                            <div className="mt-1 text-gray-500">
                              {
                                person?.attributes?.applyingEmployee?.data
                                  ?.attributes?.lastName
                              }
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-gray-900 dark:text-white">
                          {person?.attributes?.leaveType}
                        </div>
                        <div className="mt-1 text-gray-500">
                          {person.department}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                          {person?.attributes?.approvalStatus}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        {formatDate(person?.attributes?.leaveStartDay)}
                      </td>

                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        {formatDate(person?.attributes?.leaveEndDay)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaveDataTable;

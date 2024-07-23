/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { paths } from "../../../routes/path";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTicket } from "../../../features/reducer/ticket/ticketSlice";
import { useSelector } from "react-redux";
import { getAllTicketList } from "../../../selectors/selectors";
import DOMPurify from "dompurify";
import { formatDate } from "../../../const/format-date";
import AvatarByName from "../../Employees/_components/avatar-by-name";
import AvatarByNameRect from "../../../components/AvatarByNameRect";

const TicketView = () => {
  const dispatch = useDispatch();

  const { tickets, isLoading } = useSelector(getAllTicketList);

  useEffect(() => {
    dispatch(getAllTicket());
  }, [dispatch]);

  return (
    <div className="container-fluid mh-auto">
      <div className="row">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="border card border-gray-200 p-4 mx-2 col-span-3 w-[46%]"
              >
                <div className="animate-pulse space-y-8">
                  <div className="flex space-x-4">
                    <div className="bg-gray-200 dark:bg-[#1E1E1E] h-24 w-24 rounded-full"></div>
                    <div className="space-y-2 flex-1 pt-4">
                      <div className="h-8 rounded bg-gray-200 dark:bg-[#1E1E1E] w-full"></div>
                      <div className="h-6 rounded bg-gray-200 dark:bg-[#1E1E1E] w-[85%]"></div>
                      <div className="h-6 rounded bg-gray-200 dark:bg-[#1E1E1E] w-1/2"></div>
                      <div className="flex justify-end w-full">
                        <div className="h-10 rounded bg-gray-200 dark:bg-[#1E1E1E] w-[100px]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : tickets?.map((item, index) => (
              <div key={index} className="md:w-1/2">
                <div className="card">
                  <div className="sm:p-5 p-4">
                    <div className="row">
                      <div className="flex items-start">
                        <div className=" mr-2.5 w-[13rem] min-w-[4.813rem] h-[4.813rem] rounded-full bg-gray-100 text-info text-xl font-bold flex items-center justify-center">
                          # {item?.id}
                        </div>
                        <div className="post-data">
                          <div className="flex justify-between">
                            <Link
                              to={paths.dashboard.ticket.details(1)}
                              className="text-xl font-medium hover:text-primary cursor-pointer hover:underline"
                            >
                              {item?.attributes?.title}
                            </Link>
                            <span className="mr-[0.3125rem] mb-[0.3125rem] inline-block font-medium leading-[1.5] rounded-full text-xs py-[3px] px-3  border-primary-light-3 dark:border-transparent bg-success text-white dark:bg-[#1E1E1E]">
                              New
                            </span>
                          </div>

                          <div>
                            <span className="text-xs text-body-color">
                              {formatDate(item?.attributes?.createdAt)}
                            </span>
                          </div>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(
                                item?.attributes?.description
                              ),
                            }}
                            className=" truncate-multiline sm:text-[14px] text-sm mt-[5px] mb-2 leading-[1.5]"
                          ></div>

                          <div className="tailwind-badge mt-3 flex gap-4">
                            <span className="mr-[0.3125rem] mb-[0.3125rem] inline-block font-medium leading-[1.5] rounded text-xs py-[4px] px-3 border border-transparent bg-danger-light text-danger">
                              {item?.attributes?.priority || "High Priority"}
                            </span>
                            {/* <span className="mr-[0.3125rem] mb-[0.3125rem] inline-block font-medium leading-[1.5] rounded-full text-xs py-[4px] px-3 border border-transparent bg-warning-light text-warning">
                              Sales&nbsp;Department
                            </span> */}
                          </div>
                          <div className="flex w-full justify-end mt-0">
                            <Link
                              to={paths.dashboard.ticket.details(1)}
                              type="button"
                              className="mr-1 mb-2 inline-block rounded font-medium py-2.5 px-[0.9375rem] text-[0.6875rem] leading-[1.3] border border-primary text-white bg-primary hover:bg-hover-primary hover:text-white duration-300 btn-sm"
                            >
                              View Detail
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default TicketView;

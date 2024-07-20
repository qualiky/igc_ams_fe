import { Link } from "react-router-dom";
import { paths } from "../../../routes/path";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTicket } from "../../../features/reducer/ticket/ticketSlice";
import { useSelector } from "react-redux";
import { getAllTicketList } from "../../../selectors/selectors";

const TicketView = () => {
  const dispatch = useDispatch();

  const ticketList = useSelector(getAllTicketList);

  console.log(ticketList);

  useEffect(() => {
    dispatch(getAllTicket());
  }, [dispatch]);

  return (
    <div className="container-fluid mh-auto">
      <div className="row">
        {Array.from({ length: 6 }).map((item, index) => (
          <div key={index} className="md:w-1/2 ">
            <div className="card">
              <div className="sm:p-5 p-4">
                <div className="row">
                  <div className="flex items-start ">
                    <img
                      src="/assets/images/profile/friends/f1.jpg"
                      className="xl:h-[60px] h-[50px] xl:w-[60px] w-[50px] relative inline-block object-cover rounded-full mr-2 custome-avatar"
                      alt=""
                    />
                    <div className="post-data">
                      <h3 className="text-xl font-medium">Roshan Nyaupane</h3>
                      <h4 className="sm:text-[14px] text-sm mt-[5px] mb-2 leading-[1.5]">
                        Good programmers write code that humans can understand.
                      </h4>
                      <div>
                        <span className="text-xs text-body-color">
                          <b className="text-primary">Marry</b> in March 05,
                          2024
                        </span>
                      </div>
                      <div className="tailwind-badge mt-3 flex gap-4">
                        <span className="mr-[0.3125rem] mb-[0.3125rem] inline-block font-medium leading-[1.5] rounded text-xs py-[5px] px-3 primary-light-3 border-primary-light-3 dark:border-transparent bg-primary-light text-primary dark:bg-[#1E1E1E]">
                          New
                        </span>

                        <span className="mr-[0.3125rem] mb-[0.3125rem] inline-block font-medium leading-[1.5] rounded text-xs py-[5px] px-3 border border-transparent bg-success-light text-success">
                          High Priority
                        </span>

                        <span className="mr-[0.3125rem] mb-[0.3125rem] inline-block font-medium leading-[1.5] rounded text-xs py-[5px] px-3 border border-transparent bg-warning-light text-warning">
                          Sales Department
                        </span>
                      </div>
                      <div className="flex w-full justify-end mt-4">
                        <Link
                          to={paths.dashboard.ticket.details(1)}
                          type="button"
                          className="mr-1 mb-2 inline-block rounded font-medium py-1.5 px-[0.9375rem] text-[0.6875rem] leading-[1.3] border border-primary text-primary hover:bg-primary hover:text-white duration-300 btn-sm"
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

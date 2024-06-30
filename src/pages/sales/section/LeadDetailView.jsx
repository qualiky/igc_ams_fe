import { useDispatch } from "react-redux";
import Breadcumb from "../../../components/Breadcumb";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleSalesLead } from "../../../features/reducer/sales/salesSlice";
import { useSelector } from "react-redux";
import { getSingleLead } from "../../../selectors/selectors";
import AvatarByName from "../../Employees/_components/avatar-by-name";

const LeadDetailView = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleSalesLead(id));
  }, [dispatch, id]);

  const { singleSalesLead, isLoading } = useSelector(getSingleLead);

  return (
    <>
      <Breadcumb title="Home" subtitle="Lead Detail" />
      {isLoading ? (
        <div className="flex flex-wrap p-4 gap-5 w-full h-full">
          {/* Left Box */}
          <div className="w-full sm:w-1/3 h-[34rem] bg-gray-200 animate-pulse rounded"></div>

          {/* Right Boxes */}
          <div className="flex flex-col w-[100%] sm:w-[60%] space-y-4">
            <div className="h-24 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-96 bg-gray-200 animate-pulse rounded"></div>
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="xl:w-[30%]">
              <div className="card h-auto">
                <div className="p-5">
                  <div className="c-profile text-center flex items-center justify-center flex-col">
                    {/* <img
                    src="/assets/images/user1.jpg"
                    className="rounded-full mb-2 inline-block"
                    alt=""
                  /> */}
                    <AvatarByName
                      firstname={singleSalesLead?.attributes?.leadCompanyName}
                      size={28}
                    />

                    <h4 className=" text-lg">
                      {singleSalesLead?.attributes?.leadContactPersonName}
                    </h4>
                    <p>{singleSalesLead?.attributes?.leadCompanyName}</p>
                  </div>
                  <div className="c-details">
                    <ul>
                      <li className="border-b border-[#E6E6E6] dark:border-[#444444] py-2.5">
                        <span className="text-sm text-body-color">Email</span>
                        <p className="text-black dark:text-white">
                          {singleSalesLead?.attributes?.leadContactEmail}
                        </p>
                      </li>
                      <li className="border-b border-[#E6E6E6] dark:border-[#444444] py-2.5">
                        <span className="text-sm text-body-color">Phone</span>
                        <p className="text-black dark:text-white">
                          +977-
                          {singleSalesLead?.attributes?.leadContactPhoneNumber}
                        </p>
                      </li>
                      <li className="border-b border-[#E6E6E6] dark:border-[#444444] py-2.5">
                        <span className="text-sm text-body-color">
                          Lead Source
                        </span>
                        <p className="text-black dark:text-white">
                          {singleSalesLead?.attributes?.leadApproachSource}
                        </p>
                      </li>
                      <li className="border-b border-[#E6E6E6] dark:border-[#444444] py-2.5">
                        <span className="text-sm text-body-color">
                          Lead Owner
                        </span>
                        <p className="text-black dark:text-white">
                          {
                            singleSalesLead?.attributes?.leadApproachedEmployee
                              ?.data?.attributes?.firstName
                          }{" "}
                          {
                            singleSalesLead?.attributes?.leadApproachedEmployee
                              ?.data?.attributes?.firstName
                          }
                        </p>
                      </li>
                      <li className="border-b border-[#E6E6E6] dark:border-[#444444] py-2.5">
                        <span className="text-sm text-body-color">
                          Approach Platform
                        </span>
                        <p className="text-black dark:text-white">
                          {singleSalesLead?.attributes?.leadApproachPlatform}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <span className="mt-4 block text-body-color text-sm">
                    Social
                  </span>
                  <ul className="c-social flex mt-[15px]">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="mr-[5px] rounded py-[5px] px-2.5 text-white bg-facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://web.whatsapp.com/"
                        className="mr-[5px] rounded py-[5px] px-2.5 text-white bg-whatsapp"
                      >
                        <i className="fa-brands fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/feed/"
                        className="mr-[5px] rounded py-[5px] px-2.5 text-white bg-linkedin"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.skype.com/en/get-skype/"
                        className="mr-[5px] rounded py-[5px] px-2.5 text-white bg-skype"
                      >
                        <i className="fa-brands fa-skype"></i>
                      </a>
                    </li>
                  </ul>
                  {/* <div className="flex mt-6 justify-end">
                  <a className="inline-block text-xs py-[5px] px-3 rounded font-medium leading-[1.5rem] text-danger bg-danger-light mr-2 duration-500 hover:bg-danger hover:text-white">
                    <i className="fa-solid fa-trash mr-1"></i>Delete
                  </a>
                  <button
                    type="button"
                    className="btn btn-primary duration-500 hover:bg-hover-primary py-[5px] px-3 text-[13px] rounded text-white bg-primary leading-[18px] inline-block border border-primary ml-2 "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal3"
                  >
                    <i className="fa-solid fa-pen-to-square mr-1"></i>
                    <span>Edit </span>
                  </button>
                </div> */}
                </div>
              </div>
            </div>
            <div className="xl:w-[70%]">
              <div className="card h-auto">
                <div className="p-5 flex items-center justify-between flex-wrap">
                  <div className="flex items-center c-busiess max-sm:mb-[10px]">
                    <img
                      src="/assets/images/economics.png"
                      className="avatar inline-block relative object-cover h-[60px] w-[60px] mr-2.5 rounded-md"
                      alt=""
                    />
                    <div>
                      <h5 className="mb-0">
                        Next Step
                        <span className="bg-danger text-[0.5rem] px-[0.3925rem] h-4 inline-block leading-[1.1rem] rounded text-white ml-1">
                          Active
                        </span>
                      </h5>
                      <span className="text-body-color sm:text-sm text-[13px]">
                        {singleSalesLead?.attributes?.leadStatus}
                      </span>
                    </div>
                  </div>
                  <div>
                    <a className="btn py-[5px] px-3 text-[13px] rounded text-white bg-danger leading-[18px] inline-block border border-danger mr-2">
                      Cancel plan
                    </a>
                    <a className="btn btn-primary duration-500 hover:bg-hover-primary py-[5px] px-3 text-[13px] rounded text-white bg-primary leading-[18px] inline-block border border-primary ml-2">
                      Update plan
                    </a>
                  </div>
                </div>
              </div>

              {/* Lead Timeline  */}
              <div className="w-full">
                <div className="card">
                  <div className="card-header flex justify-between px-5 pt-6 relative z-[2] pb-0">
                    <h4 className="card-title capitalize">Lead Timeline</h4>
                  </div>
                  <div className="card-body p-0">
                    <div
                      id="DZ_W_TimeLine"
                      className="widget-timeline dz-scroll overflow-y-scroll overflow-x-hidden h-[23.125rem] my-6 px-6"
                    >
                      <ul className="timeline relative">
                        {singleSalesLead?.attributes?.leadLogs?.map(
                          (item, index) => (
                            <li className="relative mb-[0.9375rem]" key={index}>
                              <div
                                className={`timeline-badge rounded-[50%] h-[1.275rem] absolute top-[0.625rem] w-[1.275rem] bg-white border-[0.125rem] border-primary-light p-1 ${
                                  index % 2 === 0 ? "warning" : "success"
                                }`}
                              ></div>
                              <a className="timeline-panel text-muted">
                                <span className="text-xs block mb-[0.3125rem] opacity-80 tracking-[0.0625rem] text-body-color">
                                  {item?.activityDateTime ?? index * 8} days ago
                                </span>
                                <h6 className="text-[13px]">
                                  {item?.activityDescription}
                                  {/* <strong className="text-primary">$500</strong>. */}
                                </h6>
                              </a>
                            </li>
                          )
                        )}

                        {/* <li className="relative mb-[0.9375rem]">
                        <div className="timeline-badge rounded-[50%] h-[1.275rem] absolute top-[0.625rem] w-[1.275rem] bg-white border-[0.125rem] border-primary-light p-1 info"></div>
                        <a className="timeline-panel text-muted">
                          <span className="text-xs block mb-[0.3125rem] opacity-80 tracking-[0.0625rem] text-body-color">
                            20 minutes ago
                          </span>
                          <h6 className="text-[13px]">
                            New order placed{" "}
                            <strong className="text-info">#XF-2356.</strong>
                          </h6>
                          <p className="text-xs leading-[1.125rem]">
                            Quisque a consequat ante Sit amet magna at
                            volutapt...
                          </p>
                        </a>
                      </li>
                      <li className="relative mb-[0.9375rem]">
                        <div className="timeline-badge rounded-[50%] h-[1.275rem] absolute top-[0.625rem] w-[1.275rem] bg-white border-[0.125rem] border-primary-light p-1 danger"></div>
                        <a
                          className="timeline-panel text-muted"
                          href="javascript:void(0);"
                        >
                          <span className="text-xs block mb-[0.3125rem] opacity-80 tracking-[0.0625rem] text-body-color">
                            30 minutes ago
                          </span>
                          <h6 className="text-[13px]">
                            john just buy your product{" "}
                            <strong className="text-warning">Sell $250</strong>
                          </h6>
                        </a>
                      </li>
                      <li className="relative mb-[0.9375rem]">
                        <div className="timeline-badge rounded-[50%] h-[1.275rem] absolute top-[0.625rem] w-[1.275rem] bg-white border-[0.125rem] border-primary-light p-1 success"></div>
                        <a
                          className="timeline-panel text-muted"
                          href="javascript:void(0);"
                        >
                          <span className="text-xs block mb-[0.3125rem] opacity-80 tracking-[0.0625rem] text-body-color">
                            15 minutes ago
                          </span>
                          <h6 className="text-[13px]">
                            StumbleUpon is acquired by eBay.{" "}
                          </h6>
                        </a>
                      </li>
                      <li className="relative mb-[0.9375rem]">
                        <div className="timeline-badge rounded-[50%] h-[1.275rem] absolute top-[0.625rem] w-[1.275rem] bg-white border-[0.125rem] border-primary-light p-1 warning"></div>
                        <a
                          className="timeline-panel text-muted"
                          href="javascript:void(0);"
                        >
                          <span className="text-xs block mb-[0.3125rem] opacity-80 tracking-[0.0625rem] text-body-color">
                            20 minutes ago
                          </span>
                          <h6 className="text-[13px]">
                            Mashable, a news website and blog, goes live.
                          </h6>
                        </a>
                      </li>
                      <li className="relative mb-[0.9375rem]">
                        <div className="timeline-badge rounded-[50%] h-[1.275rem] absolute top-[0.625rem] w-[1.275rem] bg-white border-[0.125rem] border-primary-light p-1 dark"></div>
                        <a
                          className="timeline-panel text-muted"
                          href="javascript:void(0);"
                        >
                          <span className="text-xs block mb-[0.3125rem] opacity-80 tracking-[0.0625rem] text-body-color">
                            20 minutes ago
                          </span>
                          <h6 className="text-[13px]">
                            Mashable, a news website and blog, goes live.
                          </h6>
                        </a>
                      </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Lead Timeline Ends */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeadDetailView;

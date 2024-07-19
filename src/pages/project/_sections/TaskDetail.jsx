import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProjectTaskDetail } from "../../../features/reducer/project/projectDetailSlice";
import { useSelector } from "react-redux";
import { getTaskDetail } from "../../../selectors/selectors";
import { formatDate } from "../../../const/format-date";

const TaskDetail = () => {
  const params = useParams();

  const dispatch = useDispatch();

  const taskData = useSelector(getTaskDetail);

  console.log(taskData);

  console.log(params);

  useEffect(() => {
    dispatch(getProjectTaskDetail(params?.id));
  }, [dispatch, params?.id]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="w-full">
          <div className="card">
            <div className="p-5">
              <div className="post-details">
                <h3 className="mb-2 text-black">
                  Task title :{" "}
                  <strong>{taskData?.attributes?.taskTitle}</strong>
                </h3>
                <ul className="mb-6 post-meta flex flex-wrap">
                  <li className="post-author text-body-color text-sm mr-4">
                    By Roshan Nyaupane
                  </li>
                  <li className="post-date text-body-color text-sm mr-4">
                    <i className="far fa-calendar-plus mr-2"></i>
                    {formatDate(taskData?.attributes?.createdAt)}
                  </li>
                  <li className="post-comment text-body-color text-sm">
                    <i className="far fa-comment mr-2"></i>28
                  </li>
                </ul>
                {/* <img
                  src="/assets/images/profile/8.jpg"
                  alt=""
                  className="w-full mb-4 h-auto rounded"
                /> */}
                <p className="mb-4">
                  A wonderful serenity has take possession of my entire soul
                  like these sweet morning of spare which enjoy whole heart.A
                  wonderful serenity has take possession of my entire soul like
                  these sweet morning of spare which enjoy whole heart.
                </p>
                <p className="mb-4">
                  A collection of textile samples lay spread out on the table -
                  Samsa was a travelling salesman - and above it there hung a
                  picture that he had recently cut out of an illustrated
                  magazine and housed in a nice, gilded frame.
                </p>
                <blockquote className="mb-4 text-body-color sm:text-sm text-xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Has been the industry&apos;s standard
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type
                  specimencenturies.
                </blockquote>
                <p className="mb-4">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence was
                  created for the bliss of souls like mine.I am so happy, my
                  dear friend, so absorbed in the exquisite sense of mere
                  tranquil existence, that I neglect my talents.
                </p>
                <div className="profile-skills mb-12 mt-12 ">
                  <h4 className="text-primary mb-2 text-lg">Tags</h4>
                  <a className="btn btn-primary mx-2 py-[0.438rem] text-xs font-medium rounded text-primary bg-primary-light leading-5 inline-block duration-500 hover:bg-primary hover:text-white light border border-primary-light px-4 mb-1">
                    Admin
                  </a>
                  <a className="btn btn-primary mx-2 py-[0.438rem] text-xs font-medium rounded text-primary bg-primary-light leading-5 inline-block duration-500 hover:bg-primary hover:text-white light border border-primary-light px-4 mb-1">
                    Dashboard
                  </a>
                </div>

                <div className="w-full">
                  <div className="card border-0 pb-0">
                    <div className="card-header flex justify-between  relative z-[2] pb-0">
                      <h4 className="text-primary text-lg " id="reply-title">
                        Comments (2)
                      </h4>
                    </div>
                    <div className="card-body p-0">
                      <div
                        id="DZ_W_Todo3"
                        className="widget-media dz-scroll overflow-y-scroll overflow-x-hidden h-[10.125rem] my-6 px-6"
                      >
                        <ul className="timeline relative">
                          <li>
                            <div className="timeline-panel flex items-center relative rounded-md py-[0.8rem] px-3 mx-[-5px] duration-500 hover:bg-[#0d99ff0d]">
                              <div className="media flex items-center justify-center w-[2.4rem] h-[2.4rem] bg-[#eee] rounded-full text-[13px] text-center overflow-hidden font-semibold self-start mr-2">
                                <img
                                  alt="image"
                                  width="50"
                                  src="/assets/images/avatar/1.jpg"
                                />
                              </div>
                              <div className="media-body flex-1">
                                <h5 className="mb-1 leading-6">
                                  Alfie Mason{" "}
                                  <small className="text-body-color dark:text-white">
                                    29 July 2020
                                  </small>
                                </h5>
                                <p className="mb-1 text-xs">
                                  I shared this on my fb wall a few months
                                  back..
                                </p>
                              </div>
                              <div className="dropdown">
                                <button
                                  type="button"
                                  className="p-[0.4375rem] w-[2.4rem] h-[2.4rem] bg-primary-light text-primary rounded-md flex justify-center items-center dz-dropdown duration-500 hover:bg-primary btn-primary light"
                                  data-dz-dropdown="dropdown-13"
                                >
                                  <svg
                                    width="18px"
                                    height="18px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth="1"
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x="0"
                                        y="0"
                                        width="24"
                                        height="24"
                                      />
                                      <circle
                                        fill="#000000"
                                        cx="5"
                                        cy="12"
                                        r="2"
                                      />
                                      <circle
                                        fill="#000000"
                                        cx="12"
                                        cy="12"
                                        r="2"
                                      />
                                      <circle
                                        fill="#000000"
                                        cx="19"
                                        cy="12"
                                        r="2"
                                      />
                                    </g>
                                  </svg>
                                </button>
                                <div
                                  className="dz-dropdown-menu dropdown-menu-end absolute translate-x-[-125px] translate-y-[8px] overflow-hidden rounded-md z-[9] bg-white dark:bg-[#242424] dark:shadow-[0rem_0rem_0rem_0.0625rem_rgba(255,255,255,0.1)] shadow-[0_0_3.125rem_0_rgba(82,63,105,0.15)] min-w-[10rem] text-left py-2 hidden"
                                  id="dropdown-13"
                                >
                                  <a className="dropdown-item py-2 px-5 text-body-color text-[13px] text-left block w-full whitespace-nowrap hover:bg-[#f8f9fa] hover:text-primary dark:bg-transparent dark:text-white">
                                    Edit
                                  </a>
                                  <a className="dropdown-item py-2 px-5 text-body-color text-[13px] text-left block w-full whitespace-nowrap hover:bg-[#f8f9fa] hover:text-primary dark:bg-transparent dark:text-white">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-panel flex items-center relative rounded-md py-[0.8rem] px-3 mx-[-5px] duration-500 hover:bg-[#0d99ff0d]">
                              <div className="media flex items-center justify-center w-[2.4rem] h-[2.4rem] bg-[#eee] rounded-full text-[13px] text-center overflow-hidden font-semibold self-start mr-2 media-info">
                                KG
                              </div>
                              <div className="media-body flex-1">
                                <h5 className="mb-1 leading-6">
                                  Jacob Tucker{" "}
                                  <small className="text-body-color dark:text-white">
                                    29 July 2020
                                  </small>
                                </h5>
                                <p className="mb-1 text-xs">
                                  I shared this on my fb wall a few months
                                  back..
                                </p>
                              </div>
                              <div className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-info w-[2.4rem] h-[2.4rem] p-[0.4375rem] bg-info-light text-info rounded-md flex justify-center items-center dz-dropdown duration-500 hover:bg-info light sharp"
                                  data-dz-dropdown="dropdown-14"
                                >
                                  <svg
                                    width="18px"
                                    height="18px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth="1"
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x="0"
                                        y="0"
                                        width="24"
                                        height="24"
                                      />
                                      <circle
                                        fill="#000000"
                                        cx="5"
                                        cy="12"
                                        r="2"
                                      />
                                      <circle
                                        fill="#000000"
                                        cx="12"
                                        cy="12"
                                        r="2"
                                      />
                                      <circle
                                        fill="#000000"
                                        cx="19"
                                        cy="12"
                                        r="2"
                                      />
                                    </g>
                                  </svg>
                                </button>
                                <div
                                  className="dz-dropdown-menu dropdown-menu-end absolute translate-x-[-125px] translate-y-[8px] overflow-hidden rounded-md z-[9] bg-white dark:bg-[#242424] dark:shadow-[0rem_0rem_0rem_0.0625rem_rgba(255,255,255,0.1)] shadow-[0_0_3.125rem_0_rgba(82,63,105,0.15)] min-w-[10rem] text-left py-2 hidden"
                                  id="dropdown-14"
                                >
                                  <a className="dropdown-item py-2 px-5 text-body-color text-[13px] text-left block w-full whitespace-nowrap hover:bg-[#f8f9fa] hover:text-primary dark:bg-transparent dark:text-white">
                                    Edit
                                  </a>
                                  <a className="dropdown-item py-2 px-5 text-body-color text-[13px] text-left block w-full whitespace-nowrap hover:bg-[#f8f9fa] hover:text-primary dark:bg-transparent dark:text-white">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-respond" id="respond">
                  <h4 className="text-primary text-lg mb-4" id="reply-title">
                    Leave a Reply{" "}
                  </h4>
                  <form className="comment-form" id="commentform" method="post">
                    <div className="row">
                      <div className="w-full">
                        <div className="mb-3">
                          <label
                            htmlFor="comment"
                            className="text-black dark:text-white font-semibold form-label"
                          >
                            Comment
                          </label>
                          <textarea
                            rows="6"
                            className="form-control relative text-[13px] h-auto min-h-auto border border-b-color block rounded-md p-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full resize-y"
                            name="comment"
                            placeholder="Add a Comment..."
                            id="comment"
                          ></textarea>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="mb-3">
                          <input
                            type="submit"
                            value="Post Comment"
                            className="btn py-[0.719rem] max-xl:py-2.5 text-[15px] max-xl:text-[13px] font-medium rounded text-white bg-primary leading-5 inline-block  duration-500 hover:bg-hover-primary mb-1 sm:px-[1.563rem] px-4 btn-primary"
                            id="submit"
                            name="submit"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;

import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProject } from "../../../features/reducer/project/projectSlice";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../../routes/path";
import { useSelector } from "react-redux";
import { getAllProjectList } from "../../../selectors/selectors";
import { formatDate } from "../../../const/format-date";

const ProjectView = () => {
  const [gridView, setGridView] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { projects } = useSelector(getAllProjectList);

  console.log(projects);

  useEffect(() => {
    dispatch(getAllProject({ populate: null }));
  }, [dispatch]);

  const navigateToDetail = () => {
    navigate(paths.dashboard.project.details(1));
    window.location.reload();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="flex justify-between items-center mb-6">
          <h5 className="mb-0 text-xl font-medium">Projects</h5>
          <div className="flex items-center">
            <div className="icon-box w-[1.875rem] h-[1.875rem] leading-[1.7] flex items-center justify-center cursor-pointer relative text-center bg-secondary rounded-md mr-2">
              <a onClick={() => setGridView(!gridView)}>
                <Icon
                  icon={`${
                    gridView
                      ? "material-symbols:view-list-sharp"
                      : "mynaui:grid"
                  }`}
                  className="text-white"
                  width={20}
                />
              </a>
            </div>
            <a className="btn btn-primary duration-500 hover:bg-hover-primary py-[5px] px-3 text-[13px] rounded text-white bg-primary leading-[18px] inline-block border border-primary ml-2 dz-modal-btn">
              + Add Project
            </a>
          </div>
        </div>

        {projects?.map((item, index) => (
          <div
            key={index}
            className={`xl:w-${gridView ? "full" : "1/2"} sm:w-${
              gridView ? "full" : "1/2"
            } w-full`}
          >
            <div className="card z-auto flex flex-col hover:shadow-[rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.05)_0px_4px_6px_-2px]">
              <div className="card-header flex justify-between items-center sm:p-5 sm:pt-6 p-4 pt-5 max-sm:pb-5 relative z-[2] border-b border-[#E6E6E6] dark:border-[#444444]">
                <Link onClick={navigateToDetail} className="mb-0 text-xl">
                  # {item?.attributes?.projectName}
                </Link>
                <span className="py-[0.1875rem] px-[0.8125rem] text-xs rounded-[1.25rem] text-white bg-primary leading-[1.5] inline-block border border-primary duration-500">
                  Project Lead
                </span>
              </div>
              <div className="card-body p-5">
                <div className="flex items-center">
                  <img
                    src="/assets/images/contacts/pic2.jpg"
                    className="w-[2.25rem] h-[2.25rem] inline-block mr-2.5 relative object-cover rounded-full"
                  />
                  <div>
                    <h6>
                      {
                        item?.attributes?.projectLead?.data?.attributes
                          ?.firstName
                      }{" "}
                      {
                        item?.attributes?.projectLead?.data?.attributes
                          ?.lastName
                      }
                    </h6>
                    <span className="text-[13px] text-body-color">
                      {formatDate(item?.attributes?.createdAt)}
                    </span>
                  </div>
                </div>
                <p className="my-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text.
                </p>
                <div>
                  <p className="text-secondary dark:text-white mb-1 font-medium">
                    Team
                  </p>
                  <div className="avatar-list avatar-list-stacked">
                    <img
                      src="/assets/images/contacts/pic666.jpg"
                      className="avatar inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                    />
                    <img
                      src="/assets/images/contacts/pic555.jpg"
                      className="avatar inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                    />
                    <img
                      src="/assets/images/contacts/pic1.jpg"
                      className="avatar inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                    />
                    <img
                      src="/assets/images/contacts/pic555.jpg"
                      className="avatar inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                    />
                    <img
                      src="/assets/images/contacts/pic666.jpg"
                      className="avatar inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                    />
                  </div>
                </div>
                <div className="progress h-[5px] overflow-hidden bg-[#f6f6f6] dark:bg-[#1E1E1E] mt-6">
                  <div
                    className="progress-bar bg-purple"
                    style={{ width: "60%", height: "5px", borderRadius: "4px" }}
                    role="progressbar"
                  ></div>
                </div>
              </div>
              <div className="card-footer flex justify-between flex-wrap border-t border-[#E6E6E6] dark:border-[#444444] py-4 px-5">
                <div className="mb-2.5 flex justify-between w-full">
                  <p className="mb-0 text-secondary dark:text-white font-medium">
                    Due{" "}
                    <span className="font-normal text-purple">
                      : 2024-06-02
                    </span>
                  </p>
                  <button
                    className="btn btn-primary duration-500 hover:bg-hover-primary py-[5px] px-3 text-[13px] rounded text-white bg-primary leading-[18px] inline-block border border-primary ml-2 dz-modal-btn"
                    onClick={navigateToDetail}
                  >
                    View Details
                  </button>
                </div>
                <select className="status-select status-progress nice-select mb-2.5 py-0.5 pl-2.5 pr-5 border-0 style-3 justify-end items-center text-xs font-medium">
                  <option value="progress">In Progress</option>
                  <option value="pending">Pending</option>
                  <option value="testing">Testing</option>
                  <option value="complete">Complete</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectView;

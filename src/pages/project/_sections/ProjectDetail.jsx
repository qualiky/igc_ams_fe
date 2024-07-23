import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProjectStages } from "../../../features/reducer/project/projectDetailSlice";
import { useSelector } from "react-redux";
import { getProjectStage } from "../../../selectors/selectors";
import { usePathname } from "../../../hooks/use-pathname";

const ProjectDetail = () => {
  const [projectStage, setProjectStage] = useState([]);

  const params = useParams();

  const dispatch = useDispatch();

  const pathName = usePathname();

  const projectStages = useSelector(getProjectStage);

  useEffect(() => {
    setProjectStage([...projectStages]);
  }, [projectStages]);

  useEffect(() => {
    dispatch(getProjectStages({ id: params?.id }));
  }, [dispatch, params?.id, pathName]);

  return (
    <div className="container-fluid">
      <div className="flex justify-between items-center mb-6">
        <h5 className="mb-0">Tasks Summary</h5>
        <div className="flex items-center">
          <a
            className="btn btn-primary duration-500 hover:bg-hover-primary py-[5px] px-3 text-[13px] rounded text-white bg-primary leading-[18px] inline-block border border-primary ml-2 dz-modal-btn"
            data-dz-modal="Addtask"
          >
            + Add Task
          </a>
        </div>
      </div>
      <div className="row m-0 flex w-full overflow-x-auto flex-nowrap dz-scroll max-md:block max-md:w-auto">
        {projectStage?.map((item, index) => (
          <div
            key={index}
            className="md:w-[322px] md:min-w-[322px] pl-0 flex-[1_0_0%]"
          >
            <div className="card h-full border-0 bg-transparent mb-0">
              <div className="flex-auto draggable-zone dropzoneContainer">
                <div className="mb-5 py-[0.938rem] px-[0.938rem] shadow-[0px_0px_13px_0px_rgba(82,63,105,0.05)] border rounded-md bg-white dark:bg-[#242424] border-primary">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="mb-0">
                        {item?.attributes?.projectStageName}
                      </h5>
                      <span className="text-body-color text-sm">
                        Tasks assigned to me: 18
                      </span>
                    </div>
                    <div className="w-10 h-10 relative inline-block text-center leading-[2.5rem] bg-primary-light rounded-full">
                      <h5 className="inline-block text-primary totalCount">
                        18
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="border border-[#E6E6E6] dark:border-[#444444] mb-5 shadow-[0px_0px_13px_0px_rgba(82,63,105,0.05)] rounded-md bg-white dark:bg-[#242424] draggable-handle draggable cursor-all-scroll">
                  <div className="p-[0.938rem]">
                    <div className="flex items-center">
                      <div>
                        <h6 className="text-sm">
                          HTML template Issue Complete
                        </h6>
                        <span className="text-xs text-body-color">
                          INV-100023456
                        </span>
                      </div>
                    </div>
                    <div className="my-2">
                      <img
                        src="/assets/images/contacts/pic666.jpg"
                        className="avatar inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                        alt=""
                      />
                      <img
                        src="/assets/images/contacts/pic555.jpg"
                        className="avatar inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                        alt=""
                      />
                      <img
                        src="/assets/images/contacts/pic1.jpg"
                        className="avatar inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                        alt=""
                      />
                      <img
                        src="/assets/images/contacts/pic666.jpg"
                        className="avatar inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                        alt=""
                      />
                      <img
                        src="/assets/images/contacts/pic666.jpg"
                        className="avatar inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                        alt=""
                      />
                    </div>
                    <div className="my-2">
                      <span className="text-primary bg-primary-light dark:bg-[#1E1E1E] text-xs py-[5px] px-3 rounded-md leading-[1.5] font-medium mr-1">
                        Issue
                      </span>
                      <span className="text-primary bg-primary-light dark:bg-[#1E1E1E] text-xs py-[5px] px-3 rounded-md leading-[1.5] font-medium ml-1">
                        HTML
                      </span>
                    </div>
                    <div className="flex items-center">
                      <p className="font-medium text-secondary dark:text-white mr-2">
                        Status
                      </p>
                      <select className="status-select status-testing nice-select py-[3px] pl-2.5 pr-5 border-0 style-3 justify-end items-center text-xs font-medium">
                        <option value="testing">Testing</option>
                        <option value="pending">Pending</option>
                        <option value="complete">Complete</option>
                        <option value="progress">In Progress</option>
                      </select>
                    </div>
                  </div>
                  <div className="p-[0.938rem] border-t border-[#E6E6E6] dark:border-[#444444] flex items-center justify-between">
                    <div className="footer-data">
                      <span className="text-primary text-xs">Start Date</span>
                      <p className="text-body-color text-[13px]">06 Feb 2024</p>
                    </div>
                    <div className="footer-data">
                      <span className="text-primary text-xs">End Date</span>
                      <p className="text-body-color text-[13px]">06 Feb 2024</p>
                    </div>
                    <div className="footer-data">
                      <span className="block text-primary text-xs">
                        Priority
                      </span>
                      <select className="status-select status-high nice-select py-[3px] pl-2.5 pr-5 border-0 style-3 justify-end items-center text-xs font-medium">
                        <option value="high" selected>
                          High
                        </option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="border border-[#E6E6E6] dark:border-[#444444] mb-5 shadow-[0px_0px_13px_0px_rgba(82,63,105,0.05)] rounded-md bg-white dark:bg-[#242424] draggable-handle draggable cursor-all-scroll">
                  <div className="p-[0.938rem]">
                    <div className="flex items-center">
                      <div>
                        <h6 className="text-sm">
                          HTML template Issue Complete
                        </h6>
                        <span className="text-xs text-body-color">
                          INV-100023456
                        </span>
                      </div>
                    </div>
                    <div className="my-2">
                      <img
                        src="/assets/images/contacts/pic666.jpg"
                        className="avatar inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                        alt=""
                      />
                      <img
                        src="/assets/images/contacts/pic555.jpg"
                        className="avatar inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                        alt=""
                      />
                      <img
                        src="/assets/images/contacts/pic1.jpg"
                        className="avatar inline-block w-[1.875rem] h-[1.875rem] me-[-13px] rounded-full border-2 border-white dark:border-[#444444] relative object-cover duration-300 hover:z-[1]"
                        alt=""
                      />
                    </div>
                    <div className="my-2">
                      <span className="text-primary bg-primary-light dark:bg-[#1E1E1E] text-xs py-[5px] px-3 rounded-md leading-[1.5] font-medium mr-1">
                        Issue
                      </span>
                      <span className="text-primary bg-primary-light dark:bg-[#1E1E1E] text-xs py-[5px] px-3 rounded-md leading-[1.5] font-medium ml-1">
                        HTML
                      </span>
                    </div>
                  </div>
                  <div className="p-[0.938rem] border-t border-[#E6E6E6] dark:border-[#444444] flex items-center justify-between">
                    <div className="footer-data">
                      <span className="text-primary text-xs">Start Date</span>
                      <p className="text-body-color text-[13px]">06 Feb 2024</p>
                    </div>
                    <div className="footer-data">
                      <span className="text-primary text-xs">End Date</span>
                      <p className="text-body-color text-[13px]">06 Feb 2024</p>
                    </div>
                    <div className="footer-data">
                      <span className="block text-primary text-xs">
                        Priority
                      </span>
                      <select className="status-select status-high nice-select py-[3px] pl-2.5 pr-5 border-0 style-3 justify-end items-center text-xs font-medium">
                        <option value="high" selected>
                          High
                        </option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="border border-[#E6E6E6] dark:border-[#444444] mb-5 shadow-[0px_0px_13px_0px_rgba(82,63,105,0.05)] rounded-md bg-white dark:bg-[#242424] draggable-handle draggable cursor-all-scroll">
                  <div className="p-[0.938rem] border-t border-[#E6E6E6] dark:border-[#444444] flex items-center justify-between">
                    <div className="footer-data">
                      <span className="text-primary text-xs">Start Date</span>
                      <p className="text-body-color text-[13px]">06 Feb 2024</p>
                    </div>
                    <div className="footer-data">
                      <span className="text-primary text-xs">End Date</span>
                      <p className="text-body-color text-[13px]">06 Feb 2024</p>
                    </div>
                    <div className="footer-data">
                      <span className="block text-primary text-xs">
                        Priority
                      </span>
                      <select className="status-select status-low nice-select py-[3px] pl-2.5 pr-5 border-0 style-3 justify-end items-center text-xs font-medium">
                        <option value="low">Low</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                      </select>
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

export default ProjectDetail;

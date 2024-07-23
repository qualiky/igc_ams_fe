/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { TaskT } from "../../const/index";
import { Link } from "react-router-dom";
import { paths } from "../../routes/path";
import { formatDate } from "../../const/format-date";

interface TaskProps {
  task: TaskT;
  provided: any;
}

const TaskProject = ({ task, provided }: TaskProps) => {
  const { startDate, endDate, priority, taskDescription, taskTitle } =
    task?.attributes;

  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="w-auto min-w-[255px] md:min-w-[290px]  max-w-[290px] cursor-grab bg-white  dark:bg-[#1E1E1E] flex flex-col justify-between gap-3 my-2 items-start shadow-sm border border-stone-200 rounded px-3 py-4 transition-transform duration-400 transform-gpu hover:scale-[1.03] hover:shadow-md"
    >
      <div className="w-full flex items-start flex-col gap-0">
        <Link
          to={paths.dashboard.project.taskDetails(task?.id)}
          className="text-[15.5px] font-medium text-primary underline"
        >
          {taskTitle}
        </Link>
        <span className="truncate-multiline text-[13.5px] text-gray-500 ">
          {taskDescription}
        </span>
      </div>
      <div className="w-full border border-dashed"></div>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="text-[13px] text-gray-700">Assigned to</span>
        </div>
        <div
          className={`w-[60px] rounded-full h-[5px] ${
            priority === "High"
              ? "bg-red-500"
              : priority === "Medium"
              ? "bg-orange-500"
              : "bg-blue-500"
          }`}
        ></div>
      </div>
      <div className="">
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
      </div>
      <div className=" w-full border-t border-[#E6E6E6] dark:border-[#444444] flex items-center justify-between">
        <div className="footer-data">
          <span className="text-primary text-xs">Start Date</span>
          <p className="text-body-color text-[13px]">{formatDate(startDate)}</p>
        </div>
        <div className="footer-data">
          <span className="text-primary text-xs">End Date</span>
          <p className="text-body-color text-[13px]">{formatDate(endDate)}</p>
        </div>
      </div>
      {/* <Link
        to={paths.dashboard.project.taskDetails(task?.id)}
        className=" w-full text-center  btn btn-secondary bg-secondary cursor-pointer duration-500 py-[6px] px-3 text-[13px] rounded text-white leading-[18px] "
      >
        View Detail
      </Link> */}
      {/* <button
        type="button"
        className="mr-1 mb-2 w-full inline-block rounded font-medium xl:text-[15px] text-xs leading-5 xl:py-[0.689rem] xl:px-[1.563rem] py-1.7 px-4 border border-d-light text-dark bg-d-light dark:bg-[#888888] text-black dark:text-white dark:border-transparent hover:text-white hover:bg-dark duration-300"
      >
        View
      </button> */}
    </div>
  );
};

export default TaskProject;

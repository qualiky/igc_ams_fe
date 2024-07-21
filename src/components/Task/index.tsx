/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { TaskT } from "../../const/index";
import { Link } from "react-router-dom";
import { paths } from "../../routes/path";

interface TaskProps {
  task: TaskT;
  provided: any;
}

const Task = ({ task, provided }: TaskProps) => {
  const {
    approachDate,
    leadApproachPlatform,
    leadApproachSource,
    leadCompanyName,
    leadContactEmail,
    leadContactPersonName,
    leadContactPhoneNumber,
    leadStatus,
    nextStep,
  } = task?.attributes;

  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="w-auto min-w-[290px]  cursor-grab bg-white  dark:bg-[#1E1E1E] flex flex-col justify-between gap-3 my-2 items-start shadow-sm border border-stone-200 rounded px-3 py-4 transition-transform duration-400 transform-gpu hover:scale-[1.03] hover:shadow-md "
    >
      {/* {image && alt && (
        <img src={image} alt={alt} className="w-full h-[170px] rounded-lg" />
      )} */}
      {/* <div className="flex items-center gap-2">
        {tags?.map((tag) => (
          <span
            key={tag.title}
            className="px-[10px] py-[2px] text-[13px] font-medium rounded-md"
            style={{ backgroundColor: tag.bg, color: tag.text }}
          >
            {tag.title}
          </span>
        ))}
      </div>  */}
      <div className="w-full flex items-start flex-col gap-0">
        <Link to={paths.dashboard.sales.details(task?.id)}>
          <span className="text-[15.5px] font-medium text-primary underline ">
            {leadCompanyName}
          </span>
        </Link>
        <span className="text-[13px] text-gray-500 dark:text-white">
          {leadContactEmail}
        </span>
      </div>
      <div className="w-full border border-dashed"></div>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="text-[13px] text-gray-700 dark:text-white">
            {leadContactPhoneNumber}
          </span>
        </div>
        <div
          className={`w-[60px] rounded-full h-[5px] ${
            leadApproachPlatform === "Website"
              ? "bg-red-500"
              : leadApproachPlatform === "Facebook"
              ? "bg-orange-500"
              : "bg-blue-500"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Task;

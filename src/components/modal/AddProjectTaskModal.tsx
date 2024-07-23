/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { getRandomColors } from "../../helpers/getRandomColors";
import { v4 as uuidv4 } from "uuid";
import * as yup from "yup";
import CustomInputs from "../inputs/custom-inputs";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import CustomSelect from "../inputs/custom-select";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSalesLead } from "../../features/reducer/sales/salesSlice";
import CustomTextArea from "../inputs/custom-textarea";
import { useSelector } from "react-redux";
import { getAllEmployeeData } from "../../selectors/selectors";
import {
  addProjectTask,
  getProjectStages,
} from "../../features/reducer/project/projectDetailSlice";
import { projectDetailService } from "../../features/api-service/project-action/projectDetailAction";

interface Tag {
  title: string;
  bg: string;
  text: string;
}

interface AddModalProps {
  isOpen: boolean;
  onClose: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddTask: (taskData: any) => void;
  selectedColumn: string;
}

const leadCompanySchema = yup.object().shape({
  taskTitle: yup.string().required(),
  startDate: yup.string().required(),
  endDate: yup.string().required(),
  priority: yup.string().required(),
  teamMembers: yup.string().required(),
  comments: yup.string(),
  taskDescription: yup.string(),
  projectStage: yup.string(),
});

const AddProjectModal = ({
  isOpen,
  onClose,
  setOpen,
  handleAddTask,
  selectedColumn,
}: AddModalProps) => {
  const initialTaskData = {
    id: uuidv4(),
    title: "",
    description: "",
    priority: "",
    deadline: 0,
    image: "",
    alt: "",
    tags: [] as Tag[],
  };

  const [taskData, setTaskData] = useState(initialTaskData);
  const [tagTitle, setTagTitle] = useState("");

  const dispatch = useDispatch();

  const params = useParams();

  const { employeeData } = useSelector(getAllEmployeeData);

  const formattedOptions = employeeData.map((item) => ({
    label: item.attributes.firstName + " " + item.attributes.lastName,
    value: item.id,
  }));

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(leadCompanySchema),
    defaultValues: {
      taskTitle: "",
      startDate: "",
      endDate: "",
      teamMembers: "",
      priority: "",
      comments: "",
      taskDescription: "",
      projectStage: "",
    },
  });

  useEffect(() => {
    reset({
      projectStage: selectedColumn,
    });
  }, [selectedColumn]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        if (e.target) {
          setTaskData({ ...taskData, image: e.target.result as string });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleAddTag = () => {
    if (tagTitle.trim() !== "") {
      const { bg, text } = getRandomColors();
      const newTag: Tag = { title: tagTitle.trim(), bg, text };
      setTaskData({ ...taskData, tags: [...taskData.tags, newTag] });
      setTagTitle("");
    }
  };

  const closeModal = () => {
    setOpen(false);
    onClose();
    setTaskData(initialTaskData);
  };

  const handleSubmitAdd = () => {
    handleAddTask(taskData);
    closeModal();
  };

  const onSubmit = async (data: any) => {
    try {
      const response = await projectDetailService.addProjectStageTask({ data });
      setTimeout(() => {
        dispatch(getProjectStages({ id: params?.id }));
      }, 1000);
      closeModal();
      reset();
    } catch (error) {
      console.error("Error during adding sales lead:", error);
    }
    // dispatch(addProjectTask(data));

    // reset();
  };

  return (
    <div
      className={`w-screen h-screen place-items-center fixed top-0 left-0 mt-5 ${
        isOpen ? "grid" : "hidden"
      }`}
    >
      <div
        className="w-full h-full bg-black opacity-70 absolute left-0 top-0 z-20"
        onClick={closeModal}
      ></div>
      <div className="md:w-[50vw] w-[90%] bg-white dark:bg-[#1E1E1E] rounded-lg shadow-md z-50 flex flex-col items-center gap-3 px-5 py-6">
        <div className="w-full">
          <h1 className="text-2xl text-left font-medium">Add New Task</h1>
        </div>
        <form className="row pt-3" onSubmit={handleSubmit(onSubmit)}>
          <CustomInputs
            name="taskTitle"
            control={control}
            type="text"
            label="Task Title"
            errors={errors}
          />

          <CustomInputs
            control={control}
            name="startDate"
            type="date"
            label="Start Date"
            errors={errors}
          />

          <CustomInputs
            control={control}
            name="endDate"
            type="date"
            label="End Date "
            errors={errors}
          />

          <CustomSelect
            label="Select Priority"
            options={[
              { label: "Low", value: "Low" },
              { label: "Medium", value: "Medium" },
              { label: "High", value: "High" },
              { label: "Urgent", value: "Urgent" },
            ]}
            name="priority"
            control={control}
            errors={errors}
          />

          <CustomSelect
            label="Assigned to"
            options={formattedOptions}
            name="teamMembers"
            control={control}
            errors={errors}
          />

          <CustomTextArea
            name="taskDescription"
            control={control}
            errors={errors}
            label={"Task Description"}
            width="w-full"
          />

          <div className="flex gap-3 justify-end mt-4">
            <button
              className="btn xl:py-[0.719rem] py-2.5 xl:px-[1.563rem] px-4 duration-300 xl:text-[15px] text-[13px] font-medium rounded text-danger bg-danger-light leading-5 inline-block border border-danger-light btn-danger light hover:text-white hover:bg-danger offcanvas-close"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary xl:py-[0.719rem] py-2.5 xl:px-[1.563rem] px-4 duration-300 xl:text-[15px] text-[13px] font-medium rounded text-white bg-primary leading-5 inline-block border border-primary hover:bg-hover-primary offcanvas-close"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjectModal;

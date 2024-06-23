/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { getRandomColors } from "../../helpers/getRandomColors";
import { v4 as uuidv4 } from "uuid";
import * as yup from "yup";
import CustomInputs from "../inputs/custom-inputs";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import CustomSelect from "../inputs/custom-select";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSalesLead } from "../../features/reducer/sales/salesSlice";

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
  leadCompanyName: yup.string().required(),
  leadApproachSource: yup.string().required(),
  leadContactPersonName: yup.string().required(),
  leadContactPhoneNumber: yup.string().required(),
  leadContactEmail: yup.string().email().required(),
  leadStatus: yup.string(),
  leadStage: yup.string().required(),
});

const AddModal = ({
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
      leadCompanyName: "",
      leadApproachSource: "",
      leadContactPersonName: "",
      leadContactPhoneNumber: "",
      leadContactEmail: "",
      leadStatus: "",
      leadStage: "",
    },
  });

  useEffect(() => {
    reset({
      leadStage: selectedColumn,
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

  const onSubmit = (data: any) => {
    dispatch(addSalesLead({ data }));
    reset();
  };

  return (
    <div
      className={`w-screen h-screen place-items-center fixed top-0 left-0 ${
        isOpen ? "grid" : "hidden"
      }`}
    >
      <div
        className="w-full h-full bg-black opacity-70 absolute left-0 top-0 z-20"
        onClick={closeModal}
      ></div>
      <div className="md:w-[50vw] w-[90%] bg-white rounded-lg shadow-md z-50 flex flex-col items-center gap-3 px-5 py-6">
        <div className="w-full">
          <h1 className="text-2xl text-left font-medium">
            Add New Lead Company
          </h1>
        </div>
        <form className="row pt-3" onSubmit={handleSubmit(onSubmit)}>
          <CustomInputs
            name="leadContactPersonName"
            control={control}
            type="text"
            label="Lead Name"
            errors={errors}
          />

          <CustomInputs
            name="leadContactPhoneNumber"
            control={control}
            type="text"
            label="Contact"
            errors={errors}
          />

          <CustomInputs
            name="leadContactEmail"
            control={control}
            type="email"
            label="Email"
            errors={errors}
          />

          <CustomInputs
            name="leadCompanyName"
            control={control}
            type="text"
            label="Lead Company Name"
            errors={errors}
          />

          <CustomSelect
            label="Lead Approach Source"
            options={[
              { label: "Ads", value: "Ads" },
              { label: "Client Reference", value: "Client Reference" },
              { label: "SM Post", value: "SM Post" },
              { label: "Offline Platform", value: "Offline Platform" },
              { label: "Other", value: "Other" },
            ]}
            name="leadApproachSource"
            control={control}
            errors={errors}
          />

          <CustomSelect
            label="Lead Status"
            options={[
              { label: "Lead Contacted Team", value: "Lead Contacted Team" },
              { label: "Team Contacted Lead", value: "Team Contacted Lead" },
              { label: "Phone Conversation", value: "Phone Conversation" },
              { label: "First Meeting", value: "First Meeting" },
              { label: "Quote Sent", value: "Quote Sent" },
              { label: "Client Interested", value: "Client Interested" },
              { label: "Verbal Confirmation", value: "Verbal Confirmation" },
              { label: "Final Meeting", value: "Final Meeting" },
              { label: "Contract Signing", value: "Contract Signing" },
              { label: "Advance Pending", value: "Advance Pending" },
              { label: "Advance Received", value: "Advance Received" },
              {
                label: "Client Rejected by Agency",
                value: "Client Rejected by Agency",
              },
              {
                label: "Agency Rejected by Client",
                value: "Agency Rejected by Client",
              },
            ]}
            name="leadStatus"
            control={control}
            errors={errors}
          />

          {/* <input
            type="text"
            name="title"
            value={taskData.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm font-medium"
          />

          <input
            type="text"
            name="description"
            value={taskData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm font-medium"
          />
          <select
            name="priority"
            onChange={handleChange}
            value={taskData.priority}
            className="w-full h-12 px-2 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm"
          >
            <option value="">Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <input
            type="number"
            name="deadline"
            value={taskData.deadline}
            onChange={handleChange}
            placeholder="Deadline"
            className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm"
          />
          <input
            type="text"
            value={tagTitle}
            onChange={(e) => setTagTitle(e.target.value)}
            placeholder="Tag Title"
            className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm"
          /> */}

          {/* <div className="w-full flex items-center gap-4 justify-between">
            <input
              type="text"
              name="alt"
              value={taskData.alt}
              onChange={handleChange}
              placeholder="Image Alt"
              className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm"
            />
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="w-full"
            />
          </div> */}

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

export default AddModal;

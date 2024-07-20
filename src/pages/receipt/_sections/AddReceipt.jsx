/* eslint-disable no-unused-vars */
import * as yup from "yup";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import CustomInputs from "../../../components/inputs/custom-inputs";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getLoginData } from "../../../selectors/selectors";
import {
  addReceipt,
  getAllReceipt,
} from "../../../features/reducer/receipt/receiptSlice";
import CustomSelect from "../../../components/inputs/custom-select";
import CustomTextArea from "../../../components/inputs/custom-textarea";
import CustomImageInputs from "../../../components/inputs/custom-file-upload";

const educationSchema = yup.object().shape({
  title: yup.string().required(),
  amount: yup.number().required(),
  receiptType: yup.string().required(),
  transactionType: yup.string().required(),
  description: yup.string(),
  attachment: yup
    .mixed()
    .test("file", "You need to provide a file", (value) => {
      if (value.length > 0) {
        return true;
      }
      return false;
    }),
  employee: yup.string().required(),
  billedDate: yup.string().required(),
});

const AddReceipt = ({ currentEducation }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user } = useSelector(getLoginData);

  const {
    control,
    setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(educationSchema),
    defaultValues: {
      title: "",
      amount: "",
      receiptType: "",
      transactionType: "",
      description: "",
      attachment: "",
      employee: "",
      billedDate: "",
    },
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setValue("attachment", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
      setValue("attachment", null);
    }
  };

  useEffect(() => {
    setValue("employee", user?.id);
  }, [user?.id, setValue]);

  const onSubmit = async (data) => {
    // console.log(data);
    const resultAction = await dispatch(addReceipt(data));

    if (addReceipt.fulfilled.match(resultAction)) {
      reset();
      dispatch(getAllReceipt());
    }
  };

  return (
    <>
      <div className=" bg-white dark:bg-[#1E1E1E] m-5 p-3">
        <div className="container-fluid px-[15px] py-0">
          <div>
            <h1 className="text-dark">Add New Receipt</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="row pt-5">
              <CustomInputs
                control={control}
                name="title"
                type="text"
                label="Title"
                errors={errors}
              />
              <CustomInputs
                control={control}
                name="amount"
                type="number"
                label="Amount"
                errors={errors}
              />

              <CustomSelect
                label="Receipt Type"
                options={[
                  { label: "Expenditure", value: "Expenditure" },
                  { label: "Income", value: "Income" },
                ]}
                name="receiptType"
                control={control}
                errors={errors}
              />

              <CustomSelect
                label="Transaction Type"
                options={[
                  { label: "Rent", value: "Rent" },
                  { label: "Utilities", value: "Utilities" },
                  { label: "Salaries", value: "Salaries" },
                  { label: "Wages", value: "Wages" },
                  { label: "Marketing", value: "Marketing" },
                  { label: "Advertising", value: "Advertising" },
                  { label: "Office Supplies", value: "Office Supplies" },
                  { label: "Raw Materials", value: "Raw Materials" },
                  {
                    label: "Equipment Maintenance",
                    value: "Equipment Maintenance",
                  },
                  { label: "Insurance", value: "Insurance" },
                  { label: "Taxes", value: "Taxes" },
                  { label: "Travel Expenses", value: "Travel Expenses" },
                  { label: "Professional Fees", value: "Professional Fees" },
                  { label: "Loan Interest", value: "Loan Interest" },
                  { label: "Depreciation", value: "Depreciation" },
                  { label: "Sales Revenue", value: "Sales Revenue" },
                  { label: "Service Fees", value: "Service Fees" },
                  { label: "Interest Income", value: "Interest Income" },
                  { label: "Dividend Income", value: "Dividend Income" },
                  { label: "Rental Income", value: "Rental Income" },
                  { label: "Royalties", value: "Royalties" },
                  { label: "Commissions", value: "Commissions" },
                  { label: "Grants", value: "Grants" },
                  { label: "Subsidies", value: "Subsidies" },
                  { label: "Refunds", value: "Refunds" },
                  { label: "Investment Income", value: "Investment Income" },
                  { label: "Membership Fees", value: "Membership Fees" },
                ]}
                name="transactionType"
                control={control}
                errors={errors}
              />

              {/* <div className="xl:w-1/2">
                <label
                  htmlFor="attachment"
                  className="text-body-color form-label"
                >
                  Bill Image
                  <span className="text-danger">*</span>
                </label>
                <input
                  id="attachment"
                  name="attachment"
                  className="form-control relative w-full text-[13px] text-body-color h-[2.813rem] border border-b-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none "
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {errors.attachment && (
                  <div style={{ color: "red" }}>
                    {errors.attachment.message}
                  </div>
                )}
              </div> */}

              <CustomInputs
                control={control}
                name="billedDate"
                type="date"
                label="Bill Date"
                errors={errors}
              />

              <CustomTextArea
                control={control}
                name="description"
                type="text"
                width="w-1/2"
                label="Description"
                errors={errors}
              />

              <div className="flex gap-3">
                <Link
                  onClick={() => navigate(-1)}
                  className="btn xl:py-[0.719rem] py-2.5 xl:px-[1.563rem] px-4 duration-300 xl:text-[15px] text-[13px] font-medium rounded text-danger bg-danger-light leading-5 inline-block border border-danger-light btn-danger light hover:text-white hover:bg-danger offcanvas-close"
                >
                  Cancel
                </Link>
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
      </div>
    </>
  );
};

export default AddReceipt;

AddReceipt.propTypes = {
  currentEducation: PropTypes.object,
};

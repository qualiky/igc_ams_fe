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
import { Icon } from "@iconify/react/dist/iconify.js";
import { postInvoice } from "../../../features/reducer/invoice/invoiceSlice";
import { invoiceService } from "../../../features/api-service/invoice_ai/invoice-action";
import { toast } from "react-toastify";
import Processing from "../../../components/Processing";

const educationSchema = yup.object().shape({
  title: yup.string().required(),
  amount: yup.number().required(),
  receiptType: yup.string().required(),
  transactionType: yup.string().required(),
  description: yup.string(),

  employee: yup.string().required(),
  billedDate: yup.string().required(),
});

const AddReceipt = () => {
  const [responseData, setResponseData] = useState({});

  const [preview, setPreview] = useState(null);

  const [loading, setLoading] = useState(false);

  const [imageError, setImageError] = useState(false);

  const [formData, setFormData] = useState(new FormData());

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
      employee: user?.id,
      billedDate: "",
    },
  });

  useEffect(() => {
    setValue("employee", user?.id);
  }, [user?.id, setValue]);

  useEffect(() => {
    setValue("title", responseData?.company);
    setValue("amount", responseData?.total);
    setValue("receiptType", responseData?.total ? "Expenditure" : "");
    setValue("transactionType", responseData?.total ? "Raw Materials" : "");
    setValue("description", responseData?.terms);
    setValue("billedDate", responseData?.invoice_date);
  }, [setValue, responseData]);

  const onSubmit = async (data) => {
    const resultAction = await dispatch(addReceipt(data));

    if (addReceipt.fulfilled.match(resultAction)) {
      reset();
      setFormData("");
      setPreview("");
      setResponseData({});
      reset();
      dispatch(getAllReceipt());
    }
  };
  // ---------------------------Invoice upload----------------

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Append the file to formData
      const newFormData = new FormData();
      newFormData.append("image", file);
      setFormData(newFormData);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setImageError(false);
      };
      reader.onerror = () => {
        setImageError(true);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleImageSubmit = async () => {
    // eslint-disable-next-line no-extra-boolean-cast
    if (!preview) {
      setImageError(true);
      return;
    }

    try {
      setLoading(true);
      const res = await invoiceService.sendInvoice(formData);
      setResponseData(res?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    setFormData("");
    setPreview("");
    setResponseData({});
  };

  return (
    <>
      {loading && <Processing />}

      <div className="bg-white dark:bg-[#242424] m-5 p-3">
        <div className="container-fluid px-[15px] py-0">
          <div className="  px-2 ">
            <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
              <div className="md:flex">
                <div className="w-full p-3">
                  <div
                    className={`relative border-dotted h-48 rounded-lg border-2 ${
                      imageError ? "border-red-500" : "border-blue-500"
                    } bg-gray-100 dark:bg-[#1E1E1E] flex justify-center items-center`}
                  >
                    <div className="absolute cursor-pointer">
                      <div className="flex flex-col items-center ">
                        <Icon
                          icon="subway:file-11"
                          width={50}
                          className={`${
                            imageError ? "text-red-500" : "text-primary"
                          }`}
                        />
                        <span className="block text-black dark:text-white font-normal mt-3">
                          Upload the bill/receipt image here
                        </span>
                      </div>
                    </div>

                    <input
                      type="file"
                      className="h-full w-full opacity-0  cursor-pointer"
                      onChange={handleFileChange}
                    />
                  </div>
                  {imageError && (
                    <p className="text-danger">Please Select the Image</p>
                  )}
                  {preview && (
                    <div className="relative h-[100px] w-[150px] border-2 border-blue-500 rounded-[10px] p-1 mt-10">
                      <img
                        src={preview}
                        alt="Preview"
                        className="object-cover h-full w-full rounded-lg transition-opacity duration-300 ease-in-out hover:opacity-50  cursor-pointer"
                      />
                      <button
                        onClick={handleRemoveImage}
                        className="absolute top-[-20px] right-[-20px] p-1 bg-[#656565] rounded-full m-1 shadow"
                      >
                        <Icon
                          icon="mdi:close"
                          width={22}
                          className="text-white"
                        />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end mb-3">
              <button
                type="submit"
                onClick={handleImageSubmit}
                className="btn ms-auto  btn-primary xl:py-[0.719rem] py-2.5 xl:px-[1.563rem] px-4 duration-300 xl:text-[15px] text-[13px] font-medium rounded text-white bg-primary leading-5 inline-block border border-primary hover:bg-hover-primary offcanvas-close"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white dark:bg-[#242424] m-5 p-3">
        <div className="container-fluid px-[15px] py-0">
          <div>
            <h1 className="text-dark text-xl font-medium">Add Receipt</h1>
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

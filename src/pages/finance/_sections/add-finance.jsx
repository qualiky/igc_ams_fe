import React, { useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInputs from "../../../components/inputs/custom-inputs";
import CustomSelect from "../../../components/inputs/custom-select";
import { Link, useNavigate } from "react-router-dom";

const financeSchema = yup.object().shape({
  accountTitle: yup.string().required("Account Title is required"),
  amount: yup
    .number()
    .required("Amount is required")
    .positive("Amount must be positive"),
  accountNo: yup.string().required("Account Number is required"),
  branchCode: yup.string().required("Branch Code is required"),
  branchName: yup.string().required("Branch Name is required"),
});

const AddFinance = ({ currentEntry }) => {
  const navigate = useNavigate();

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(financeSchema),
    defaultValues: {
      accountTitle: "",
      amount: "",
      accountNo: "",
      branchCode: "",
      branchName: "",
    },
  });

  useEffect(() => {
    if (currentEntry) {
      reset({
        accountTitle: currentEntry?.accountTitle || "",
        amount: currentEntry?.amount || "",
        accountNo: currentEntry?.accountNo || "",
        branchCode: currentEntry?.branchCode || "",
        branchName: currentEntry?.branchName || "",
      });
    }
  }, [currentEntry, reset]);

  const onSubmit = (data) => {
    console.log("Form data:", data);
    // Dispatch or handle form submission here
    navigate("/finance");
  };

  return (
    <>
      <div className="bg-white m-5 p-3">
        <div className="container-fluid px-[15px] py-0">
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="row pt-5">
              <CustomInputs
                control={control}
                name="accountTitle"
                type="text"
                label="Account Title"
                errors={errors}
              />
              <CustomInputs
                control={control}
                name="amount"
                type="number"
                label="Amount"
                errors={errors}
              />
              <CustomInputs
                control={control}
                name="accountNo"
                type="text"
                label="Account Number"
                errors={errors}
              />
              <CustomInputs
                control={control}
                name="branchCode"
                type="text"
                label="Branch Code"
                errors={errors}
              />
              <CustomInputs
                control={control}
                name="branchName"
                type="text"
                label="Branch Name"
                errors={errors}
              />
              <div className="flex gap-3 mt-4">
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

export default AddFinance;

import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import CustomInputs from "../../../components/inputs/custom-inputs";
import {
  addBankDetails,
  updateBankDetails,
} from "../../../features/reducer/employee/bankSlice";
import { Link, useNavigate } from "react-router-dom";
import { getBankDetail, getLoginData } from "../../../selectors/selectors";
import CustomSelect from "../../../components/inputs/custom-select";
import { bankList } from "../../../_mock/bank-list";
import PropTypes from "prop-types";
import { useEffect } from "react";

const bankSchema = yup.object().shape({
  bankAccountNumber: yup.string().required(),
  bankAccountLabel: yup.string().required(),
  bankAccountHolderName: yup.string().required(),
  bankName: yup.string().required(),
  branchName: yup.string().required(),
  bankAccountType: yup.string().required(),
  employee: yup.string(),
});

const AddEmployeeBankDetails = ({ currentBankAccount }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user } = useSelector(getLoginData);

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bankSchema),
    defaultValues: {
      bankAccountNumber: "",
      bankAccountLabel: "",
      bankAccountHolderName: "",
      bankName: "",
      branchName: "",
      bankAccountType: "",
      employee: "",
    },
  });

  useEffect(() => {
    if (currentBankAccount) {
      reset({
        bankAccountNumber:
          currentBankAccount.attributes?.bankAccountNumber || "",
        bankAccountLabel: currentBankAccount.attributes?.bankAccountLabel || "",
        bankAccountHolderName:
          currentBankAccount.attributes?.bankAccountHolderName || "",
        bankName: currentBankAccount.attributes?.bankName || "",
        branchName: currentBankAccount.attributes?.branchName || "",
        bankAccountType: currentBankAccount.attributes?.bankAccountType || "",
        employee: "1",
      });
    }
  }, [currentBankAccount, reset]);

  const onSubmit = (data) => {
    if (!!currentBankAccount) {
      dispatch(updateBankDetails({ id: currentBankAccount?.id, data }));
    } else {
      dispatch(addBankDetails({ data }));
    }
  };

  return (
    <>
      <div className=" bg-white m-5 p-3">
        <div className="container-fluid px-[15px] py-0">
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="row pt-5">
              {/* <CustomFileUpload
                name="profileImage"
                control={control}
                errors={errors}
              /> */}

              <CustomInputs
                control={control}
                name="bankAccountNumber"
                type="text"
                label="Bank Account Number"
                errors={errors}
              />
              <CustomInputs
                control={control}
                name="bankAccountLabel"
                type="text"
                label="Bank Account Label"
                errors={errors}
              />

              <CustomInputs
                control={control}
                name="bankAccountHolderName"
                type="text"
                label="Account Holder Name"
                errors={errors}
              />
              <CustomSelect
                label="Select Bank"
                options={bankList.map((bank) => ({
                  label: bank.label,
                  value: bank.value,
                }))}
                name="bankName"
                control={control}
                errors={errors}
              />

              <CustomInputs
                control={control}
                name="branchName"
                type="text"
                label="Branch Name"
                errors={errors}
              />

              <CustomSelect
                label="Select Type"
                options={[
                  { label: "Primary", value: "Primary" },
                  { label: "Secondary", value: "Secondary" },
                ]}
                name="bankAccountType"
                control={control}
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

AddEmployeeBankDetails.proptypes = {
  currentBankAccount: PropTypes.object,
};

export default AddEmployeeBankDetails;

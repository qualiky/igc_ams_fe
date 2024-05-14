import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import CustomInputs from "../../../components/inputs/custom-inputs";
import {
  addBankDetails,
  getSingleBankDetails,
  updateBankDetails,
} from "../../../features/reducer/employee/bankSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getBankDetail, getLoginData } from "../../../selectors/selectors";
import CustomSelect from "../../../components/inputs/custom-select";
import { bankList } from "../../../_mock/bank-list";

const bankSchema = yup.object().shape({
  bankAccountNumber: yup.string().required("Firstname is Required"),
  bankAccountLabel: yup.string().required(),
  bankAccountHolderName: yup.string().required(),
  bankName: yup.string().required(),
  branchName: yup.string().required(),
  bankAccountType: yup.string().required(),
  employee: yup.string(),
});

const AddEmployeeBankDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const navigate = useNavigate();

  const { singleBankDetail } = useSelector(getBankDetail);

  const { user } = useSelector(getLoginData);

  useEffect(() => {
    dispatch(getSingleBankDetails(id));
  }, [dispatch, id]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bankSchema),
    defaultValues: {
      bankAccountNumber: singleBankDetail?.attributes?.bankAccountNumber || "",
      bankAccountLabel: singleBankDetail?.attributes?.bankAccountLabel || "",
      bankAccountHolderName:
        singleBankDetail?.attributes?.bankAccountHolderName || "",
      bankName: singleBankDetail?.attributes?.bankName || "",
      branchName: singleBankDetail?.attributes?.branchName || "",
      bankAccountType: "",
      employee: "1",
    },
  });

  const onSubmit = (data) => {
    if (Object.keys(singleBankDetail).length !== 0) {
      // If singleBankDetail exists and is not an empty object, dispatch updateBankDetails
      dispatch(updateBankDetails({ id: singleBankDetail.id, data }));
    } else {
      // If singleBankDetail doesn't exist or is an empty object, dispatch addBankDetails
      dispatch(addBankDetails({ data }));
    }
  };

  // const handleGoBack = () => {
  //   navigate(-1)
  // };

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
                <button
                  onClick={() => navigate(-1)}
                  className="btn xl:py-[0.719rem] py-2.5 xl:px-[1.563rem] px-4 duration-300 xl:text-[15px] text-[13px] font-medium rounded text-danger bg-danger-light leading-5 inline-block border border-danger-light btn-danger light hover:text-white hover:bg-danger offcanvas-close"
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
      </div>
    </>
  );
};

export default AddEmployeeBankDetails;

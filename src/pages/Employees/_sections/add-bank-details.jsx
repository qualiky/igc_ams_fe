import * as yup from "yup";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import CustomInputs from "../../../components/inputs/custom-inputs";

const employeeSchema = yup.object().shape({
  bankAccountNumber: yup.string().required("Firstname is Required"),
  bankAccountLabel: yup.string().required(),
  bankAccountHolderName: yup.string().required(),
  bankName: yup.string().required(),
  branchName: yup.string().required(),
});

const AddEmployeeBankDetails = () => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(employeeSchema),
    defaultValues: {
      bankAccountNumber: "",
      bankAccountLabel: "",
      bankAccountHolderName: "",
      bankName: "",
      branchName: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
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
                errors={errors}
              />
              <CustomInputs
                control={control}
                name="bankAccountLabel"
                type="text"
                errors={errors}
              />

              <CustomInputs
                control={control}
                name="bankAccountHolderName"
                type="text"
                errors={errors}
              />
              <CustomInputs
                control={control}
                name="bankName"
                type="text"
                errors={errors}
              />
              <CustomInputs
                control={control}
                name="branchName"
                type="text"
                errors={errors}
              />

              <div className="flex gap-3">
                <button className="btn xl:py-[0.719rem] py-2.5 xl:px-[1.563rem] px-4 duration-300 xl:text-[15px] text-[13px] font-medium rounded text-danger bg-danger-light leading-5 inline-block border border-danger-light btn-danger light hover:text-white hover:bg-danger offcanvas-close">
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

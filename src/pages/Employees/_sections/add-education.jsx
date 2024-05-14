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

const educationSchema = yup.object().shape({
  programName: yup.string().required(),
  facultyName: yup.string().required(),
  level: yup.string().required(),
  schoolUniName: yup.string().required(),
  employee: yup.string().required(),
});

const AddEducation = () => {
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
    resolver: yupResolver(educationSchema),
    defaultValues: {
      programName: singleBankDetail?.attributes?.bankAccountNumber || "",
      facultyName: singleBankDetail?.attributes?.bankAccountLabel || "",
      level: singleBankDetail?.attributes?.bankAccountHolderName || "",
      schoolUniName: singleBankDetail?.attributes?.bankName || "",
      employee: "1",
    },
  });

  const onSubmit = (data) => {
    if (Object.keys(singleBankDetail).length !== 0) {
      dispatch(updateBankDetails({ id: singleBankDetail.id, data }));
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
              <CustomInputs
                control={control}
                name="programName"
                type="text"
                label="Program Name"
                errors={errors}
              />
              <CustomInputs
                control={control}
                name="facultyName"
                type="text"
                label="Faculty Name"
                errors={errors}
              />

              <CustomInputs
                control={control}
                name="level"
                type="text"
                label="Level"
                errors={errors}
              />

              <CustomInputs
                control={control}
                name="schoolUniName"
                type="text"
                label="School Name"
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

export default AddEducation;

import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import CustomInputs from "../../../components/inputs/custom-inputs";
import {
  addBankDetails,
  getSingleBankDetails,
  updateBankDetails,
} from "../../../features/reducer/employee/bankSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  addEducation,
  updateEducation,
} from "../../../features/reducer/employee/educationSlice";

const educationSchema = yup.object().shape({
  programName: yup.string().required(),
  facultyName: yup.string().required(),
  level: yup.string().required(),
  schoolUniName: yup.string().required(),
});

const AddEducation = ({ currentEducation }) => {
  const dispatch = useDispatch();
  console.log(currentEducation);
  const navigate = useNavigate();

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(educationSchema),
    defaultValues: {
      programName: "",
      facultyName: "",
      level: "",
      schoolUniName: "",
    },
  });

  useEffect(() => {
    console.log("Hello I am use Effect");
    if (currentEducation) {
      reset({
        programName: currentEducation?.attributes?.programName || "",
        facultyName: currentEducation?.attributes?.facultyName || "",
        level: currentEducation?.attributes?.level || "",
        schoolUniName: currentEducation?.attributes?.schoolUniName || "",
      });
    }
  }, [currentEducation, reset]);

  const onSubmit = (data) => {
    if (!!currentEducation) {
      dispatch(updateEducation({ id: currentEducation?.id, data }));
    } else {
      dispatch(addEducation({ data }));
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

export default AddEducation;

AddEducation.prototypes = {
  currentEducation: PropTypes.object,
};

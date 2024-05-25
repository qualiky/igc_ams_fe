import * as yup from "yup";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import CustomInputs from "../../../components/inputs/custom-inputs";
import CustomSelect from "../../../components/inputs/custom-select";
import {
  addEmployee,
  updateEmployee,
} from "../../../features/reducer/employee/employeeSlice";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const employeeSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  userName: yup.string().required(),
  gender: yup.string().required(),
  dateOfBirth: yup.string().required(),
  bloodGroup: yup.string().required(),
  maritalStatus: yup.string().required(),
  primaryEmail: yup.string().email().required(),
  middleName: yup.string(),
});

const AddEmployee = ({ currentUser }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(employeeSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
      gender: "",
      dateOfBirth: "",
      bloodGroup: "",
      maritalStatus: "",
      primaryEmail: "",
      middleName: "",
    },
  });

  useEffect(() => {
    if (currentUser) {
      reset({
        firstName: currentUser?.attributes?.firstName || "",
        lastName: currentUser?.attributes?.lastName || "",
        userName: currentUser?.attributes?.userName || "",
        gender: currentUser?.attributes?.gender || "",
        dateOfBirth: currentUser?.attributes?.dateOfBirth || "",
        bloodGroup: currentUser?.attributes?.bloodGroup || "",
        maritalStatus: currentUser?.attributes?.maritalStatus || "",
        primaryEmail: currentUser?.attributes?.primaryEmail || "",
      });
    }
  }, [currentUser, reset]);

  const onSubmit = (data) => {
    if (!!currentUser) {
      dispatch(updateEmployee({ id: currentUser.id, data }));
    } else {
      dispatch(addEmployee({ data: data }));
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
                name="firstName"
                type="text"
                label="First Name"
                errors={errors}
              />
              <CustomInputs
                control={control}
                name="middleName"
                type="text"
                label="Middle Name"
                errors={errors}
              />

              <CustomInputs
                control={control}
                name="lastName"
                type="text"
                label="Last Name"
                errors={errors}
              />
              <CustomInputs
                control={control}
                name="primaryEmail"
                type="email"
                label="Email"
                errors={errors}
              />
              <CustomInputs
                control={control}
                name="userName"
                type="text"
                label="Username"
                errors={errors}
              />

              <CustomSelect
                label="Gender"
                options={[
                  { label: "Male", value: "Male" },
                  { label: "Female", value: "Female" },
                  { label: "Other", value: "Other" },
                  { label: "Prefer Not To Say", value: "Prefer Not To Say" },
                ]}
                name="gender"
                control={control}
                errors={errors}
              />

              <CustomInputs
                control={control}
                name="dateOfBirth"
                type="date"
                label="Date of Birth"
                errors={errors}
              />

              <CustomSelect
                label="Blood Group"
                options={[
                  { label: "A-Positive", value: "A-Positive" },
                  { label: "A-Negative", value: "A-Negative" },
                  { label: "B-Positive", value: "B-Positive" },
                  { label: "B-Negative", value: "B-Negative" },
                  { label: "AB-Positive", value: "AB-Positive" },
                  { label: "AB-Negative", value: "AB-Negative" },
                ]}
                name="bloodGroup"
                control={control}
                errors={errors}
              />

              <CustomSelect
                label="Marital Status"
                options={[
                  { label: "Married", value: "Married" },
                  { label: "Unmarried", value: "Unmarried" },
                ]}
                name="maritalStatus"
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

export default AddEmployee;

AddEmployee.prototypes = {
  currentUser: PropTypes.object,
};

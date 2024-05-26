import * as yup from "yup";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import CustomInputs from "../../../components/inputs/custom-inputs";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomSelect from "../../../components/inputs/custom-select";
import { provienceData } from "../../../const/provience-data";
import CustomFileUpload from "../../../components/inputs/custom-file-upload";

const validationSchema = yup.object().shape({
  citizenshipNumber: yup.string().required("Citizenship Number is required"),
  citizenshipIssuedProvince: yup
    .string()
    .required("Citizenship Issued Province is required"),
  citizenshipIssuedDistrict: yup
    .string()
    .required("Citizenship Issued District is required"),
  issuedMunicipalRegion: yup
    .string()
    .required("Issued Municipal Region is required"),
  citizenshipIssueDate: yup
    .date()
    .required("Citizenship Issue Date is required")
    .typeError("Invalid date format"),
  citizenshipIssueProvince: yup
    .string()
    .required("Citizenship Issue Province is required"),
  passportNumber: yup.string().required("Passport Number is required"),
  panNumber: yup.string().required("PAN Number is required"),
  panIssueDistrict: yup.string().required("PAN Issue District is required"),
  panIssueDate: yup
    .date()
    .required("PAN Issue Date is required")
    .typeError("Invalid date format"),
  piiRemarks: yup.string().required("PII Remarks are required"),
  citizenshipScanCopy: yup
    .array()
    .of(yup.string().required("Citizenship Scan Copy is required"))
    .min(1, "At least one Citizenship Scan Copy is required"),
  panScanCopy: yup
    .array()
    .of(yup.string().required("PAN Scan Copy is required"))
    .min(1, "At least one PAN Scan Copy is required"),
  employee: yup.string().required("Employee is required"),
});
const AddPersonalIdentification = ({ currentEducation }) => {
  const {
    control,
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      citizenshipNumber: "",
      nationalIdNumber: "",
      citizenshipIssuedProvince: "",
      citizenshipIssuedDistrict: "",
      citizenshipIssueDate: "",
      citizenshipIssueProvince: "",
      passportNumber: "",
      panNumber: "",
      panIssueDistrict: "",
      panIssueDate: "",
      piiRemarks: "",
      citizenshipScanCopy: [],
      panScanCopy: [],
      employee: "",
    },
  });

  const selectedProvince = watch("citizenshipIssuedProvince", "");
  const [districtOptions, setDistrictOptions] = useState([]);

  const handleProvinceChange = (province) => {
    const selectedProvinceData = provienceData.find((p) => p.name === province);
    setDistrictOptions(
      selectedProvinceData
        ? selectedProvinceData.districts.map((district) => ({
            label: district,
            value: district,
          }))
        : []
    );
    setValue("citizenshipIssuedDistrict", ""); // Reset district selection when province changes
  };

  useEffect(() => {
    handleProvinceChange(selectedProvince);
  }, [selectedProvince]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentEducation) {
      reset({
        citizenshipNumber: "",
        citizenshipIssueDate: "",
        citizenshipIssuedProvince: "",
        citizenshipIssuedDistrict: "",
        citizenshipIssueProvince: "",
        issuedMunicipalRegion: "",
        nationalIdNumber: "",
        passportNumber: "",
        panNumber: "",
        panIssueDistrict: "",
        panIssueDate: "",
        piiRemarks: "",
        citizenshipScanCopy: [],
        panScanCopy: [],
        employee: "",
      });
    }
  }, [currentEducation, reset]);

  const onSubmit = (data) => {
    // eslint-disable-next-line no-extra-boolean-cast
    console.log(data);
  };

  return (
    <>
      <div className=" bg-white m-5 p-3">
        <div className="container-fluid px-[15px] py-0">
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="row pt-5">
              <h1 className="text-2xl font-medium mt-2 mb-5">
                Citizenship Detail
              </h1>
              <CustomInputs
                control={control}
                name="citizenshipNumber"
                type="text"
                label="Citizenship Number"
                errors={errors}
              />

              <CustomInputs
                control={control}
                name="citizenshipIssueDate"
                type="date"
                label="Citizenship Issue Date"
                errors={errors}
              />

              <CustomSelect
                label="Issued Provience"
                options={provienceData.map((p) => ({
                  label: p.name,
                  value: p.name,
                }))}
                name="citizenshipIssuedProvince"
                onChange={(e) => handleProvinceChange(e.target.value)}
                control={control}
                errors={errors}
              />

              <CustomSelect
                label="Issued District"
                options={districtOptions}
                name="citizenshipIssuedDistrict"
                control={control}
                errors={errors}
              />

              <CustomInputs
                control={control}
                name="citizenshipScanCopy[0]"
                type="file"
                label="Citizenship Front"
                errors={errors}
              />
              <CustomInputs
                control={control}
                name="citizenshipScanCopy[1]"
                type="file"
                label="Citizenship Back"
                errors={errors}
              />

              <h1 className="text-2xl font-medium mt-5 mb-5">PAN Detail</h1>

              <CustomInputs
                control={control}
                name="citizenshipNumber"
                type="text"
                label="Citizenship Number"
                errors={errors}
              />
              <CustomInputs
                control={control}
                name="citizenshipIssueDate"
                type="date"
                label="Citizenship Issue Date"
                errors={errors}
              />

              <CustomSelect
                label="Issued Provience"
                options={provienceData.map((p) => ({
                  label: p.name,
                  value: p.name,
                }))}
                name="citizenshipIssuedProvince"
                onChange={(e) => handleProvinceChange(e.target.value)}
                control={control}
                errors={errors}
              />

              <CustomSelect
                label="Issued District"
                options={districtOptions}
                name="citizenshipIssuedProvince"
                control={control}
                errors={errors}
              />

              <CustomInputs
                control={control}
                name="panScanCopy[0]"
                type="file"
                label="Citizenship Front"
                errors={errors}
              />
              <CustomInputs
                control={control}
                name="panScanCopy[1]"
                type="file"
                label="Citizenship Back"
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

export default AddPersonalIdentification;

AddPersonalIdentification.propTypes = {
  currentEducation: PropTypes.object,
};

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddPersonalIdentification from "../_sections/add-personal-information";
import { getSinglePersonalInformation } from "../../../features/reducer/employee/personalInfoSlice";

const EditPersonalInfoView = () => {
  const [personalInfo, setPersonalInfo] = useState({});

  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    dispatch(getSinglePersonalInformation(params?.id));
  }, [params?.id, dispatch]);

  //   const { singleEducation } = useSelector(getSingleEducationDetail);

  //   useEffect(() => {
  //     setEducationData(singleEducation);
  //   }, [singleEducation]);

  return (
    <>
      <AddPersonalIdentification />
    </>
  );
};

export default EditPersonalInfoView;

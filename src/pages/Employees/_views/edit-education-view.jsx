import React, { useEffect, useState } from "react";
import AddEducation from "../_sections/add-education";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleEducation } from "../../../features/reducer/employee/educationSlice";
import {
  getSingleBankDetail,
  getSingleEducationDetail,
} from "../../../selectors/selectors";

const EditEducationView = () => {
  const [educationData, setEducationData] = useState({});
  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    dispatch(getSingleEducation(params?.id));
  }, [params?.id, dispatch]);

  const { singleEducation } = useSelector(getSingleEducationDetail);

  console.log(singleEducation);

  useEffect(() => {
    setEducationData(singleEducation);
  }, [singleEducation]);

  return (
    <>
      <AddEducation currentEducation={educationData} />
    </>
  );
};

export default EditEducationView;

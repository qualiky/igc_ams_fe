import React, { useEffect, useState } from "react";
import AddEmployee from "../_sections/add-employee";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleEmployee } from "../../../features/reducer/employee/employeeSlice";
import { getAllEmployeeData } from "../../../selectors/selectors";

const EditAccountInfo = () => {
  const [userData, setUserData] = useState({});

  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    dispatch(getSingleEmployee(params?.id));
  }, [params?.id, dispatch]);

  const { employeeDetail } = useSelector(getAllEmployeeData);

  useEffect(() => {
    setUserData(employeeDetail);
  }, [employeeDetail]);

  return (
    <>
      <AddEmployee currentUser={userData} />
    </>
  );
};

export default EditAccountInfo;

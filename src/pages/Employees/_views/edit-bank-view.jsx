import React, { useEffect, useState } from "react";
import AddEmployeeBankDetails from "../_sections/add-bank-details";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleBankDetails } from "../../../features/reducer/employee/bankSlice";
import { getSingleBankDetail } from "../../../selectors/selectors";

const EditBankView = () => {
  const [bankData, setBankData] = useState({});
  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    dispatch(getSingleBankDetails(params?.id));
  }, [params?.id, dispatch]);

  const { singleBankDetail } = useSelector(getSingleBankDetail);

  useEffect(() => {
    setBankData(singleBankDetail);
  }, [singleBankDetail]);

  return (
    <>
      <AddEmployeeBankDetails currentBankAccount={bankData} />
    </>
  );
};

export default EditBankView;

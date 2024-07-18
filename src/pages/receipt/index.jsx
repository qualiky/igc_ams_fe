import { Outlet } from "react-router-dom";
import Breadcumb from "../../components/Breadcumb";

const Receipt = () => {
  return (
    <>
      <div className="content-body">
        <Breadcumb title="Home" subtitle="Receipt" />

        <Outlet />
      </div>
    </>
  );
};

export default Receipt;

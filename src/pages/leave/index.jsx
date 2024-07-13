import { Outlet } from "react-router-dom";
import Breadcumb from "../../components/Breadcumb";

const Leave = () => {
  return (
    <>
      <div className="content-body">
        <Breadcumb title="Home" subtitle="Leave" />

        <Outlet />
      </div>
    </>
  );
};

export default Leave;

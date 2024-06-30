import { Outlet } from "react-router-dom";
import Breadcumb from "../../components/Breadcumb";
import LeaveView from "./_sections/LeaveView";

const Leave = () => {
  return (
    <>
      <div className="content-body">
        <Breadcumb title="Home" subtitle="Leave" />

        {/* <LeaveView /> */}
        <Outlet />
      </div>
    </>
  );
};

export default Leave;

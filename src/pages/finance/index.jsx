import { Outlet } from "react-router-dom";
import Breadcumb from "../../components/Breadcumb";

const Finance = () => {
  return (
    <>
      <div className="content-body">
        <Breadcumb title="Home" subtitle="Finance" />

        <Outlet />
      </div>
    </>
  );
};

export default Finance;

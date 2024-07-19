import { Outlet } from "react-router-dom";
import Breadcumb from "../../components/Breadcumb";

const Clients = () => {
  return (
    <>
      <div className="content-body">
        <Breadcumb title="Home" subtitle="Clients" />

        <Outlet />
      </div>
    </>
  );
};

export default Clients;

import { Outlet } from "react-router-dom";
import Breadcumb from "../../components/Breadcumb";

const Project = () => {
  return (
    <>
      <div className="content-body">
        <Breadcumb title="Home" subtitle="Project" />

        <Outlet />
      </div>
    </>
  );
};

export default Project;

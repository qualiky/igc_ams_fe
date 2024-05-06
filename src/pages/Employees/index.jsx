import { Outlet } from "react-router-dom";
import Breadcumb from "../../components/Breadcumb";

const Employee = () => {
  return (
    <>
      <div className="content-body">
        {/* <!-- row -->	 */}
        <Breadcumb title="Home" subtitle="Employee" />

        <Outlet />
      </div>
    </>
  );
};

export default Employee;

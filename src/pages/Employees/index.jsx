import { Outlet } from "react-router-dom";
import Breadcumb from "../../components/Breadcumb";
import { useEffect } from "react";

const Employee = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
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

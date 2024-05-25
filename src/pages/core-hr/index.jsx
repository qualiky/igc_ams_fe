import { Outlet } from "react-router-dom";
import Breadcumb from "../../components/Breadcumb";

const CoreHr = () => {
  return (
    <>
      <div className="content-body">
        {/* <!-- row -->	 */}
        <Breadcumb title="Home" subtitle="Core HR" />

        <Outlet />
      </div>
    </>
  );
};

export default CoreHr;

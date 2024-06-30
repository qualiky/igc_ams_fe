import { Outlet } from "react-router-dom";

const SalesPage = () => {
  return (
    <>
      <div className="content-body">
        <Outlet />
      </div>
    </>
  );
};

export default SalesPage;

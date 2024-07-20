import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const SalesPage = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content-body">
        <Outlet />
      </div>
    </>
  );
};

export default SalesPage;

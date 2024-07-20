import { Outlet } from "react-router-dom";
import Breadcumb from "../../components/Breadcumb";
import { useEffect } from "react";

const Tickets = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="content-body">
        <Breadcumb title="Home" subtitle="Tickets" />

        <Outlet />
      </div>
    </>
  );
};

export default Tickets;

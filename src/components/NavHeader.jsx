/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import toggleSidebar from "../features/reducer/project/projectSlice";

const NavHeader = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    // dispatch(toggleSidebar());
  };

  return (
    <>
      <div className="nav-header">
        <Link to="/" className="brand-logo hidden sm:flex w-full h-auto">
          <img src="/assets/logo/logo.png" className="" />
        </Link>
        <div className="nav-control" id="togglerrr">
          <div className="hamburger" onClick={handleToggle}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavHeader;

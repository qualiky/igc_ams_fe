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
        {/* for large screens */}
        <Link to="/" className="brand-logo hidden md:flex w-full h-auto">
          <img src="/assets/logo/logo.png" alt="Brand Logo" />
        </Link>

        {/* for small screens */}
        {/* <Link to="/" className="brand-logo flex md:hidden w-full h-auto">
          <img src="/apple-touch-icon1.png" alt="Brand Icon" />
        </Link> */}

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

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { paths } from "../routes/path";
import Goback from "./Goback";
import { useEffect } from "react";

const Breadcumb = ({ title, subtitle }) => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" page-titles dark:bg-[#242424] flex items-center justify-between relative border-b border-[#E6E6E6] dark:border-[#444444] flex-wrap z-[1] py-[2rem] sm:px-[1.95rem] px-[1.55rem] bg-white">
      <ol className="text-[13px] flex items-center flex-wrap bg-transparent">
        {subtitle !== "Home" && <Goback />}

        <li>
          <Link
            className="text-[#828690]  dark:text-white text-[13px] hover:font-bold"
            to={paths.dashboard.root}
          >
            {title}
          </Link>
        </li>
        <li className="pl-2 before:content-['/'] before:font-[simple-line-icons] before:font-black before:text-xl before:leading-4 before:pr-2 before:float-left before:text-primary text-primary font-medium">
          <a>{subtitle}</a>
        </li>
      </ol>
      {/* <a
        className="text-primary text-xl dark:text-white leading-[1.5] offcanvas-toggle"
        href="#offcanvasExample1"
        data-dz-offcanvas="offcanvasExample1"
      >
        {subtitle}
      </a> */}
    </div>
  );
};

export default Breadcumb;

Breadcumb.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

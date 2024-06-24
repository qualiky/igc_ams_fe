import { Icon } from "@iconify/react/dist/iconify.js";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Breadcumb = ({ title, subtitle }) => {
  return (
    <div className=" page-titles dark:bg-[#242424] flex items-center justify-between relative border-b border-[#E6E6E6] dark:border-[#444444] flex-wrap z-[1] py-[2rem] sm:px-[1.95rem] px-[1.55rem] bg-white">
      <ol className="text-[13px] flex items-center flex-wrap bg-transparent">
        {subtitle !== "Home" && (
          <li className="mr-5 pt-[3px]">
            <Link
              className="inline-block rounded-full border border-blue-400  text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring "
              to="/"
            >
              <Icon icon="uil:arrow-left" className="text-3xl" />
            </Link>
          </li>
        )}
        {/* <li>
          <h5 className="sm:text-[17px] text-[15px] mr-8">{subtitle}</h5>
        </li> */}
        <li>
          <a className="text-[#828690]  dark:text-white text-[13px]">{title}</a>
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

import PropTypes from "prop-types";

const Breadcumb = ({ title, subtitle }) => {
  return (
    <div className=" page-titles dark:bg-[#242424] flex items-center justify-between relative border-b border-[#E6E6E6] dark:border-[#444444] flex-wrap z-[1] py-[2rem] sm:px-[1.95rem] px-[1.55rem] bg-white">
      <ol className="text-[13px] flex items-center flex-wrap bg-transparent">
        <li>
          <h5 className="sm:text-[17px] text-[15px] mr-8">{subtitle}</h5>
        </li>
        <li>
          <a className="text-[#828690]  dark:text-white text-[13px]">{title}</a>
        </li>
        <li className="pl-2 before:content-['/'] before:font-[simple-line-icons] before:font-black before:text-xl before:leading-4 before:pr-2 before:float-left before:text-primary text-primary font-medium">
          <a>{subtitle}</a>
        </li>
      </ol>
      <a
        className="text-primary dark:text-white text-[0.8125rem] leading-[1.5] offcanvas-toggle"
        href="#offcanvasExample1"
        data-dz-offcanvas="offcanvasExample1"
      >
        + Add Task
      </a>
    </div>
  );
};

export default Breadcumb;

Breadcumb.prototypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

import notFoundImage from "/assets/3d/notFound.png";
import PropTypes from "prop-types";

const NotFound = ({ title }) => {
  return (
    <div className="flex items-center justify-center flex-col h-full w-full">
      <div className="h-28 w-28">
        <img src={notFoundImage} alt="Not Found Image" />
      </div>
      <h3 className="text-xl font-semibold ">{title}</h3>
    </div>
  );
};
NotFound.propTypes = {
  title: PropTypes.string,
};
export default NotFound;

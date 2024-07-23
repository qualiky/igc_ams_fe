import PropTypes from "prop-types";

const Markdown = ({ htmlContent, className }) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

Markdown.propTypes = {
  htmlContent: PropTypes.string,
  className: PropTypes.string,
};

export default Markdown;

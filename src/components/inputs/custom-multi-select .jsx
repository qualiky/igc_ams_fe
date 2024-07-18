import PropTypes from "prop-types";
import { useState } from "react";

const CustomMultiSelect = ({ label, options, name, control, errors }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option.value)
        ? prev.filter((item) => item !== option.value)
        : [...prev, option.value]
    );
  };

  return (
    <>
      <div className="relative mb-4">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <div className="border rounded-md p-2 mt-1">
          {selectedOptions.map((option, index) => (
            <span
              key={index}
              className="bg-blue-500 text-white rounded-full px-2 py-1 text-sm mr-1"
            >
              {option}
            </span>
          ))}
        </div>
        <div className="absolute mt-1 w-full bg-white border rounded-md shadow-lg z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className={`p-2 cursor-pointer hover:bg-gray-200 ${
                selectedOptions.includes(option.value) ? "bg-gray-300" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
        {errors && errors[name] && (
          <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
        )}
      </div>
    </>
  );
};

CustomMultiSelect.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default CustomMultiSelect;

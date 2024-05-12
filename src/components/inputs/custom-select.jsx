import React from "react";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";

const CustomSelect = ({ label, options, name, control, errors }) => {
  return (
    <>
      <div className="xl:w-1/2 mb-4 flex flex-col">
        <label className="form-label">
          {label}
          <span className="text-danger">*</span>
        </label>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <select
              {...field}
              className="style-1 py-1.5 px-3 bg-transparent text-[13px] font-normal outline-none relative focus:ring-0 border border-b-color text-[#a5a5a5] h-[2.813rem] leading-[1.813rem]"
            >
              <option value="" disabled>
                Please select
              </option>
              {options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        />
        {errors[name] && (
          <span className="text-danger text-[10px]">
            {name.charAt(0).toUpperCase() + name.slice(1)} is required
          </span>
        )}
      </div>
    </>
  );
};

CustomSelect.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default CustomSelect;

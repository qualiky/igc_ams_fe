import { Controller } from "react-hook-form";
import PropTypes from "prop-types";

const CustomInputs = ({ control, name, type, label, errors }) => {
  return (
    <>
      <div className="xl:w-1/2 mb-4">
        <label htmlFor={name} className="form-label">
          {label}
          <span className="text-danger">*</span>
        </label>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type={type}
              className="form-control relative text-[13px] text-body-color h-[2.813rem] border border-b-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full"
              id={name}
              placeholder={`Enter ${label}`}
            />
          )}
        />
        {errors[name] && (
          <span className="text-danger text-[10px]">{label} is required</span>
        )}
      </div>
    </>
  );
};

CustomInputs.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
};

export default CustomInputs;

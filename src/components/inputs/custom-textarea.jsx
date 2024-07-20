import { Controller } from "react-hook-form";
import PropTypes from "prop-types";

const CustomTextArea = ({ control, name, width = "w-1/2", label, errors }) => {
  return (
    <div className={`xl:${width} mb-4`}>
      <label htmlFor={name} className="text-body-color form-label">
        {label}
        <span className="text-danger">*</span>
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <textarea
            {...field}
            className="form-control relative text-[13px] text-body-color border border-b-color block rounded-md py-1.5 px-3 duration-500 focus:border-primary dark:hover:border-b-color outline-none w-full"
            id={name}
            rows={4}
            placeholder={`Enter ${label.toLowerCase()}...`}
          />
        )}
      />
      {errors[name] && (
        <span className="text-danger text-[10px]">{label} is required</span>
      )}
    </div>
  );
};

CustomTextArea.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  width: PropTypes.string,
  value: PropTypes.string,
};

export default CustomTextArea;

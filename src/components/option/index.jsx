import { Controller } from "react-hook-form";
import "./option.css";
const Option = ({ methods, name, label, options }) => {
  const { control } = methods;
  return (
    <div className="row">
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <select {...field}>
              <option value="">{label}</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {fieldState.error && (
              <p style={{ color: "red" }}>{fieldState.error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};
export default Option;

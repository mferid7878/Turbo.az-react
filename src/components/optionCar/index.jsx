import React from "react";
import { Controller } from "react-hook-form";

const OptionCar = ({ methods, name, label, options, disabled = false }) => {
  const { control } = methods;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <select {...field} disabled={disabled}>
              <option>Select {label}</option>
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

export default OptionCar;

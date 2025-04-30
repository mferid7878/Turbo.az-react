import "./milage.css";
import { Controller } from "react-hook-form";
const Milage = ({ methods, name, label }) => {
  const { control } = methods;
  return (
    <div className="milage">
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <input type="number" {...field} />
            <div className="radio_buttons">
              <input type="radio" {...field} name="milage" value="km" />
              <label htmlFor="">km</label>
              <input type="radio" {...field} name="milage" value="miles" />
              <label htmlFor="">mil</label>
            </div>
            {fieldState.error && (
              <p style={{ color: "red" }}>{fieldState.error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};
export default Milage;

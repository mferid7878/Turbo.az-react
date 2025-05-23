import "./price.css";
import { Controller } from "react-hook-form";
const Price = ({ methods, name, label }) => {
  const { control } = methods;
  return (
    <div className="price">
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <input type="number" {...field} />
            <div className="radio_buttons">
              <input type="radio" {...field} name="price" value="AZN" />
              <label htmlFor="">AZN</label>
              <input type="radio" {...field} name="price" value="USD" />
              <label htmlFor="">USD</label>
              <input type="radio" {...field} name="price" value="EUR" />
              <label htmlFor="">EUR</label>
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
export default Price;

import { Controller } from "react-hook-form";
const Price = ({ methods, name, label, options }) => {
  const { control } = methods;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <input type="number" {...field} min={0} />

            <input type="radio" {...field} value="0" name="price" />
            <label htmlFor="">AZN</label>
            <input type="radio" {...field} value="1" name="price" />
            <label htmlFor="">USD</label>
            <input type="radio" {...field} value="2" name="price" />
            <label htmlFor="">EUR</label>

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

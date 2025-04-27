import React, { useCallback } from "react";
import OptionCar from "../../components/optionCar";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const NewAnnouncement = () => {
  // Validation schema
  const validationSchema = yup.object().shape({
    name: yup.string().required("Car name is required"),
    model: yup.string().required("Car model is required"),
  });

  const useYupValidationResolver = (validationSchema) =>
    useCallback(
      async (data) => {
        try {
          const values = await validationSchema.validate(data, {
            abortEarly: false,
          });

          return {
            values,
            errors: {},
          };
        } catch (errors) {
          return {
            values: {},
            errors: errors.inner.reduce(
              (allErrors, currentError) => ({
                ...allErrors,
                [currentError.path]: {
                  type: currentError.type ?? "validation",
                  message: currentError.message,
                },
              }),
              {}
            ),
          };
        }
      },
      [validationSchema]
    );

  const methods = useForm({
    defaultValues: {
      name: "",
      model: "",
      year: "",
      color: "",
      engine: "",
      milage: "",
      price: "",
    },
    resolver: useYupValidationResolver(validationSchema),
  });

  const carsData = [
    { name: "Toyota", models: ["Corolla", "Camry", "RAV4"] },
    { name: "BMW", models: ["X5", "X3", "3 Series"] },
    { name: "Mercedes", models: ["C-Class", "E-Class", "GLA"] },
  ];

  const carNames = carsData.map((car) => car.name);
  const selectedCarName = methods.watch("name");
  const carModels =
    carsData.find((car) => car.name === selectedCarName)?.models || [];

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <h3>Elan yerləşdirmək</h3>
      <ul className="conditions">
        <li>
          Üç ay ərzində bir nəqliyyat vasitəsi yalnız bir dəfə pulsuz dərc oluna
          bilər.
        </li>
        <li>
          Üç ay ərzində təkrar və ya oxşar elanlar (marka/model, rəng)
          ödənişlidir.
        </li>
        <li>
          Elanınızı saytın ön sıralarında görmək üçün "İrəli çək" xidmətindən
          istifadə edin
        </li>
      </ul>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <OptionCar
          methods={methods}
          name="name"
          label="Car Name"
          options={carNames}
        />
        <OptionCar
          methods={methods}
          name="model"
          label="Car Model"
          options={carModels}
          disabled={!selectedCarName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewAnnouncement;

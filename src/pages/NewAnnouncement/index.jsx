import "./NewAnnouncement.css";
import React, { useCallback } from "react";
import OptionCar from "../../components/optionCar";
import Option from "../../components/option";
import Price from "../../components/price";
import Milage from "../../components/milage";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { carsData } from "../../hooks/useStaticFormData";
import { carColors } from "../../hooks/useStaticFormData";
import { years } from "../../hooks/useStaticFormData";
import { engineTypes } from "../../hooks/useStaticFormData";
import { transmissionTypes } from "../../hooks/useStaticFormData";

const NewAnnouncement = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().required("Car name is required"),
    model: yup.string().required("Car model is required"),
    year: yup.string().required("Year is required"),
    color: yup.string().required("Color is required"),
    engine: yup.string().required("Engine type is required"),
    milage: yup.string().required("Milage is required"),
    price: yup.string().required("Price is required"),
    transmission: yup.string().required("Transmission type is required"),
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
        <div className="columns">
          <div className="column">
            <OptionCar
              methods={methods}
              name="name"
              label="Marka"
              options={carNames}
            />
            <OptionCar
              methods={methods}
              name="model"
              label="Model"
              options={carModels}
              disabled={!selectedCarName}
            />
            <Milage methods={methods} name="milage" label="Milage" />
            <Option
              methods={methods}
              name="color"
              label="Rəng"
              options={carColors}
            />
            <Price methods={methods} name="price" label="Qiymət" />
          </div>
          <div className="column">
            <Option methods={methods} name="year" label="İl" options={years} />
            <Option
              methods={methods}
              name="engine"
              label="Mühərrik"
              options={engineTypes}
            />
            <Option
              methods={methods}
              name="transmission"
              label="Sürətlər qutusu"
              options={transmissionTypes}
            />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewAnnouncement;

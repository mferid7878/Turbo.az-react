import React from "react";
import { useLocation } from "react-router-dom";
import "./CarDetails.css";

function CarDetails() {
  const { state } = useLocation();
  const car = state.car;

  if (!car) {
    return <p>Error: Car data not found. Please go back and try again.</p>;
  }

  return (
    <div className="car-details">
      <img src={car.avatar} alt={car.name} className="car-details-image" />
      <div className="properities">
        <div className="label">
          <p>Marka</p>
          <p>Model</p>
          <p>İl</p>
          <p>Mühərrik</p>
          <p>Yürüş</p>
        </div>
        <div className="props">
          <p>{car.name}</p>
          <p>{car.model}</p>
          <p>{car.year}</p>
          <p>{car.engine}</p>
          <p>{car.mileage}</p>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;

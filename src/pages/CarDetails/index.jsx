import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./CarDetails.module.css";

function CarDetails() {
  const { state } = useLocation();
  const car = state.car;

  if (!car) {
    return <p>Error: Car data not found. Please go back and try again.</p>;
  }

  return (
    <div className={styles["car-details"]}>
      <img
        src={car.image}
        alt={car.name}
        className={styles["car-details-image"]}
      />
      <div className={styles.properities}>
        <div className={styles.label}>
          <p>Marka</p>
          <p>Model</p>
          <p>Buraılış ili</p>
          <p>Rəng</p>
          <p>Mühərrik</p>
          <p>Yürüş</p>
        </div>
        <div className={styles.props}>
          <p>{car.name}</p>
          <p>{car.model}</p>
          <p>{car.year}</p>
          <p>{car.color}</p>
          <div className={styles.engine}>
            <span>{car.engine.usage}L\</span>
            <span>{car.engine.power}a.g\</span>
            <span>{car.engine.fuel}</span>
          </div>
          <p>{car.milage} km</p>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;

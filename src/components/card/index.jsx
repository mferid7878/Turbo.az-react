import React, { use } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./card.module.css";
import LikeButton from "../button/index.jsx";

function Card({ car }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/car/${car.id}`, { state: { car } });
  };

  return (
    <div className={styles["car-card"]}>
      <div className={styles["image-container"]}>
        <img onClick={handleCardClick} src={car.image} alt={car.name} />
        <div className={styles.icons}>
          <LikeButton buttonId={car.id} buttonName={buttonName} />
        </div>
      </div>
      <div className={styles["car-details"]}>
        <p className={styles.price}>{car.price}</p>
        <p className={styles["car-model"]}>
          {car.name}&nbsp;{car.model}
        </p>
        <p className={styles.specs}>
          {car.year}, {car.engine.usage}L, {car.milage}km
        </p>
      </div>
    </div>
  );
}

export default Card;

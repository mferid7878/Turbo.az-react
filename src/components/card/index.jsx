import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./card.module.css";

function Card({ car }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/car/${car.id}`, { state: { car } });
  };

  return (
    <div className={styles["car-card"]} onClick={handleCardClick}>
      <div className={styles["image-container"]}>
        <img src={car.image} alt={car.name} />
        <div className={styles.icons}>
          <span className={`${styles.icon} ${styles.crown}`}>👑</span>
          <span className={`${styles.icon} ${styles.heart}`}>❤️</span>
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

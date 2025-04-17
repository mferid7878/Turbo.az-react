import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";

function Card({ car }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/car/${car.id}`, { state: { car } });
  };

  return (
    <div className="car-card" onClick={handleCardClick}>
      <div className="image-container">
        <img src={car.avatar} alt={car.marka} />
        <div className="icons">
          <span className="icon crown">👑</span>
          <span className="icon heart">❤️</span>
        </div>
      </div>
      <div className="car-details">
        <p className="price">{car.price}</p>
        <p className="model">
          {car.marka} {car.model}
        </p>
        <p className="specs">
          {car.year}, {car.engine}, {car.mileage}
        </p>
      </div>
    </div>
  );
}

export default Card;

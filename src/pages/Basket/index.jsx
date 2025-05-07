import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket } from "../../features/basketSlice";
import useFetchData from "../../hooks/useFetchData";
import Card from "../../components/card";
import "./Basket.css";

const Basket = () => {
  const { cards, loading, error } = useFetchData();
  const basketItems = useSelector((state) => state.basket?.items || []);
  const dispatch = useDispatch();

  if (loading) {
    return <p className="loading-message">Loading your liked cars...</p>;
  }

  if (error) {
    return <p className="error-message">Error: {error}</p>;
  }

  return (
    <div className="basket-container">
      <h1>Seçilmiş elanlar</h1>

      {basketItems.length === 0 ? (
        <p className="empty-message">Secilmis Avtomobil yoxdur</p>
      ) : (
        <div className="basket-cards">
          {basketItems.map((itemId) => {
            const car = cards.find((car) => car.id === itemId);
            if (!car) return null;

            return (
              <div key={car.id} className="basket-card">
                <Card car={car} />
                <button
                  className="remove-button"
                  onClick={() => dispatch(removeFromBasket(car.id))}
                >
                  Remove from Basket
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Basket;

import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket } from "../../features/basketSlice";
import "./Basket.css";

const Basket = () => {
  const basketItems = useSelector((state) => state.basket?.items || []);
  const dispatch = useDispatch();

  const handleRemoveFromBasket = () => {};

  return (
    <div className="basket-container">
      <h1>Your Liked Cars</h1>

      {basketItems.length === 0 ? (
        <p className="empty-message">
          Your basket is empty. Start liking some cars!
        </p>
      ) : (
        <div className="basket-cards">
          {basketItems.map((car) => (
            <div key={car.id} className="basket-card">
              <img
                src={car.imageUrl}
                alt={`${car.make} ${car.model}`}
                className="basket-card-image"
              />
              <div className="basket-card-details"></div>
              <button
                className="remove-button"
                onClick={() => handleRemoveFromBasket(car.id)}
              ></button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Basket;

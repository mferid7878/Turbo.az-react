import styles from "./LikeButton.module.css";
import { CiHeart } from "react-icons/ci";
import { addToBasket, removeFromBasket } from "../../features/basketSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const LikeButton = ({ buttonId }) => {
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);

  const handleAddToBasket = () => {
    if (favorite) {
      dispatch(removeFromBasket(buttonId));
    } else {
      dispatch(addToBasket(buttonId));
    }
    setFavorite(!favorite);
  };

  return (
    <div
      onClick={handleAddToBasket}
      className={`${styles.icon} ${styles.heart}`}
    >
      <CiHeart />
    </div>
  );
};

export default LikeButton;

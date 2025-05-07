import styles from "./LikeButton.module.css";
import { CiHeart } from "react-icons/ci";
import { addToBasket, removeFromBasket } from "../../features/basketSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
const dispatch = useDispatch();
const [favorite, setFavorite] = useState(false);

const LikeButton = () => {
  const handleAddToBasket = () => {
    if (buttonName === "pushArray") {
      if (favorite) {
        dispatch(removeFromBasket(buttonId));
        buttonRef.current.style.color = "black";
      } else {
        dispatch(addToBasket(buttonId));
      }
      setFavorite(!favorite);
    }
  };
  return (
    <>
      <div
        onClick={handleAddToBasket}
        className={`${styles.icon} ${styles.heart}`}
      >
        <CiHeart />
      </div>
    </>
  );
};

export default LikeButton;

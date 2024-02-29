import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ numOfStars }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentId) {
    setRating(getCurrentId);
  }

  function handleMouseEnter(getCurrentId) {
    setHover(getCurrentId);
  }

  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <div className="star-rating">
      {[...Array(numOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          ></FaStar>
        );
      })}
    </div>
  );
}

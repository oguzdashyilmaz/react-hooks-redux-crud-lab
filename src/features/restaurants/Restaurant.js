import React from "react";
import { useDispatch } from "react-redux";
import ReviewsContainer from "../reviews/ReviewsContainer";

function Restaurant({ restaurant }) {
  const dispatch = useDispatch();
  return (
    <div>
      <li>
        {restaurant.name}
        <button> Delete Restaurant </button>
        <ReviewsContainer restaurant={restaurant} />
      </li>
    </div>
  );
}

export default Restaurant;

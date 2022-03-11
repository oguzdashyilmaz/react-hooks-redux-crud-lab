import React from "react";
import { useDispatch } from "react-redux";
import ReviewsContainer from "../reviews/ReviewsContainer";

function Restaurant({ restaurant }) {
  
  const dispatch = useDispatch();
  
  function handleDeleteClick(){
    dispatch(restaurantDeleted(restaurant.id));
  }

  return (
    <div>
      <li>
        {restaurant.name}
        <button onClick={handleDeleteClick}> Delete Restaurant </button>
        <ReviewsContainer restaurant={restaurant.id} />
      </li>
    </div>
  );
}

export default Restaurant;

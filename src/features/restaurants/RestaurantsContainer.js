import React from "react";
import RestaurantInput from "./RestaurantInput";
import Restaurants from "./Restaurants";
import {useSelector} from "react-redux";

function RestaurantsContainer() {

  const restaurants = useSelector(state=>state.restaurants.entities);

  return (
    <div>
      <RestaurantInput />
      <Restaurants restaurants={restaurants}/>
    </div>
  );
}

export default RestaurantsContainer;

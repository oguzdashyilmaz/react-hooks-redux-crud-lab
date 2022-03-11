import React from "react";
import { useDispatch } from "react-redux";
import {useState} from "react";

function RestaurantInput() {

  const [name, setName] = useState("");
  const dispatch = useDispatch;

  function handleInputChange(e){
    setName(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    dispatch(restaurantAdded(name));
    setName("");
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      
    </form>
  );
}

export default RestaurantInput;

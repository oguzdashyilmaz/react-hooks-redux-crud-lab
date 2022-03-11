import React from "react";
import { useDispatch } from "react-redux";
import {useState} from "react";
import {restaurantAdded} from "./restaurantsSlice";

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
      <label htmlFor="">
        Name:
        <input type="text" value={name} name={name} onChange={handleInputChange} />
      </label>
      <button type="submit">add restaurant</button>
    </form>
  );
}

export default RestaurantInput;

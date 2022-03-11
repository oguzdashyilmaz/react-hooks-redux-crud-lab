import React from "react";
import { useDispatch } from "react-redux";

function RestaurantInput() {

  const [name, setName] = useState("");
  const dispatch = useDispatch;

  return <div>Restaurant Input</div>;
}

export default RestaurantInput;

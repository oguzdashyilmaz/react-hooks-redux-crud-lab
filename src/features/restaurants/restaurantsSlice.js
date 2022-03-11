import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    entities: [],
  },
  reducers: {
    restaurantAdded(state,action){
      state.entities.push({id: uuid(), name: action.payload})
    },
    restaurantDeleted(state,action){
      const index = state.entities.findIndex(restaurant=>restaurant.id === action.payload);
      state.entities.splice(index,1);
    }
  },
});

export const {restaurantAdded,restaurantDeleted} =  restaurantsSlice.actions;

export default restaurantsSlice.reducer;

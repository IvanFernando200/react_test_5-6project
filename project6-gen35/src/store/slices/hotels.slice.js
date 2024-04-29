import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// retorna toda la info del estado global como tal
export const hotelsSlice = createSlice({
  name: "hotels",
  initialState: null, //  ⚠ no puede ser undefined
  reducers: {
    // aqui van todas las actions
    // addOne: (state)=>(state + 1)
    setHotels: (state, { payload }) => payload,
  },
});

export const { setHotels } = hotelsSlice.actions;

export default hotelsSlice.reducer; // Elemento que va a la store

// thunk
export const getHoltelsTrunk = (url) => (dispatch) => {
  axios
    .get(url)
    .then((res) => dispatch(setHotels(res.data)))
    .catch((err) => console.log(err));
};

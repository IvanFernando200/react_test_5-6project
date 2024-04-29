import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// retorna toda la info del estado global como tal
export const countriesSlice = createSlice({
  name: "countries",
  initialState: null, //  ⚠ no puede ser undefined
  reducers: {
    // aqui van todas las actions
    // addOne: (state)=>(state + 1)

    setCountries: (state, action) => action.payload,
  },
});

export const { setCountries } = countriesSlice.actions;

export default countriesSlice.reducer; // Elemento que va a la store

// thunk
export const getCountriesThunk = (url) => (dispatch) => {
  axios
    .get(url)
    .then((res) => dispatch(setCountries(res.data)))
    .catch((err) => console.log(err));
};

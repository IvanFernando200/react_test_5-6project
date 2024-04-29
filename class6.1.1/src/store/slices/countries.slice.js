import { createSlice } from "@reduxjs/toolkit";

// retorna toda la info del estado global como tal
export const countriesslice = createSlice({
  name: "countries",
  initialState: null, //  ⚠ no puede ser undefined
  reducers: {
    // aqui van todas las actions
    // addOne: (state)=>(state + 1)
    setState: (state, action) => action.payload(),
  },
});

export const { setState } = countriesslice.actions;

export default countriesslice.reducer; // Elemento que va a la store

import { createSlice } from "@reduxjs/toolkit";

// retorna toda la info del estado global como tal
export const trainerslice = createSlice({
  name: "trainer",
  initialState: "",
  reducers: {
    setTrainer: (state, action) => action.payload,
  },
});

export const { setTrainer } = trainerslice.actions;

export default trainerslice.reducer; // Elemento que va a la store

import { createSlice } from "@reduxjs/toolkit";

// retorna toda la info del estado globa como tal
const counterSlice = createSlice({
  name: "counter",
  initialState: 0, // ⚠ no puede ser undefined
  reducers: {
    // aqui van todas la actions
    addOne: (state) => state + 1,
    subsOne: (state) => state - 1,
    // resetCount: (state) => (state = 0),
    resetCount: () => 0,
    setCount: (state, action) => action.payload,
  },
});

export const { addOne, subsOne, resetCount, setCount } = counterSlice.actions;

export default counterSlice.reducer; // Elemento que va a la store

// slices === states---nombre de archivon

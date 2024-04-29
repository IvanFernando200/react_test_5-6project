import { createSlice } from "@reduxjs/toolkit";

export const productsslices = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    // addProduct: (state, action) => {
    //   state.push(action.payload);
    // },
    addProduct: (state, action) => [...state, action.payload],
    deleteProduct: (state, action) =>
      state.filter((e) => e.id !== action.payload),
  },
});

export const { addProduct, deleteProduct } = productsslices.actions;

export default productsslices.reducer;

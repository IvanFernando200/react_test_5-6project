import { configureStore } from "@reduxjs/toolkit";
import products from "./slaces/products.slices";

export default configureStore({
  reducer: {
    products,
  },
});

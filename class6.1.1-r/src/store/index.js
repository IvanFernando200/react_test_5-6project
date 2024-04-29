import { configureStore } from "@reduxjs/toolkit";
import countries from "./slices/countries.slice";

export default configureStore({
  reducer: {
    // Aqui van todos los estados globales
    countries,
  },
});

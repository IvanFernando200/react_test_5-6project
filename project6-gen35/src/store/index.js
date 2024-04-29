import { configureStore } from "@reduxjs/toolkit";
import hotels from "./slices/hotels.slice";

export default configureStore({
  reducer: {
    // Aqui van todos los estados globales
    hotels,
  },
});

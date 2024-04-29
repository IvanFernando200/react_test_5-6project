import { configureStore } from "@reduxjs/toolkit";
import counter from "./slaces/counter.slices";

export default configureStore({
  reducer: {
    // Aqui van todos los estados globales
    counter,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import trainer from "./slices/trainer.slice";
export default configureStore({
  reducer: {
    // Aqui van todos los estados globales
    trainer,
  },
});

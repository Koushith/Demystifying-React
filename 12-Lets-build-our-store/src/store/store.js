import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cart.slice";
export const Store = configureStore({
  reducer: {
    // pul all slices
    cartReducer,
  },
});

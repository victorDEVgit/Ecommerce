import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./components/ProductSlice";
import { uiReducer } from "./components/UiSlice";
import { cartReducer } from "./components/CartSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    ui: uiReducer,
    cart: cartReducer,
  },
});

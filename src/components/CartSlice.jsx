import { createSlice } from "@reduxjs/toolkit";
import productData from "/src/data/products.json";

const cartInitialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        const originalProduct = productData.find((p) => p.id === product.id);
        if (originalProduct && existingItem.quantity < originalProduct.stock) {
          existingItem.quantity += 1;
          state.totalItems += 1;
          state.totalPrice += product.price;
        }
      } else {
        if (product.stock > 0) {
          state.items.push({ ...product, quantity: 1 });
          state.totalItems += 1;
          state.totalPrice += product.price;
        }
      }
    },
    removeFromCart: (state, action) => {
      const productIdToRemove = action.payload;
      const itemToRemove = state.items.find(
        (item) => item.id === productIdToRemove
      );

      if (itemToRemove) {
        state.totalItems -= itemToRemove.quantity;
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        state.items = state.items.filter(
          (item) => item.id !== productIdToRemove
        );
      }
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const item = state.items.find((i) => i.id === productId);
      const originalProduct = rawProductsData.find((p) => p.id === productId); // Get original stock

      if (item && originalProduct && item.quantity < originalProduct.stock) {
        item.quantity += 1;
        state.totalItems += 1;
        state.totalPrice += item.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const item = state.items.find((i) => i.id === productId);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalItems -= 1;
          state.totalPrice -= item.price;
        } else {
          state.totalItems -= item.quantity;
          state.totalPrice -= item.price * item.quantity;
          state.items = state.items.filter((i) => i.id !== productId);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;

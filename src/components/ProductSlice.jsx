import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import productData from "/src/data/products.json";

const initialState = {
  items: productData,
  searchTerm: "",
  selectedCategory: "All",
};
export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSearchTerm, setSelectedCategory } = ProductSlice.actions;

export default ProductSlice.reducer;

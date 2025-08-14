import React from "react";
import productData from "/src/data/products.json";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm, setSelectedCategory } from "./ProductSlice";

const Searchbar = () => {
  const searchTerm = useSelector((state) => state.products.searchTerm);
  const selectedCategory = useSelector(
    (state) => state.products.selectedCategory
  );
  const allProducts = useSelector((state) => state.products.items);

  const dispatch = useDispatch();

  const categories = allProducts.map((product) => product.category);
  const uniqueCategories = ["All", ...new Set(categories)];

  return (
    <div className="w-[500px] h-[48px] bg-lightblue flex justify-center items-center px-4 rounded-[8px]">
      <img src="/Search.png" alt="search.png" className="w-5 h-5" />
      <input
        type="text"
        placeholder="Search essentials, groceries and more..."
        className="w-[500px] px-3 outline-0"
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
    </div>
  );
};

export default Searchbar;

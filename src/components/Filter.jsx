import React from "react";
import { useState } from "react";
import productData from "/src/data/products.json";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategory } from "./ProductSlice";

const Filter = () => {
  const [filterCategory, setfilterCategory] = useState(productData);
  const allProducts = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  const selectedCategory = useSelector(
    (state) => state.products.selectedCategory
  );

  const categories = allProducts.map((product) => product.category);
  const uniqueCategories = ["All", ...new Set(categories)].sort();
  return (
    <div className="h-[80px] border-border border-b-[1px] px-[80px] flex flex-col justify-center fixed top-[130px] z-10 bg-white w-screen">
      <div className="flex overflow-x-scroll overflow-y-hidden">
        {
          new Set(
            uniqueCategories.map((filter) => (
              <button
                key={filter}
                className={
                  selectedCategory === filter
                    ? `bg-primary flex rounded-[32px] px-4 py-2 h-10 mr-4 group hover:cursor-pointer`
                    : `px-4 py-2 bg-lightblue flex rounded-[32px] text-heading mr-4 group hover:cursor-pointer h-10`
                }
                value={filter}
                onClick={() => dispatch(setSelectedCategory(filter))}
              >
                <p className="w-50 flex justify-center">{filter}</p>
              </button>
            ))
          )
        }
      </div>
    </div>
  );
};

export default Filter;

import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.products.items);
  const searchTerm = useSelector((state) => state.products.searchTerm);
  const selectedCategory = useSelector(
    (state) => state.products.selectedCategory
  );

  const filteredProducts = allProducts.filter((product) => {
    const nameMatchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const categoryMatches =
      selectedCategory === "All" || product.category === selectedCategory;
    return nameMatchesSearch && categoryMatches;
  });

  return (
    <div className="grid grid-cols-4 mt-10">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div
            key={product.id}
            className=" w-[227px]  border-border border-[1px] mb-10 hover:border-primary hover:cursor-pointer"
          >
            <div className="bg-[#f5f5f5] flex justify-center items-center h-60 overflow-hidden">
              <img src={product.image} alt="image" className="h-55" />
            </div>
            <div className="flex-col px-2 justify-items-stretch">
              <div className="text-[16px]">
                <p className="font-medium text-heading">{product.name}</p>
                <p className="text-heading font-bold">{"$" + product.price}</p>
              </div>
              <div className="flex justify-between items-center text-[16px] font-medium">
                <p className="text-heading">
                  In Stock :
                  <span
                    className={
                      product.stock > 0 ? `text-[#249B3E]` : `text-red-600`
                    }
                  >
                    {" " + product.stock}
                  </span>
                </p>

                <button
                  className="w-10 h-10 bg-primary flex items-center justify-center relative left-2 hover:cursor-pointer hover:bg-blue-400"
                  onClick={() => dispatch(addToCart(product))}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="fill-white w-5"
                  >
                    <path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM6.00436 7.00265V13.0027H17.5163L19.3163 7.00265H6.00436ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No products found matching your criteria.</p>
      )}
    </div>
  );
};

export default Card;

import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./CartSlice";
import { toggleGenericSection } from "./UiSlice";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = useSelector((state) => state.cart.totalItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const isGenericSectionOpen = useSelector(
    (state) => state.ui.isGenericSectionOpen
  );
  if (!isGenericSectionOpen) {
    return null;
  }

  console.log(cartItems);
  return (
    <div className="w-screen h-300 absolute top-0 z-11 bg-[#00000080] overflow-scroll">
      <div className="bg-white h-500 relative">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600 text-xl py-10 bg-white shadow-md rounded-lg p-6">
            Your cart is empty. Start shopping for amazing products!
            <button
              className="text-white relative left-40 bg-primary h-10 w-40 hover:cursor-pointer"
              onClick={() => dispatch(toggleGenericSection())}
            >
              Back to shop
            </button>
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cart Items List */}

            <div className="md:col-span-2 space-y-4">
              <button
                className="text-white relative left-40 bg-primary h-10 w-40 hover:cursor-pointer"
                onClick={() => dispatch(toggleGenericSection())}
              >
                Back to shop
              </button>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center bg-white shadow-md rounded-lg p-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md mr-4 shadow-sm"
                  />
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-blue-600 font-bold">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
                      >
                        -
                      </button>
                      <span className="text-gray-800 font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        className={`
                        px-3 py-1 rounded-md transition-colors focus:outline-none focus:ring-2
                        ${
                          item.quantity >= item.stock // Use item.stock for the cart's quantity limit
                            ? "cursor-not-allowed"
                            : "hover:bg-blue-600 focus:ring-blue-400"
                        }
                      `}
                        disabled={item.quantity >= item.stock}
                      >
                        +
                      </button>
                      <span className="text-gray-500 text-sm ml-2">
                        (Max: {item.stock})
                      </span>
                    </div>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-lg font-bold text-gray-700">
                      Total:{" "}
                      <span className="text-green-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="md:col-span-1 bg-white shadow-md rounded-lg p-6 h-fit">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Order Summary
              </h2>
              <div className="flex justify-between items-center text-lg text-gray-700 mb-2">
                <span>Total Items:</span>
                <span className="font-semibold">{totalItems}</span>
              </div>
              <div className="flex justify-between items-center text-2xl font-bold text-gray-800 mb-6">
                <span>Cart Total:</span>
                <span className="text-blue-700">${totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 shadow-md">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
import Searchbar from "./Searchbar";
import { useDispatch, useSelector } from "react-redux";
import { toggleGenericSection } from "./UiSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const isGenericSectionOpen = useSelector(
    (state) => state.ui.isGenericSectionOpen
  );
  return (
    <div className="h-[90px] flex px-[80px] items-center justify-between border-b-[1px] border-border bg-white fixed top-[40px] z-10 w-screen">
      <div className="flex">
        <div className="bg-lightblue flex flex-col p-3 justify-between w-[48px] h-[48px] rounded-[14px]">
          <span className="inline-block w-[26px] h-[2px] bg-primary"></span>
          <span className="inline-block w-[18px] h-[2px] bg-primary"></span>
          <span className="inline-block w-[13px] h-[2px] bg-primary"></span>
        </div>

        <h1 className="text-primary font-bold text-4xl px-4">MegaMart</h1>
      </div>

      <div className="flex items-center">
        <Searchbar />
        <div className="flex w-60 justify-between h-fit ml-4">
          <p className="text-[18px] text-font font-medium flex">
            <img src="/user.png" alt="user.png" width={24} height={24} />
            Sign Up/Sign In
          </p>
          <span className="bg-font inline-block w-px"></span>
          <button
            onClick={() => dispatch(toggleGenericSection())}
            className="text-[18px] text-font font-medium flex relative z-15 hover:cursor-pointer"
          >
            <img src="/Buy.png" alt="cart.png" width={24} height={24} />
            Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

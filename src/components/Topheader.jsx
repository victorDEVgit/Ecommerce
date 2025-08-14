import React from "react";

const Topheader = () => {
  return (
    <div className="bg-[#F5F5F5] h-[40px] text-[14px] flex text-font px-[80px] justify-between items-center fixed top-0 w-screen z-10">
      <p>Welcome to worldwide Megamart!</p>
      <div className="flex justify-between w-70">
        <p className="flex items-center">
          <img
            src="/Location.png"
            alt="local.png"
            className="w-[14px] h-[14px]"
          />
          Deliver to <span className="font-bold ml-1"> 423651</span>
        </p>
        <span className="bg-font inline-block w-px"></span>
        <p className="flex items-center">
          <img
            src="/iconoir_delivery-truck.png"
            alt="track.png"
            className="w-[14px] h-[14px]"
          />
          Track your order
        </p>
      </div>
    </div>
  );
};

export default Topheader;

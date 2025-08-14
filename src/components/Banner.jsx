import React from "react";

const Banner = () => {
  return (
    <div className="px-[80px] flex items-center mt-[230px]">
      <span className="flex rounded-full w-[86px] h-[86px] justify-center items-center absolute left-10 bg-white">
        <span className="flex rounded-full w-[70px] h-[70px] bg-lightblue justify-center items-center">
          <img src="/Stroke-1.svg" alt="right.png" width={12} />
        </span>
      </span>
      <div className="h-[316px] w-full bg-[#212844] rounded-2xl flex items-center justify-between px-20 overflow-hidden">
        <div className="text-white">
          <h2 className="text-3xl leading-20">
            Best Deal Online on smart watches
          </h2>
          <h1 className="font-bold text-6xl leading-20">SMART WEARABLE.</h1>
          <h2 className="text-3xl leading-20">UP to 80% OFF</h2>
        </div>

        <div className="">
          <span className="flex rounded-full w-[520px] h-[520px] justify-center items-center bg-[#212844] border-[#3C466B] border-[1px] relative">
            <span className="flex rounded-full w-[480px] h-[480px] bg-[#2C3454] justify-center items-center"></span>
          </span>
          <img
            src="/image 2.png"
            alt="image1.png"
            className="w-[250px] relative bottom-37 left-50"
          />

          <span className="flex rounded-full w-[220px] h-[220px] justify-center items-center bg-[#212844] border-[#3C466B] border-[1px] relative bottom-50">
            <span className="flex rounded-full w-[180px] h-[180px] bg-[#2C3454] justify-center items-center"></span>
          </span>
        </div>
      </div>

      <span className="flex rounded-full w-[86px] h-[86px]  justify-center items-center absolute right-10 bg-white">
        <span className="flex rounded-full w-[70px] h-[70px] bg-lightblue justify-center items-center">
          <img
            src="/Stroke-1.svg"
            alt="right.png"
            width={12}
            className="rotate-180"
          />
        </span>
      </span>
    </div>
  );
};

export default Banner;

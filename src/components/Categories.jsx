import React from "react";
import Card from "./Card";

const Categories = () => {
  return (
    <div className="mt-30 px-[80px]">
      <div className="flex justify-between">
        <div className="h-20 flex items-center border-primary border-b-[3px] w-fit">
          <h1 className="text-2xl flex text-[#212844] font-medium">
            Grab the best deal on
            <p className="flex text-primary pl-[6px]">filter</p>
          </h1>
        </div>
      </div>
      <div className="border-t-[1px] border-border">
        <Card />
      </div>
    </div>
  );
};

export default Categories;

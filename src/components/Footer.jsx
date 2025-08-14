import React from "react";

const Footer = () => {
  return (
    <div className="h-100 bg-primary mt-30 text-white px-[80px] flex-col overflow-hidden">
      <div className="flex justify-between  border-[#05ABF3] border-b-[1px] pb-5">
        <div>
          <h1 className="font-bold text-4xl mb-20 mt-10">MegaMart</h1>
          <div className="flex flex-col h-40 justify-between">
            <p className="text-[20px] font-medium ">Download App</p>
            <img src="/image 10.png" alt="play store" width={150} />
            <img src="/image 11.png" alt="app store" width={150} />
          </div>
        </div>
        <div className="">
          <div className=" mr-50 relative z-2">
            <h1 className="font-medium text-[20px] border-b-[2px] border-white relative right-10 mt-10 pb-3 z-2">
              Customer Services
            </h1>
            <ul className="list-disc text-[16px] flex-col mt-5 space-y-3">
              <li className="z-2">About Us</li>
              <li>Terms And Conditions</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>E-waste Policy</li>
              <li>Cancellation & Return policy</li>
            </ul>
          </div>
          <span className="flex rounded-full w-[520px] h-[520px] justify-center items-center bg-primary border-[#05ABF3] border-[1px] relative bottom-160 z-1">
            <span className="flex rounded-full w-[480px] h-[480px] bg-[#0C9BDA] justify-center items-center"></span>
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <p className="font-light mt-3">
          © 2022 All rights reserved. Reliance Retail Ltd.
        </p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-[#16171a] h-[100vh] w-[100vw]">
      <div className="leftGradient h-[1px] w-[1px]"></div>
      <div className="contact flex items-center justify-center text-white h-[2.5rem]  border-b-[0.1px]">
        <div className="w-[90%] text-xs md:text-sm tracking-widest">
          +91-7015574125, +91-8810385787
        </div>
      </div>
      <Navbar />
      <div className="flex">
        <div className="flex flex-col  absolute top-34 left-16 xl:w-[70%]">
          <span className="textGradient flex items-center justify-start h-[18rem] text-[8rem] lg:text-[15rem] md:text-[10rem] font-bold">
            Crafting
          </span>
          <p className="text-[4rem] text-white font-bold">
            Immersive Digital Stories{" "}
          </p>{" "}
          <p className="text-[4rem] text-white font-bold">Through Technology</p>
        </div>
      </div>
    </div>
  );
};

export default Header;

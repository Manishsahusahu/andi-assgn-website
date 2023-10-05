import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import MobileSidebar from "./utility/MobileSidebar";
import { BiSidebar } from "react-icons/Bi";

const Navbar = () => {
  const [sidebarOn, setSidebarOn] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center text-white h-[4rem] md:h-[8rem]">
        <div className="w-[90%] flex items-center justify-between">
          <div className="logo inline-block text-2xl md:text-5xl tracking-widest">
            AND<span className="text-yellow-200">i</span>
          </div>
          <ul className="flex items-center justify-center space-x-8 lg:space-x-20 uppercase text-xs md:text-base font-medium md:font-semibold overflow-x-hidden">
            <li className=" tracking-widest hidden md:block">Home</li>
            <li className=" tracking-widest hidden md:block">About Us</li>
            <li className=" tracking-widest hidden md:block">Cloud Software</li>
            <li className=" tracking-widest md:bg-yellow-400 text-white border-[0.1px] md:text-black px-2 py-2 md:py-3">
              Start a Project
            </li>
            <li
              className="md:hidden text-2xl"
              onClick={() => setSidebarOn(true)}
            >
              <HiMenuAlt2 />
            </li>
          </ul>
        </div>
      </div>

        <div
          className={`relative -top-28 md:hidden ${
            sidebarOn ? "" : "translate-x-[100%] "
          } transition-all duration-300`}
        >
          <MobileSidebar setSidebarOn={setSidebarOn} />
        </div>

    </>
  );
};

export default Navbar;

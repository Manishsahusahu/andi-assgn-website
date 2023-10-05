import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const MobileSidebar = ({ setSidebarOn }) => {
  return (
    <div
      className={`bg-[#16171a] h-[100vh] w-[100vw] fixed left-0 z-50 overflow-scroll text-white px-7`}
    >
      <div className=" pt-16 flex justify-between items-center">
        <span className="text-[1.3rem]">ANDi</span>
        <div
          className="close flex text-2xl"
          onClick={() => setSidebarOn(false)}
        >
          <AiOutlineClose />
        </div>
      </div>
      <div className="menu pt-8">
        <ul className="flex flex-col items-start space-y-8 uppercase text-sm">
          <li className=" tracking-widest">Home</li>
          <li className=" tracking-widest">About Us</li>
          <li className=" tracking-widest">Cloud Software</li>
          <li className=" tracking-widest bg-yellow-400 text-black px-6 py-3 text-sm">
            Start a Project
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileSidebar;

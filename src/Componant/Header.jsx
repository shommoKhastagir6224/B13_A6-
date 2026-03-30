import React from "react";
import Banner from "../assets/banner.png";
import Play from "../assets/Play.png";

const Header = () => {
  return (
    <>
    <div className="mx-50 my-18">
      <div className="flex gap-10 items-center justify-center text-start">
        {/* Left side text */}
        <div className="max-w-md">
          <p className="bg-indigo-100 text-xl font-semibold bg-linear-to-b from-blue-500 to-purple-500 bg-clip-text text-transparent w-max py-2 px-4 border-2 "> <span className="w-4 h-4 bg-linear-to-b from-blue-500 to-purple-500 rounded-full inline-block mr-2"></span>New: AI-Powered Tools Available</p>
          <h1 className="font-bold my-4 text-5xl">Supercharge Your Digital Workflow</h1>
          <p className="text-gray-600 my-8 text-[16px]">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>
          <div className="flex gap-4 justify-start">
            <button className="btn bg-linear-to-r from-blue-800 to-purple-700 text-white rounded-4xl">
              Explore Products
            </button>
            <button className="btn btn-outline rounded-4xl bg-linear-to-b from-blue-500 to-purple-500 bg-clip-text  text-transparent"> <img src={Play} alt="" />Watch Demo</button>
          </div>
        </div>

        {/* Right side image */}
        <div className="shadow-2xl">
          <img src={Banner} alt="Banner" className="w-100 h-auto" />
        </div>
      </div>
    </div>
    <div className=" flex justify-evenly items-center px-50 py-15 bg-linear-to-r from-blue-800 to-purple-700">
      <div> <h1 className="text-3xl">50K+</h1> <p className="text-gray-400 text-lg">Active Users</p></div>
      <div className="h-15 w-1 bg-gray-500"></div>
      <div> <h1 className="text-3xl">200+</h1> <p className="text-gray-400 text-lg">Premium Tools</p></div>
      <div className="h-15 w-1 bg-gray-500"></div>
      <div> <h1 className="text-3xl">4.9</h1> <p className="text-gray-400 text-lg">Rating</p></div>
    </div>
    </>
  );
};

export default Header;
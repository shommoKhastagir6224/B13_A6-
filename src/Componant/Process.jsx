import React from "react";
import User from "../assets/user.png";
import Rocket from "../assets/rocket.png";
import Package from "../assets/package.png";

const Process = () => {
  return (
    <div className="flex flex-col justify-center items-center md:mx-50 my-30">
      <div>
        <h1 className="text-4xl">Get Started in 3 Steps</h1>
        <p className="text-gray-300 py-6 mb-10">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="card bg-neutral text-neutral-content px-10 hover:shadow-2xl shadow-pink-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <div className="flex justify-end p-5  ">
            <p className="bg-linear-to-r from-blue-800 to-purple-700 w-8 h-8 rounded-4xl flex justify-center items-center">
              01
            </p>
          </div>
          <div className="card-body items-center text-center">
            <img
              src={User}
              className="bg-purple-300 p-3 my-4 rounded-full"
              alt=""
            />
            <h2 className="card-title text-3xl">Create Account</h2>
            <p className="py-4 mb-8 text-gray-400 md:mx-4">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
        <div className="card bg-neutral text-neutral-content px-10 hover:shadow-2xl shadow-pink-300  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <div className="flex justify-end p-5  ">
            <p className="bg-linear-to-r from-blue-800 to-purple-700 w-8 h-8 rounded-4xl flex justify-center items-center">
              02
            </p>
          </div>

          <div className="card-body items-center text-center">
            <div className="w-20 h-20 bg-purple-300  my-4 flex justify-center items-center rounded-full">
              <img src={Rocket} className="w-12" alt="" />
            </div>
            <h2 className="card-title text-3xl">Choose Products</h2>
            <p className="py-4 mb-8 text-gray-400 md:mx-4">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>
        <div className="card bg-neutral text-neutral-content px-10 hover:shadow-2xl shadow-pink-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <div className="flex justify-end p-5  ">
            <p className="bg-linear-to-r from-blue-800 to-purple-700 w-8 h-8 rounded-4xl flex justify-center items-center">
              03
            </p>
          </div>

          <div className="card-body items-center text-center ">
            <img
              src={Package}
              className="bg-purple-300 p-3 my-4 rounded-full"
              alt=""
            />
            <h2 className="card-title text-3xl">Start Creating</h2>
            <p className="py-4 mb-8 text-gray-400 md:mx-4">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;

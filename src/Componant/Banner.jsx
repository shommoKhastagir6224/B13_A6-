import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Banner = () => {
  return (
    <div className="navbar bg-base-100 sm:w-full md:w-11/12 sm:text-start lg:text-center  shadow-sm">
      {/* Left side brand */}
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">DigiTools</a>
      </div>

      {/* Desktop menu */}
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>

      {/* Right side button */}
      <div className="flex gap-2 items-center">
        <a className="text-3xl">
          <CiShoppingCart /> 
         </a>
        <a className="btn btn-ghost bg-cyan-700 rounded-2xl">LogIn</a>
        <a className="btn rounded-4xl p-4 bg-linear-to-r from-blue-800 to-purple-700">Get Started</a>
      </div>
      {/* Mobile dropdown */}
      <div className="flex-none md:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 right-0"
          >
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;

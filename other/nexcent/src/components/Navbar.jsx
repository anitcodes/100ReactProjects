import React from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full py-4 px-20 bg-white text-black">
      <div className="">
        <img src={Logo} alt="logo" className="w-[130px]" />
      </div>
      <div className="flex items-center">
        <ul className="flex gap-6 mr-8">
          <a href="#Home" className="hover:text-green-500">
            Home
          </a>
          <a href="#Features" className="hover:text-green-500">
            Features
          </a>
          <a href="#Community" className="hover:text-green-500">
            Community
          </a>
          <a href="#Blog" className="hover:text-green-500">
            Blog
          </a>
          <a href="#Pricing" className="hover:text-green-500">
            Pricing
          </a>
        </ul>
        <button className="py-2 px-5 bg-green-600 text-white rounded-sm hover:bg-green-500 transition cursor-pointer">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;

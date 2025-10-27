import React from "react";
import Navbar from "../components/Navbar";
import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="relative h-[60%] w-full">
      <Navbar />
      <div
        className="p-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero}` }}
      >
        <h1 className="text-6xl font-semibold text-gray-200">
          Lessons and insights <br />
          <span className="text-green-500 text-5xl">from 8 years</span>
        </h1>
        <p className="py-5 text-sm text-gray-400">
          Where to go your business as a photographer: site or social media?
        </p>
        <button className="py-2 px-6 bg-green-600 text-white rounded-sm hover:bg-green-500 transition">
          Register
        </button>
      </div>
    </div>
  );
};

export default Hero;

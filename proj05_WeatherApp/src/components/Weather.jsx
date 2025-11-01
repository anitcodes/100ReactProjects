import React from "react";

const Weather = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 flex items-center justify-center p-4">
      <div className="h-[80vh] w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 flex flex-col justify-between">
        {/* Search */}
        <div className="flex gap-2 justify-center mb-6">
          <input
            type="text"
            placeholder="Search"
            className="py-2 px-6 border-none outline-none bg-gray-100 rounded-full w-72 text-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-blue-300"
          />
          <button className="h-10 w-10 bg-blue-500 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition">
            🔍
          </button>
        </div>

        {/* Weather Info */}
        <div className="flex flex-col py-6 gap-4 items-center text-gray-800">
          <div className="">
            <img
              src="https://via.placeholder.com/100" // placeholder for now
              alt="weather"
              className="w-24 h-24"
            />
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold">21°C</h1>
            <h2 className="text-2xl font-medium">Kathmandu, Nepal</h2>
          </div>
        </div>

        {/* Weather Stats */}
        <div className="flex justify-around text-gray-700 text-lg mt-4">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold">54%</h3>
            <p className="text-sm text-gray-500">Humidity</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold">2.04 Km/h</h3>
            <p className="text-sm text-gray-500">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;

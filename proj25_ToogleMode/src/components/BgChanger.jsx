import React, { useState } from "react";

const BgChanger = () => {
  const [color, setColor] = useState("red");

  return (
    <div className="h-screen w-full" style={{ backgroundColor: color }}>
      <div className="fixed bottom-6 left-[20%] flex gap-4 bg-gray-200 p-2 rounded-full">
        <button
          onClick={() => setColor("white")}
          className="py-2 px-6 bg-gray-400 text-xl text-white font-semibold rounded-full cursor-pointer"
        >
          White
        </button>
        <button
          onClick={() => setColor("black")}
          className="py-2 px-6 bg-black text-xl text-white font-semibold rounded-full cursor-pointer"
        >
          Black
        </button>
        <button
          onClick={() => setColor("pink")}
          className="py-2 px-6 bg-pink-600 text-xl text-white font-semibold rounded-full cursor-pointer"
        >
          Pink
        </button>
        <button
          onClick={() => setColor("blue")}
          className="py-2 px-6 bg-blue-600 text-xl text-white font-semibold rounded-full cursor-pointer"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("green")}
          className="py-2 px-6 bg-green-600 text-xl text-white font-semibold rounded-full cursor-pointer"
        >
          Green
        </button>
        <button
          onClick={() => setColor("purple")}
          className="py-2 px-6 bg-purple-600 text-xl text-white font-semibold rounded-full cursor-pointer"
        >
          Purple
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="py-2 px-6 bg-yellow-600 text-xl text-white font-semibold rounded-full cursor-pointer"
        >
          Yellow
        </button>
      </div>
    </div>
  );
};

export default BgChanger;

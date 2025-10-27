import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2 w-2/5 bg-gray-900/30 border border-white/30 backdrop-blur-md text-white py-4 px-6 rounded-full flex gap-6 items-center justify-center text-lg shadow-lg">
      <a href="#Home" className="hover:text-gray-300 transition-all">
        Home
      </a>
      <a href="#About" className="hover:text-gray-300 transition-all">
        About Me
      </a>
      <a href="#Projects" className="hover:text-gray-300 transition-all">
        Projects
      </a>
      {/* <button>Toogle</button> */}
    </div>
  );
};

export default Navbar;

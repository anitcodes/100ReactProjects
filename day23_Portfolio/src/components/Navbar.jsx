import React from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div
      className={`fixed top-10 left-1/2 transform -translate-x-1/2 w-2/5 bg-gray-900/30 border border-white/30 backdrop-blur-md py-4 px-6 rounded-full flex gap-6 items-center justify-center text-lg 
    ${darkMode ? "text-white" : "text-black"}
    `}
    >
      <a href="#Home" className="hover:text-gray-300 transition-all">
        Home
      </a>
      <a href="#About" className="hover:text-gray-300 transition-all">
        About Me
      </a>
      <a href="#Projects" className="hover:text-gray-300 transition-all">
        Projects
      </a>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-white py-1 px-4 rounded-full cursor-pointer hover:bg-gray-200 transition-all"
      >
        {darkMode ? "☀" : "🌙"}
      </button>
    </div>
  );
};

export default Navbar;

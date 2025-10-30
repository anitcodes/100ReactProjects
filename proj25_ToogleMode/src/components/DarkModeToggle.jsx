import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`h-screen w-full flex items-center justify-center transition-all duration-700
        ${darkMode ? "bg-black text-white" : "bg-white text-black"}
        `}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`py-4 px-6 text-xl font-semibold rounded-full cursor-pointer ${
          darkMode ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        {darkMode ? "Light Mode ☀" : "Dark Mode 🌙"}
      </button>
    </div>
  );
};

export default DarkModeToggle;

import React from "react";

const Footer = ({darkMode}) => {
  return (
    <footer className={`w-full ${darkMode ? "text-white" : "text-black"} py-4 flex items-center justify-center mt-10 mb-4`}>
      <p className="text-center text-sm md:text-base">
        © 2025 Designed and Developed by{" "}
        <span className="font-semibold">Anit Shrestha</span>
      </p>
    </footer>
  );
};

export default Footer;

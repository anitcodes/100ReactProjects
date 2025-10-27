import React from "react";
import cv from "../assets/cv.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.png";

const Sidebar = () => {
  return (
    <div className="fixed top-60 left-14 flex flex-col items-center gap-6">
      {/* Icons */}
      <a
        href="https://github.com/anitcodes"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <img
          src={github}
          alt="GitHub"
          className="w-6 filter invert cursor-pointer hover:scale-110 transition-transform"
        />
      </a>

      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="CV_AnitShrestha"
      >
        <img
          src={cv}
          alt="CV"
          className="w-6 filter invert cursor-pointer hover:scale-110 transition-transform"
        />
      </a>

      <a
        href="https://www.linkedin.com/in/anitshrestha/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin"
      >
        <img
          src={linkedin}
          alt="Linkedin"
          className="w-6 filter invert cursor-pointer hover:scale-110 transition-transform"
        />
      </a>

      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="mail">
        <img
          src={mail}
          alt="Mail"
          className="w-6 filter invert cursor-pointer hover:scale-110 transition-transform"
        />
      </a>

      {/* Vertical Line */}
      <hr className="w-[0.5px] h-32 bg-white border-0 mt-4" />
    </div>
  );
};

export default Sidebar;

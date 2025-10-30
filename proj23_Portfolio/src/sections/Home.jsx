import React from "react";
// import heroImg from "../assets/heroImg.jpg";
import linkedin from "../assets/linkedin.png";

const Home = ({ darkMode }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`h-[500px] w-[1000px] border rounded-2xl mt-60 mb-10 flex flex-col items-center justify-center 
        ${
          darkMode
            ? "border-white/50 text-white"
            : "bg-gray-50 border-black text-black"
        }`}
        // style={{ backgroundImage: `url(${heroImg})` }}
      >
        <span
          className={`py-2 px-4 bg-none border ${
            darkMode ? "border-white" : "border-black"
          } rounded-full text-sm`}
        >
          ✔Available for work
        </span>
        <h1 className="text-7xl font-bold py-10">Anit Shrestha</h1>
        <div className="text-2xl tracking-wide text-center text-gray-400">
          <p>
            <span className="font-bold">Frontend Developer</span> from
            Kathmandu, Nepal.
          </p>
          <p>Specialist in HTML, CSS, JavaScript(ES6+), and React.</p>
        </div>
        {/* buttons part */}
        <div className="flex items-center gap-2 pt-4">
          <button className="py-3 px-12 bg-white text-black border-transparent rounded-full cursor-pointer hover:bg-gray-50/10 hover:border hover:border-white hover:text-white transition-all">
            Contact me
          </button>

          <a
            href="https://www.linkedin.com/in/anitshrestha/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <button
              className={`flex items-center gap-2 py-3 px-12 bg-none rounded-full cursor-pointer hover:bg-gray-50/10 border
              ${darkMode ? "border-white" : "border-black"}`}
            >
              <img
                src={linkedin}
                alt="linkedin"
                className="w-5 h-5 filter invert"
              />
              LinkedIn
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import anit from "../assets/anit.jpg";

const About = ({ darkMode }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center mb-20
    ${darkMode ? "text-white" : "text-black"}
    `}
    >
      <div className="flex items-center py-20">
        <h1 className="text-4xl font-bold">About Me</h1>
        <hr
          className={`ml-6 w-200 h-[0.5px] ${
            darkMode ? "bg-white" : "bg-black"
          }`}
        />
      </div>

      <div className={`h-[400px] w-[1000px] rounded-2xl flex p-10 ${darkMode?"bg-white/10":"bg-gray-50"}`}>
        <img
          src={anit}
          alt="Anit Shrestha"
          className="w-80 h-80 object-cover rounded-md"
        />
        <div className="pl-8 pt-10">
          <h1
            className={`text-4xl font-semibold pb-5 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Anit Shrestha👋
          </h1>
          <p
            className={`tracking-wide ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I'm a Frontend Developer with a Bachelor's in CSIT from the Texas
            International College. I design and build modern, accessible
            interfaces with HTML5, CSS, JavaScript (ES6+), and React. I work
            with Git and GitHub, follow development best practices, and apply
            UI/UX principles and responsive design to deliver clear, consistent
            experiences across devices. I'm driven by creative problem solving
            and continuous learning to stay current, with a focus on
            performance, accessibility, and clean code. Open to collaborating in
            Kathmandu, remotely, and with international teams.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

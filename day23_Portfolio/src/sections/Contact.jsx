import React from "react";
import heroImg from "../assets/heroImg.jpg";
import linkedin from "../assets/linkedin.png";


const Contact = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="h-[400px] w-[1000px] border border-white/50 text-white rounded-2xl mt-20 mb-10 flex flex-col items-center justify-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <h1 className="text-4xl font-bold">Ready to bring your ideas to life?</h1>
        <h2 className="text-4xl pt-4">I can help drive your project or join your team.</h2>

        {/* buttons part */}
        <div className="flex items-center gap-2 pt-6">
          <button className="py-3 px-12 bg-white text-black border-transparent rounded-full cursor-pointer hover:bg-gray-50/10 hover:border hover:border-white hover:text-white transition-all">
            Contact me
          </button>
          <a
            href="https://www.linkedin.com/in/anitshrestha/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <button className="flex items-center gap-2 py-3 px-12 bg-none text-white border border-white rounded-full cursor-pointer hover:bg-gray-50/10">
              <img src={linkedin} alt="linkedin" className="w-5 h-5 filter invert" />LinkedIn
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState } from "react";
import Home from "./sections/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Sidebar darkMode={darkMode} />
      <Home darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;

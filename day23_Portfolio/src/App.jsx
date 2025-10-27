import React from "react";
import Home from "./sections/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

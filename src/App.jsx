import React from "react";
import ReactDOM from "react-dom";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import "./index.css";

ReactDOM.render(
  <div className="max-w-[300px] bg-[#1A1B21] my-3 rounded-xl overflow-hidden shadow-2xl mx-auto  ">
    <Info />
    <About />
    <Interests />
    <Footer />
  </div>,
  document.getElementById("root")
);

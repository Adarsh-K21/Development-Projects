import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import data from "./data.json";
import Footer from "./Footer";
import ChatBot from "./chatBot"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/chatBot" element={<ChatBot />} />

        {/* <Navigate to="/"/> */}
      </Routes>
      <Footer footer={data.footer} />
    </>
  );
};

export default App;

import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact-page";
import Creat from "./pages/creatAndLogin";
import Dash from "./layout/dash"
import "app.css"
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/creat" element={<Creat />} />
          <Route path="/dash" element={<Dash />} />
        </Routes>
    </div>
  );
}

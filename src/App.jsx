import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact-page";
import Creat from "./pages/creatAndLogin";
import Dash from "./layout/dash"
import "app.css"
// import Teacher from"./views/profile/profile"
// import Teacher2 from"./views/profile/teacherpro2"
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
        <Routes>
        {/* <Route path="/" element={<Teacher/>}/>
        <Route path="/teacherpro2" element={<Teacher2/>}/> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/creat" element={<Creat />} />
          <Route path="/dash" element={<Dash />} />
        </Routes>
    </div>
  );
}

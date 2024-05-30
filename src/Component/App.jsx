import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from "./AboutMe";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/aboutme" element={<AboutMe></AboutMe>}></Route>
          <Route path="/resume" element={<Resume></Resume>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const menuicon = () => {
    const xicon = document.getElementById("xicon");
    xicon.classList.toggle("navbar-toggler-icon");
    xicon.classList.add("bi");
    xicon.classList.toggle("bi-x-lg");
  };
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <div className="d-flex align-items-center col-6 col-md-8 ">
              <NavLink className="navbar-brand m-0 fs-3" to="/aboutme">
                Nagesh Sonawane
              </NavLink>
              <small className="ms-1 d-none d-md-block">
                / Front-end React developer
              </small>
            </div>
            <div className="d-flex justify-content-end">
              <button
                onClick={menuicon}
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown">
                <span id="xicon" className="navbar-toggler-icon"></span>
              </button>
            </div>

            <div
              className="collapse navbar-collapse justify-content-md-end"
              id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/aboutme">
                    About Me
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/resume">
                    Resume
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/projects">
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

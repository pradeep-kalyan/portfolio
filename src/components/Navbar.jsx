import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-100/95 p-2 m-2 container mx-auto ">
      <div className="flex justify-between">
        <div>
          <h2 className="font-lavishly-yours text-3xl  text-black">
            Pradeep Kalyan S
          </h2>
        </div>
        <div>
          <a href="#home" className="nav-links">
            Home
          </a>
          <a href="#abut" className="nav-links">
            About
          </a>
          <a href="#skills" className="nav-links">
            Tech Arsenal
          </a>
          <a href="#Certifications" className="nav-links">
            Recognitions & Certifications
          </a>
          <a href="#cwm" className="nav-links">
            Let's Connect
          </a>
          <a href="#projects" className="nav-links">
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

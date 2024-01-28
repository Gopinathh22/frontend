import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar bg-white px-6 py-2 shadow">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-semibold">VERDES</div>

        {/* Hamburger Menu Button for Mobile */}
        <button className="navbar-toggler lg:hidden" onClick={toggleNavbar}>
          <FaBars />
        </button>

        {/* Navbar Links */}
        <div
          className={`navbar-links ${
            isOpen ? "active" : ""
          } hidden lg:flex lg:justify-start`}
        >
          <a href="" className="navText">
            <Link to="/#home">HOME </Link>
          </a>
          <a href="" className="navText">
            {" "}
            <Link to="/about">ABOUT US </Link>
          </a>
          <a href="#" className="navText">
            {" "}
            <Link to="/#contact">CONTACT </Link>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

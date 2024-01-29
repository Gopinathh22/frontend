import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <nav className="navbar bg-white px-6 py-2 shadow">
      <div className="flex justify-between items-center">
        <a className="text-3xl font-bold text-green-800" href="/#home">
          VERDES
        </a>

        {/* Hamburger Menu Button for Mobile */}
        <button className="navbar-toggler lg:hidden" onClick={toggleNavbar}>
          <FaBars />
        </button>

        {/* Navbar Links */}
        <div
          className={`navbar-links ${
            isOpen ? "active flex" : "hidden"
          } flex lg:flex-row lg:justify-start lg:flex`}
        >
          <a href="/#home" className="navText">
            HOME
          </a>
          <a href="/about" className="navText">
            ABOUT US
          </a>
          <a href="/#contact" className="navText">
            CONTACT
          </a>
          {/* Language Button inside the mobile menu */}
          <div className="lg:hidden">
            {i18n.language === "de" ? (
              <button
                onClick={() => changeLanguage("en")}
                className="language-button"
              >
                EN
              </button>
            ) : (
              <button
                onClick={() => changeLanguage("de")}
                className="language-button"
              >
                DE
              </button>
            )}
          </div>
        </div>

        {/* Desktop Language Button */}
        <div className="language-button hidden lg:block">
          {i18n.language === "de" ? (
            <button onClick={() => changeLanguage("en")}>EN</button>
          ) : (
            <button onClick={() => changeLanguage("de")}>DE</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

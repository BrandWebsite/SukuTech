import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/LOGO.png";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Contact", path: "/contact" },
    { name: "Careers", path: "/careers" },
  ];

  const activeClass = "text-blue-600 font-semibold";

  return (
    <header className="sticky top-0 z-40 bg-white shadow transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-35 h-20 object-contain" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-10">
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "relative text-blue-600 font-semibold p-1 after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-5 after:h-[2px] after:bg-blue-600 after:rounded-full"
                      : "relative text-[#032040] font-medium hover:text-blue-600 transition"
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block relative group">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="relative px-7 py-3 text-white font-medium bg-[#2A8ADE] rounded-sm overflow-hidden cursor-pointer"
          >
            <span className="absolute inset-0 bg-[#032040] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></span>
            <span className="relative z-10">Get a Quote</span>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow">
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? activeClass
                      : "text-gray-700 hover:text-blue-600 transition"
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
            <li className="w-full">
              <button className="w-full bg-[#2A8ADE] text-white py-2 rounded-lg hover:bg-[#032040] transition cursor-pointer">
                Get a Quote
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;

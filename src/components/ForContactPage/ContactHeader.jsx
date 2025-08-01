import React from "react";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/pic5.jpg";

const ContactHeader = () => {
  return (
    <div className="relative text-white h-[400px]">
      {/* Background image */}
      <img
        src={bgImage}
        alt="Contact banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-4 text-center md:text-left">
        <h1 className="text-7xl font-bold mb-6 text-center">Contact Us</h1>

        {/* Breadcrumb box */}
        {/* <div className="inline-flex items-center gap-2 bg-black/50 border border-gray-400 px-4 py-2 rounded-md shadow-md w-fit mx-auto md:mx-0">
          <Home size={16} className="text-blue-600" />

          <Link
            to="/"
            className="text-sm text-gray-200 hover:text-blue-700 transition-colors duration-200"
          >
            Home
          </Link>

          <span className="text-white">→</span>
          <span className="text-sm text-gray-300">Contact Us</span>
        </div> */}
      </div>
    </div>
  );
};

export default ContactHeader;

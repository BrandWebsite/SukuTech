import React from "react";
import { motion } from "framer-motion";
import aboutBannerImage from "../assets/about-bg.webp";
import AboutWhoWeAre from "../components/AboutPage/AboutWhoWeAre";
import VisionAndMission from "../components/AboutPage/VisionAndMission";
import Ceo from "../components/AboutPage/Ceo";
import ContactBanner from "../components/ContactBanner";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const pageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const About = () => {
  return (
    <motion.div
      className="w-full"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Banner Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[350px]">
        <img
          src={aboutBannerImage}
          alt="About Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div
          className="
      absolute inset-0 bg-blue-800/35 
      flex flex-col items-center justify-center 
      md:items-start 
      px-0 md:px-12 lg:px-20
    "
        >
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            About Us
          </h1>

          {/* Breadcrumb box */}
          <div className="inline-flex items-center gap-2 bg-black/50 border border-gray-400 px-4 py-2 rounded-md shadow-md">
            <Home size={16} className="text-blue-600" />

            <Link
              to="/"
              className="text-sm text-gray-200 hover:text-blue-700 transition-colors duration-200"
            >
              Home
            </Link>

            <span className="text-white">→</span>
            <span className="text-sm text-gray-300">About Us</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div>
        <AboutWhoWeAre />
        <VisionAndMission />
        <Ceo />
        <ContactBanner />
      </div>
    </motion.div>
  );
};

export default About;

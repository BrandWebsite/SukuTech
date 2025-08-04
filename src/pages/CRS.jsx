import React from 'react'
import { motion } from "framer-motion";
import CrsImage from '../assets/CrsBanner.jpg'
import CrsPrinciples from '../components/Crs/CrsPrinciples';
import CrsReport from '../components/Crs/CrsReport';

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

const CRS = () => {
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
          src={CrsImage}
          alt="About Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-800/35 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold">
            Corporate Social Responsibility (CSR)
          </h1>
        </div>

        {/* Bottom Arch */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"
          />
        </svg>
      </div>

      {/* ==== Description ==== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-4 text-center py-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Beyond Profit: Our Commitment to Society
        </h2>
        <p className="text-gray-600 text-base font-medium md:text-lg leading-relaxed">
          At SUKU Technologies, we believe in making a positive impact in the
          communities where we work and live. We build a business that is not
          only profitable but contributes to the well-being of other communities
          and makes a lasting difference in the world.
        </p>
      </motion.div>

      {/* Content Section */}
      <CrsPrinciples/>
      <CrsReport/>
    </motion.div>
  );
}

export default CRS
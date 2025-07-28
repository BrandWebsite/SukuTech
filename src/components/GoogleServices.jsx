import React from "react";
import { motion } from "framer-motion";
import GoogleImage from "../assets/google-workspace.jpg";

const GoogleServices = () => {
  return (
    <div className="w-full min-h-screen bg-[#f9f9f9] py-16 px-6 md:px-20 flex flex-col gap-12">
      {/* Top Tagline Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h3 className="text-sm font-bold text-[#2A8ADE] uppercase tracking-wide">
          Workplace Transformation
        </h3>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={GoogleImage}
            alt="Google Workspace"
            className="w-full h-auto rounded-md shadow-lg"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#032040] leading-snug">
            Reimagine Productivity with Google Workspace — Powered by AI
          </h2>

          <p className="text-gray-700 font-medium text-justify leading-relaxed text-sm md:text-base">
            As your certified Google partner, Suku Technologies helps you go
            beyond email with a connected, AI-enhanced workspace that simplifies
            collaboration and supercharges results.
          </p>
          <p className="text-gray-700 font-medium text-justify leading-relaxed text-sm md:text-base">
            Our expert-led deployment ensures a smooth transition—driving faster
            decisions, greater innovation, and measurable ROI from day one.
          </p>

          {/* Strategic Question */}
          <p className="text-[#032040] text-justify font-medium text-base">
            Ready to unlock smarter teamwork and next-level efficiency for your
            business?
          </p>

          {/* CTA Button */}
          <motion.div
            className="flex relative group"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="relative px-7 py-3 text-white font-medium bg-[#2A8ADE] rounded-sm overflow-hidden cursor-pointer"
            >
              <span className="absolute inset-0 bg-[#032040] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></span>
              <span className="relative z-10">Enquire More</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GoogleServices;

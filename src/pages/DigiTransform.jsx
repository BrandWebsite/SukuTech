import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, FolderOpen } from "lucide-react";
import digiImage from "../assets/digitalTransfrom.jpg";
import serviceImg from "../assets/service-details.jpg";
import serviceIcon1 from "../assets/services-details-icon-1.png";
import serviceIcon2 from "../assets/services-details-icon-2.png";
import ContactUs from "../components/contactUs";
const services = [
  "Analysis & Consulting",
  "Digital Strategy Development",
  "Change Management & Training",
  "Scaling and Support",
];

const DigiTransform = () => {
  const [activeService, setActiveService] = useState(services[0]);

  const descRef = useRef(null);
  const contentRef = useRef(null);
  const iconsRef = useRef(null);
  const benefitsRef = useRef(null);

  const isDescInView = useInView(descRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true });
  const isIconsInView = useInView(iconsRef, { once: true });
  const isBenefitsInView = useInView(benefitsRef, { once: true });

  return (
    <div className="w-full min-h-screen">
      {/* ==== Header Section ==== */}
      <div className="relative w-full h-[350px] overflow-hidden">
        <img
          src={digiImage}
          alt="Digital Transformation"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-800/55 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-3xl sm:text-4xl md:text-6xl font-bold text-center px-4"
          >
            Digital Transformation Solutions
          </motion.h1>
        </div>
        <svg
          className="absolute bottom-0 left-0 w-full drop-shadow-md"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"
          />
        </svg>
      </div>

      {/* ==== Description Section ==== */}
      <motion.div
        ref={descRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isDescInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-4 text-center py-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Empowering Businesses through Innovation
        </h2>
        <p className="text-gray-600 text-base font-medium md:text-lg leading-relaxed">
          Our Digital Transformation Solutions are designed to help businesses
          navigate the rapidly evolving digital landscape.
        </p>
      </motion.div>

      {/* ==== Main Section ==== */}
      <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-10">
        {/* ==== Right Panel ==== */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:w-2/3 space-y-10"
        >
          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="rounded-md overflow-hidden shadow"
          >
            <img
              src={serviceImg}
              alt={activeService}
              loading="lazy"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="space-y-5"
            >
              <h4 className="text-2xl md:text-3xl font-bold text-gray-800">
                {activeService}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Alternative innovation to ethical network environmental
                whiteboard pursue compelling results for premier methods
                empowerment.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Interactively harness integrated ROI whereas frictionless
                products. Proactively integrate turnkey meta-services.
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Icon Boxes */}
          <motion.div
            ref={iconsRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isIconsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[serviceIcon1, serviceIcon2].map((icon, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="flex items-start gap-4 p-6 bg-gray-100 rounded-md shadow-sm"
              >
                <img src={icon} alt="" loading="lazy" className="w-14 h-14" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">
                    {idx === 0 ? "Custom Software" : "Mobile Application"}
                  </h4>
                  <p className="text-base text-gray-600 font-medium leading-7">
                    Ethical network environmental architect go forward
                    opportunities credibly implement.
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits */}
          <motion.div
            ref={benefitsRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h4 className="text-2xl font-semibold text-gray-800">
              What are the Benefits?
            </h4>
            <p className="text-gray-600">
              Alternative innovation to ethical networks that pursue compelling
              results.
            </p>
          </motion.div>
        </motion.div>

        {/* ==== Left Panel (Tabs + Contact Card) ==== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/3  space-y-6"
        >
          <div className="bg-gray-100 p-6 rounded-sm ">
            <h3 className="text-xl font-semibold mb-6 relative inline-block text-gray-800">
              <span className="border-b-4 border-blue-600 w-1/2 inline-block p-3">
                Services
              </span>
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <motion.li
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 150 }}
                  key={service}
                  onClick={() => setActiveService(service)}
                  className={`relative overflow-hidden group flex items-center justify-between cursor-pointer rounded-sm p-4 transition-all duration-300 ${
                    activeService === service
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:text-white"
                  }`}
                >
                  <span
                    className="absolute inset-0 bg-blue-600 group-hover:w-full group-hover:opacity-100 transition-all duration-500 ease-in-out left-0 top-0 w-0 opacity-0"
                    aria-hidden="true"
                  ></span>
                  <div className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:text-white">
                    <FolderOpen
                      size={20}
                      className="text-blue-900 group-hover:text-white"
                    />
                    <span className="font-medium">{service}</span>
                  </div>
                  {activeService === service && (
                    <span className="relative z-10">
                      <ArrowRight size={18} />
                    </span>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* ==== Contact Card Section (NEW) ==== */}
          <ContactUs/>
        </motion.div>
      </section>
    </div>
  );
};

export default DigiTransform;

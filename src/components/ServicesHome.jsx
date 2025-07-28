import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import cloudIcon from "../assets/service-2.png";
import webDevIcon from "../assets/service-3.png";
import digitalMarketingIcon from "../assets/service-4.png";
import visibleIcon from "../assets/service-5.png"
import hostingServicesIcon from "../assets/service-6.png";

const services = [
  {
    id: "01",
    title: "Google Workspace",
    description:
      "As your trusted Google partner, we offer more than just email services—we deliver true connectivity and collaboration for your business.",
    icon: hostingServicesIcon,
  },
  {
    id: "02",
    title: "Brand Visibility",
    description:
      "Enhance your brand presence across digital platforms with consistent messaging, modern design, and targeted exposure strategies.",
    icon: visibleIcon,
  },
  {
    id: "03",
    title: "Cloud Solutions",
    description:
      "Empower your business with scalable, secure, and cost-effective cloud infrastructure designed for flexibility and performance.",
    icon: cloudIcon,
  },
  {
    id: "04",
    title: "Web Development",
    description:
      "We build high-performing, responsive websites and web applications that deliver seamless user experiences across all devices.",
    icon: webDevIcon,
  },
  {
    id: "05",
    title: "Digital Marketing",
    description:
      "Drive growth through SEO, social media, email marketing, and paid ads—designed to attract, engage, and convert your audience.",
    icon: digitalMarketingIcon,
  },
  {
    id: "06",
    title: "Hosting Services",
    description:
      "Get reliable, secure, and lightning-fast hosting solutions backed by 24/7 monitoring and expert technical support.",
    icon: hostingServicesIcon,
  },
];


const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ServicesHome = () => {
  return (
    <div className="bg-[#032040] min-h-screen text-white py-16 px-10">
      {/* Text Section */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-sm font-semibold text-[#2A8ADE]">
          Our IT Services For Business
        </h2>
        <p className="text-2xl md:text-3xl leading-11 font-bold mt-3">
          Ensuring Your Success Trusted <br /> IT Services Source
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="group relative overflow-hidden bg-gray-100 p-7 min-h-[360px] rounded-lg shadow-lg flex flex-col items-start transition duration-300"
          >
            {/* Background Slide Effect */}
            <div className="absolute inset-0 bg-blue-800 w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0"></div>

            {/* Icon and Number */}
            <div className="flex items-center mb-4 relative z-10 bg-white group-hover:bg-blue-200 p-4 rounded-full">
              <img
                src={service.icon}
                alt={service.title}
                className="w-15 h-15"
              />
            </div>

            <p className="transition-all duration-300 group-hover:bg-[#032040] group-hover:text-white bg-blue-200 text-blue-900 font-semibold p-6 w-19 h-13 flex items-center justify-center text-2xl mr-4 absolute -right-4 rounded-l-full z-10">
              {service.id}
            </p>

            {/* Title & Description */}
            <h3 className="text-xl text-black font-bold leading-10 mb-2 transition-all duration-300 group-hover:text-white relative z-10">
              {service.title}
            </h3>
            <p className="text-sm leading-6 text-gray-500 font-medium transition-all duration-300 group-hover:text-gray-200 relative z-10 p-2">
              {service.description}
            </p>

            {/* Read More & Arrow Slide In */}
            <div className="mt-4 relative z-10 overflow-hidden">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2 text-sm text-white translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"
              >
                <span className="">Read More</span>
                <FaArrowRight className="text-blue-900  group-hover:text-white text-sm" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesHome;

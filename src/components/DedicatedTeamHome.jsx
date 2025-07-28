import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import officeImage from "../assets/office1.jpg";

// Dummy member data
const teamMembers = [
  {
    name: "John Doe",
    role: "Project Manager",
    image: officeImage,
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: officeImage,
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Michael Johnson",
    role: "Frontend Developer",
    image: officeImage,
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Emily Brown",
    role: "Marketing Lead",
    image: officeImage,
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

const DedicatedTeamHome = () => {
  return (
    <div className="min-h-screen w-full px-6 py-12 md:px-16 bg-[#f9f9f9]">
      {/* First Div: Text and Button */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Text Section */}
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold text-[#2A8ADE] mb-4">
            Dedicated Team
          </h2>
          <h3 className="text-[#032040] text-xl md:text-3xl font-bold leading-snug">
            Meet Our Dedicated Member <br /> For Any Enquiry
          </h3>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block relative group">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="relative px-7 py-3 text-white font-medium bg-[#2A8ADE] rounded-sm overflow-hidden cursor-pointer flex items-center gap-2"
          >
            <span className="absolute inset-0 bg-[#032040] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></span>
            <span className="relative z-10 flex items-center gap-2">
              All Members <FaArrowRight />
            </span>
          </motion.button>
        </div>
      </motion.div>

      {/* Second Div: Member Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        viewport={{ once: true }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white p-1 h-90 md:h-110 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
          >
            {/* Image Wrapper */}
            <div className="w-full h-60 overflow-hidden mb-4 rounded-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Wrapper */}
            <div className="md:p-8 p-0">
              <h3 className="text-lg font-semibold text-[#032040]">
                {member.name}
              </h3>
              <p className="text-sm text-[#2A8ADE] mb-3">{member.role}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4">
                <a
                  href={member.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#032040] hover:text-[#2A8ADE] transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#032040] hover:text-[#2A8ADE] transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#032040] hover:text-[#2A8ADE] transition"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default DedicatedTeamHome;

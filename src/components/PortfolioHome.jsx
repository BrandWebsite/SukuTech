import React from "react";
import { motion } from "framer-motion";
import portImage from '../assets/portfolio.png'

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description:
      "Developed a cutting-edge dashboard for real-time data visualization and predictive insights. Built with React, Node.js, and Chart.js.",
    image: portImage,
  },
  {
    id: 2,
    title: "E-Commerce Platform Redesign",
    description:
      "Modernized an international beauty brand's shopping experience with responsive UI/UX and integrated payment systems.",
    image: portImage,
  },
  {
    id: 3,
    title: "Secure Cloud File Sharing Platform",
    description:
      "Created a scalable solution for sharing large documents with end-to-end encryption, login systems, and cloud sync.",
    image: portImage,
  },
];

const PortfolioHome = () => {
  return (
    <section className="w-full px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-sm font-bold text-[#2A8ADE] mb-4">Our Portfolio</h2>
        <p className="text-[#032040] text-[20px] md:text-3xl font-bold capitalize mb-12  mx-auto">
          Showcasing impactful work for global clients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#032040] mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <div className="relative group inline-block">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="relative px-7 py-3 text-white font-medium bg-[#2A8ADE] rounded-sm overflow-hidden"
            >
              <span className="absolute inset-0 bg-[#032040] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></span>
              <span className="relative z-10">View All Projects</span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHome;

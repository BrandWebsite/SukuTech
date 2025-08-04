import React from "react";

const JobCard = ({ title, category, location }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 shadow-md w-full max-w-sm bg-white transition-transform duration-300 hover:shadow-xl hover:scale-105 hover:border-blue-500">
      <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
      <p className="text-gray-600">{category}</p>
      <p className="text-gray-600 mb-4">{location}</p>
      <a href="#" className="text-blue-600 font-semibold hover:underline">
        More Details
      </a>
    </div>
  );
};

export default JobCard;

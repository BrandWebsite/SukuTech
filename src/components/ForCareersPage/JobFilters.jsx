import React from "react";

const JobFilters = ({ onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      <select
        className="border border-gray-300 rounded px-4 py-2"
        onChange={(e) => onFilterChange("category", e.target.value)}
      >
        <option value="">All Job Category</option>
        <option value="Development">Development</option>
        <option value="Operations">Operations</option>
        <option value="Sales and Marketing">Sales and Marketing</option>
        <option value="Graphic Design">Graphic Design</option>
      </select>
      <select
        className="border border-gray-300 rounded px-4 py-2"
        onChange={(e) => onFilterChange("type", e.target.value)}
      >
        <option value="">All Job Type</option>
        <option value="Full time">Full time</option>
        <option value="Internship">Internship</option>
        <option value="Contract">Contract</option>
      </select>
      <select
        className="border border-gray-300 rounded px-4 py-2"
        onChange={(e) => onFilterChange("location", e.target.value)}
      >
        <option value="">All Job Location</option>
        <option value="Ghana">Ghana</option>
        <option value="Sierra Leone">Sierra Leone</option>
      </select>
    </div>
  );
};

export default JobFilters;

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Imp1 from "../../assets/imp1.jpg";
import Imp2 from "../../assets/Imp2.jpg";
import Imp3 from "../../assets/Imp3.jpg";

const Impressions = () => {
  const images = [
    { id: 1, src: Imp1, alt: "Conference meeting with colleagues" },
    { id: 2, src: Imp2, alt: "Team event and networking" },
    { id: 3, src: Imp3, alt: "Company gathering and celebration" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-blue-600 text-sm font-medium uppercase tracking-wider mb-4">
            Some Impressions
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
            Not only a place for work
          </h1>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden rounded-lg">
          <div className="w-full h-72 sm:h-96 relative">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover rounded-lg transition-all duration-500 ease-in-out"
            />

            {/* Arrows */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10 disabled:opacity-30"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === images.length - 1}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10 disabled:opacity-30"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressions;

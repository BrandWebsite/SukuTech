import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Imp1 from "../../assets/pic1.jpg";
import Imp2 from "../../assets/pic2.jpg";
import Imp3 from "../../assets/pic3.jpg";

const Impressions = () => {
  const baseImages = [
    { id: 1, src: Imp1, alt: "Conference meeting with colleagues" },
    { id: 2, src: Imp2, alt: "Team event and networking" },
    { id: 3, src: Imp3, alt: "Company gathering and celebration" },
  ];

  // Cloned edges for seamless looping
  const extendedImages = [
    ...baseImages.slice(-3), // last 3 for backward loop
    ...baseImages,
    ...baseImages.slice(0, 3), // first 3 for forward loop
  ];

  const [imagesPerView, setImagesPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(3); // Start from first actual image
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselRef = useRef(null);

  const updateImagesPerView = () => {
    const width = window.innerWidth;
    if (width < 768) setImagesPerView(1);
    else if (width < 1024) setImagesPerView(2);
    else setImagesPerView(3);
  };

  useEffect(() => {
    updateImagesPerView();
    window.addEventListener("resize", updateImagesPerView);
    return () => window.removeEventListener("resize", updateImagesPerView);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // Handle loop transition correction
  useEffect(() => {
    if (currentIndex === extendedImages.length - imagesPerView) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(imagesPerView);
      }, 300);
    } else if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(extendedImages.length - imagesPerView * 2);
      }, 300);
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex, extendedImages.length, imagesPerView]);

  const slideStyle = {
    transform: `translateX(-${(currentIndex * 100) / extendedImages.length}%)`,
    transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
    width: `${(extendedImages.length / imagesPerView) * 100}%`,
  };

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-[#2A8ADE] text-sm font-bold uppercase tracking-wider mb-4">
            Some Impressions
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
            Not only a place for work
          </h1>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden rounded-lg">
          <div className="relative w-full overflow-hidden">
            <div ref={carouselRef} className="flex gap-4" style={slideStyle}>
              {extendedImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{
                    width: `${100 / extendedImages.length}%`,
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressions;

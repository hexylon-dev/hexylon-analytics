'use client';

import React, { useState, useEffect } from 'react';

export default function Carousel({ carouselData }) {
  const { title, content, reasons, constantImage } = carouselData;
  console.log(carouselData);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reasons.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [reasons.length]);

  return (
    <div className="w-full min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto mb-16">
        <h4 className="text-5xl font-bold text-center mb-4">{title}</h4>
        <p className="text-gray-400 text-center max-w-3xl mx-auto">{content}</p>
      </div>

      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-2/3 space-y-8">
            <div className="border-t border-gray-800 pt-4">
              <span className="text-2xl font-mono">
                {reasons[currentSlide].id.toString().padStart(2, '0')}
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">{reasons[currentSlide].title}</h2>
              <p className="text-gray-400 text-md">{reasons[currentSlide].description}</p>
            </div>

            <div className="flex gap-2">
              {reasons.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-blue-500 w-6' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/3 flex gap-4">
            {/* Constant image */}
            <div className="w-full h-full aspect-square overflow-hidden rounded-lg">
              <img
                src={constantImage}
                alt="Constant"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Empty container for spacing */}
            <div className="w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

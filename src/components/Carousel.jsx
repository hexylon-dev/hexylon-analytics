'use client';

import React, { useState, useEffect } from 'react';




export default function Carousel({carouselData}) {
    const {title, content, reasons} = carouselData;
    console.log(carouselData);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reasons.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [reasons.length]);

  const getAdjacentIndices = (current, total) => {
    const next = (current + 1) % total;
    const nextNext = (current + 2) % total;
    return [next, nextNext];
  };

  const [nextIndex, nextNextIndex] = getAdjacentIndices(currentSlide, reasons.length);

  return (
    <div className="w-full min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto mb-16">
        <h4 className="text-5xl font-bold text-center mb-4">
          {title}
        </h4>
        <p className="text-gray-400 text-center max-w-3xl mx-auto">
          {content}
        </p>
      </div>

      <br></br><br></br><br></br>
      
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="flex flex-col md:flex-row gap-12 items-start">
        
          <div className="w-full md:w-1/3 space-y-8">
          
            <div className="border-t border-gray-800 pt-4">
              <span className="text-2xl font-mono">{reasons[currentSlide].id.toString().padStart(2, "0")}</span>
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

          <div className="w-full md:w-2/3 flex gap-4">
            {/* Main (larger) image */}
            <div className="w-1/2 aspect-square overflow-hidden rounded-lg">
              <img
                src={reasons[currentSlide].image}
                alt={reasons[currentSlide].title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Side images container */}
            <div className="w-1/2 flex gap-4">
              {/* First side image */}
              <div className="w-1/2 aspect-square overflow-hidden rounded-lg">
                <img
                  src={reasons[nextIndex].image}
                  alt={reasons[nextIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Second side image */}
              <div className="w-1/2 aspect-square overflow-hidden rounded-lg">
                <img
                  src={reasons[nextNextIndex].image}
                  alt={reasons[nextNextIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
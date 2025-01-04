'use client';

import React, { useState, useEffect } from 'react';
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";

const carouselData = [
  {
    id: 1,
    title: "Tailored Predictive Models",
    description: "We create customized solutions to align with your goals, delivering accurate predictions and actionable insights.",
    image: img1,
  },
  {
    id: 2,
    title: "Comprehensive Support",
    description: "Our team provides end-to-end support, ensuring seamless integration and optimal performance of your solutions.",
    image: img2,
  },
  {
    id: 3,
    title: "Scalable Solutions",
    description: "Build and deploy solutions that grow with your business, maintaining efficiency at any scale.",
    image: img3,
  },
  {
    id: 4,
    title: "Data Analytics",
    description: "Transform raw data into meaningful insights with our advanced analytics capabilities.",
    image: img4,
  },
  {
    id: 5,
    title: "Innovation Hub",
    description: "Stay ahead of the curve with cutting-edge technologies and innovative approaches to problem-solving.",
    image: img2,
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const getAdjacentIndices = (current, total) => {
    const next = (current + 1) % total;
    const nextNext = (current + 2) % total;
    return [next, nextNext];
  };

  const [nextIndex, nextNextIndex] = getAdjacentIndices(currentSlide, carouselData.length);

  return (
    <div className="w-full min-h-screen bg-black text-white p-8">
    <br></br><br></br><br></br>
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3 space-y-8">
            <div className="border-t border-gray-800 pt-4">
              <span className="text-2xl font-mono">{carouselData[currentSlide].id.toString().padStart(2, "0")}</span>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">{carouselData[currentSlide].title}</h2>
              <p className="text-gray-400 text-md">{carouselData[currentSlide].description}</p>
            </div>

            <div className="flex gap-2">
              {carouselData.map((_, index) => (
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
                src={carouselData[currentSlide].image}
                alt={carouselData[currentSlide].title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Side images container */}
            <div className="w-1/2 flex gap-4">
              {/* First side image */}
              <div className="w-1/2 aspect-square overflow-hidden rounded-lg">
                <img
                  src={carouselData[nextIndex].image}
                  alt={carouselData[nextIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Second side image */}
              <div className="w-1/2 aspect-square overflow-hidden rounded-lg">
                <img
                  src={carouselData[nextNextIndex].image}
                  alt={carouselData[nextNextIndex].title}
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

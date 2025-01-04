'use client';

import React, { useState, useEffect, useRef } from 'react';

const slides = [
  { title: "Custom AI Development Process", description: "Our Custom AI Development process starts with in-depth consultations to understand your unique business needs." },
  { title: "AI-Powered Automation", description: "Unlock the power of AI-driven business automation to streamline operations across key departments." },
  { title: "Real-Time Data Analytics", description: "We provide real-time data visualization and actionable insights through intelligent dashboards." },
  { title: "Seamless AI Integration", description: "We ensure seamless AI integration with your existing business systems without disrupting daily operations." },
  { title: "Machine Learning Solutions", description: "Implement cutting-edge machine learning models to enhance decision-making and predict trends." },
  { title: "AI-Driven Customer Experience", description: "Transform your customer interactions with AI-powered chatbots and personalized recommendations." },
];

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = slides.length;
  const carouselRef = useRef(null);
  const scrollInterval = useRef(null);

  useEffect(() => {
    scrollInterval.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);

    return () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
      }
    };
  }, [totalSlides]);

  useEffect(() => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.children[0].offsetWidth;
      carouselRef.current.scrollTo({
        left: slideWidth * activeIndex,
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  const extendedSlides = [...slides, slides[0]];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 w-full">
      <div className="w-full max-w-[90vw]">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          AI Methodology of Hexylon
        </h1>
        <h2 className="text-xl text-gray-400 text-center mb-8">
          Transforming Ideas into Actionable AI with Our Proven Methodology Content
        </h2>
        <div className="w-full max-w-6xl mx-auto bg-black p-8">
          <div ref={carouselRef} className="flex gap-4 overflow-hidden snap-x snap-mandatory">
            {extendedSlides.map((slide, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full sm:w-[calc(33.33%-1rem)] md:w-[calc(25%-1rem)] transition-all duration-500 ease-in-out p-6 rounded-lg cursor-pointer ${
                  index === activeIndex
                    ? "transform -translate-y-4 bg-gray-800"
                    : "bg-gray-900"
                } snap-start`}
                onClick={() => setActiveIndex(index)}
              >
                <h3 className="text-xl font-semibold mb-4 text-white">{slide.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{slide.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-white" : "bg-gray-600"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

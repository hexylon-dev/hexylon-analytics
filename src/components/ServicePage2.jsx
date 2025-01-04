import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RightArrow from "../assets/svgs/RightArrow";
import ScrollDown from "../assets/svgs/ScrollDown";
import HeaderSVG from "../assets/svgs/HeaderSVG";
export default function ServicePage2({ problemStatement }) {
  const { title, Content, benefits } = problemStatement;
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollPercentage(currentScroll / scrollHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-black">
      <motion.div
        style={{ scale, opacity, y }}
        className="relative max-w-7xl min-h-screen mx-auto z-10 flex flex-col px-4 sm:px-6 lg:px-8 pt-[15rem]"
      >
        {/* Left Section - Title and Description */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Title and Description Section */}
          <div className="w-full lg:max-w-[60%]">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-gray-400 text-base lg:text-lg"
            >
             {Content}
            </motion.p>
          </div>

          {/* Cards Section - Asymmetric Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                className={`${
                  index % 2 === 0 ? 'lg:col-start-5' : 'lg:col-start-9'
                } col-span-1 lg:col-span-4 ${
                  index === 1 || index === 2 ? 'bg-zinc-900/50' : ''
                } overflow-hidden relative min-h-[200px] `}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {/* Grid lines overlay - modified for 4 lines */}
                <div className="absolute inset-0">
                  <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-white/10" />
                  <div className="absolute right-1/3 top-0 bottom-0 w-[1px] bg-white/10" />
                  <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-white/10" />
                  <div className="absolute bottom-1/3 left-0 right-0 h-[1px] bg-white/10" />
                </div>
                
                <svg
                  className="w-5 h-5 text-gray-400 absolute top-4 right-4 transform -rotate-45 z-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
                <div className="h-[4rem] w-full"></div>
                <div className="p-6 relative z-10">
                  <p className="text-gray-300 text-[18px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

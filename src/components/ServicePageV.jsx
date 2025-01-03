import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RightArrow from "../assets/svgs/RightArrow";
import ScrollDown from "../assets/svgs/ScrollDown";

export default function HexylonLanding({ handleNavigateToContactPage, title, description }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollPercentage(currentScroll / scrollHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Scoped Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at left, rgba(80, 80, 80, 0.8) 0%, rgba(40, 40, 40, 0.6) 50%, rgba(0, 0, 0, 0.9) 100%),
            radial-gradient(circle at center, rgba(80, 80, 80, 0.8) 0%, rgba(40, 40, 40, 0.6) 50%, rgba(0, 0, 0, 0.9) 100%),
            radial-gradient(circle at right, rgba(80, 80, 80, 0.8) 0%, rgba(40, 40, 40, 0.6) 50%, rgba(0, 0, 0, 0.9) 100%)
          `,
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "4rem 4rem"
        }}
      />

      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full" />

      {/* Scroll percentage indicator */}
      <div className="fixed bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/80 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg z-50 border border-[#FF6600] text-sm sm:text-base">
        {(scrollPercentage * 100).toFixed(1)}%
      </div>

      <motion.div
        style={{ scale, opacity, y }}
        className="relative z-10 flex flex-col px-4 sm:px-6 lg:px-8 pt-32 md:pt-0"
      >
        {/* Right Arrow - Updated positioning */}
        <div className="absolute top-40 right-4 md:top-[170px] md:right-[120px]">
          <div className="bg-[#141414] p-2 md:p-3 rounded-full shadow-lg hover:bg-[#1a1a1a] transition-colors duration-300">
            <RightArrow className="w-6 h-6 md:w-10 md:h-10 text-[#0066ff]" />
          </div>
        </div>

        {/* Service Button - Updated margin */}
        <div className="mb-16 md:mb-32">
          <button
            className="service-button"
            style={{
              background: "linear-gradient(135deg, #ff7755, #ff9966)",
              padding: "8px 24px",
              borderRadius: "9999px",
              fontWeight: "600",
              transition: "background-color 0.3s, transform 0.3s",
              color: "white",
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.2)",
              marginTop: "90px",
              "@media (min-width: 768px)": {
                padding: "12px 36px",
                marginTop: "100px"
              }
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            SERVICE
            <span className="ml-1">›</span>
          </button>
        </div>

        {/* Main Content - Updated margins */}
        <div className="grid grid-cols-1 gap-8 md:gap-16 mt-16 md:mt-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="service-title text-4xl md:text-8xl"
            style={{
              lineHeight: "1.2",
              fontFamily: "serif",
              color: "white",
              textAlign: "center",
              paddingLeft: "0.5rem",
              marginTop: "-90px",
              "@media (min-width: 768px)": {
                paddingLeft: "1.5rem",
                marginTop: "-135px"
              }
            }}
            dangerouslySetInnerHTML={{ __html: title }}
          >
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="service-description text-lg md:text-xl lg:text-2xl"
            style={{
              color: "rgb(209, 213, 219)",
              maxWidth: "28rem",
              margin: "0 auto",
              textAlign: "center",
              marginRight: "8px",
              padding: "0 1rem"
            }}
          >
            {description}
          </motion.p>
        </div>

        {/* Scroll Indicator - Updated positioning */}
        <div className="absolute top-[540px] right-1/2 transform translate-x-1/2 md:top-[480px] md:right-[590px] md:transform-none">
          <ScrollDown className="w-6 h-6 md:w-10 md:h-10 text-[#0066ff]" />
        </div>
      </motion.div>
    </div>
  );
}

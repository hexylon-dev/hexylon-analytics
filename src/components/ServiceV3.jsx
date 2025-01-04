import React from 'react';
import SalesForecastingSVG from '../assets/svgs/SalesForecastingSVG';
import { motion } from 'framer-motion'; // Make sure to install framer-motion

const ServiceV3 = ({ keyFeatures }) => {
    console.log(keyFeatures);
  // Split the first word for gradient effect
  const words = keyFeatures.title.split(' ');
  const firstWord = words[0];
  const restOfTitle = words.slice(1).join(' ');

  // Replace static cards array with features length
  const cards = keyFeatures.features;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A1A] via-[#232323] to-[#2A2A2A] text-white relative overflow-hidden">
      {/* Enhanced responsive background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[10%] left-[10%] w-[40vw] sm:w-96 h-[40vw] sm:h-96 bg-[#FF6B2B]/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[40vw] sm:w-96 h-[40vw] sm:h-96 bg-[#FF6B2B]/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] right-[20%] w-[30vw] sm:w-72 h-[30vw] sm:h-72 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[20%] left-[20%] w-[30vw] sm:w-72 h-[30vw] sm:h-72 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto pt-20 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        {/* Enhanced responsive header section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tight">
            <span className="inline-block bg-gradient-to-r from-[#FF6B2B] via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              {firstWord}
            </span>{" "}
            <span className="inline-block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              {restOfTitle}
            </span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-[90%] sm:max-w-3xl mx-auto leading-relaxed px-4"
          >
            {/* Add description text here if needed */}
          </motion.p>
        </motion.div>

        {/* Enhanced responsive cards grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-14 mt-8 sm:mt-12 md:mt-16 px-2 sm:px-4"
        >
          {cards.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="group relative w-full rounded-xl sm:rounded-2xl overflow-hidden"
            >
              {/* Card glass effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2A2A2A]/90 to-[#1E1E1E]/90 backdrop-blur-sm border border-gray-800/50" />
              
              {/* Hover gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B2B]/0 via-[#FF6B2B]/20 to-[#FF6B2B]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Responsive card content */}
              <div className="relative p-4 sm:p-6 md:p-8 h-full">
                <div className="transform group-hover:scale-105 transition-transform duration-300">
                  <SalesForecastingSVG content={feature} />
                  {/* <h3 className="text-xl sm:text-2xl font-bold mt-4 mb-2 text-white">
                    {feature.name}
                  </h3> */}
                  {/* <p className="text-gray-400 text-sm sm:text-base">
                    {feature.description}
                  </p> */}
                </div>
              </div>

              {/* Subtle gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1/4 sm:h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced responsive bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
    </div>
  );
};

export default ServiceV3;
'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { LightbulbIcon, MonitorIcon, BrainCircuitIcon, Settings2Icon } from 'lucide-react'

const steps = [
  {
    title: "Understand Your Business",
    icon: LightbulbIcon,
    description: "We dive deep into your business processes, goals, and challenges to identify areas where AI can make the most significant impact. Our team of experts works closely with you to understand your unique needs.",
    position: "left",
  },
  {
    title: "Data Collection and Analysis",
    icon: MonitorIcon,
    description: "We gather and analyze your existing data, identifying patterns and insights that will form the foundation of our AI models. Our advanced data processing techniques ensure we extract maximum value from your information.",
    position: "right",
  },
  {
    title: "AI Model Development",
    icon: BrainCircuitIcon,
    description: "Our team of skilled data scientists and machine learning engineers develop custom AI models tailored to your specific needs. We use cutting-edge algorithms and techniques to ensure optimal performance and accuracy.",
    position: "left",
  },
  {
    title: "Integration and Testing",
    icon: Settings2Icon,
    description: "We seamlessly integrate the AI solutions into your existing systems and workflows. Rigorous testing is performed to ensure reliability, scalability, and security of the implemented AI models.",
    position: "right",
  },
]

export default function SnakeCurve() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (value < 0.400) {
        setActiveIndex(0)
      } else if (value >= 0.400 && value < 0.500) {
        setActiveIndex(1)
      } else if (value >= 0.500 && value < 0.630) {
        setActiveIndex(2)
      } else {
        setActiveIndex(3)
      }
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-gray-900 to-black py-20">
      <div
        ref={containerRef}
        className="w-full max-w-8xl aspect-[3/4] p-8 min-h-[800px] relative bg-black/60 backdrop-blur-lg rounded-xl shadow-xl"
      >
        <svg
          viewBox="0 0 100 80"
          className="w-full h-full absolute inset-0"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#14B8A6" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 15 10 
               C 15 20, 85 20, 85 30
               C 85 40, 15 40, 15 50
               C 15 60, 85 60, 85 70"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            style={{
              pathLength,
              strokeDasharray: 1,
              strokeDashoffset: 0,
              translateX: '10%',
            }}
          />

          {steps.map((_, index) => {
            const yOffset = index === 0 ? 10 :
              index === 1 ? 30 :
                index === 2 ? 50 : 70;
            const xOffset = index % 2 === 0 ? 15 : 85;

            return (
              <motion.circle
                key={index}
                cx={xOffset}
                cy={yOffset}
                r="3"
                className={`${activeIndex === index ? 'fill-teal-500' : 'fill-indigo-500'}`}
                initial={{ scale: 1 }}
                animate={{ 
                  scale: activeIndex === index ? 1.8 : 1,
                  translateX: '10%',
                }}
                transition={{ duration: 0.4 }}
              />
            )
          })}
        </svg>

        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {steps.map((step, index) => {
            const yOffset = index === 0 ? 10 :
              index === 1 ? 30 :
                index === 2 ? 50 : 70;
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                className="absolute transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0.5, 
                  y: activeIndex === index ? 0 : 20,
                  scale: activeIndex === index ? 1 : 0.95
                }}
                transition={{ duration: 0.5 }}
                style={{
                  left: index === 1 || index === 3 ? '70%' : '5%',
                  top: `${(yOffset / 160) * 100 + (index === 0 ? 5 : index === 2 ? 11 : index === 3 ? 13 : 8)}%`,
                  transform: 'translateY(-50%)',
                }}
              >
                <div className={`flex items-start gap-3 ${index === 1 || index === 3 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="rounded-full bg-indigo-500/30 p-3 transition-all duration-300 transform hover:scale-110 hover:bg-indigo-500/40">
                    <Icon className="w-6 h-6 text-indigo-300 transition-all duration-300" />
                  </div>
                  <div className="flex flex-col gap-2 max-w-xs">
                    <h3 className="text-lg font-semibold text-white tracking-tight">
                      {step.title}
                    </h3>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="text-sm text-gray-300"
                      >
                        {step.description}
                        <button className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-indigo-500 to-teal-500 hover:from-indigo-600 hover:to-teal-600 text-white rounded-md shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105">
                          View Case Study
                        </button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

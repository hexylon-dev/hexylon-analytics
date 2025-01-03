import { FileText, icons } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import ServicePredictiveAnalytics from "../assets/svgs/ServicePredictiveAnalytics";
import NaturalLanguage from "../assets/svgs/ServiceNaturalLanguage";
import ServiceComputerVision from "../assets/svgs/ServiceComputerVision";
import ServiceRecommendationSystems from "../assets/svgs/ServiceRecommendationSystems";
import ServiceCustomAI from "../assets/svgs/ServiceCustomAI";
import AutoML from "../assets/svgs/AutoML";
import ServiceConversationalAI from "../assets/svgs/ServiceConversationalAI";
import ServiceAIforProcessAutomation from "../assets/svgs/ServiceAIforProcessAutomation";
import ServiceNaturalLanguage from "../assets/svgs/ServiceNaturalLanguage";
import ServiceCardPredictiveAnalytics from "../assets/svgs/ServiceCardPredictiveAnalytics";
import OurServicesMobile from "./OurServiceMobile";

const items = [
  {
    id: "section1",
    title: "Predictive Analytics Solutions Development",
    iconSvg: <ServicePredictiveAnalytics />,
  },
  {
    id: "section2",
    title: "Natural Language Processing (NLP)",
    iconSvg: <NaturalLanguage />,
  },
  {
    id: "section3",
    title: "Computer Vision",
    iconSvg: <ServiceComputerVision />,
  },
  {
    id: "section4",
    title: "Recommendation Systems",
    iconSvg: <ServiceRecommendationSystems />,
  },
  { id: "section5", title: "Custom AI Models", iconSvg: <ServiceCustomAI /> },
  {
    id: "section6",
    title: "Automated Machine Learning (AutoML)",
    iconSvg: <AutoML />,
  },
  {
    id: "section7",
    title: "AI-Powered Data Analytics",
    iconSvg: <ServiceNaturalLanguage />,
  },
  {
    id: "section8",
    title: "Conversational AI",
    iconSvg: <ServiceConversationalAI />,
  },
  {
    id: "section9",
    title: "AI for Process Automation",
    iconSvg: <ServiceAIforProcessAutomation />,
  },
];

const OurServices = () => {
  const [activeSections, setActiveSections] = useState([]);
  const sectionRefs = useRef([]);
  const scrollContainerRef = useRef(null);
  const lastScrollTop = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const options = {
      root: scrollContainerRef.current,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        const sectionIndex = items.findIndex((item) => item.id === sectionId);

        if (entry.isIntersecting) {
          setActiveSections((prev) => {
            const newActiveSections = [...prev];
            for (let i = 0; i <= sectionIndex; i++) {
              if (!newActiveSections.includes(items[i].id)) {
                newActiveSections.push(items[i].id);
              }
            }
            return newActiveSections;
          });
        } else {
          const scrollContainer = scrollContainerRef.current;
          if (scrollContainer) {
            const currentScrollTop = scrollContainer.scrollTop;
            if (currentScrollTop < lastScrollTop.current) {
              // Scrolling up
              setActiveSections((prev) =>
                prev.filter((id) => id !== sectionId)
              );
            }
            lastScrollTop.current = currentScrollTop;
          }
        }
      });
    }, options);

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const isActive = (itemId) => {
    return activeSections.includes(itemId);
  };

  return (
    <div className="max-w-full mx-auto">
      <div className="sticky top-0 md:top-[75px] z-50 shadow-md p-4">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 text-center uppercase">
          OUR SERVICES
        </h2>
      </div>

      <div className="hidden md:block">
        <div className="flex flex-col md:flex-row mt-8 md:mt-16">
          <div className="w-full md:w-[10%]"></div>
          <div
            className={`w-full md:max-w-[400px] border border-[red] p-2 ${
              isMobile ? "overflow-x-auto whitespace-nowrap" : ""
            }`}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-4 pb-8 ${
                  isMobile ? "inline-block mr-4" : ""
                }`}
              >
                {!isMobile && index !== items.length - 1 && (
                  <div
                    className={`absolute left-7 top-12 bottom-0 w-1 transition-all duration-300 ease-in-out ${
                      isActive(item.id) ? "bg-blue-500" : "bg-blue-500/20"
                    }`}
                  />
                )}

                <div
                  className={`flex items-center justify-center relative w-[60px] h-[60px] rounded-full border-2 outline outline-offset-2 outline-[#0A0A0A] bg-[#5F5F5F] shadow-[inset_0px_-6px_4px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out ${
                    isActive(item.id)
                      ? "border-blue-500 scale-110"
                      : "outline-[#0A0A0A]"
                  } `}
                >
                  {item.iconSvg}
                </div>

                <div className="flex-1">
                  <h3
                    className={`text-lg font-medium transition-colors duration-300 ${
                      isActive(item.id) ? "text-blue-500" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div
            ref={scrollContainerRef}
            className="flex-1 h-[calc(100vh-200px)] md:h-screen overflow-y-scroll p-5 bg-transparent border border-[red] scrollbar-hidden"
          >
            {items.map((section, index) => (
              <div
                key={section.id}
                id={section.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                className="h-screen mb-5 flex justify-center items-center"
              >
                <div className="flex flex-col w-full bg-[transparent] shadow-xl">
                  <figure className="flex justify-center items-center ">
                    <ServiceCardPredictiveAnalytics />
                  </figure>
                  <div className="flex flex-col p-8">
                    <div className="text-2xl font-bold text-center text-[#374151] pb-6">
                      {section.title}
                    </div>
                    <div className="text-lg text-center text-[#374151]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione ipsam, id aspernatur doloremque eum laboriosam
                      pariatur ab veritatis aut natus et, necessitatibus
                      inventore, reiciendis nisi?
                    </div>
                    <div className="flex justify-end pt-6">
                      <button className="bg-[#7e22ce] text-[#ffffff] w-full font-bold text-base p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">
                        Try it out!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <OurServicesMobile />
      </div>
    </div>
  );
};

export default OurServices;

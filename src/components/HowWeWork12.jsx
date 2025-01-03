import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

const HexagonAnimation = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const frameId = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(25, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(50, 50);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.CylinderGeometry(1, 1, 0.5, 6);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff6600,
      wireframe: true,
    });
    const hexagon = new THREE.Mesh(geometry, material);
    scene.add(hexagon);

    camera.position.z = 5;

    sceneRef.current = { scene, camera, renderer, hexagon };

    const animate = () => {
      if (sceneRef.current) {
        const { hexagon, renderer, scene, camera } = sceneRef.current;
        hexagon.rotation.x += 0.01;
        hexagon.rotation.y += 0.01;
        renderer.render(scene, camera);
      }
      frameId.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      if (sceneRef.current) {
        sceneRef.current.renderer.dispose();
        sceneRef.current.renderer.forceContextLoss();
      }
      if (mountRef.current && mountRef.current.firstChild) {
        mountRef.current.removeChild(mountRef.current.firstChild);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute z-50 bottom-1 right-3" />;
};

const TypingEffect = ({ text, triggerAnimation, onComplete }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (triggerAnimation && !isTyping && !isComplete) {
      let currentText = "";
      let currentIndex = 0;
      setIsTyping(true);

      const typeText = () => {
        if (currentIndex < text.length) {
          currentText += text[currentIndex];
          setDisplayText(currentText);
          currentIndex++;
          setTimeout(typeText, 25);
        } else {
          setIsTyping(false);
          setIsComplete(true);
          onComplete();
        }
      };
      typeText();
    }
  }, [triggerAnimation, text, isTyping, isComplete, onComplete]);

  return (
    <div className="relative z-10">
      <span>{displayText}</span>
      {isTyping && <span className="animate-blink">|</span>}
    </div>
  );
};

const CaseStudyModal = ({ isOpen, onClose, caseStudy }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Animate modal opening
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      gsap.fromTo(
        contentRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.2,
        }
      );
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={contentRef}
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header section with gradient line and close button */}
        <div className="sticky top-0 bg-white pt-6 px-6 pb-4 border-b border-gray-100">
          <div className="flex item-center justify-center">
            <div className="w-[98%] my-auto h-[0.5px] bg-gradient-to-r from-[#003366] to-[#FF6600] rounded-full"></div>
            <div className="my-auto flex items-center justify-center ml-4">
              <button
                onClick={onClose}
                className=" text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="px-6 py-4">
          <h2 className="text-3xl font-bold text-[#003366] mb-2">
            {caseStudy.title}
          </h2>
          <p className="text-lg text-gray-600 mb-4 font-medium">
            {caseStudy.description}
          </p>
          <div className="bg-gray-50 p-6 rounded-xl">
            <p className="text-gray-700 leading-relaxed">{caseStudy.content}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#003366]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <span className="text-[#003366] font-medium">
                Results Achieved
              </span>
            </div>
            <div className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#FF6600]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-[#FF6600] font-medium">
                Implementation Time
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkCard = ({ title, description, number, icon, caseStudy }) => {
  const cardRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <>
      <div
        ref={cardRef}
        className="w-full bg-white rounded-xl shadow-xl p-4 md:p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group min-h-[420px]"
      >
        <div className="absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-50 transform group-hover:scale-150 transition-transform duration-500"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl font-bold text-[#003366] bg-blue-50 w-[0.5px]4 h-[0.5px]4 rounded-full flex items-center justify-center">
              {number}
            </span>
          </div>

          <div className="mb-6">{icon}</div>

          <h3 className="text-2xl font-bold mb-4 text-[#003366] border-b-2 border-[#FF6600] pb-2 inline-block">
            {title}
          </h3>

          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            {description}
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="group/button relative w-full overflow-hidden rounded-lg bg-[#003366] px-4 py-3 text-white transition-all duration-300 hover:bg-[#004d99] active:scale-95"
          >
            <div className="relative z-10 flex items-center justify-center gap-2">
              <span className="font-medium">View Case Study</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transform transition-transform duration-300 group-hover/button:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#FF6600] to-[#FF8533] opacity-0 transition-opacity duration-300 group-hover/button:opacity-100"></div>
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-gradient-to-r from-[#003366] to-[#FF6600] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      </div>

      <CaseStudyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        caseStudy={caseStudy}
      />
    </>
  );
};

const HowWeWorkSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const [triggerTyping, setTriggerTyping] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const scrollTriggerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const objervRef = useRef(null); // Reference to the section
  const [isVisible, setIsVisible] = useState(false);
  const steps = [
    {
      title: "Understand Your Business",
      description:
        "We start by sending our expert consultants to thoroughly understand your business processes, challenges, and goals. This deep dive allows us to tailor our AI solutions specifically to your needs.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[0.5px]6 h-[0.5px]6 text-[#003366]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      caseStudy: {
        title: "Global Retailer Transformation",
        description:
          "How we revolutionized inventory management for a Fortune 500 retailer",
        content:
          "Our team spent two weeks on-site, analyzing the client's existing inventory systems and supply chain processes. By understanding their unique challenges, we developed a custom AI solution that reduced stockouts by 35% and improved inventory turnover by 20%.",
      },
    },
    {
      title: "Data Collection and Analysis",
      description:
        "We gather and analyze your existing data, identifying patterns and insights that will form the foundation of our AI models. Our advanced data processing techniques ensure we extract maximum value from your information.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[0.5px]6 h-[0.5px]6 text-[#003366]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      caseStudy: {
        title: "Financial Services Data Optimization",
        description: "Enhancing fraud detection for a major bank",
        content:
          "By collecting and analyzing five years of transaction data, we identified subtle patterns of fraudulent activity. Our AI model increased fraud detection rates by 60% while reducing false positives by 40%, saving the bank millions in potential losses.",
      },
    },
    {
      title: "AI Model Development",
      description:
        "Our team of expert data scientists and machine learning engineers develop custom AI models tailored to your specific needs. We use cutting-edge algorithms and techniques to ensure optimal performance and accuracy.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[0.5px]6 h-[0.5px]6 text-[#003366]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      caseStudy: {
        title: "Healthcare Predictive Analytics",
        description: "Improving patient outcomes with AI",
        content:
          "We developed a neural network model that analyzes patient data to predict potential complications. This model achieved a 92% accuracy rate in identifying high-risk patients, allowing for early interventions and significantly improving patient outcomes.",
      },
    },
    {
      title: "Integration and Testing",
      description:
        "We seamlessly integrate our AI solutions into your existing systems and rigorously test them to ensure optimal performance. Our iterative approach allows for continuous refinement and improvement.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[0.5px]6 h-[0.5px]6 text-[#003366]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      ),
      caseStudy: {
        title: "Manufacturing Process Optimization",
        description: "Boosting efficiency in automotive production",
        content:
          "Our AI solution was integrated into the client's existing manufacturing systems. Through rigorous testing and optimization, we achieved a 15% increase in production efficiency and a 25% reduction in quality control issues, significantly improving the client's bottom line.",
      },
    },
  ];
  const handleTypingComplete = () => {
    setTypingComplete(true);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: headerRef.current,
        start: "top 80%",
        onEnter: () => {
          if (!typingComplete) {
            setTriggerTyping(true);
            // document.body.style.overflow = "hidden";
          }
        },
        once: true,
      });
    }, sectionRef.current);

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    console.log("objervRef", objervRef.current);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("entry", entry);
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it's visible
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (objervRef.current) {
      observer.observe(objervRef.current);
    }

    return () => {
      if (objervRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className=" min-h-screen  relative overflow-hidden py-20"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #003366 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-12xl mx-auto px-4 md:px-8">
        <div ref={headerRef} className="relative mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0056A6] text-center">
            Our Process
          </h2>
          <p className="mt-3 text-lg text-white text-center">
          Leveraging cutting-edge technology to redefine workflows and achieve seamless integration.
          </p>
        </div>

        <div ref={objervRef} className="flex flex-col lg:flex-row max-w-12xl min-h-[30rem] justify-center items-center mx-auto bg-black rounded-2xl p-4 gap-8 lg:gap-0">
          <div className="relative w-[18rem] h-[28rem] rounded-lg lg:mr-[99px] p-5">
            {/* Left border */}
            <div className={`absolute left-0 top-0 w-[0.5px] h-[100%] bg-orange-500 rounded-l-3xl ${isVisible ? "animate-draw-height-line" : ""}`}></div>
            {/* Top border */}
            <div className={`absolute left-0 top-0 w-full h-[0.5px] bg-orange-500 rounded-tl-3xl ${isVisible ? "animate-draw-width-line" : ""}`}></div>
            {/* Bottom border */}
            <div className={`absolute left-0 bottom-0 w-full h-[0.5px] bg-orange-500 rounded-bl-3xl rounded-br-3xl ${isVisible ? "animate-draw-width-line" : ""}`}></div>
            {/* Right border with gap */}
            <div className={`absolute right-0 top-0 w-[0.5px] h-[5rem] bg-orange-500 rounded-tr-3xl ${isVisible ? "animate-draw-height-5rem-line-bottom-to-top" : ""}`}></div>
            {/* Attach fill circle top to right border between border gap */}
            {/* start animation need to be here */}
            <div className="absolute right-[-3px] top-20 w-[0.5rem] h-[0.5rem] bg-orange-500 rounded-full "></div>
            {/* Right border with gap */}
            <div className={`absolute right-0 bottom-0 w-[0.5px] h-[5rem] bg-orange-500 rounded-r-3xl ${isVisible ? "animate-draw-height-5rem-line-bottom-to-top" : ""}`}></div>

            <div className={`absolute right-[-52px] bottom-[4.3rem] w-[2px] h-[19.2rem] bg-orange-500 rounded-r-3xl transform rotate-[18.7deg] ${isVisible ? "animate-draw-height-line-cross-line" : ""} hidden md:block`}></div>

            <div className="flex flex-col items-center space-y-6 h-full justify-center">
              {/* Light orange icon */}
              <div className="text-orange-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[0.5px]0 h-[0.5px]0 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {/* Title */}
              <h2
                className="text-xl font-bold text-white text-center"
                style={{ margin: "0px", marginTop: "10px" }}
              >
                Understand
                <br />
                Your Business
              </h2>

              {/* Text content */}
              <p className="max-w-sm text-center leading-relaxed text-white/90">
                We start by sending our expert consultants to thoroughly
                understand your business processes, challenges, and goals. This
                deep dive allows us to tailor our AI solutions specifically to
                your needs.
              </p>

              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setSelectedCaseStudy({
                    title: "Global Retailer Transformation",
                    description:
                      "How we revolutionized inventory management for a Fortune 500 retailer",
                    content:
                      "Our team spent two weeks on-site, analyzing the client's existing inventory systems and supply chain processes. By understanding their unique challenges, we developed a custom AI solution that reduced stockouts by 35% and improved inventory turnover by 20%.",
                  });
                }}
                className="mt-2 bg-[#003366] text-white hover:bg-[#FF6600] transition-colors duration-300 px-4 py-2 rounded-md"
              >
                View Case Study
              </button>
            </div>
          </div>
{/* center card */}
          <div className="relative w-[18rem] h-[28rem] rounded-lg lg:mr-[99px] p-5">
            {/* Left border */}
            <div className="absolute left-0 top-0 w-[0.5px] min-h-[5.5rem] bg-orange-500 rounded-l-3xl  "></div>

            {/* Top border */}
            <div className={`absolute left-0 top-0 w-full h-[0.5px] bg-orange-500 rounded-tl-3xl ${isVisible ? "animate-draw-width-line" : ""}`}></div>

            {/* Bottom border */}
            <div className={`absolute left-0 bottom-0 w-full h-[0.5px] bg-orange-500 rounded-bl-3xl rounded-br-3xl ${isVisible ? "animate-draw-width-line" : ""}`}></div>
            {/* Right border with gap */}
            <div className="absolute right-0 top-0 w-[0.5px] min-h-24 bg-orange-500 rounded-tr-3xl"></div>

            {/* Attach fill circle top to right border between border gap */}
            {/* end animation need to be here */}
            <div className="absolute right-[-3px] top-[5.9rem] w-[0.5rem] h-[0.5rem] bg-orange-500 rounded-full"></div>

            {/* Right border with gap */}
            <div className="absolute right-0 bottom-0 w-[0.5px] h-[5.5rem] bg-orange-500 rounded-r-3xl"></div>
            <div className="absolute bottom-0 left-0  w-[0.5px] min-h-24 bg-orange-500 rounded-l-3xl"></div>

            {/* Attach fill circle top to right border between border gap */}
            <div className="absolute bottom-[5.9rem] left-[-3px]  w-[0.5rem] h-[0.5rem] bg-orange-500 rounded-full"></div>

            <div className="flex flex-col items-center space-y-6 h-full justify-center">
              {/* Light orange icon */}
              <div className="text-orange-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[0.5px]0 h-[0.5px]0 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>

              {/* Title */}
              <h2
                className="text-xl font-bold text-white text-center"
                style={{ margin: "0px", marginTop: "10px" }}
              >
                Data Collection
                <br />
                and Analysis
              </h2>

              {/* Text content */}
              <p className="max-w-sm text-center leading-relaxed text-white/90">
                We gather and analyze your existing data, identifying patterns
                and insights that will form the foundation of our AI models. Our
                advanced data processing techniques ensure we extract maximum
                value from your information.
              </p>

              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setSelectedCaseStudy({
                    title: "Financial Services Data Optimization",
                    description: "Enhancing fraud detection for a major bank",
                    content:
                      "By collecting and analyzing five years of transaction data, we identified subtle patterns of fraudulent activity. Our AI model increased fraud detection rates by 60% while reducing false positives by 40%, saving the bank millions in potential losses.",
                  });
                }}
                className="mt-2 bg-[#003366] text-white hover:bg-[#FF6600] transition-colors duration-300 px-4 py-2 rounded-md"
              >
                View Case Study
              </button>
            </div>
          </div>

          <div className="relative w-[18rem] h-[28rem] rounded-lg p-5 transform lg:rotate-[180deg]">
            {/* Left border */}
            <div className="absolute left-0 top-0 w-[0.5px] h-full bg-orange-500 rounded-l-3xl"></div>
            {/* Top border */}
            <div className={`absolute left-0 top-0 w-full h-[0.5px] bg-orange-500 rounded-tl-3xl ${isVisible ? "animate-draw-width-line" : ""}`}></div>
            {/* Bottom border */}
            <div className={`absolute left-0 bottom-0 w-full h-[0.5px] bg-orange-500 rounded-bl-3xl rounded-br-3xl ${isVisible ? "animate-draw-width-line" : ""}`}></div>
            {/* Right border with gap */}
            <div className="absolute right-0 top-0 w-[0.5px] min-h-24 bg-orange-500 rounded-tr-3xl"></div>
            {/* Attach fill circle top to right border between border gap */}
            <div className="absolute right-[-4px] top-[5.9rem] w-[0.5rem] h-[0.5rem] bg-orange-500 rounded-full"></div>
            {/* Right border with gap */}
            <div className="absolute right-0 bottom-0 w-[0.5px] min-h-[5rem]  bg-orange-500 rounded-r-3xl"></div>
            <div className={`absolute right-[-52px]  bottom-[4.3rem] w-[2px] h-[19.2rem] bg-orange-500 rounded-r-3xl transform rotate-[18.7deg] ${isVisible ? "animate-draw-height-line-cross-line" : ""} hidden md:block`}></div>
            <div className="flex flex-col items-center space-y-6 h-full justify-center transform lg:rotate-[180deg] rotate-0">
              {/* Light orange icon */}
              <div className="text-orange-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[0.5px]0 h-[0.5px]0 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              {/* Title */}
              <h2
                className="text-xl font-bold text-white text-center"
                style={{ margin: "0px", marginTop: "10px" }}
              >
                AI Model
                <br />
                Development
              </h2>

              {/* Text content */}
              <p className="max-w-sm text-center leading-relaxed text-white/90">
                Our team of expert data scientists and machine learning
                engineers develop custom AI models tailored to your specific
                needs. We use cutting-edge algorithms and techniques to ensure
                optimal performance and accuracy.
              </p>

              <button
                 onClick={() => {
                  setIsModalOpen(true);
                  setSelectedCaseStudy({
                    title: "Healthcare Predictive Analytics",
                    description: "Improving patient outcomes with AI",
                    content:
                      "We developed a neural network model that analyzes patient data to predict potential complications. This model achieved a 92% accuracy rate in identifying high-risk patients, allowing for early interventions and significantly improving patient outcomes.",
                  },);
                }}
                className="mt-2 bg-[#003366] text-white hover:bg-[#FF6600] transition-colors duration-300 px-4 py-2 rounded-md"
              >
                View Case Study
              </button>
            </div>
          </div>
        </div>
        {/* <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 transition-opacity duration-500"
          style={{ opacity: typingComplete ? 1 : 0 }}
        >
          {steps.map((step, index) => (
            <WorkCard
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
              icon={step.icon}
              caseStudy={step.caseStudy}
            />
          ))}
        </div> */}

        <CaseStudyModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          caseStudy={selectedCaseStudy}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#003366]/20 to-transparent"></div>
    </div>
  );
};

export default HowWeWorkSection;

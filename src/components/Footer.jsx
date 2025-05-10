import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin, Twitter, Github, Instagram } from "lucide-react";
import logo from "../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const FooterWithTransition = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation(); // Track the current route location

  // Scroll to the top when the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // This will trigger on route change

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate content
      gsap.fromTo(
        ".fade-up",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".footer-content",
            start: "top bottom-=100",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleNavigation = (item) => {
    switch (item) {
      case "Contact Us":
        navigate("/contact-us");
        break;
      case "Blog":
        navigate("/blogs"); // Adjust to your blog route
        break;
      case "Careers":
        navigate("/careers"); // Adjust to your careers route
        break;
      case "Home":
        navigate("/");
        break;
      default:
        break;
    }
  };

  return (
    <div ref={sectionRef}>
      <footer className="bg-[#001830] text-white py-12 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="container footer-content">
            <div className="-mx-4 flex flex-wrap fade-up">
              <div className="w-full px-4 sm:w-6/12">
                <div className="mb-10 w-full">
                  <div className="flex items-center gap-2 mb-4">
                    <img
                      src={logo}
                      alt="Hexylon Analytics Logo"
                      className="w-20 h-10 mr-2"
                    />
                    <span className="text-xl font-bold">Hexylon Analytics</span>
                  </div>
                  <p className="mb-7 text-body-color dark:text-dark-6 text-sm text-gray-400">
                    Innovative Analytics for Transformative Insights
                  </p>
                  <p className="mb-7 flex items-center text-sm font-medium text-dark dark:text-white">
                    <span className="mr-3 text-gray-400">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_941_15626)">
                          <path
                            d="M15.1875 19.4688C14.3438 19.4688 13.375 19.25 12.3125 18.8438C10.1875 18 7.84377 16.375 5.75002 14.2813C3.65627 12.1875 2.03127 9.84377 1.18752 7.68752C0.250019 5.37502 0.343769 3.46877 1.43752 2.40627C1.46877 2.37502 1.53127 2.34377 1.56252 2.31252L4.18752 0.750025C4.84377 0.375025 5.68752 0.562525 6.12502 1.18752L7.96877 3.93753C8.40627 4.59378 8.21877 5.46877 7.59377 5.90627L6.46877 6.68752C7.28127 8.00002 9.59377 11.2188 13.2813 13.5313L13.9688 12.5313C14.5 11.7813 15.3438 11.5625 16.0313 12.0313L18.7813 13.875C19.4063 14.3125 19.5938 15.1563 19.2188 15.8125L17.6563 18.4375C17.625 18.5 17.5938 18.5313 17.5625 18.5625C17 19.1563 16.1875 19.4688 15.1875 19.4688ZM2.37502 3.46878C1.78127 4.12503 1.81252 5.46877 2.50002 7.18752C3.28127 9.15627 4.78127 11.3125 6.75002 13.2813C8.68752 15.2188 10.875 16.7188 12.8125 17.5C14.5 18.1875 15.8438 18.2188 16.5313 17.625L18.0313 15.0625C18.0313 15.0313 18.0313 15.0313 18.0313 15L15.2813 13.1563C15.2813 13.1563 15.2188 13.1875 15.1563 13.2813L14.4688 14.2813C14.0313 14.9063 13.1875 15.0938 12.5625 14.6875C8.62502 12.25 6.18752 8.84377 5.31252 7.46877C4.90627 6.81252 5.06252 5.96878 5.68752 5.53128L6.81252 4.75002V4.71878L4.96877 1.96877C4.96877 1.93752 4.93752 1.93752 4.90627 1.96877L2.37502 3.46878Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_941_15626">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span className="text-gray-400">+91 7990821728</span>
                  </p>
                  <p className="flex items-center text-sm font-medium text-dark dark:text-white">
                    <span className="mr-3 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                      >
                        {" "}
                        <path
                          d="M12,2C8.134,2,5,5.134,5,9c0,5,7,13,7,13s7-8,7-13C19,5.134,15.866,2,12,2z M12,11.5c-1.381,0-2.5-1.119-2.5-2.5 c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5C14.5,10.381,13.381,11.5,12,11.5z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>

                    <span className="text-gray-400">
                      301/2 Parshwa Tower 2, 901, Sarkhej - Gandhinagar Hwy,
                      near Pakwan II, Bodakdev, Ahmedabad, Gujarat - 380054
                    </span>
                  </p>
                  <p className="flex items-center text-sm font-medium text-dark dark:text-white mt-2">
                    <span className="mr-3 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                      >
                        {" "}
                        <path
                          d="M12,2C8.134,2,5,5.134,5,9c0,5,7,13,7,13s7-8,7-13C19,5.134,15.866,2,12,2z M12,11.5c-1.381,0-2.5-1.119-2.5-2.5 c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5C14.5,10.381,13.381,11.5,12,11.5z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>

                    <span className="text-gray-400">
                      B/410, Ganesh Plaza,Nr. Navrangpura Post Office,
                      Navrangpura, Ahmedabad, Gujarat, India - 380 009
                    </span>
                  </p>
                </div>
              </div>
              <LinkGroup header="Quick Links">
                <p
                  className="text-sm leading-loose text-body-color hover:text-[#FF6600] dark:text-dark-6 cursor-pointer transition-colors"
                  onClick={() => handleNavigation("Home")}
                >
                  Home
                </p>
                <p
                  className="text-sm leading-loose text-body-color hover:text-[#FF6600] dark:text-dark-6 cursor-pointer transition-colors"
                  onClick={() => handleNavigation("Blog")}
                >
                  Blog
                </p>
                <p
                  className="text-sm leading-loose text-body-color hover:text-[#FF6600] dark:text-dark-6 cursor-pointer transition-colors"
                  onClick={() => handleNavigation("Careers")}
                >
                  Careers
                </p>
                <p
                  className="text-sm leading-loose text-body-color hover:text-[#FF6600] dark:text-dark-6 cursor-pointer transition-colors"
                  onClick={() => handleNavigation("Contact Us")}
                >
                  Contact Us
                </p>
              </LinkGroup>

              <div className="w-full px-4 sm:w-3/12 fade-up">
                <div className="mb-10 w-full">
                  <h4 className="mb-3 sm:mb-9 text-lg font-semibold text-dark dark:text-white">
                    Connect
                  </h4>
                  <div className="mb-6 flex items-center space-x-4 text-gray-400">
                    <a
                      href="https://www.linkedin.com/company/hexylon-analytics"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 hover:text-[#FF6600] cursor-pointer transition-colors" />
                    </a>

                    <a
                      href="https://www.instagram.com/hexylon_analytics/?igsh=dTJudGRjZjhjaTU5#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="w-5 h-5 hover:text-[#FF6600] cursor-pointer transition-colors" />
                    </a>

                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 hover:text-[#FF6600] cursor-pointer transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="fade-up border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 Hexylon Analytics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const LinkGroup = ({ children, header }) => {
  return (
    <div className="w-full px-4 sm:w-3/12 fade-up">
      <div className="mb-10 w-full">
        <h4 className="mb-3 sm:mb-9 sm:mb-2 text-lg font-semibold text-dark dark:text-white">
          {header}
        </h4>
        <div className="space-y-2 text-sm text-gray-400">{children}</div>
      </div>
    </div>
  );
};

export default FooterWithTransition;

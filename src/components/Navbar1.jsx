import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import newlogo from "../assets/newlogo.png";

const menuItems = [
  { id: 1, label: "Home", path: "" },
  { id: 2, label: "Blog", path: "blogs" },
  { id: 3, label: "Service", path: "services", isDropdown: true },
  { id: 4, label: "Technologies", path: "technologies" },
  { id: 5, label: "About Us", path: "about" },
  { id: 6, label: "Our Work", path: "work" },
];

const serviceDropdownItems = [
  {
    id: 1,
    label: "Predictive Analytics Solutions Develpment",
    path: "services/web-development",
  },
  {
    id: 2,
    label: "Natural Language Processing (NLP)",
    path: "services/mobile-app",
  },
  { id: 3, label: "Computer Vision", path: "services/ui-ux-design" },
  {
    id: 4,
    label: "Recommendation Systems",
    path: "services/digital-marketing",
  },
  { id: 5, label: "Custom AI Models", path: "services/cloud-solutions" },
  {
    id: 5,
    label: "Automated Machine Learning (AutoML)",
    path: "services/cloud-solutions",
  },
  {
    id: 6,
    label: "AI-Powered Data Analytics",
    path: "services/cloud-solutions",
  },
  { id: 7, label: "Conversational AI", path: "services/cloud-solutions" },
  {
    id: 8,
    label: "AI for Process Automation",
    path: "services/cloud-solutions",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleServiceDropdown = () => {
    setIsServiceDropdownOpen((prev) => !prev);
  };


  const bodyStopScroll = () => {
    
      document.body.style.overflow = "hidden";
  };

  const bodyEnableScroll = () => {
    
    document.body.style.overflow = "auto";
};


  return (
    <div className="fixed w-full z-50 px-4" onMouseEnter={bodyStopScroll} onMouseLeave={bodyEnableScroll}>
      <header
        className={`transition-all duration-500 ${
          isScrolled ? "mt-2" : "mt-2"
        }`}
      >
        <nav
          className={`mx-auto backdrop-blur-xl border md:rounded-full rounded-2xl bg-[#5E5E5E]/20 ${
            isScrolled
              ? "max-w-6xl bg-[#5E5E5E]/80 border-[#4361ee]/20 shadow-lg"
              : "max-w-7xl border-[#5E5E5E]"
          } transition-all duration-300`}
        >
          <div className="px-6 py-4 flex items-center justify-between">
            <NavLink to="/" className="flex items-center">
              <img
                src={newlogo}
                alt="Vidhyarhi Ai Logo"
                className="h-8 w-auto"
              />
            </NavLink>

            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) =>
                item.isDropdown ? (
                  <div
                    key={item.id}
                    className="relative text-white/70 hover:text-[#FF7A33] text-sm font-medium"
                    onMouseEnter={() => setIsServiceDropdownOpen(true)}
                  >
                    <span className="cursor-pointer flex items-center">
                      {item.label}
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </span>
                    {/* {isServiceDropdownOpen && (
                      <div
                        className="absolute left-0 mt-2 bg-[#5E5E5E] rounded-lg shadow-lg w-96 max-h-60 overflow-y-auto"
                        onMouseLeave={() => setIsServiceDropdownOpen(false)}
                      >
                        {serviceDropdownItems.map((service) => (
                          <NavLink
                            key={service.id}
                            to={`/${service.path}`}
                            className={({ isActive }) =>
                              `block px-4 py-2 text-sm rounded-lg ${
                                isActive ? "text-[#FF7A33]" : "text-white/70"
                              } hover:text-[#FF7A33]`
                            }
                          >
                            {service.label}
                          </NavLink>
                        ))}
                      </div>
                    )} */}

                    {isServiceDropdownOpen && (
                      <div
                        className="absolute left-0 mt-2 bg-[#5E5E5E] rounded-lg shadow-lg w-96 max-h-60 overflow-y-scroll scrollbar-hidden"
                        onMouseLeave={() => setIsServiceDropdownOpen(false)}
                      >
                        {serviceDropdownItems.map((service) => (
                          <NavLink
                            key={service.id}
                            to={`/${service.path}`}
                            className={({ isActive }) =>
                              `block px-4 py-2 text-sm rounded-lg ${
                                isActive ? "text-[#FF7A33]" : "text-white/70"
                              } hover:text-[#FF7A33]`
                            }
                          >
                            {service.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={item.id}
                    to={`/${item.path}`}
                    className={({ isActive }) =>
                      `text-sm font-medium ${
                        isActive ? "text-[#FF7A33]" : "text-white/70"
                      } hover:text-[#FF7A33]`
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              )}
            </div>

            <div>
              <NavLink
                to="/contact-us"
                className="md:block hidden px-6 py-2 bg-gradient-to-r from-[#FF6600] to-[#FF8533] text-white text-sm font-medium rounded-xl  hover:bg-[#FF8533]/50"
              >
                Contact Us
              </NavLink>
            </div>
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden px-6 py-4 space-y-4 border-t border-[#4361ee]/20">
              {menuItems.map((item) =>
                item.isDropdown ? (
                  <div key={item.id} className="space-y-2">
                    <span
                      className="block text-white/70 font-medium flex items-center cursor-pointer hover:text-[#FF7A33]"
                      onClick={toggleServiceDropdown}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </span>
                    {isServiceDropdownOpen && (
                      <div className="pl-4 space-y-2 max-h-60 overflow-y-auto">
                        {serviceDropdownItems.map((service) => (
                          <NavLink
                            key={service.id}
                            to={`/${service.path}`}
                            className={({ isActive }) =>
                              `block font-medium ${
                                isActive ? "text-[#FF7A33]" : "text-white/70"
                              } hover:text-[#FF7A33]`
                            }
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={item.id}
                    to={`/${item.path}`}
                    className={({ isActive }) =>
                      `block font-medium ${
                        isActive ? "text-[#FF7A33]" : "text-white/70"
                      } hover:text-[#FF7A33] `
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                )
              )}
              <NavLink
                to="/contact-us"
                className="block px-6 py-2 bg-gradient-to-r from-[#FF6600] to-[#FF8533] text-white text-sm font-medium rounded-xl  hover:bg-[#FF8533]/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </NavLink>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { NavLink, useLocation } from "react-router-dom";

const menuItem = [
  {
    id: 1,
    label: "Blog",
    path: "blogs",
  },
  {
    id: 2,
    label: "About Us",
    path: "About Us",
  },
  {
    id: 3,
    label: "Our Work",
    path: "Our Work",
  },
  {
    id: 4,
    label: "Contact Us",
    path: "Contact Us",
  },
];

const Navbar = ({ handleNavigateToBlogPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const hash = window.location.hash;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(pathname, "====");

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const linkVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  const handleNavigateToContactPage = () => {
    // navigate("/contact-us");
    window.location.href = "/contact-us";
  };

  const handleNavigation = (item) => {
    if (item === "Contact Us") {
      handleNavigateToContactPage();
    } else if (item === "Blog") {
      handleNavigateToBlogPage();
    } else {
      window.location.href = `#${item.toLowerCase().replace(" ", "-")}`;
    }
    setIsOpen(false);
  };

  const handleRedirect = (label) => {
    console.log(label, "labellabellabel");

    if (label === "About Us" || label === "Our Work") {
      window.location.href = `#${label.toLowerCase().replace(" ", "-")}`;
    } else if (label === "Contact Us") {
      handleNavigateToContactPage();
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2 bg-white shadow-lg" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Hexylon Analytics Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            {!scrolled ? (
              <span
                className={`text-2xl font-bold ${
                  scrolled
                    ? "text-gray-900"
                    : pathname.includes("/blog")
                    ? "bg-gradient-to-r from-[#003366] to-[#FF6600] bg-clip-text text-transparent"
                    : "text-white"
                }`}
              >
                Hexylon Analytics
              </span>
            ) : (
              <span className="text-2xl font-bold bg-gradient-to-r from-[#003366] to-[#FF6600] bg-clip-text text-transparent">
                Hexylon Analytics
              </span>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* {["Blog","About Us", "Our Work", "Contact Us",].map((item, index) => (
              <motion.button
                key={item}
                onClick={() => handleNavigation(item)}
                className={`relative text-lg font-medium ${
                  index === 3
                    ? "px-6 py-2 bg-[#FF6600] text-white rounded-full hover:bg-[#FF8533] transition-colors duration-300"
                    : scrolled
                    ? "text-gray-900 hover:text-[#FF6600]"
                    : "text-white hover:text-[#FF6600]"
                }`}
                whileHover={
                  index !== 2
                    ? {
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }
                    : {}
                }
              >
                {item}
                {index !== 2 && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF6600]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.button>
            ))} */}

            {menuItem.map((item, index) => (
              <motion.div
                key={item.id}
                whileHover={
                  index !== 2
                    ? {
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }
                    : {}
                }
              >
                {item.label === "About Us" ||
                item.label === "Our Work" ||
                item.label === "Contact Us" ? (
                  <button
                    onClick={() => handleRedirect(item.label)}
                    className={`relative text-lg font-medium py-2 ${
                      scrolled
                        ? "text-gray-900 hover:text-[#FF6600]"
                        : pathname.includes("/blog")
                        ? "py-2 text-gray-900 hover:text-[#FF6600]"
                        : "text-white hover:text-[#FF6600]"
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <NavLink
                    to={`/${item.path}`}
                    className={({ isActive }) => {
                      console.log(
                        `isActive: ${isActive}, scrolled: ${scrolled}`
                      );

                      return `relative text-lg font-medium hover:text-[#FF6600] py-2 ${
                        isActive
                          ? "px-6 bg-[#FF6600] text-white rounded-full hover:bg-[#FF8533] transition-colors duration-300"
                          : scrolled
                          ? "text-gray-900 hover:text-[#FF6600]"
                          : "text-white hover:text-[#FF6600]"
                      }`;
                    }}
                  >
                    {item.label}
                  </NavLink>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 focus:outline-none"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className={`w-6 h-0.5 ${
                scrolled ? "bg-gray-900" : "bg-white"
              } block`}
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`w-6 h-0.5 ${
                scrolled ? "bg-gray-900" : "bg-white"
              } block`}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className={`w-6 h-0.5 ${
                scrolled ? "bg-gray-900" : "bg-white"
              } block`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 w-4/5 h-screen bg-gray-900 shadow-2xl lg:hidden"
          >
            <div className="p-8">
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF6600] text-white"
                >
                  <span className="sr-only">Close menu</span>×
                </button>
              </div>
              <div className="flex flex-col space-y-6">
                {["About Us", "Our Work", "Contact Us"].map((item, i) => (
                  <motion.button
                    key={item}
                    onClick={() => handleNavigation(item)}
                    custom={i}
                    variants={linkVariants}
                    className={`text-xl font-medium ${
                      i === 2 ? "text-[#FF6600]" : "text-white"
                    } hover:text-[#FF6600] transition-colors duration-300`}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

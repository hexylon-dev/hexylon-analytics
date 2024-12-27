import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const menuItem = [
  {
    id: 1,
    label: "Home",
    path: "",
  },
  {
    id: 2,
    label: "Blog",
    path: "blogs",
  },
  {
    id: 3,
    label: "Career",
    path: "careers",
  },
  {
    id: 4,
    label: "Contact Us",
    path: "contact-us",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Helper function to check if the "Career" tab should be active
  const isCareerActive = pathname.startsWith("/careers") || pathname.startsWith("/apply-form");

  // Determine if scroll effect should be disabled
  const disableScrollEffect = pathname === "/blogs" || pathname === "/contact-us" || pathname.startsWith("/blogs/");

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        disableScrollEffect
          ? "py-4 bg-white shadow-lg"
          : scrolled
          ? "py-2 bg-white shadow-lg"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              alt="Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span
              className={`text-2xl font-bold ${
                disableScrollEffect
                  ? "bg-gradient-to-r from-[#003366] to-[#FF6600] bg-clip-text text-transparent"
                  : scrolled
                  ? "bg-gradient-to-r from-[#003366] to-[#FF6600] bg-clip-text text-transparent"
                  : pathname === "/contact-us" || pathname === "/blogs"
                  ? "bg-gradient-to-r from-[#003366] to-[#FF6600] bg-clip-text text-transparent"
                  : "text-white"
              }`}
            >
              Hexylon Analytics
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItem.map((item, index) => (
              <motion.div
                key={item.id}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <NavLink
                  to={`/${item.path}`}
                  className={({ isActive }) =>
                    `relative text-lg font-medium hover:text-[#FF6600] py-2 ${
                      (item.path === "careers" && isCareerActive) || isActive
                        ? "px-6 bg-[#FF6600] text-white rounded-full hover:bg-[#FF8533] transition-colors duration-300"
                        : scrolled || disableScrollEffect
                        ? "text-gray-900 hover:text-[#FF6600]"
                        : "text-white hover:text-[#FF6600]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
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
                scrolled || disableScrollEffect ? "bg-gray-900" : "bg-white"
              } block`}
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`w-6 h-0.5 ${
                scrolled || disableScrollEffect ? "bg-gray-900" : "bg-white"
              } block`}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className={`w-6 h-0.5 ${
                scrolled || disableScrollEffect ? "bg-gray-900" : "bg-white"
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
                  ×
                </button>
              </div>
              <div className="flex flex-col space-y-6">
                {menuItem.map((item, i) => (
                  <motion.div key={item.id} custom={i} variants={linkVariants}>
                    <NavLink
                      to={`/${item.path}`}
                      className={({ isActive }) =>
                        `text-xl font-medium ${
                          (item.path === "careers" && isCareerActive) || isActive
                            ? "text-[#FF6600]"
                            : "text-white"
                        } hover:text-[#FF6600] transition-colors duration-300`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
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

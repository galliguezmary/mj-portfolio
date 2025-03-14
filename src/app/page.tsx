"use client";

import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence} from "framer-motion";
import Project from "./sections/project";
import Hero from "./sections/hero";
import About from "./sections/about";
import Experience from "./sections/experience";
import Contact from "./sections/contact";



export default function Portfolio() {
  const [scrolling, setScrolling] = useState(false);
 // Handle scroll effect for navbar
 useEffect(() => {
  const handleScroll = () => {
    setScrolling(window.scrollY > 50);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

// Navbar animation variants
const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
  const [activeSection, setActiveSection] = useState("home");
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      {/* Desktop Navbar */}
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`hidden sm:fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] lg:w-[60%] 
                bg-gray-800 bg-opacity-70 backdrop-blur-lg text-white py-3 px-8 
                lg:flex justify-center items-center z-50 shadow-lg rounded-full 
                border border-gray-700 transition-all duration-500 ${
                  scrolling ? "bg-opacity-90 backdrop-blur-md shadow-orange-400/50" : ""
                }`}
      >
        <div className="hidden lg:flex space-x-1 md:space-x-5">
          {["home", "about", "projects", "experiences", "contact"].map(
            (section) => (
              <motion.a
                key={section}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(section)
                    ?.scrollIntoView({ behavior: "smooth" });
                  setActiveSection(section);
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className={`transition duration-300 text-sm md:text-xl px-4 py-2 md:px-6 md:py-3 rounded-full flex items-center 
                    font-medium tracking-wide capitalize
                    ${
                      activeSection === section
                        ? "bg-orange-400 text-gray-900 font-bold shadow-md shadow-orange-500"
                        : "hover:text-orange-400 hover:bg-gray-700 hover:bg-opacity-40"
                    }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.a>
            )
          )}
        </div>
      </motion.nav>

      {/* Mobile Hamburger Menu */}
      <motion.div
        className="fixed top-4 right-4 z-50 lg:hidden"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {!showNav && (
          <FaBars
            className="text-white text-3xl cursor-pointer"
            onClick={() => setShowNav(true)}
            aria-label="Open menu"
          />
        )}
      </motion.div>

      {/* Background Overlay */}
      <AnimatePresence>
        {showNav && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowNav(false)}
          ></motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showNav && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120 }}
            className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-gray-800 text-white shadow-lg 
            flex flex-col items-center justify-center space-y-6 z-50"
          >
            {/* Close Button */}
            <div className="absolute top-4 right-4">
              <FaTimes
                className="text-white text-3xl cursor-pointer"
                onClick={() => setShowNav(false)}
                aria-label="Close menu"
              />
            </div>

            {["home", "about", "projects", "experiences", "contact"].map(
              (section) => (
                <motion.a
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(section)
                      ?.scrollIntoView({ behavior: "smooth" });
                    setShowNav(false);
                    setActiveSection(section);
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className={`text-xl font-medium capitalize px-6 py-3 rounded-md w-full text-center
                    ${
                      activeSection === section
                        ? "bg-orange-400 text-gray-900 font-bold"
                        : "hover:text-orange-400 hover:bg-gray-700"
                    }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.a>
              )
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    

      {/* HERO SECTION */}
      <Hero/>

      {/* ABOUT SECTION */}
      <About/>

      {/* PROJECTS SECTION */}
      <Project />

      {/* EXPERIENCE SECTION */}
      <Experience />

      {/* CONTACT SECTION */}
      <Contact />

    </div>
  );
}

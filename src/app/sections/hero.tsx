import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaWind,
  FaFigma,
  FaBootstrap,
  FaLaravel,
  FaFacebook,
  FaPhp,
  FaLinkedin,
} from "react-icons/fa";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("home");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <motion.section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 lg:px-16 py-10 bg-gradient-to-b from-gray-900 to-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Image */}
        <motion.img
          src="/images/mj.jpg"
          alt="Profile"
          className="mt-20 sm:mt-6 md:mt-8 lg:mt-10 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full shadow-xl mb-6 object-cover border-4 border-orange-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        />

        {/* Name */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          MARY JOYCE ANN GALLIGUEZ
        </motion.h1>

        {/* Title */}
        <motion.p
          className="text-lg mt-3 text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          UI/UX Designer | Front-End Web Developer
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex space-x-4 sm:space-x-6 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[{ icon: FaGithub, link: "https://github.com/galliguezmary" },
            { icon: FaFacebook, link: "https://www.facebook.com/mjanngalliguez" },
            { icon: FaLinkedin, link: "https://www.linkedin.com/in/mary-joyce-ann-galliguez" },
          ].map(({ icon: Icon, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-300 hover:text-orange-500 transition-transform transform hover:scale-110"
              whileHover={{ rotate: 10 }}
            >
              <Icon className="w-8 h-8 flex-shrink-0" />
            </motion.a>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="max-w-4xl mx-auto px-6 mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {[{ name: "HTML", icon: FaHtml5 },
            { name: "CSS", icon: FaCss3Alt },
            { name: "JavaScript", icon: FaJsSquare },
            { name: "React", icon: FaReact },
            { name: "Tailwind CSS", icon: FaWind },
            { name: "Bootstrap", icon: FaBootstrap },
            { name: "Laravel", icon: FaLaravel },
            { name: "GitHub", icon: FaGithub },
            { name: "Figma", icon: FaFigma },
            { name: "PHP", icon: FaPhp },
          ].map(({ name, icon: Icon }, index) => (
            <motion.div
              key={name}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-center space-x-4 h-20 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#1F2937",
                boxShadow: "0 0 10px rgba(255,165,0,0.5)",
              }}
            >
              <Icon className="w-8 h-8 flex-shrink-0 text-orange-500" />
              <span className="text-sm sm:text-base">{name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Resume Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link href="/resume">
            <motion.button
              className="px-6 py-3 text-lg font-semibold text-white bg-orange-500 rounded-2xl shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-100"
              whileHover={{ scale: 1.1 }}
            >
              View Resume
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>
    </>
  );
}

"use client";

import { useState } from "react";
import {
  FaGithub,
  FaEnvelope,
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
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      <nav
        className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[60%] 
                bg-gray-800 bg-opacity-70 backdrop-blur-lg text-white py-3 px-8 
                flex justify-center items-center z-50 shadow-lg rounded-full 
                border border-gray-700 transition-all duration-300"
      >
        <div className="flex space-x-1 md:space-x-6">
          {["home", "about", "projects", "experiences",  "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(section)
                  ?.scrollIntoView({ behavior: "smooth" });
                setActiveSection(section);
              }}
              className={`transition duration-300 text-sm md:text-xl px-4 py-2 md:px-6 md:py-3 rounded-full flex items-center 
                    font-medium tracking-wide capitalize
                    ${
                      activeSection === section
                        ? "bg-orange-400 text-gray-900 font-bold shadow-md shadow-orange-500"
                        : "hover:text-orange-400 hover:bg-gray-700 hover:bg-opacity-40"
                    }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 lg:px-16 py-10 bg-gradient-to-b from-gray-800 to-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="/images/mj.jpg"
          alt="Profile"
          className="mt-20 sm:mt-6 md:mt-8 lg:mt-10 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full shadow-xl mb-6 object-cover border-4 border-orange-500"
          whileHover={{ scale: 1.1, rotate: 5 }}
        />

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
          MARY JOYCE ANN GALLIGUEZ
        </h1>

        <p className="text-lg mt-3 text-gray-400">
          UI/UX Designer | Front End Web Developer
        </p>

        {/* Social Links */}
        <div className="flex space-x-4 sm:space-x-6 mt-6">
          {[
            { icon: FaGithub, link: "https://github.com/mjann0712" },
            {
              icon: FaFacebook,
              link: "https://www.facebook.com/mjanngalliguez",
            },
            { icon: FaEnvelope, link: "mailto:mjanngalliguez77@gmail.com" },
          ].map(({ icon: Icon, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-300 hover:text-orange-500 transition-transform transform hover:scale-110"
              whileHover={{ rotate: 10 }}
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* Skills Section */}
        <div className="max-w-4xl mx-auto px-6 mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-gray-300">
          {[
            { name: "HTML", icon: FaHtml5 },
            { name: "CSS", icon: FaCss3Alt },
            { name: "JavaScript", icon: FaJsSquare },
            { name: "React", icon: FaReact },
            { name: "Tailwind CSS", icon: FaWind },
            { name: "Bootstrap", icon: FaBootstrap },
            { name: "Laravel", icon: FaLaravel },
            { name: "Github", icon: FaGithub },
            { name: "Figma", icon: FaFigma },
            { name: "PHP", icon: FaPhp },
          ].map(({ name, icon: Icon }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#1F2937",
                boxShadow: "0 0 10px rgba(255,165,0,0.5)",
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
                delay: index * 0.05,
              }}
               className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-center space-x-4 h-20 transition-all"
            >
              <Icon className="text-orange-500 text-2xl" />
              <span>{name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-24 bg-gray-800 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-orange-400">About Me</h2>
          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            I am a passionate{" "}
            <span className="text-orange-400 font-semibold">
              {" "}
              UI/UX Designer{" "}
            </span>
            and{" "}
            <span className="text-orange-400 font-semibold">
              {" "}
              Front-End Developer{" "}
            </span>
            who thrives on creating intuitive and visually appealing web
            experiences. With a keen eye for detail and a strong understanding
            of user behavior, I ensure that my designs are not only
            aesthetically pleasing but also functionally efficient.
          </p>

          {/* fix skills and projects separate each div based on the skills written in about us */}
          {/* Skills & Expertise */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-gray-300">
            {[
              {
                title: "UI/UX Design",
                description:
                  "Creating user-friendly and visually appealing interfaces.",
              },
              {
                title: "Front-End Development",
                description:
                  "Building responsive and interactive web applications.",
              },
              {
                title: "Prototyping & Wireframing",
                description: "Using Figma to design high-fidelity mockups.",
              },
            ].map(({ title, description }, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-orange-400">
                  {title}
                </h3>
                <p className="mt-2 text-gray-400 text-sm">{description}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-12 text-lg text-gray-300">
            When I&apos;m not coding or designing, you can find me exploring new
            trends in tech, reading about human-centered design, or enjoying a
            cup of coffee while sketching ideas. ☕
          </p>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-24 bg-gray-900 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-orange-400">Projects</h2>

        <div className="p-5 w-full flex flex-col md:flex-row items-center md:items-start gap-6">
          {[1, 2, 3].map((project) => (
            <motion.div
              key={project}
              className="w-full md:w-1/3 p-6 border-4 border-orange-400 rounded-lg flex flex-col items-center bg-gray-800 shadow-lg transition-transform"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 12px rgba(255, 165, 0, 0.8)",
              }}
            >
              <div className="w-full h-40 bg-gray-700 rounded-md flex items-center justify-center">
                <img
                  src=""
                  alt={`Project ${project}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mt-4">
                Project Title {project}
              </h3>
              <p className="text-gray-400 mt-2 text-center px-4">
                Brief description of the project goes here.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experiences */}
      <motion.section
        id="experiences"
        className="py-10 bg-gray-800 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-orange-400">Experiences</h2>

        
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-24 bg-gray-900 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-orange-400">Contact</h2>
        <form className="p-5 max-w-lg mx-auto mt-12 space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            placeholder="Your Message"
            required
            className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-400"
          ></textarea>
          <motion.button
            className="w-full bg-orange-500 text-white py-4 rounded-lg hover:bg-orange-600 font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.section>
    </div>
  );
}

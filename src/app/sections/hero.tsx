import { motion } from "framer-motion";
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
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function hero() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 lg:px-16 py-10 bg-gradient-to-b from-gray-900 to-gray-900"
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
    </>
  );
}

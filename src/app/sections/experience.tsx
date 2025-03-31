import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("experiences");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      id="experiences"
      className="py-24 bg-gray-900 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-orange-400">Experiences</h2>
        <motion.p
          className="mt-6 text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Here are some of the roles I have taken on in my career journey.
        </motion.p>

        <div className="mt-10 space-y-8">
          {[
            {
              role: "Front-End Developer",
              company: "Pensionne Estela",
              project: "E-stella",
              duration: "2024",
              description:
                "Developed web application using Bootstrap and Laravel as the framework of the system, ensuring responsive and user-friendly interfaces.",
            },
            {
              role: "Intern/OJT - UI/UX Designer",
              company:
                "Benguet State University - Project Leader on Precision Agriculture",
              project: "E-abono",
              duration: "Jan 2025 - present",
              description:
                "Assisted in the development of company websites, optimized UI components, and contributed to UX research and design enhancements.",
            },
          ].map(({ role, company, project, duration, description }, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-orange-400">{role}</h3>
              <p className="text-gray-400">{company}</p>
              <p className="text-gray-500">{project}</p>
              <p className="text-gray-500 text-sm">{duration}</p>
              <p className="mt-3 text-gray-300">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

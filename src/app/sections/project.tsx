import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
    items: [
      { title: "E-abono Information Website", description: "User-friendly UI for mobile and web.", img: "/images/p1.png" },
      { title: "E-abono Mobile Application", description: "Minimalist design for the mobile application E-abono", img: "/images/p2.png" },
      { title: "E-stella", description: "The front-end was developed using Laravel framework, with Bootstrap.", img: "/images/p3.png" },
    ],
  },
  {
    items: [
      { title: "Library Inventory System", description: "Wireframe was created first to visualize the interface, saving time on revisions when adding features.", img: "/images/p4.png" },
      { title: "Decicon", description: "Mobile Application for converting decimals", img: "/images/p5.png" },
    ],
  },
];

export default function Project() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("projects");
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
      id="projects"
      className="py-24 bg-gray-900 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-orange-400 mb-12">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-8 max-w-6xl mx-auto">
        {projects.flatMap(({ items }, index) => 
          items.map(({ title, description, img }, itemIndex) => (
            <motion.div
              key={title}
              className="p-6 border-4 border-orange-400 rounded-lg bg-gray-800 shadow-xl flex flex-col items-center w-full h-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8, delay: (index * 3 + itemIndex) * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 165, 0, 0.6)" }}
            >
              <div className="w-full h-52 bg-gray-700 rounded-md overflow-hidden flex justify-center items-center">
                <img src={img} alt={title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mt-4">{title}</h3>
              <p className="text-gray-400 mt-2 text-center px-4">{description}</p>
            </motion.div>
          ))
        )}
      </div>
    </motion.section>
  );
}

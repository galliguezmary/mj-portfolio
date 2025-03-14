import { motion } from "framer-motion";

const projects = [
  {
    category: "UI/UX Design",
    items: [
      { title: "E-abono Information Website", description: "User-friendly UI for mobile and web.", img: "/images/p1.png" },
      { title: "E-abono Mobile Application", description: "Minimalist design for the mobile application E-abono", img: "/images/p2.png" },
      { title: "Project 3", description: "E-commerce interface optimization.", img: "/images/uiux3.jpg" },
    ],
  },
  {
    category: "Front-end Development",
    items: [
      { title: "E-stella", description: "The front-end was developed using Laravel framework, with bootstrap ", img: "/images/frontend1.jpg" },
      { title: "Project 5", description: "Portfolio site with animations.", img: "/images/frontend2.jpg" },
      { title: "Project 6", description: "Landing page for a startup.", img: "/images/frontend3.jpg" },
    ],
  },
  {
    category: "Prototyping/Wireframe",
    items: [
      { title: "Project 8", description: "Click-through prototype for fintech.", img: "/images/prototype2.jpg" },
      { title: "Library Inventory System", description: "Used low-fidelity Wireframe first was created to visualize the interface of the inventory system to save time revising when adding features and other information.", img: "/images/prototype1.jpg" },
      { title: "Project 9", description: "High-fidelity prototype for CRM.", img: "/images/prototype3.jpg" },
    ],
  },
];

export default function Project() {
  return (
    <motion.section
      id="projects"
      className="py-24 bg-gray-900 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-orange-400 mb-12">Projects</h2>

      {projects.map(({ category, items }) => (
        <div key={category} className="mb-16">
          <h4 className="text-2xl font-bold text-orange-400 mb-8">{category}</h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
            {items.map(({ title, description, img }) => (
              <motion.div
                key={title}
                className="p-6 border-4 border-orange-400 rounded-lg bg-gray-800 shadow-lg transition-transform flex flex-col items-center"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 165, 0, 0.8)" }}
              >
                <div className="w-full h-48 bg-gray-700 rounded-md overflow-hidden">
                  <img src={img} alt={title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mt-4">{title}</h3>
                <p className="text-gray-400 mt-2 text-center px-2">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </motion.section>
  );
}

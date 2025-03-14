import { motion } from "framer-motion";
// projects section constants
const project : string[] = ["title1", "title2", "title3"];
const description : string[] = ["d1", "d2", "d3"];
const img : string[] = ["/images/mj.jpg", "d2", "d3"];

export default function Project(){
    return(
        <>
        {/* Projects Section */}
      <motion.section
      id="projects"
      className="py-24 bg-gray-900 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-orange-400">Projects</h2>

      <h4 className="mt-20 text-2xl font-bold text-orange-400"> UI/UX Design</h4>
      
      <div className="p-5 w-full flex flex-col md:flex-row items-center md:items-start gap-6">
        {project.map((output, index) => (
          <motion.div
            key={output}
            className="w-full md:w-1/3 p-6 border-4 border-orange-400 rounded-lg flex flex-col items-center bg-gray-800 shadow-lg transition-transform"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 12px rgba(255, 165, 0, 0.8)",
            }}
          >
            <div className="w-full h-40 bg-gray-700 rounded-md flex items-center justify-center">
              <img
                src={img[index]}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mt-4">
               {output}
            </h3>
            <p className="text-gray-400 mt-2 text-center px-4">
             {description[index]}
            </p>
          </motion.div>
        ))}
      </div>

      <h4 className="mt-20 text-2xl font-bold text-orange-400"> Front-end Development </h4>
      <div className="p-5 w-full flex flex-col md:flex-row items-center md:items-start gap-6">
        {project.map((output, index) => (
          <motion.div
            key={output}
            className="w-full md:w-1/3 p-6 border-4 border-orange-400 rounded-lg flex flex-col items-center bg-gray-800 shadow-lg transition-transform"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 12px rgba(255, 165, 0, 0.8)",
            }}
          >
            <div className="w-full h-40 bg-gray-700 rounded-md flex items-center justify-center">
              <img
                src={img[index]}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mt-4">
               {output}
            </h3>
            <p className="text-gray-400 mt-2 text-center px-4">
             {description[index]}
            </p>
          </motion.div>
        ))}
      </div>

      <h4 className="mt-20 text-2xl font-bold text-orange-400"> Prototyping </h4>
      <div className="p-5 w-full flex flex-col md:flex-row items-center md:items-start gap-6">
        {project.map((output, index) => (
          <motion.div
            key={output}
            className="w-full md:w-1/3 p-6 border-4 border-orange-400 rounded-lg flex flex-col items-center bg-gray-800 shadow-lg transition-transform"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 12px rgba(255, 165, 0, 0.8)",
            }}
          >
            <div className="w-full h-40 bg-gray-700 rounded-md flex items-center justify-center">
              <img
                src={img[index]}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mt-4">
               {output}
            </h3>
            <p className="text-gray-400 mt-2 text-center px-4">
             {description[index]}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
    </>
    )
}
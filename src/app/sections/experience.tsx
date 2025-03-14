import { motion } from "framer-motion";

export default function Experience(){
    return (
        <>
        {/* Experiences Section */}
      <motion.section
        id="experiences"
        className="py-24 bg-gray-900 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-orange-400">Experiences</h2>
          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Here are some of the roles I have taken on in my career journey.
          </p>

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
            ].map(
              ({ role, company, project, duration, description }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg text-left"
                >
                  <h3 className="text-xl font-semibold text-orange-400">
                    {role}
                  </h3>
                  <p className="text-gray-400">{company}</p>
                  <p className="text-gray-500">{project}</p>
                  <p className="text-gray-500 text-sm">{duration}</p>
                  <p className="mt-3 text-gray-300">{description}</p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </motion.section>
        </>
    )
}
import { motion } from "framer-motion";

export default function About(){
    return(
        <>
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
        </>
    )
}
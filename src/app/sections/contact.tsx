import { motion } from "framer-motion";

export default function Contact(){
    return(
        <>
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
        </>
    )
}
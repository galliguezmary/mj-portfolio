import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact");
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
      id="contact"
      className="py-24 bg-gray-800 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-orange-400">Get in Touch</h2>
        
        <motion.p
          className="mt-6 text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          I&apos;d love to hear from you! Whether you have a question or just want
          to say hello, feel free to reach out to me. I&apos;ll get back to you as
          soon as possible.
        </motion.p>

        {/* Contact Form Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Replace this with your Contact Form component */}
          <form>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 bg-gray-700 text-white rounded-lg mb-4"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 bg-gray-700 text-white rounded-lg mb-4"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-4 bg-gray-700 text-white rounded-lg mb-4"
              rows={4}
            />
            <button
              type="submit"
              className="w-full py-4 bg-orange-400 text-gray-900 font-bold rounded-lg hover:bg-orange-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}

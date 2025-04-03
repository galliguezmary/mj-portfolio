import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState<string>("");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Email sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Error sending email.");
    }
  };

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
          to say hello, feel free to reach out. I&apos;ll get back to you as
          soon as possible.
        </motion.p>

        {/* Contact Form Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-700 text-white rounded-lg mb-4"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-700 text-white rounded-lg mb-4"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
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

          {/* Status Message */}
          <p className="mt-4 text-gray-300">{status}</p>
        </motion.div>
      </div>
    </motion.section>
  );
}

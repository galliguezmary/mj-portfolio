"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json(); // Extract response data

        if (response.ok) {
            setStatus("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" }); // Clear form
        } else {
            setStatus(data.message || "Failed to send message. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        setStatus("Error sending message.");
    }
};


  return (
    <section id="contact" className="p-6 bg-gray-800 text-white">
      <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 rounded-md bg-gray-900 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 rounded-md bg-gray-900 text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 rounded-md bg-gray-900 text-white"
        />
        <button
          type="submit"
          className="w-full bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600"
        >
          Send Message
        </button>
        {status && <p className="text-center mt-2">{status}</p>}
      </form>
    </section>
  );
}

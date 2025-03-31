import { useState } from "react";

// Define the type for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  // Initialize state with typed form data
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string>("");

  // Type the event parameter for handleChange
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Type the event parameter for handleSubmit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (result.success) {
      setStatus("✅ Email sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("❌ Failed to send email.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-800 text-gray-100 rounded-lg shadow-lg border border-orange-400">
      <h2 className="text-2xl font-bold mb-4 text-center text-orange-400">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Your Name"
          onChange={handleChange}
          required
          className="w-full p-3 border border-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-700 text-white"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Your Email"
          onChange={handleChange}
          required
          className="w-full p-3 border border-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-700 text-white"
        />
        <textarea
          name="message"
          value={formData.message}
          placeholder="Your Message"
          onChange={handleChange}
          required
          className="w-full p-3 border border-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-700 text-white h-32"
        />
        <button
          type="submit"
          className="w-full bg-orange-400 text-gray-900 p-3 rounded-lg hover:bg-orange-500 transition font-bold shadow-md"
        >
          Send Message
        </button>
      </form>
      {status && <p className="text-center mt-4 font-semibold text-orange-400">{status}</p>}
    </div>
  );
}

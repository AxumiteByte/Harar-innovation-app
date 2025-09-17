import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: Replace this with your actual API call or email service
    try {
      
      await new Promise((res) => setTimeout(res, 1000));
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message, please try again.");
      throw error
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg mt-12">
      <h1 className="text-4xl font-bold mb-6 text-green-400 text-center">
        Contact Us
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-300 mb-1 font-semibold">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className="w-full rounded-md bg-gray-800 text-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-gray-300 mb-1 font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
            className="w-full rounded-md bg-gray-800 text-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-gray-300 mb-1 font-semibold">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Write your message here..."
            className="w-full rounded-md bg-gray-800 text-gray-200 px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {status && (
          <p
            className={`text-center ${
              status.includes("successfully")
                ? "text-green-400"
                : "text-red-500"
            }`}>
            {status}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-md font-semibold hover:from-green-600 hover:to-emerald-700 transition">
          Send Message
        </button>
      </form>
    </div>
  );
}

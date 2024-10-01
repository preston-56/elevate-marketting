import React from "react";

const ContactForm: React.FC = () => {
  return (
    <form className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Contact Us
      </h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Name:</label>
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Email:</label>
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Message:
        </label>
        <textarea
          placeholder="Your Message"
          className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200"
          rows={4}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600 transition duration-200 w-full"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;

import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Get in Touch</h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Contact Information</h2>
          <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
            <i className="fas fa-envelope"></i> contact@example.com
          </p>
          <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
            <i className="fas fa-phone"></i> +155 123-4567
          </p>
          <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
            <i className="fas fa-map-marker-alt"></i> 123 Business Street, Suite 100, City, State 12345
          </p>
        </div>

        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Send us a Message</h2>
        <form className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500" 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500" 
          />
          <textarea 
            placeholder="Your Message" 
            rows="4" 
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500"
          ></textarea>
          <button 
            type="submit" 
            className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600 flex items-center justify-center gap-2">
            <i className="fas fa-paper-plane"></i> Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

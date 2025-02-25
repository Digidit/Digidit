import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [isFormVisible, setFormVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'abc', // replace with your EmailJS service ID
      'abc', // replace with your EmailJS template ID
      form.current, // the form reference
      'abc' // replace with your EmailJS public key
    )
    .then((result) => {
      console.log('Message Sent:', result.text);
      alert('Your message has been sent successfully!');
      form.current.reset(); // Reset the form after submission
    }, (error) => {
      console.log('Error:', error.text);
      alert('Oops! Something went wrong. Please try again.');
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="container mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Get in <span className="text-yellow-500 dark:text-yellow-300">Touch</span>
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Have a project in mind? Let's connect!
        </p>

        {/* Contact Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setFormVisible(!isFormVisible)}
          className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg shadow-md hover:bg-yellow-600 transition-all"
        >
          Contact Me
        </motion.button>

        {/* Contact Form */}
        {isFormVisible && (
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-6 max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label className="block text-left text-gray-800 dark:text-gray-200 mb-2 font-bold">Name</label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-800 dark:text-gray-200 mb-2 font-bold">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-800 dark:text-gray-200 mb-2 font-bold">Message</label>
              <textarea
                name="message"
                className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Your Message"
                rows="5"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition-all"
            >
              Send
            </motion.button>
          </motion.form>
        )}

        {/* Social Media Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">Connect with me:</p>
          <div className="flex justify-center space-x-6">
  <a
    href="https://www.instagram.com/suraj.mov"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-800 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition duration-300"
  >
    <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
  </a>

  <a
    href="https://in.linkedin.com/company/digidit-in"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
  >
    <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
  </a>

  <a
    href="https://wa.me/918080604008?text=Hi%20i%20got%20your%20number%20from%20digidit.in"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-800 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition duration-300"
  >
    <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
  </a>
</div>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;

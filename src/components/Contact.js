import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiMail, FiMessageSquare, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaGlobe, FaFilePdf } from 'react-icons/fa';


const apiKey = process.env.REACT_APP_WEB3FORMS_API_KEY;

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [result, setResult] = useState(''); // Simplified result state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult('Sending....');

    const formDataToSend = new FormData(e.target);
    formDataToSend.append('access_key', apiKey); // Correctly append the API key as a string

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();
      if (result.success) {
        setResult('Form Submitted Successfully');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResult(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setResult('Failed to send message. Please try again. !');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-6xl font-extrabold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Let's Connect
        </motion.h2>
        {/* Animated Social Icons */}
        <motion.div
          className="flex justify-center gap-8 mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.a
            href="https://github.com/saquib34"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-white text-3xl hover:text-gray-300"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/saquib34"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.2, rotate: -10 }}
            className="text-white text-3xl hover:text-gray-300"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://saquib.in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio"
            whileHover={{ scale: 1.2, rotate: 8 }}
            className="text-white text-3xl hover:text-gray-300"
          >
            <FaGlobe />
          </motion.a>
        </motion.div>
        {/* Download Buttons for CV and Resume */}
        <motion.div
          className="flex justify-center gap-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a
            href="/CV.pdf"
            download
            className="flex items-center bg-white text-blue-700 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300"
          >
            <FaFilePdf className="mr-2 text-red-500 text-2xl" /> Download CV
          </a>
          <a
            href="/SRMISTRMP_Mohammad_Saquib_Daiyan.pdf"
            download
            className="flex items-center bg-white text-purple-700 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-100 transition-all duration-300"
          >
            <FaFilePdf className="mr-2 text-purple-500 text-2xl" /> Download Resume
          </a>
        </motion.div>
        <motion.div
          className="max-w-xl mx-auto bg-white p-10 rounded-3xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence>
            {result && (
              <motion.div
                className={`p-4 mb-6 rounded-lg ${
                  result.includes('Failed') ? 'bg-red-100 border-l-4 border-red-500 text-red-700' : 'bg-green-100 border-l-4 border-green-500 text-green-700'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {result}
              </motion.div>
            )}
          </AnimatePresence>
          <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
            <input type="hidden" name="to_email" value="shadmanshahin6@gmail.com" />
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2 flex items-center">
                <FiUser className="mr-2" /> Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2 flex items-center">
                <FiMail className="mr-2" /> Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2 flex items-center">
                <FiMessageSquare className="mr-2" /> Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                required
              ></motion.textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-lg shadow-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 flex items-center justify-center"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? (
                <motion.div
                  className="w-6 h-6 border-t-2 border-white rounded-full animate-spin"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              ) : (
                <>
                  <FiSend className="mr-2" /> Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;

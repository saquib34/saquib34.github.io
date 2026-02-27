import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiMail, FiMessageSquare, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';

const apiKey = process.env.REACT_APP_WEB3FORMS_API_KEY;

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [result, setResult] = useState('');
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
    formDataToSend.append('access_key', apiKey);

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
    <section id="contact" className="bg-dark relative overflow-hidden grid-background border-t border-border">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Get In <span className="text-primary">Touch</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto font-medium">Let's collaborate on your next big idea.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="card p-8 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-black text-white uppercase tracking-widest mb-6">Connect</h3>
              <div className="flex flex-col gap-4">
                <a href="https://github.com/saquib34" target="_blank" rel="noopener noreferrer" aria-label="Saquib's GitHub" title="GitHub" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                  <span className="p-3 rounded-lg bg-dark border border-border group-hover:border-primary group-hover:text-primary transition-all"><FaGithub aria-hidden="true" /></span>
                  <span className="font-bold">saquib34</span>
                </a>
                <a href="https://linkedin.com/in/saquib34" target="_blank" rel="noopener noreferrer" aria-label="Saquib's LinkedIn" title="LinkedIn" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                  <span className="p-3 rounded-lg bg-dark border border-border group-hover:border-primary group-hover:text-primary transition-all"><FaLinkedin aria-hidden="true" /></span>
                  <span className="font-bold">saquib34</span>
                </a>
                <a href="mailto:shadmanshahin6@gmail.com" aria-label="Email Saquib" title="Email" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                  <span className="p-3 rounded-lg bg-dark border border-border group-hover:border-primary group-hover:text-primary transition-all"><FiMail aria-hidden="true" /></span>
                  <span className="font-bold text-xs truncate">shadmanshahin6@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a href="/CV.pdf" download aria-label="Download Curriculum Vitae" title="Download CV" className="card p-4 text-center hover:border-primary transition-all group">
                <FaFilePdf className="text-2xl text-red-500 mx-auto mb-2" aria-hidden="true" />
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white">CV</span>
              </a>
              <a href="/SRMISTRMP_Mohammad_Saquib_Daiyan.pdf" download aria-label="Download Resume" title="Download Resume" className="card p-4 text-center hover:border-primary transition-all group">
                <FaFilePdf className="text-2xl text-primary mx-auto mb-2" aria-hidden="true" />
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white">Resume</span>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3"
          >
            <div className="card p-10">
              <AnimatePresence>
                {result && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`p-4 mb-8 rounded-xl font-bold text-sm ${result.includes('Failed') ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 'bg-primary/10 text-primary border border-primary/20'
                      }`}
                  >
                    {result}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Your Name</label>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-4 bg-dark/50 border border-border rounded-xl text-white font-bold focus:outline-none focus:border-primary transition-all placeholder:text-gray-700"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Your Email</label>
                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full pl-12 pr-4 py-4 bg-dark/50 border border-border rounded-xl text-white font-bold focus:outline-none focus:border-primary transition-all placeholder:text-gray-700"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Message</label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-4 top-6 text-gray-500" />
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      className="w-full pl-12 pr-4 py-4 bg-dark/50 border border-border rounded-xl text-white font-bold focus:outline-none focus:border-primary transition-all placeholder:text-gray-700 resize-none"
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-white text-dark py-5 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>Send Message <FiSend /></>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

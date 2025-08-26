import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiUser, FiMessageSquare, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_4718w6r',
  TEMPLATE_ID: 'template_xdqjmuo',
  PUBLIC_KEY: 'UjqBvRQSdC4FnInCQ'
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_name: 'Rakha',
        message: formData.message,
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
     
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };
  const contactMethods = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: 'Email',
      value: 'rakhaakbar522@gmail.com',
      href: 'mailto:rakhaakbar522@gmail.com',
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: 'WhatsApp',
      value: '+62 878-8405-9614',
      href: 'https://wa.me/6287884059614',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-16 md:py-20 relative overflow-hidden bg-darker-blue/90">
      <div className="absolute inset-0 bg-grid-white/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In <span className="text-neon-green">Touch</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
     
          <motion.div 
            className="lg:col-span-2 glass-effect p-6 rounded-xl"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Send me a message</h3>
            
            {submitStatus === 'success' && (
              <div className="bg-neon-green/10 border border-neon-green/30 text-neon-green p-4 rounded-lg mb-6 flex items-start space-x-2">
                <FiCheckCircle className="flex-shrink-0 mt-0.5" />
                <span>Thank you for your message! I'll get back to you soon.</span>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-500 p-4 rounded-lg mb-6 flex items-start space-x-2">
                <FiAlertCircle className="flex-shrink-0 mt-0.5" />
                <span>Failed to send message. Please try again later or contact me directly via email.</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div variants={item}>
                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">
                  Your Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-5 w-5 text-neon-green" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-darker-blue/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-neon-green/50 focus:border-neon-green/30"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </motion.div>

              <motion.div variants={item}>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-neon-green" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-darker-blue/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-neon-green/50 focus:border-neon-green/30"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </motion.div>

              <motion.div variants={item}>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">
                  Your Message
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3">
                    <FiMessageSquare className="h-5 w-5 text-neon-green" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-darker-blue/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-neon-green/50 focus:border-neon-green/30"
                    placeholder="Hello Rakha, I'd like to talk about..."
                    required
                  />
                </div>
              </motion.div>

              <motion.div variants={item} className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-neon-green text-darker-blue font-medium py-3 px-6 rounded-lg hover:bg-neon-green/90 transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-darker-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
              </motion.div>
            </form>
          </motion.div>


          <motion.div 
            className="space-y-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            <p className="text-white/70">Feel free to reach out to me through these channels or by filling out the form.</p>
            
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300 group"
                  variants={item}
                >
                  <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center text-neon-green group-hover:bg-neon-green/20 transition-colors duration-300">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{method.title}</h4>
                    <p className="text-white/70 text-sm">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

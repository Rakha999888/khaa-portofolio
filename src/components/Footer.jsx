import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const socialLinks = [
    { 
      icon: <FiGithub />, 
      url: 'https://github.com/Rakha999888', 
      label: 'GitHub' 
    },
    { 
      icon: <FiLinkedin />, 
      url: 'https://www.linkedin.com/in/muhammad-rakha-akbar/', 
      label: 'LinkedIn' 
    }
  ];

  return (
    <footer className="relative bg-darker-blue/80 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Let's Connect</h3>
            <p className="text-white/70 text-sm sm:text-base mb-4 sm:mb-6 max-w-md">
              Have a project in mind or want to discuss potential opportunities? 
              Feel free to reach out through any of these channels.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socialLinks.map((link, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleSocialClick(link.url)}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-white/10 bg-darker-blue/50 hover:bg-neon-green/10 hover:border-neon-green/30 transition-colors duration-300 text-white/70 hover:text-neon-green text-sm sm:text-base"
                  whileHover={{ y: -3 }}
                  aria-label={link.label}
                  type="button"
                >
                  {link.icon}
                </motion.button>
              ))}
            </div>
          </motion.div>

       
          <motion.div
            className="md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Project', href: '#project' },
                { name: 'Contact Us', href: '#contact' },
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="text-sm sm:text-base text-white/70 hover:text-neon-green transition-colors duration-300 inline-block py-1"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      
        <motion.div 
          className="border-t border-white/5 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-white/50 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Khaa. All rights reserved.
          </p>
        </motion.div>
      </div>

  
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neon-green/10 backdrop-blur-sm border border-neon-green/30 flex items-center justify-center text-neon-green hover:bg-neon-green/20 transition-colors duration-300 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        aria-label="Scroll to top"
      >
        <FiArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;

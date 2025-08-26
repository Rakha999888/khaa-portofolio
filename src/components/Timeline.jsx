import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBriefcase, FiCode, FiPenTool } from 'react-icons/fi';

const timelineData = [
  {
    year: '2025',
    title: 'khaa warkop',
    company: 'React & Node.js',
    description: 'Developed a full-stack e-commerce platform with user authentication, product catalog, and payment integration.',
    color: 'text-neon-green'
  },
  {
    year: '2025',
    title: 'Nutrijel',
    company: 'AI & Machine Learning',
    description: 'Nutrijel is an AI-powered nutrition analysis website that helps users check food nutrition information using machine learning technology. Built with modern web technologies and AI integration.',
    color: 'text-neon-blue'
  },
  {
    year: '2023',
    title: 'khaa photobooth',
    company: 'React & Tailwind CSS',
    description: 'A modern photobooth application built with React and styled with Tailwind CSS for a seamless user experience.',
    color: 'text-neon-purple'
  },
  {
    year: '2025',
    title: 'Khaa Toyota',
    company: 'HTML & CSS',
    description: 'A simple profile website showcasing information about Toyota, including company history, vehicle models, and technology used.',
    color: 'text-white'
  }
];

const Timeline = () => {
 
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
  };

  return (
    <section id="project" className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-neon-green">Projects</span>
        </motion.h2>
        <motion.p 
          className="text-white/60 text-sm sm:text-base text-center max-w-2xl mx-auto mb-8 sm:mb-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          A showcase of my recent web development projects and technologies used
        </motion.p>

        <motion.div 
          className="relative max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Timeline line */}
          <div className="absolute left-2 sm:left-1/2 w-0.5 h-full bg-gradient-to-b from-neon-green via-neon-blue to-neon-purple"></div>
          
          {timelineData.map((itemData, index) => (
            <motion.div 
              key={index}
              className={`relative mb-8 sm:mb-12 ${index % 2 === 0 ? 'pl-8 pr-4 sm:pl-0 sm:pr-16' : 'pl-8 pr-4 sm:pl-16 sm:pr-0'}`}
              variants={item}
            >
              <div className={`
                relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-darker-blue/80 backdrop-blur-sm border border-white/10
                ${index % 2 === 0 ? 'sm:mr-auto sm:max-w-md' : 'sm:ml-auto sm:max-w-md'}
              `}>
                <div className="absolute -left-2 top-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-neon-green"></div>
                <div className={`text-xs font-medium ${itemData.color} mb-1`}>{itemData.year}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{itemData.title}</h3>
                <div className="text-xs sm:text-sm text-neon-blue mb-2">{itemData.company}</div>
                <p className="text-white/70 text-xs sm:text-sm">{itemData.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;

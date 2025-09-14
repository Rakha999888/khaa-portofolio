import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiMonitor, FiSmartphone } from 'react-icons/fi';

const About = () => {
  const skills = [
    'JavaScript',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'React',
    'Node.js',
    'MongoDB',
    'MySQL'
  ];

  const softwareIcons = [
    { 
      icon: <FiCode className="w-8 h-8" />, 
      name: 'VS Code',
      url: 'https://code.visualstudio.com/' 
    },
    { 
      icon: <FiLayers className="w-8 h-8" />, 
      name: 'Figma',
      url: 'https://www.figma.com/' 
    },
    { 
      icon: <FiMonitor className="w-8 h-8" />, 
      name: 'Canva',
      url: 'https://www.canva.com/' 
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-20 -right-20 w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-64 rounded-full bg-neon-blue filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full bg-neon-purple filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
        >
          <motion.div variants={item} className="space-y-4 sm:space-y-6">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-white"
              variants={item}
            >
              About <span className="text-neon-green">Me</span>
            </motion.h2>
            
            <motion.p className="text-white/80 text-base sm:text-lg leading-relaxed" variants={item}>
              I'm a passionate web developer with experience in creating responsive and interactive websites. 
              I specialize in front-end development, turning ideas into beautiful and functional digital experiences.
            </motion.p>
            
            <motion.div variants={item} className="pt-2 sm:pt-4">
              <h3 className="text-xl font-semibold text-green-300 mb-3 sm:mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-neon-green/10 text-neon-green rounded-full text-xs sm:text-sm font-medium"
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: 'rgba(57, 255, 20, 0.2)' 
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
          <motion.div variants={item} className="space-y-6 sm:space-y-8">
            <motion.div variants={item} className="glass-effect p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-green-300 mb-3 sm:mb-4">
                Happiness is actually simple,
              </h3>
              <p className="text-white text-sm sm:text-base">
                it's about how we can go through sadness first. 
                Every challenge we face is a stepping stone to greater happiness and success in life.
              </p>
            </motion.div>
            
            <motion.div variants={item} className="glass-effect p-4 sm:p-6 md:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-green-300 mb-3 sm:mb-4">
                Tools I Use
              </h3>
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {softwareIcons.map((software, index) => (
                  <a 
                    key={index} 
                    href={software.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors hover:text-neon-green"
                  >
                    {software.icon}
                    <span className="mt-2 text-sm text-gray-300">{software.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

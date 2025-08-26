import React from 'react';
import { motion } from 'framer-motion';

// Import the image directly
import profileImage from '../../public/asset/rakha.png';

const Hero = () => {
  const title = "PORTFOLIO 2025".split("");
  const colors = [
    'text-white', 'text-neon-green', 'text-neon-blue', 'text-white', 'text-neon-green',
    'text-white', 'text-neon-blue', 'text-neon-green', 'text-white', 'text-neon-green',
    'text-white', 'text-neon-blue', 'text-neon-green'
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-darker-blue to-darker-blue">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-green/5 via-transparent to-transparent w-full h-full"></div>
      </div>
      
     
      <motion.div 
        className="absolute top-0 left-1/2 w-1 h-1/4 bg-gradient-to-b from-neon-green to-transparent z-0"
        initial={{ height: 0 }}
        animate={{ height: '25%' }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
       
          <motion.div 
            className="relative mx-auto mb-12 w-56 h-64 md:w-72 md:h-80 cursor-grab active:cursor-grabbing"
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              rotate: [0, -5, 5, -3, 3, 0]
            }}
            drag
            dragConstraints={{
              top: -100,
              left: -100,
              right: 100,
              bottom: 100,
            }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            whileDrag={{
              scale: 1.05,
              transition: { duration: 0.1 }
            }}
            onDragEnd={(e, info) => {
              
              if (info.offset.x > 50 || info.offset.x < -50 || info.offset.y > 50 || info.offset.y < -50) {

                return {
                  rotate: info.offset.x * 0.1,
                  transition: { 
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                  }
                };
              }
            }}
            transition={{ 
              duration: 1.5,
              delay: 0.2,
              rotate: { 
                repeat: Infinity, 
                repeatType: "reverse",
                duration: 4,
                ease: "easeInOut"
              },
              y: { 
                type: "spring", 
                stiffness: 100, 
                damping: 10 
              }
            }}
            whileHover={{ 
              scale: 1.03,
              rotate: 0,
              transition: { duration: 0.3 }
            }}
          >
           
            <motion.div 
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 rounded-t-full shadow-md"
              animate={{
                y: [0, -5, 0],
                scaleY: [1, 1.05, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.2}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient(145deg, #9e9e9e, #616161) rounded-full border-2 border-gray-100 shadow-inner">
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-white/20"
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
              </div>
            </motion.div>
            
            {/* Lanyard Border */}
            <motion.div 
              className="absolute inset-0 border-6 border-neon-green rounded-xl shadow-lg"
              animate={{
                boxShadow: [
                  '0 0 15px rgba(74, 222, 128, 0.5)',
                  '0 0 30px rgba(74, 222, 128, 0.7)',
                  '0 0 15px rgba(74, 222, 128, 0.5)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-neon-green rounded-b-full"></div>
            </motion.div>
            
 
            <motion.div 
              className="absolute inset-1 overflow-hidden rounded-lg"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <img 
                src={profileImage}
                alt="Profile" 
                className="w-full h-full object-cover"
                style={{ transform: 'scale(1.02)' }}
                onError={(e) => {
                  console.error('Error loading image:', e.target.src);
                  // Try alternative paths if the first one fails
                  const paths = [
                    '/asset/rakha.png',
                    'asset/rakha.png',
                    './asset/rakha.png',
                    '/rakha.png',
                    'rakha.png',
                    './rakha.png'
                  ];
                  
                  // Try each path until one works
                  const currentSrc = e.target.src.split('/').pop();
                  const currentIndex = paths.findIndex(path => path.endsWith(currentSrc));
                  const nextIndex = (currentIndex + 1) % paths.length;
                  e.target.src = paths[nextIndex];
                }}
              />
            </motion.div>
            

            <motion.div 
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-b from-neon-green via-neon-green/90 to-transparent rounded-b-full shadow-inner"
              animate={{
                width: ['8rem', '8.5rem', '8rem'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-neon-green/50 rounded-b-full"></div>
            </motion.div>
          </motion.div>
          

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title.map((letter, index) => (
              <motion.span
                key={index}
                className={`inline-block ${colors[index] || 'text-white'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 * index,
                  type: 'spring',
                  stiffness: 100,
                  damping: 10
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
          

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative px-2 sm:px-0"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-handwriting text-neon-green mb-4 md:mb-6">
              Muhammad Rakha Akbar
            </h2>
            <div className="relative">
              <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-8 px-4 sm:px-0">
                Web development
              </p>
              
             
              <motion.div 
                className="absolute left-1/2 top-full mt-6 md:mt-8 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-neon-green rounded-full flex justify-center p-1">
                  <motion.div
                    className="w-1 h-2 sm:h-3 bg-neon-green rounded-full"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

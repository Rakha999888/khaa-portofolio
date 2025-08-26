import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CountdownAnimation = ({ onComplete }) => {
  const [count, setCount] = useState(3);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => onComplete(), 1000); // Wait for fade out
          }, 2000);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <motion.p 
          className="text-neon-blue text-2xl mb-8 font-mono tracking-widest"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          WELCOME TO MY PORTFOLIO
        </motion.p>
        
        <AnimatePresence mode="wait">
          {count > 0 ? (
            <motion.div
              key={count}
              className="text-9xl font-bold"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.2, 1],
                opacity: 1,
                color: '#3b82f6' 
              }}
              exit={{ 
                scale: 1.5, 
                opacity: 0,
                color: '#ec4899' 
              }}
              transition={{ 
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              {count}
            </motion.div>
          ) : (
            <motion.div
              key="welcome"
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
                Hello, I'm Rakha
              </h2>
              <p className="text-xl text-gray-300 mt-2">
                Welcome to my creative space
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div 
          className="mt-12 text-gray-400 text-sm tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          PORTFOLIO 2025
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CountdownAnimation;

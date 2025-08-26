import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CountdownAnimation from './components/CountdownAnimation';
import MazeGame from './components/MazeGame';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [showMaze, setShowMaze] = useState(false);

  if (!showContent) {
    if (!showMaze) {
      return <CountdownAnimation onComplete={() => setShowMaze(true)} />;
    }
    return <MazeGame onComplete={() => setShowContent(true)} />;
  }

  return (
    <div className="App min-h-screen bg-darker-blue text-white">
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Hero />
          <About />
          <Timeline />
          <Contact />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;

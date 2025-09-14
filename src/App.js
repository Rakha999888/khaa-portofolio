import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CountdownAnimation from './components/CountdownAnimation';
import Projects from './components/Projects';

function App() {
  const [showContent, setShowContent] = useState(false);

  if (!showContent) {
    return <CountdownAnimation onComplete={() => setShowContent(true)} />;
  }

  return (
    <div className="App min-h-screen bg-darker-blue text-white">
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;

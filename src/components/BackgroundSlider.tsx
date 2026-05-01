"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const placeholderImages = [
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=80", 
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=2000&q=80"
];

export default function BackgroundSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % placeholderImages.length);
    }, 1000); 
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, overflow: 'hidden' }}>
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Image 
            src={placeholderImages[currentIndex]} 
            alt="Background medical scene" 
            fill 
            style={{ objectFit: 'cover' }}
            priority={currentIndex === 0}
            quality={60}
          />
        </motion.div>
      </AnimatePresence>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.7)', zIndex: 1 }} />
    </div>
  );
}

"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface AboutCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  images: string[];
}

export default function AboutCard({ title, desc, icon, images }: AboutCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide 0.5s quand la modale est fermée
  useEffect(() => {
    if (isModalOpen || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500); // 2.5s pour une lecture plus confortable
    return () => clearInterval(timer);
  }, [isModalOpen, images.length]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
        whileHover={{ y: -5, scale: 1.02 }}
        style={{
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          cursor: 'pointer',
          minHeight: '380px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}
      >
        {/* Background Slider Rapide */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%'
              }}
            >
               <Image src={images[currentIndex]} alt={title} fill style={{ objectFit: 'cover' }} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dark Overlay pour la lisibilité */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: isHovered ? 'linear-gradient(to top, rgba(15,23,42,0.9), rgba(15,23,42,0.4))' : 'linear-gradient(to top, rgba(15,23,42,0.8), rgba(15,23,42,0.5))',
          transition: 'background 0.3s ease'
        }} />

        {/* Contenu de la carte */}
        <div style={{ position: 'relative', zIndex: 1, padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', color: 'white' }}>
          <div>
            <div style={{ marginBottom: '1.5rem', backgroundColor: 'var(--primary)', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>
              {icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontWeight: 600 }}>{title}</h3>
            <p style={{ fontSize: '1rem', lineHeight: 1.5, color: '#e2e8f0' }}>{desc}</p>
          </div>
          <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', fontWeight: 600, color: '#93c5fd' }}>
            En savoir plus <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
          </div>
        </div>
      </motion.div>

      {/* Modal Plein Écran */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'rgba(15,23,42,0.95)',
              backdropFilter: 'blur(10px)',
              zIndex: 99999,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '2rem'
            }}
            onClick={() => setIsModalOpen(false)}
          >
            {/* Bouton Fermer */}
            <button
              onClick={() => setIsModalOpen(false)}
              style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'white', border: 'none', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 100 }}
            >
              <X size={24} color="var(--foreground)" />
            </button>

            {/* Contenu Modale */}
            <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', width: '100%', maxWidth: '1100px', backgroundColor: 'var(--surface)', borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'row' }} className="flex-mobile-col modal-content-wrapper">
              
              {/* Zone Image / Slider Manuel */}
              <div style={{ flex: 1, position: 'relative', backgroundColor: 'black' }} className="modal-image-zone">
                 <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    >
                      <Image src={images[currentIndex]} alt={title} fill style={{ objectFit: 'contain' }} />
                    </motion.div>
                 </AnimatePresence>
                 
                 {/* Flèches de navigation manuelles */}
                 <button onClick={prevImage} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                   <ChevronLeft size={24} />
                 </button>
                 <button onClick={nextImage} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                   <ChevronRight size={24} />
                 </button>
              </div>

              {/* Zone Texte */}
              <div style={{ width: '350px', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'var(--background)' }} className="modal-text-panel">
                <div style={{ marginBottom: '1.5rem', backgroundColor: 'var(--primary)', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>
                  {icon}
                </div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 600 }}>{title}</h3>
                <p className="text-muted" style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>{desc}</p>
                <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 600 }}>Image {currentIndex + 1} sur {images.length}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

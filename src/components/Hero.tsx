"use client";

import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Magnetic from './Magnetic';
import BackgroundSlider from './BackgroundSlider';

export default function Hero() {
  const containerRef = useRef(null);
  
  // Effets de scroll pour le portrait de droite
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacityElements = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const title = "L'excellence médicale à votre écoute.";
  const titleWords = title.split(" ");
  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } }
  };

  return (
    <section ref={containerRef} className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Slider en fond */}
      <BackgroundSlider />

      <div className="container grid-2-col" style={{ position: 'relative', zIndex: 1, paddingTop: '80px' }}>
        
        {/* Colonne GAUCHE : Texte */}
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          
          <motion.div variants={fadeUp} style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, color: 'white', marginBottom: '1.5rem' }}>
            Centre Médical de la Mongala, Kinshasa
          </motion.div>
          
          <h1 className="hero-title" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3em', color: 'white' }}>
            {titleWords.map((word, i) => (
              <motion.span key={i} variants={wordVariants} style={{ display: 'inline-block' }}>
                {word === "médicale" || word === "écoute." ? <span style={{ color: '#93c5fd' }}>{word}</span> : word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p variants={fadeUp} style={{ fontSize: '1.125rem', marginBottom: '2.5rem', maxWidth: '480px', color: '#e2e8f0' }}>
            Je suis le Dr. Kifani Bénie, médecin généraliste. Je vous accompagne au quotidien dans votre parcours de santé avec une approche profondément humaine et rigoureuse.
          </motion.p>
          
          <motion.div variants={fadeUp} className="hero-buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Magnetic>
              <a href="tel:+243832138096" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#3b82f6', border: 'none' }}>
                Prendre rendez-vous <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#about" className="btn btn-outline" style={{ display: 'inline-block', color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>
                En savoir plus
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Colonne DROITE : Portrait du Docteur (Comme présenté précédemment) */}
        <motion.div style={{ position: 'relative', y: yBg, opacity: opacityElements }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, delay: 0.5 }} 
            style={{ 
              aspectRatio: '4/5', 
              backgroundColor: 'rgba(255,255,255,0.1)', 
              borderRadius: '24px', 
              overflow: 'hidden', 
              position: 'relative',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
             <motion.div style={{ width: '100%', height: '100%', scale: scaleImage, transformOrigin: 'center', position: 'relative' }}>
               <Image src="/images/doctor_portrait.png" alt="Portrait Dr. Kifani Bénie" fill style={{ objectFit: 'cover' }} priority />
             </motion.div>
             
             {/* Carte descriptive flottante (Glassmorphism) */}
             <motion.div 
               initial={{ y: 20, opacity: 0 }} 
               animate={{ y: 0, opacity: 1 }} 
               transition={{ delay: 1.2 }} 
               style={{ 
                 position: 'absolute', 
                 bottom: '1.5rem', 
                 left: '1.5rem', 
                 right: '1.5rem', 
                 padding: '1.25rem', 
                 backgroundColor: 'rgba(255,255,255,0.85)', 
                 backdropFilter: 'blur(10px)', 
                 borderRadius: '16px',
                 boxShadow: '0 10px 15px -3px rgba(0,0,0,0.2)'
               }}
             >
                <p style={{ fontWeight: 700, fontSize: '1.125rem', color: '#0f172a' }}>Dr. Kifani Bénie</p>
                <p style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: 500 }}>Médecine Générale</p>
             </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';
import Magnetic from './Magnetic';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(id, { 
        offset: -80, 
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) 
      });
    }
    setIsOpen(false);
  };

  return (
    <header className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
          Dr. Kifani Bénie<span style={{ color: 'var(--primary)' }}>.</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="nav-desktop" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#about" onClick={(e) => handleScroll(e, '#about')} style={{ fontSize: '0.95rem', fontWeight: 500 }}>À propos</a>
          <a href="#expertise" onClick={(e) => handleScroll(e, '#expertise')} style={{ fontSize: '0.95rem', fontWeight: 500 }}>Expertise</a>
          <a href="#conseils" onClick={(e) => handleScroll(e, '#conseils')} style={{ fontSize: '0.95rem', fontWeight: 500 }}>Conseils</a>
          <a href="#faq" onClick={(e) => handleScroll(e, '#faq')} style={{ fontSize: '0.95rem', fontWeight: 500 }}>FAQ</a>
          <Magnetic>
            <a href="tel:+243832138096" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.95rem', display: 'inline-block' }}>
              Prendre RDV
            </a>
          </Magnetic>
        </nav>

        {/* Mobile Toggle */}
        <button className="nav-mobile-btn" onClick={() => setIsOpen(!isOpen)} style={{ padding: '0.5rem' }}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }} 
            transition={{ duration: 0.3 }}
            className="mobile-menu glass" 
            style={{ position: 'absolute', top: '80px', left: 0, width: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', borderTop: '1px solid var(--border)', overflow: 'hidden' }}
          >
            <a href="#about" onClick={(e) => handleScroll(e, '#about')} style={{ fontSize: '1.125rem', fontWeight: 500 }}>À propos</a>
            <a href="#expertise" onClick={(e) => handleScroll(e, '#expertise')} style={{ fontSize: '1.125rem', fontWeight: 500 }}>Expertise</a>
            <a href="#conseils" onClick={(e) => handleScroll(e, '#conseils')} style={{ fontSize: '1.125rem', fontWeight: 500 }}>Conseils</a>
            <a href="#faq" onClick={(e) => handleScroll(e, '#faq')} style={{ fontSize: '1.125rem', fontWeight: 500 }}>FAQ</a>
            <a href="tel:+243832138096" onClick={() => setIsOpen(false)} className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
              Prendre RDV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

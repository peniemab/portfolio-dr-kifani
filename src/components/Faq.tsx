"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, PhoneCall } from 'lucide-react';

const faqs = [
  {
    question: "La prise de rendez-vous est-elle obligatoire pour une consultation ?",
    answer: "Bien que le Centre Médical de la Mongala accueille les urgences, il est vivement recommandé de planifier votre consultation. Cela garantit une prise en charge fluide et réduit considérablement votre temps d'attente."
  },
  {
    question: "Quels documents sont requis lors de la première consultation ?",
    answer: "Afin d'optimiser votre prise en charge, veuillez vous munir de votre carnet de santé, de vos bilans médicaux récents (biologie, imagerie) et de votre carte de prise en charge ou d'identification."
  },
  {
    question: "Assurez-vous la prise en charge pédiatrique ?",
    answer: "Oui, la médecine générale couvre la santé de toute la famille. J'assure les consultations pédiatriques, le suivi du développement de l'enfant et la mise à jour de son calendrier vaccinal."
  },
  {
    question: "Est-il possible d'organiser une consultation à domicile ?",
    answer: "Afin de garantir un examen clinique dans des conditions optimales et de bénéficier d'un accès direct au plateau technique de l'hôpital, l'ensemble de mes consultations est réalisé exclusivement au Centre Médical de la Mongala."
  }
];

function FaqItem({ faq, isOpen, toggleOpen }: { faq: any, isOpen: boolean, toggleOpen: () => void }) {
  return (
    <motion.div 
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}
    >
      <button 
        onClick={toggleOpen} 
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', textAlign: 'left', fontWeight: 600, fontSize: '1.125rem', color: isOpen ? 'var(--primary)' : 'var(--foreground)' }}
      >
        <span style={{ paddingRight: '2rem' }}>{faq.question}</span>
        <span style={{ flexShrink: 0 }}>
          {isOpen ? <Minus size={20} color="var(--primary)" /> : <Plus size={20} color="var(--text-muted)" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p className="text-muted" style={{ paddingBottom: '1.5rem', fontSize: '1rem', lineHeight: 1.7 }}>
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  return (
    <section id="faq" className="section">
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1rem' }}>Foire Aux Questions</h2>
          <p className="text-muted" style={{ fontSize: '1.125rem' }}>
            Retrouvez ici les réponses aux interrogations les plus fréquentes concernant l'organisation des consultations.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          {faqs.map((faq, index) => (
            <FaqItem 
              key={index} 
              faq={faq} 
              isOpen={openIndex === index} 
              toggleOpen={() => setOpenIndex(openIndex === index ? null : index)} 
            />
          ))}

          {/* Lien "Autre ?" déclenchant un appel direct */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}
          >
            <a 
              href="tel:+243832138096"
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', textAlign: 'left', fontWeight: 600, fontSize: '1.125rem', color: 'var(--foreground)' }}
            >
              <span style={{ paddingRight: '2rem' }}>Une autre question ? Cliquez ici pour m'appeler directement.</span>
              <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', backgroundColor: 'var(--primary)', borderRadius: '50%' }}>
                <PhoneCall size={18} color="white" />
              </span>
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

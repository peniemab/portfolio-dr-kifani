"use client";

import { motion, Variants } from 'framer-motion';
import { Stethoscope, Activity, Syringe, Baby, HeartPulse, ShieldAlert } from 'lucide-react';

export default function Expertise() {
  const services = [
    { title: "Consultation générale", icon: <Stethoscope size={32} color="var(--primary)" />, desc: "Diagnostic et prise en charge globale de vos affections courantes." },
    { title: "Bilan de santé", icon: <Activity size={32} color="var(--primary)" />, desc: "Évaluation complète de votre état de santé et prévention active." },
    { title: "Maladies chroniques", icon: <HeartPulse size={32} color="var(--primary)" />, desc: "Suivi rigoureux du diabète, de l'hypertension et autres pathologies." },
    { title: "Pédiatrie courante", icon: <Baby size={32} color="var(--primary)" />, desc: "Consultations, développement et suivi de croissance pour vos enfants." },
    { title: "Prévention & Vaccins", icon: <Syringe size={32} color="var(--primary)" />, desc: "Conseils personnalisés et mise à jour du calendrier vaccinal." },
    { title: "Urgences mineures", icon: <ShieldAlert size={32} color="var(--primary)" />, desc: "Prise en charge rapide des petits traumatismes et urgences médicales." }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="expertise" className="section bg-surface">
      <div className="container">
        
        {/* Intro */}
        <div style={{ marginBottom: '3rem', maxWidth: '600px', textAlign: 'center', margin: '0 auto 3rem auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 600 }}>Mes Domaines d'Expertise</h2>
          <p className="text-muted" style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
            En tant que médecin généraliste, j'assure une prise en charge globale de votre santé, de la prévention au traitement de vos affections quotidiennes.
          </p>
        </div>

        {/* Grid Layout (Identique à About.tsx) */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={containerVariants} 
          className="grid-auto-fit"
        >
          {services.map((service, index) => (
            <motion.div key={index} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              style={{ 
              backgroundColor: "var(--background)", 
              borderRadius: "24px", 
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)",
            }}>
              <div style={{ marginBottom: '1.5rem', backgroundColor: 'var(--surface)', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 600 }}>{service.title}</h3>
              <p className="text-muted" style={{ fontSize: '1rem', lineHeight: 1.5 }}>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

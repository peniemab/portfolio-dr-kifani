"use client";

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdviceCMS() {
  const articles = [
    {
      id: 1,
      title: "Prévention du Paludisme pendant la saison des pluies",
      date: "30 Avril 2026",
      category: "Prévention"
    },
    {
      id: 2,
      title: "Alimentation et hypertension : les bons réflexes",
      date: "15 Avril 2026",
      category: "Santé Publique"
    }
  ];

  return (
    <section id="conseils" className="section bg-surface">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="flex-mobile-col" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '0.5rem' }}>Mes Conseils Santé</h2>
            <p className="text-muted">Je partage ici quelques articles pratiques pour votre santé au quotidien.</p>
          </div>
          <button className="btn btn-outline" style={{ border: 'none', padding: 0, color: 'var(--primary)', fontWeight: 600 }}>
            Voir tous mes articles <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
          </button>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={{ visible: { transition: { staggerChildren: 0.2 } } }} className="grid-auto-fit">
          {articles.map((article) => (
            <motion.div key={article.id} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }} style={{ padding: '2rem', backgroundColor: 'var(--background)', borderRadius: '24px', cursor: 'pointer', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
              <span style={{ fontSize: '0.875rem', color: 'var(--primary)', fontWeight: 600, display: 'block', marginBottom: '1rem' }}>
                {article.category} • {article.date}
              </span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>{article.title}</h3>
              <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.875rem' }}>
                Lire l'article <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

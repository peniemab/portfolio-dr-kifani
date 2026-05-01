"use client";

import { Stethoscope, Heart, ShieldCheck } from 'lucide-react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import AboutCard from './AboutCard';

const Word = ({ children, progress, range }: { children: string, progress: MotionValue<number>, range: number[] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ["#94a3b8", "#1e3a8a"]);
  return (
    <motion.span style={{ opacity, color }}>
      {children}
    </motion.span>
  );
};

const TextFill = ({ children }: { children: string }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 50%"]
  });

  const words = children.split(" ");
  return (
    <h2 ref={containerRef} style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.3em', lineHeight: 1.2 }}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>;
      })}
    </h2>
  );
};

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="section bg-surface">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          
          <TextFill>Mon approche : profondément Humaine et rigoureuse</TextFill>
          
          <motion.p variants={itemVariants} className="text-muted" style={{ fontSize: '1.125rem', marginBottom: '4rem' }}>
            Forte de mon expérience au sein du prestigieux Centre Médical Mongala à Kinshasa, 
            je place l'écoute et votre bien-être au centre de ma pratique médicale. Mon objectif est de vous offrir des soins adaptés, clairs et bienveillants.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="grid-auto-fit">
          <motion.div variants={itemVariants}>
            <AboutCard
              title="Expertise Clinique"
              desc="Je m'engage à vous fournir un diagnostic précis et un suivi rigoureux pour toutes les pathologies courantes."
              icon={<Stethoscope size={32} color="white" />}
              images={[
                "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
              ]}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <AboutCard
              title="Écoute Active"
              desc="Pour moi, chaque consultation est un moment privilégié d'échange pour vous comprendre au-delà de vos symptômes."
              icon={<Heart size={32} color="white" />}
              images={[
                "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=800&q=80"
              ]}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <AboutCard
              title="Cadre Médical"
              desc="Je vous reçois au sein des infrastructures modernes et sécurisantes du Centre Médical Mongala."
              icon={<ShieldCheck size={32} color="white" />}
              images={[
                "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1538108149393-cebb47ac8d4d?auto=format&fit=crop&w=800&q=80"
              ]}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

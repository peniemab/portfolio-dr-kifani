import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" style={{ backgroundColor: 'var(--foreground)', color: 'white', paddingTop: '5rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div className="grid-auto-fit" style={{ marginBottom: '4rem' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Dr. Kifani Bénie</h3>
            <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>Médecin Généraliste</p>
            <p style={{ color: '#94a3b8' }}>Je consulte au Centre Médical Mongala. Mon engagement : l'excellence médicale pour votre santé à Kinshasa.</p>
          </div>
          
          <div>
            <h4 style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>Contact & Accès</h4>
            <ul style={{ listStyle: 'none', color: '#94a3b8', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <MapPin size={20} style={{ marginRight: '1rem', flexShrink: 0, marginTop: '2px' }} />
                <a href="https://maps.google.com/?q=Centre+Medical+Mongala+48+Avenue+de+la+Mongala+Kinshasa" target="_blank" rel="noopener noreferrer">
                  Centre Médical Mongala<br/>48 Av. de la Mongala, Q/ Révolution<br/>C/ Gombe, Kinshasa, RDC
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <Phone size={20} style={{ marginRight: '1rem', flexShrink: 0 }} />
                <a href="tel:+243832138096">+243 83 21 38 096</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <Mail size={20} style={{ marginRight: '1rem', flexShrink: 0 }} />
                <a href="mailto:contact@dr-kifani.cd">contact@dr-kifani.cd</a>
              </li>
            </ul>
            <div style={{ width: '100%', height: '180px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                src="https://maps.google.com/maps?q=Centre%20Medical%20Mongala%2048%20Avenue%20de%20la%20Mongala%20Kinshasa&t=&z=16&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>Navigation Rapide</h4>
            <ul style={{ listStyle: 'none', color: '#94a3b8', padding: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ transition: 'color 0.2s' }}>Remonter en haut</a></li>
              <li style={{ marginBottom: '0.75rem' }}><a href="#about" style={{ transition: 'color 0.2s' }}>Mon Approche</a></li>
              <li style={{ marginBottom: '0.75rem' }}><a href="#expertise" style={{ transition: 'color 0.2s' }}>Domaines d'Expertise</a></li>
              <li style={{ marginBottom: '0.75rem' }}><a href="#conseils" style={{ transition: 'color 0.2s' }}>Conseils Santé</a></li>
              <li><a href="#faq" style={{ transition: 'color 0.2s' }}>FAQ (Questions Fréquentes)</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>Horaires de Consultation</h4>
            <ul style={{ listStyle: 'none', color: '#94a3b8', padding: 0 }}>
              <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Lundi - Vendredi</span>
                <span>08:00 - 16:00</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Samedi</span>
                <span>08:00 - 12:00</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', color: '#ef4444' }}>
                <span>Dimanche</span>
                <span>Fermé</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', color: '#64748b', fontSize: '0.875rem', flexWrap: 'wrap', gap: '1rem' }}>
          <p>&copy; 2026 Dr. Kifani Bénie. Tous droits réservés.</p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#" style={{ transition: 'color 0.2s' }}>Mentions Légales</a>
            <a href="#" style={{ transition: 'color 0.2s' }}>Ordre des Médecins</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

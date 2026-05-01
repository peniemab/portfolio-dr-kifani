import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Expertise from '@/components/Expertise';
import AdviceCMS from '@/components/AdviceCMS';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Kifani Bénie",
    "image": "https://dr-kifani-benie.com/images/doctor_portrait.png",
    "description": "Médecin Généraliste au Centre Médical de la Mongala à Kinshasa. Spécialiste en médecine générale et suivi pédiatrique.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "48 Avenue de la Mongala",
      "addressLocality": "Gombe",
      "addressRegion": "Kinshasa",
      "addressCountry": "CD"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-4.3057",
      "longitude": "15.3117"
    },
    "url": "https://dr-kifani-benie.com",
    "telephone": "+243832138096"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <AdviceCMS />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

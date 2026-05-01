import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Expertise from '@/components/Expertise';
import AdviceCMS from '@/components/AdviceCMS';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Expertise />
      <AdviceCMS />
      <Faq />
      <Footer />
    </main>
  );
}

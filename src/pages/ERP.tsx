import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import DashboardPreview from '@/components/DashboardPreview';
import WhyChoose from '@/components/WhyChoose';
import IdealFor from '@/components/IdealFor';
import Benefits from '@/components/Benefits';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function ERP() {
  const { pathname } = useLocation();

  // Auto-scroll on direct route load (e.g. someone pastes /features)
  useEffect(() => {
    const map: Record<string, string> = {
      '/': 'home',
      '/home': 'home',
      '/features': 'features',
      '/why-choose': 'why-choose',
      '/ideal-for': 'ideal-for',
      '/benefits': 'benefits',
      '/contact': 'contact',
    };
    const id = map[pathname];
    if (!id || id === 'home') {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DashboardPreview />
        <WhyChoose />
        <IdealFor />
        <Benefits />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
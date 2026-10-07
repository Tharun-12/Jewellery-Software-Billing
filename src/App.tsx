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
import TermsAndConditions from './components/Terms&conditions';

function App() {
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

export default App;

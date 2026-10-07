// import Navbar from '@/components/Navbar';
// import Hero from '@/components/Hero';
// import Features from '@/components/Features';
// import DashboardPreview from '@/components/DashboardPreview';
// import WhyChoose from '@/components/WhyChoose';
// import IdealFor from '@/components/IdealFor';
// import Benefits from '@/components/Benefits';
// import CTA from '@/components/CTA';
// import Contact from '@/components/Contact';
// import Footer from '@/components/Footer';
// import FloatingButtons from '@/components/FloatingButtons';


// function App() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
//       <main>
//         <Hero />
//         <Features />
//         <DashboardPreview />
//         <WhyChoose />
//         <IdealFor />
//         <Benefits />
//         <CTA />
//         <Contact />
//       </main>
//       <Footer />
//       <FloatingButtons />
//     </div>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ERP from '@/pages/ERP';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/Terms&conditions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ERP />} />
        <Route path="/home" element={<ERP />} />
        <Route path="/features" element={<ERP />} />
        <Route path="/why-choose" element={<ERP />} />
        <Route path="/ideal-for" element={<ERP />} />
        <Route path="/benefits" element={<ERP />} />
        <Route path="/contact" element={<ERP />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/terms-and-conditions" element={<TermsOfService />} />
        <Route path="*" element={<ERP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
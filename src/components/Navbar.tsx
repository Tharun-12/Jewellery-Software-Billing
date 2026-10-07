// import { useState, useEffect } from 'react';
// import { Menu, X, Diamond, Phone } from 'lucide-react';
// import { navLinks, company } from '@/data/content';
// import Button from '@/components/ui/Button';

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('');

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 20);

//       const sections = navLinks.map((l) => l.href.replace('#', ''));
//       const current = sections.find((id) => {
//         const el = document.getElementById(id);
//         if (!el) return false;
//         const rect = el.getBoundingClientRect();
//         return rect.top <= 100 && rect.bottom >= 100;
//       });
//       if (current) setActiveSection(current);
//     };
//     window.addEventListener('scroll', onScroll, { passive: true });
//     onScroll();
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   const handleNavClick = (href: string) => {
//     setMobileOpen(false);
//     const el = document.querySelector(href);
//     el?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
//       }`}
//     >
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
//         {/* Logo */}
//         <a href="#" className="flex items-center gap-2 shrink-0">
//           <div className="w-9 h-9 rounded-xl bg-navy-gradient flex items-center justify-center">
//             <Diamond className="w-5 h-5 text-gold" />
//           </div>
//           <div className="flex flex-col leading-none">
//             <span className={`font-heading font-extrabold text-lg ${scrolled ? 'text-navy' : 'text-navy'}`}>
//               iiQ<span className="text-crimson">Bets</span>
//             </span>
//             <span className={`text-[10px] font-medium ${scrolled ? 'text-gray-500' : 'text-gray-500'}`}>
//               {company.tagline}
//             </span>
//           </div>
//         </a>

//         {/* Desktop nav */}
//         <ul className="hidden lg:flex items-center gap-1">
//           {navLinks.map((link) => {
//             const isActive = activeSection === link.href.replace('#', '');
//             return (
//               <li key={link.href}>
//                 <button
//                   onClick={() => handleNavClick(link.href)}
//                   className={`px-4 py-2 text-sm font-heading font-semibold rounded-lg transition-colors duration-200 ${
//                     isActive
//                       ? 'text-crimson bg-crimson-50'
//                       : 'text-navy hover:text-crimson hover:bg-navy/5'
//                   }`}
//                 >
//                   {link.label}
//                 </button>
//               </li>
//             );
//           })}
//         </ul>

//         {/* Desktop CTA */}
//         <div className="hidden lg:flex items-center gap-3">
//           <a
//             href={`tel:${company.phoneRaw}`}
//             className="flex items-center gap-1.5 text-sm font-heading font-semibold text-navy hover:text-crimson transition-colors"
//           >
//             <Phone className="w-4 h-4" />
//             {company.phone}
//           </a>
//           <Button size="sm" onClick={() => handleNavClick('#contact')}>
//             Request Demo
//           </Button>
//         </div>

//         {/* Mobile toggle */}
//         <button
//           onClick={() => setMobileOpen(!mobileOpen)}
//           className="lg:hidden p-2 rounded-lg text-navy hover:bg-navy/5"
//           aria-label="Toggle menu"
//         >
//           {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </nav>

//       {/* Mobile menu */}
//       {mobileOpen && (
//         <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
//           <ul className="px-4 py-4 space-y-1">
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <button
//                   onClick={() => handleNavClick(link.href)}
//                   className="w-full text-left px-4 py-3 text-sm font-heading font-semibold text-navy hover:bg-navy/5 rounded-lg"
//                 >
//                   {link.label}
//                 </button>
//               </li>
//             ))}
//             <li className="pt-2">
//               <Button
//                 size="md"
//                 className="w-full"
//                 onClick={() => handleNavClick('#contact')}
//               >
//                 Request Demo
//               </Button>
//             </li>
//             <li className="pt-2">
//               <a
//                 href={`tel:${company.phoneRaw}`}
//                 className="flex items-center justify-center gap-2 text-sm font-heading font-semibold text-navy"
//               >
//                 <Phone className="w-4 h-4" />
//                 {company.phone}
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// }



// import { useState, useEffect } from 'react';
// import { Menu, X, Phone } from 'lucide-react';
// import { navLinks, company } from '@/data/content';
// import Button from '@/components/ui/Button';
// import logo from '@/assets/logo.webp'; // 👈 adjust filename/extension as needed

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('');

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 20);

//       const sections = navLinks.map((l) => l.href.replace('#', ''));
//       const current = sections.find((id) => {
//         const el = document.getElementById(id);
//         if (!el) return false;
//         const rect = el.getBoundingClientRect();
//         return rect.top <= 100 && rect.bottom >= 100;
//       });
//       if (current) setActiveSection(current);
//     };
//     window.addEventListener('scroll', onScroll, { passive: true });
//     onScroll();
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   const handleNavClick = (href: string) => {
//     setMobileOpen(false);
//     const el = document.querySelector(href);
//     el?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
//       }`}
//     >
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
//         {/* Logo */}
//         <a href="#" className="flex items-center gap-2 shrink-0">
//           <img
//             src={logo}
//             alt="iiQBets logo"
//             className="w-18 h-12 object-contain"
//           />
//           {/* <div className="flex flex-col leading-none">
//             <span className="font-heading font-extrabold text-lg text-navy">
//               iiiQ<span className="text-crimson">Bets</span>
//             </span>
//             <span className="text-[10px] font-medium text-gray-500">
//               {company.tagline}
//             </span>
//           </div> */}
//         </a>

//         {/* Desktop nav */}
//         <ul className="hidden lg:flex items-center gap-1">
//           {navLinks.map((link) => {
//             const isActive = activeSection === link.href.replace('#', '');
//             return (
//               <li key={link.href}>
//                 <button
//                   onClick={() => handleNavClick(link.href)}
//                   className={`px-4 py-2 text-sm font-heading font-semibold rounded-lg transition-colors duration-200 ${
//                     isActive
//                       ? 'text-crimson bg-crimson-50'
//                       : 'text-navy hover:text-crimson hover:bg-navy/5'
//                   }`}
//                 >
//                   {link.label}
//                 </button>
//               </li>
//             );
//           })}
//         </ul>

//         {/* Desktop CTA */}
//         <div className="hidden lg:flex items-center gap-3">
//           <a
//             href={`tel:${company.phoneRaw}`}
//             className="flex items-center gap-1.5 text-sm font-heading font-semibold text-navy hover:text-crimson transition-colors"
//           >
//             <Phone className="w-4 h-4" />
//             {company.phone}
//           </a>
//           <Button size="sm" onClick={() => handleNavClick('#contact')}>
//             Request Demo
//           </Button>
//         </div>

//         {/* Mobile toggle */}
//         <button
//           onClick={() => setMobileOpen(!mobileOpen)}
//           className="lg:hidden p-2 rounded-lg text-navy hover:bg-navy/5"
//           aria-label="Toggle menu"
//         >
//           {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </nav>

//       {/* Mobile menu */}
//       {mobileOpen && (
//         <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
//           <ul className="px-4 py-4 space-y-1">
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <button
//                   onClick={() => handleNavClick(link.href)}
//                   className="w-full text-left px-4 py-3 text-sm font-heading font-semibold text-navy hover:bg-navy/5 rounded-lg"
//                 >
//                   {link.label}
//                 </button>
//               </li>
//             ))}
//             <li className="pt-2">
//               <Button
//                 size="md"
//                 className="w-full"
//                 onClick={() => handleNavClick('#contact')}
//               >
//                 Request Demo
//               </Button>
//             </li>
//             <li className="pt-2">
//               <a
//                 href={`tel:${company.phoneRaw}`}
//                 className="flex items-center justify-center gap-2 text-sm font-heading font-semibold text-navy"
//               >
//                 <Phone className="w-4 h-4" />
//                 {company.phone}
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// }


import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks, company } from '@/data/content';
import Button from '@/components/ui/Button';
import logo from '@/assets/logo.webp';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace('#', ''));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Smooth-scroll to a section, and if it's the demo form, focus the Name field
  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Auto-focus the Name field after the scroll finishes
    if (id === 'request-demo-form' || id === 'contact') {
      setTimeout(() => {
        document.getElementById('name')?.focus();
      }, 700);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 shrink-0"
        >
          <img src={logo} alt="iiQBets logo" className="w-18 h-12 object-contain" />
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 text-sm font-heading font-semibold rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'text-crimson bg-crimson-50'
                      : 'text-navy hover:text-crimson hover:bg-navy/5'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${company.phoneRaw}`}
            className="flex items-center gap-1.5 text-sm font-heading font-semibold text-navy hover:text-crimson transition-colors"
          >
            <Phone className="w-4 h-4" />
            {company.phone}
          </a>
          <Button size="sm" onClick={() => handleNavClick('#request-demo-form')}>
            Request Demo
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-navy hover:bg-navy/5"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-heading font-semibold text-navy hover:bg-navy/5 rounded-lg"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <Button
                size="md"
                className="w-full"
                onClick={() => handleNavClick('#request-demo-form')}
              >
                Request Demo
              </Button>
            </li>
            <li className="pt-2">
              <a
                href={`tel:${company.phoneRaw}`}
                className="flex items-center justify-center gap-2 text-sm font-heading font-semibold text-navy"
              >
                <Phone className="w-4 h-4" />
                {company.phone}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
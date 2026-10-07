import { Diamond, Phone, Mail, Globe, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { company, navLinks } from '@/data/content';

export default function Footer() {
  const socialIcons = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-navy-gradient flex items-center justify-center border border-white/10">
                <Diamond className="w-5 h-5 text-gold" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg">
                  iiiQ<span className="text-crimson">Bets</span>
                </span>
                <p className="text-[10px] text-navy-200">{company.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-navy-200 leading-relaxed">
              Comprehensive jewellery business management software — ERP, order management, and retailers application in one integrated platform.
            </p>
            <div className="flex gap-3 mt-5">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gold hover:text-navy flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-heading font-bold text-gold uppercase tracking-wide mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm text-navy-200 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-heading font-bold text-gold uppercase tracking-wide mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex gap-2.5 text-sm text-navy-200">
                <Phone className="w-4 h-4 shrink-0 mt-0.5 text-gold" />
                <a href={`tel:${company.phoneRaw}`} className="hover:text-gold transition-colors">{company.phone}</a>
              </li>
              <li className="flex gap-2.5 text-sm text-navy-200">
                <Mail className="w-4 h-4 shrink-0 mt-0.5 text-gold" />
                <a href={`mailto:${company.email}`} className="hover:text-gold transition-colors break-all">{company.email}</a>
              </li>
              <li className="flex gap-2.5 text-sm text-navy-200">
                <Globe className="w-4 h-4 shrink-0 mt-0.5 text-gold" />
                <a href={company.website} className="hover:text-gold transition-colors break-all">{company.website}</a>
              </li>
              <li className="flex gap-2.5 text-sm text-navy-200">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-gold" />
                <span className="leading-relaxed">{company.address}</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-heading font-bold text-gold uppercase tracking-wide mb-4">Company</h4>
            <p className="text-sm text-navy-200 leading-relaxed mb-2">
              {company.legalName}
            </p>
            <p className="text-sm text-navy-200 leading-relaxed">
              Registered legal name for iiQBets. Digital transformation specialists delivering end-to-end business solutions.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-sm text-navy-300">{company.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

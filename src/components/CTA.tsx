import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { company } from '@/data/content';

export default function CTA() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 lg:py-20 bg-navy-gradient relative overflow-hidden">
      <div className="absolute inset-0 diamond-pattern opacity-20" />
      <div className="absolute -top-10 -right-10 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-crimson/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-balance"
        >
          <span className="text-white">Empower Your Jewellery Business. </span>
          <span className="gold-text">Automate. Simplify. Grow.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-base md:text-lg text-navy-100"
        >
          Contact Us Today for Demo, Details / Pricing
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Button variant="gold" size="lg" onClick={scrollToContact}>
            Contact Us Today <ArrowRight className="w-5 h-5" />
          </Button>
          <a
            href={`tel:${company.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-heading font-semibold rounded-xl border-2 border-gold text-gold hover:bg-gold hover:text-navy transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            {company.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

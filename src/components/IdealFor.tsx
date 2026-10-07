import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { idealFor } from '@/data/content';

export default function IdealFor() {
  return (
    <section id="ideal-for" className="py-20 lg:py-28 bg-navy-gradient relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full diamond-pattern opacity-30" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ideal For"
          title="Built for Every Jewellery Business"
          subtitle="Whether you're a single showroom or a multi-branch enterprise, our software adapts to your needs."
          light
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {idealFor.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-gold/30 transition-colors cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold-gradient flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-navy" />
              </div>
              <p className="text-sm font-heading font-semibold text-white">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { whyChoose } from '@/data/content';

export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Choose iiQBets?"
          subtitle="We are digital transformation specialists committed to delivering solutions that drive real business growth."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChoose.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`bg-white rounded-2xl p-7 shadow-card hover:shadow-cardhover transition-all duration-300 border border-gray-100 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl ${item.bgColor} flex items-center justify-center mb-5`}>
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>
              <h3 className="text-lg font-heading font-bold text-navy mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { benefits } from '@/data/content';

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 lg:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Key Benefits"
          title="The Advantages That Set You Apart"
          subtitle="Transform your jewellery business with tools designed for efficiency, accuracy, and growth."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-5 text-center shadow-card hover:shadow-cardhover transition-shadow duration-300 border border-gray-100"
            >
              <div className={`w-12 h-12 rounded-xl ${benefit.bgColor} flex items-center justify-center mx-auto mb-3`}>
                <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
              </div>
              <p className="text-sm font-heading font-semibold text-navy leading-snug">{benefit.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

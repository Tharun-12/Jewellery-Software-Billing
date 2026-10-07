import { motion } from 'framer-motion';
import FeatureCard from '@/components/ui/FeatureCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { features } from '@/data/content';

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Key Features"
          title="Everything You Need to Run Your Jewellery Business"
          subtitle="Twelve powerful modules covering every aspect of your operations — from inventory and sales to customer management and repairs."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              bgColor={feature.bgColor}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

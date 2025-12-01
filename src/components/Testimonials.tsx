import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const REVIEWS = [
  { id: 1, name: "Sarah Jenkins", role: "Marketing Director, Vogue", text: "Hillel has an eye for rhythm that completely transformed our campaign. The pacing was impeccable." },
  { id: 2, name: "David Chen", role: "Creative Lead, Sony", text: "Professional, fast, and creatively brilliant. The color grading took our footage to a cinematic level." },
  { id: 3, name: "Elena Rodriguez", role: "Director, Indie Films", text: "He doesn't just edit; he tells a story. The sound design added layers we didn't know were missing." }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">FEEDBACK</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-cinematic-gray/30 p-8 rounded-xl border border-white/5 relative"
            >
              <Quote className="text-cinematic-gold mb-6 w-8 h-8 opacity-50" />
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">"{review.text}"</p>
              <div>
                <h4 className="font-bold text-white">{review.name}</h4>
                <span className="text-sm text-gray-500 font-mono">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
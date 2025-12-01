import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle } from 'lucide-react';

const REVIEWS = [
  { id: 1, handle: "@marketing_guru", text: "This edit is ILLEGAL 💀 How is the retention so high??", likes: "12.4K" },
  { id: 2, handle: "@brand_ceo", text: "Hillel doesn't miss. ROI went 🚀🚀🚀 after one week.", likes: "8.9K" },
  { id: 3, handle: "@creator_jane", text: "POV: You found the best editor on the app. 🔥", likes: "45.2K" },
  { id: 4, handle: "@agency_life", text: "Stop scrolling and hire him. Seriously.", likes: "2.1K" }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-black overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-20 text-center uppercase text-white">
            The <span className="text-genz-blue">Comments</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.2, type: "spring" }}
              whileHover={{ y: -10, rotate: i % 2 === 0 ? 1 : -1 }}
              className="bg-[#111] p-6 rounded-2xl border border-white/10 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px]">
                    <div className="w-full h-full bg-black rounded-full" />
                </div>
                <span className="font-bold text-sm text-gray-200">{review.handle}</span>
                <span className="text-xs text-gray-500 ml-auto">2h</span>
              </div>
              
              <p className="text-white mb-6 font-medium leading-snug">
                {review.text}
              </p>

              <div className="flex items-center justify-between text-gray-500 text-xs font-bold">
                 <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                        <Heart size={16} /> {review.likes}
                    </button>
                    <button className="flex items-center gap-1 hover:text-white transition-colors">
                        <MessageCircle size={16} /> Reply
                    </button>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
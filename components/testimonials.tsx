"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "James Whitfield",
    location: "New York, USA",
    vehicle: "Ferrari SF90 Stradale",
    rating: 5,
    text: "An absolutely seamless experience from start to finish. The team understood exactly what I was looking for and delivered beyond expectations. My SF90 arrived in perfect condition.",
  },
  {
    id: 2,
    name: "Sofia Marchetti",
    location: "Milan, Italy",
    vehicle: "Lamborghini Revuelto",
    rating: 5,
    text: "World-class service that matches the caliber of their vehicles. The private viewing experience was exceptional, and the attention to detail throughout the entire process was remarkable.",
  },
  {
    id: 3,
    name: "David Chen",
    location: "Singapore",
    vehicle: "Rolls-Royce Ghost",
    rating: 5,
    text: "I have purchased luxury vehicles from dealers across the globe, and Luxury Autos stands in a class of their own. Truly an unparalleled white-glove experience.",
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-amber-500" />
            <span className="text-amber-500 uppercase tracking-widest text-sm">Client Stories</span>
            <div className="h-px w-12 bg-amber-500" />
          </div>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight">
            What Our <span className="italic font-serif">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 hover:border-amber-500/30 transition-colors"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg font-light italic">
                "{t.text}"
              </p>
              <div className="border-t border-zinc-800 pt-6">
                <div className="font-medium text-white">{t.name}</div>
                <div className="text-sm text-gray-400 mt-1">{t.location}</div>
                <div className="text-xs text-amber-500 uppercase tracking-widest mt-2">{t.vehicle}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
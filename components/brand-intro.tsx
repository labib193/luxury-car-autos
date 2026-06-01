"use client";

import { motion } from "framer-motion";
import { Sparkles, Award, Globe } from "lucide-react";

export function BrandIntro() {
  const stats = [
    { icon: Sparkles, label: "Luxury Vehicles", value: "50+" },
    { icon: Award, label: "Years Excellence", value: "20" },
    { icon: Globe, label: "Worldwide Delivery", value: "24/7" },
  ];

  return (
    <section className="relative bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            Where Dreams Meet <span className="italic font-serif">Reality</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Experience automotive excellence redefined. Curated collection of the world's most 
            prestigious vehicles, delivered with unparalleled service.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-4 p-4 rounded-full bg-white/5 group-hover:bg-amber-500/10 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
              </div>
              <div className="text-4xl md:text-5xl font-light mb-2">{stat.value}</div>
              <div className="text-gray-400 uppercase tracking-widest text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="group relative px-12 py-4 text-lg font-light tracking-widest uppercase overflow-hidden">
            <span className="relative z-10 text-white group-hover:text-black transition-colors duration-500">
              Explore Collection
            </span>
            <div className="absolute inset-0 border border-amber-500" />
            <div className="absolute inset-0 bg-amber-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
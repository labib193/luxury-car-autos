"use client";

import { motion } from "framer-motion";

const footerLinks = {
  Collection: ["Ferrari", "Lamborghini", "Porsche", "McLaren", "Bentley", "Rolls-Royce"],
  Services: ["Private Viewing", "Test Drive", "Trade-In", "Financing", "Worldwide Delivery"],
  Company: ["About Us", "Our Team", "Careers", "Press", "Contact"],
};

const socials = [
  { label: "IG", href: "#", name: "Instagram" },
  { label: "TW", href: "#", name: "Twitter" },
  { label: "YT", href: "#", name: "YouTube" },
  { label: "IN", href: "#", name: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-500 rounded-sm flex items-center justify-center">
                  <span className="text-black font-black">LA</span>
                </div>
                <span className="text-xl font-light tracking-widest uppercase">
                  Luxury <span className="text-amber-500">Autos</span>
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-sm mb-8">
                The world's most prestigious automotive dealership. Curating exceptional vehicles for discerning collectors since 2004.
              </p>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a key={social.label} href={social.href} aria-label={social.name} className="w-10 h-10 bg-zinc-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors group">
                    <span className="text-xs font-bold text-gray-400 group-hover:text-black transition-colors">{social.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm uppercase tracking-widest text-amber-500 mb-6">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">2024 Luxury Autos. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
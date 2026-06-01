"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export function InquiryContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", vehicle: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", link: "tel:+15551234567" },
    { icon: Mail, label: "Email", value: "info@luxuryautos.com", link: "mailto:info@luxuryautos.com" },
    { icon: MapPin, label: "Showroom", value: "123 Luxury Boulevard, Beverly Hills, CA 90210", link: "https://maps.google.com" },
    { icon: Clock, label: "Business Hours", value: "Mon-Sat: 9AM-8PM | Sun: 10AM-6PM", link: null },
  ];

  const vehicles = [
    "Ferrari SF90 Stradale",
    "Lamborghini Revuelto",
    "Porsche 911 Turbo S",
    "McLaren 765LT",
    "Bentley Continental GT",
    "Rolls-Royce Ghost",
    "Other / General Inquiry",
  ];

  return (
    <section className="relative bg-zinc-950 text-white py-24 px-6">
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
            <span className="text-amber-500 uppercase tracking-widest text-sm">Get in Touch</span>
            <div className="h-px w-12 bg-amber-500" />
          </div>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
            Begin Your <span className="italic font-serif">Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Schedule a private viewing or request more information about any vehicle in our collection
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm uppercase tracking-widest text-gray-400 mb-2">Full Name *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange}
                      className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-widest text-gray-400 mb-2">Email Address *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange}
                      className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-widest text-gray-400 mb-2">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="+1 (555) 123-4567" />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-widest text-gray-400 mb-2">Vehicle of Interest</label>
                    <select name="vehicle" value={formData.vehicle} onChange={handleChange}
                      className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors cursor-pointer">
                      <option value="">Select a vehicle</option>
                      {vehicles.map((v) => <option key={v} value={v}>{v}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-widest text-gray-400 mb-2">Message</label>
                    <textarea name="message" rows={4} value={formData.message} onChange={handleChange}
                      className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                      placeholder="Tell us about your requirements..." />
                  </div>
                  <button type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-black py-4 rounded-lg font-medium uppercase tracking-widest text-sm transition-colors flex items-center justify-center gap-2">
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-amber-500 mb-4" />
                  <h3 className="text-2xl font-light mb-2">Thank You!</h3>
                  <p className="text-gray-400">Your inquiry has been received. We will get back to you within 24 hours.</p>
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-amber-500/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 rounded-lg">
                    <info.icon className="w-6 h-6 text-amber-500" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm uppercase tracking-widest text-gray-400 mb-1">{info.label}</div>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer"
                        className="text-lg text-white hover:text-amber-500 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-lg text-white">{info.value}</div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer"
              className="block bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white rounded-lg p-6 text-center transition-all">
              <div className="flex items-center justify-center gap-3 mb-2">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-xl font-medium">Chat on WhatsApp</span>
              </div>
              <p className="text-sm text-white/90">Get instant response to your queries</p>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Zap, Gauge } from "lucide-react";

const featuredCars = [
  {
    id: 1,
    name: "Ferrari SF90 Stradale",
    year: 2024,
    price: "$625,000",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=90",
    specs: { power: "986 HP", acceleration: "2.5s", type: "Hybrid V8" },
    color: "#ff2200",
  },
  {
    id: 2,
    name: "Lamborghini Revuelto",
    year: 2024,
    price: "$608,000",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=90",
    specs: { power: "1001 HP", acceleration: "2.5s", type: "Hybrid V12" },
    color: "#ffaa00",
  },
  {
    id: 3,
    name: "Porsche 911 Turbo S",
    year: 2024,
    price: "$230,000",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=90",
    specs: { power: "640 HP", acceleration: "2.6s", type: "Twin-Turbo F6" },
    color: "#ffffff",
  },
  {
    id: 4,
    name: "McLaren 765LT",
    year: 2024,
    price: "$382,000",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=90",
    specs: { power: "755 HP", acceleration: "2.7s", type: "Twin-Turbo V8" },
    color: "#ff6600",
  },
];

function CarCard({ car, index }: { car: typeof featuredCars[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 0.3, 1], [index % 2 === 0 ? -120 : 120, 0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3, 1], [40, 0, -40]);
  const springX = useSpring(x, { stiffness: 60, damping: 18 });
  const springY = useSpring(y, { stiffness: 60, damping: 20 });
  const springOpacity = useSpring(opacity, { stiffness: 60, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (y - 0.5) * -24,
      y: (x - 0.5) * 24,
    });
  };

  return (
    <motion.div
      ref={ref}
      style={{ y: springY, x: springX, opacity: springOpacity }}
      className={index % 2 === 1 ? "md:mt-16" : ""}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setTilt({ x: 0, y: 0 });
        }}
        style={{ perspective: "1000px" }}
      >
        <div
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovered ? 1.03 : 1})`,
            transition: hovered
              ? "transform 0.1s ease-out"
              : "transform 0.6s cubic-bezier(0.23,1,0.32,1)",
            transformStyle: "preserve-3d",
            borderRadius: "16px",
            overflow: "hidden",
            background: "linear-gradient(135deg, #1c1c1c 0%, #0d0d0d 100%)",
            boxShadow: hovered
              ? `0 40px 80px rgba(0,0,0,0.7), 0 0 80px ${car.color}18`
              : "0 20px 40px rgba(0,0,0,0.4)",
            border: hovered
              ? `1px solid ${car.color}33`
              : "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {/* Image */}
          <div className="relative h-72 overflow-hidden">
            <div
              style={{
                transform: `scale(${hovered ? 1.06 : 1})`,
                transition: "transform 0.6s cubic-bezier(0.23,1,0.32,1)",
                position: "absolute",
                inset: 0,
              }}
            >
              <Image src={car.image} alt={car.name} fill className="object-cover" />
            </div>

            <div
              className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, ${car.color}20 0%, transparent 70%)`,
                opacity: hovered ? 1 : 0,
              }}
            />

            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, #0d0d0d 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
              }}
            />

            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white/70 border border-white/10">
              {car.year}
            </div>

            <div
              className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full"
              style={{
                backgroundColor: car.color,
                boxShadow: `0 0 12px ${car.color}`,
              }}
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3
              className="text-xl font-light text-white mb-1 tracking-tight"
              style={{
                transform: hovered ? "translateX(4px)" : "translateX(0)",
                transition: "transform 0.3s ease",
              }}
            >
              {car.name}
            </h3>

            <div className="text-2xl font-light mb-5" style={{ color: car.color }}>
              {car.price}
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1.5">
                <Zap className="w-3 h-3 opacity-40" style={{ color: car.color }} />
                <span className="text-xs text-white/50">{car.specs.power}</span>
              </div>
              <div className="w-px h-3 bg-white/10" />
              <div className="flex items-center gap-1.5">
                <Gauge className="w-3 h-3 opacity-40" style={{ color: car.color }} />
                <span className="text-xs text-white/50">0–60 in {car.specs.acceleration}</span>
              </div>
              <div className="w-px h-3 bg-white/10" />
              <span className="text-xs text-white/30">{car.specs.type}</span>
            </div>

            <button
              className="flex items-center gap-2 text-xs uppercase tracking-widest"
              style={{
                color: hovered ? car.color : "rgba(255,255,255,0.35)",
                transform: hovered ? "translateX(6px)" : "translateX(0)",
                transition: "all 0.3s ease",
              }}
            >
              <span>View Details</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedCollection() {
  return (
    <section
      className="relative py-32 px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0a0a 0%, #141414 40%, #1c1c1c 70%, #0f0f0f 100%)",
      }}
    >
      <div
        className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #ff220015 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #ffaa0015 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-12 bg-amber-500" />
            <span className="text-amber-500 uppercase tracking-widest text-xs">Featured</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-light tracking-tight text-white mb-4">
            Signature{" "}
            <span className="italic font-serif text-white/40">Collection</span>
          </h2>
          <p className="text-white/25 text-base max-w-md">
            Hover over each vehicle to experience it in three dimensions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredCars.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
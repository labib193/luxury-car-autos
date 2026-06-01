"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import Image from "next/image";

const allCars = [
  { id: 1, name: "Ferrari SF90 Stradale", brand: "Ferrari", year: 2024, price: 625000, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80", power: "986 HP", acceleration: "2.5s" },
  { id: 2, name: "Lamborghini Revuelto", brand: "Lamborghini", year: 2024, price: 608000, image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80", power: "1001 HP", acceleration: "2.5s" },
  { id: 3, name: "Porsche 911 Turbo S", brand: "Porsche", year: 2024, price: 230000, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80", power: "640 HP", acceleration: "2.6s" },
  { id: 4, name: "McLaren 765LT", brand: "McLaren", year: 2024, price: 382000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", power: "755 HP", acceleration: "2.7s" },
  { id: 5, name: "Ferrari 296 GTB", brand: "Ferrari", year: 2024, price: 320000, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80", power: "818 HP", acceleration: "2.9s" },
  { id: 6, name: "Lamborghini Huracan STO", brand: "Lamborghini", year: 2023, price: 331000, image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80", power: "630 HP", acceleration: "3.0s" },
  { id: 7, name: "Porsche Taycan Turbo S", brand: "Porsche", year: 2024, price: 185000, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80", power: "750 HP", acceleration: "2.8s" },
  { id: 8, name: "McLaren Artura", brand: "McLaren", year: 2024, price: 237000, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", power: "671 HP", acceleration: "3.0s" },
  { id: 9, name: "Bentley Continental GT", brand: "Bentley", year: 2024, price: 245000, image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80", power: "626 HP", acceleration: "3.6s" },
  { id: 10, name: "Rolls-Royce Ghost", brand: "Rolls-Royce", year: 2024, price: 335000, image: "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=600&q=80", power: "563 HP", acceleration: "4.5s" },
  { id: 11, name: "Ferrari Roma", brand: "Ferrari", year: 2023, price: 243000, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80", power: "612 HP", acceleration: "3.4s" },
  { id: 12, name: "Lamborghini Urus Performante", brand: "Lamborghini", year: 2024, price: 260000, image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80", power: "657 HP", acceleration: "3.3s" },
];

const brands = ["All", "Ferrari", "Lamborghini", "Porsche", "McLaren", "Bentley", "Rolls-Royce"];
const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "name", label: "Name: A-Z" },
];

export function FullCatalog() {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [priceRange, setPriceRange] = useState([0, 700000]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSorted = useMemo(() => {
    let result = allCars.filter((car) => {
      const matchesBrand = selectedBrand === "All" || car.brand === selectedBrand;
      const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1];
      return matchesBrand && matchesSearch && matchesPrice;
    });

    result.sort((a, b) => {
      if (sortBy === "newest") return b.year - a.year;
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

    return result;
  }, [selectedBrand, searchQuery, sortBy, priceRange]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="relative bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-amber-500" />
            <span className="text-amber-500 uppercase tracking-widest text-sm">Complete Collection</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
            Explore Our <span className="italic font-serif">Inventory</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            {filteredAndSorted.length} vehicles available
          </p>
        </motion.div>

        {/* Filters Bar */}
        <div className="mb-12 space-y-6">
          {/* Search & Filter Toggle */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by model..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 px-6 py-3 rounded-lg transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-6">
                  {/* Brand Filter */}
                  <div>
                    <label className="text-sm uppercase tracking-widest text-gray-400 mb-3 block">
                      Brand
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {brands.map((brand) => (
                        <button
                          key={brand}
                          onClick={() => setSelectedBrand(brand)}
                          className={`px-4 py-2 rounded-full text-sm transition-all ${
                            selectedBrand === brand
                              ? "bg-amber-500 text-black"
                              : "bg-zinc-800 text-white hover:bg-zinc-700"
                          }`}
                        >
                          {brand}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className="text-sm uppercase tracking-widest text-gray-400 mb-3 block">
                      Price Range: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="700000"
                      step="10000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      className="w-full accent-amber-500"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Cars Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredAndSorted.map((car, index) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-zinc-900 rounded-lg overflow-hidden hover:ring-2 hover:ring-amber-500 transition-all"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                    {car.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-amber-500 mb-2">
                    {car.brand}
                  </div>
                  <h3 className="text-xl font-light mb-3">{car.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-light text-amber-500">
                      {formatPrice(car.price)}
                    </span>
                  </div>

                  {/* Specs */}
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span>{car.power}</span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full" />
                    <span>0-60: {car.acceleration}</span>
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-amber-500 hover:bg-amber-600 text-black py-3 rounded-lg font-medium uppercase tracking-widest text-sm transition-colors">
                    Inquire Now
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredAndSorted.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-gray-400">No vehicles match your criteria</p>
            <button
              onClick={() => {
                setSelectedBrand("All");
                setSearchQuery("");
                setPriceRange([0, 700000]);
              }}
              className="mt-6 text-amber-500 hover:text-amber-400 underline"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
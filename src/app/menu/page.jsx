"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const coffees = [
    { 
      name: "Espresso",
      desc: "Kopi hitam murni dengan rasa kuat dan aroma tajam.",
      img: "/espresso.jpg",
      price: "25K",
      category: "Hot"
    },
    { 
      name: "Cappuccino",
      desc: "Kombinasi espresso, susu hangat, dan foam lembut di atasnya.",
      img: "/cappucino.jpeg",
      price: "28K",
      category: "Hot"
    },
    { 
      name: "Latte",
      desc: "Espresso lembut dengan susu steamed hangat dan sedikit foam.",
      img: "/latte.jpg",
      price: "30K",
      category: "Hot"
    },
    { 
      name: "Cold Brew",
      desc: "Kopi diseduh dingin selama 12 jam, rasa halus dan menyegarkan.",
      img: "/coldbrew.jpeg",
      price: "33K",
      category: "Cold"
    },
    { 
      name: "Iced Latte",
      desc: "Latte versi dingin dengan susu segar dan es batu.",
      img: "/iced-latte.jpg",
      price: "30K",
      category: "Cold"
    },
    { 
      name: "Matcha Latte",
      desc: "Teh hijau Jepang dengan susu segar — lembut dan menenangkan.",
      img: "/matcha-latte.jpg",
      price: "33K",
      category: "Non-Coffee"
    },
  ];

  const filteredMenu =
    activeCategory === "All"
      ? coffees
      : coffees.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#faf7f3] text-[#3b2e23]">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full bg-[#faf7f3]/70 backdrop-blur-md border-b border-[#e6e1da] z-50"
      >
        <div className="max-w-6xl mx-auto flex justify-center gap-10 py-6 text-sm uppercase tracking-widest font-medium">
          <Link href="/" className="hover:text-[#7a5e3a] transition">Home</Link>
          <Link href="/menu" className="text-[#7a5e3a] border-b border-[#7a5e3a] pb-1">Menu</Link>
          <Link href="/about" className="hover:text-[#7a5e3a] transition">About</Link>
          <Link href="/contact" className="hover:text-[#7a5e3a] transition">Contact</Link>
        </div>
      </motion.nav>

      {/* Header */}
      <section className="pt-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-light tracking-[0.25em] mb-6"
        >
          MENU KAMI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-[#6f5d48] tracking-wide"
        >
          Hot • Cold • Non-Coffee
        </motion.p>
      </section>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mt-10">
        {["All", "Hot", "Cold", "Non-Coffee"].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 text-sm rounded-full border transition-all ${
              activeCategory === cat
                ? "bg-[#7a5e3a] text-white border-[#7a5e3a]"
                : "border-[#cbb89e] text-[#4b3b2a] hover:bg-[#f0e9df]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 py-20"
        >
          {filteredMenu.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white border border-[#e6e1da] rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              <div className="w-full h-60 relative">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#2f2417] mb-2 uppercase">
                  {item.name}
                </h3>
                <p className="text-sm text-[#6f5d48] mb-4">{item.desc}</p>
                <p className="font-bold text-[#7a5e3a] tracking-wider">
                  {item.price}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-[#e6e1da] py-6 text-center text-sm text-[#7a5e3a]/80">
        © {new Date().getFullYear()} Coffee Telkom — Modern Coffee • Innovation • Connection
      </footer>
    </main>
  );
}

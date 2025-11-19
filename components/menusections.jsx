"use client";
import { motion } from "framer-motion";

export default function MenuSection({ addToCart }) {

  const menuItems = [
    {
      name: "Espresso",
      price: "Rp25.000",
      desc: "Kopi hitam murni dengan rasa kuat dan aroma tajam.",
      image: "/espresso.jpg",
    },
    {
      name: "Cappuccino",
      price: "Rp28.000",
      desc: "Kombinasi espresso, susu hangat, dan foam lembut.",
      image: "/cappuccino.jpeg",
    },
    {
      name: "Latte",
      price: "Rp30.000",
      desc: "Espresso lembut dengan susu steamed hangat.",
      image: "/latte.jpg",
    },
    {
      name: "Cold Brew",
      price: "Rp33.000",
      desc: "Kopi diseduh dingin selama 12 jam, rasa halus dan menyegarkan.",
      image: "/coldbrew.jpeg",
    },
    {
      name: "Iced Latte",
      price: "Rp30.000",
      desc: "Versi dingin dari latte — segar dan creamy.",
      image: "/iced-latte.jpg",
    },
    {
      name: "Matcha Latte",
      price: "Rp33.000",
      desc: "Matcha Jepang dengan susu segar — calm and cozy.",
      image: "/matcha-latte.jpg",
    },
  ];

  return (
    <section className="py-20 bg-[#faf7f3]">
      <div className="max-w-6xl mx-auto text-center px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-semibold text-[#2f2417] mb-12 tracking-tight"
        >
          Menu Favorit Kami ☕
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/90 backdrop-blur-lg border border-[#e6e1da] rounded-3xl shadow-sm hover:shadow-2xl transition-all overflow-hidden hover:-translate-y-1"
            >

              {/* Gambar */}
              <div className="relative w-full h-64 overflow-hidden rounded-t-3xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00000080] to-transparent opacity-0 group-hover:opacity-60 transition-opacity"></div>
              </div>

              {/* Konten */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#2f2417] mb-2 uppercase tracking-wide">
                  {item.name}
                </h3>

                <p className="text-sm text-[#6f5d48] mb-4 leading-relaxed">
                  {item.desc}
                </p>

                <p className="font-bold text-[#7a5e3a] text-lg mb-6 tracking-wide">
                  {item.price}
                </p>

                {/* 🔥 Tombol Add to Cart */}
                <button
                  onClick={() => addToCart(item)}
                  className="w-full py-3 bg-[#2f2417] text-white rounded-xl hover:bg-[#1f1810] transition shadow-md"
                >
                  Add to Cart
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

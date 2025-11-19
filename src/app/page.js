"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { X, ShoppingCart, User } from "lucide-react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const [cart, setCart] = useState([]);

  // 📋 Daftar Menu
  const menuItems = [
    {
      id: 1,
      name: "Espresso",
      price: 25000,
      desc: "Kopi hitam murni dengan rasa kuat dan aroma tajam.",
      image: "/espresso.jpg",
    },
    {
      id: 2,
      name: "Cappuccino",
      price: 28000,
      desc: "Kombinasi espresso, susu hangat, dan foam lembut.",
      image: "/cappucino.jpeg",
    },
    {
      id: 3,
      name: "Latte",
      price: 30000,
      desc: "Espresso lembut dengan susu steamed hangat.",
      image: "/latte.jpg",
    },
    {
      id: 4,
      name: "Cold Brew",
      price: 33000,
      desc: "Kopi diseduh dingin selama 12 jam, rasa halus dan menyegarkan.",
      image: "/coldbrew.jpeg",
    },
    {
      id: 5,
      name: "Iced Latte",
      price: 30000,
      desc: "Versi dingin dari latte — segar dan creamy.",
      image: "/iced-latte.jpg",
    },
    {
      id: 6,
      name: "Matcha Latte",
      price: 33000,
      desc: "Matcha Jepang dengan susu segar — calm and cozy.",
      image: "/matcha-latte.jpg",
    },
  ];

  // ⭐ Tambahkan item ke cart
  const addToCart = (item) => {
    setCart((prev) => {
      const exist = prev.find((x) => x.id === item.id);

      if (exist) {
        return prev.map((x) =>
          x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });

    setShowCart(true);
  };

  // ⭐ Update quantity
  const updateQuantity = (itemId, change) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === itemId) {
            const newQty = item.quantity + change;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#faf7f3] to-[#f0eae4] overflow-hidden">
      {/* ✅ Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Tel-U-Coffee.jpg"
          alt="Coffee Background"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-[#faf7f3]/70 backdrop-blur-sm" />
      </div>

      {/* ✅ Navbar Modern & Estetik */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="absolute top-0 left-0 w-full flex justify-between items-center px-8 md:px-12 py-6 text-[#4b3b2a] uppercase tracking-wide text-sm font-medium z-20"
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Logo-Telu-Coffee-new.png"
            alt="Coffee Telkom Logo"
            width={36}
            height={36}
            priority
            className="object-contain"
          />
          <span className="font-semibold tracking-[0.2em] text-[#3b2e23]">
            Coffee Telkom
          </span>
        </Link>

        {/* ✅ Menu Navigation Lebih Estetik */}
        <div className="hidden md:flex gap-8">
          <Link
            href="/menu"
            className="relative group px-4 py-2 transition-all duration-300 hover:text-[#7a5e3a]"
          >
            Menu
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#7a5e3a] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link
            href="/about"
            className="relative group px-4 py-2 transition-all duration-300 hover:text-[#7a5e3a]"
          >
            About
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#7a5e3a] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link
            href="/contact"
            className="relative group px-4 py-2 transition-all duration-300 hover:text-[#7a5e3a]"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#7a5e3a] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
        </div>

        <div className="flex items-center gap-6 text-[#4b3b2a]">
          <button
            onClick={() => setShowLogin(true)}
            className="flex items-center gap-2 hover:text-[#7a5e3a] transition-all duration-300"
          >
            <User size={18} />
            <span className="hidden md:inline text-xs tracking-widest">Login</span>
          </button>

          <button
            onClick={() => setShowCart(true)}
            className="flex items-center gap-2 hover:text-[#7a5e3a] transition-all duration-300 relative"
          >
            <ShoppingCart size={18} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#3b2e23] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
            <span className="hidden md:inline text-xs tracking-widest">Cart</span>
          </button>
        </div>
      </motion.nav>

      {/* ✅ Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="z-10 max-w-3xl px-4"
      >
        <h1 className="text-4xl md:text-6xl font-light uppercase tracking-[0.25em] text-[#3b2e23] mb-3 leading-tight">
          Coffee Telkom
        </h1>
        <p className="text-sm md:text-base tracking-[0.2em] text-[#4b3b2a] uppercase mb-8">
          modern coffee • innovation • connection
        </p>
      </motion.div>

      {/* ✅ Quote */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="italic text-[#4b3b2a] text-base md:text-lg max-w-lg mx-auto mb-10 px-4"
      >
        “High-quality coffee, crafted with technology and tradition.”
      </motion.p>

      {/* ✅ Modern Text Strip (Ganti 3 Kotak) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 10 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="flex flex-wrap justify-center gap-8 text-sm text-[#4b3b2a] font-light tracking-wide max-w-2xl"
      >
        <span className="relative px-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-1 before:h-1 before:bg-[#4b3b2a] before:transform before:-translate-y-1/2 before:rounded-full">
          Brewed with technology
        </span>
        <span className="relative px-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-1 before:h-1 before:bg-[#4b3b2a] before:transform before:-translate-y-1/2 before:rounded-full">
          Served with care
        </span>
        <span className="relative px-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-1 before:h-1 before:bg-[#4b3b2a] before:transform before:-translate-y-1/2 before:rounded-full">
          Designed for you
        </span>
      </motion.div>

      {/* ✅ Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 text-xs text-[#4b3b2a]"
      >
        © 2025 Coffee Telkom — crafted with ❤️ & technology.
      </motion.footer>

      {/* 🔸 LOGIN MODAL */}
      <AnimatePresence>
        {showLogin && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-white rounded-3xl shadow-xl w-full max-w-md p-10 relative border border-[#e8dfd4]"
            >
              <button
                onClick={() => setShowLogin(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-gray-600"
              >
                <X size={22} />
              </button>

              <h2 className="text-2xl font-light text-[#3b2e23] mb-8 text-center tracking-wide">
                Log in to Coffee Telkom
              </h2>

              <div className="space-y-4">
                <div className="bg-[#f9f7f4] border border-[#e8dfd4] rounded-xl px-4 py-3 flex items-center gap-3">
                  <svg width="18" height="18" fill="none" className="stroke-[#6b5640]">
                    <path d="M4 4h16v12H4z" strokeWidth="1.5"/>
                    <path d="M4 4l8 6 8-6" strokeWidth="1.5"/>
                  </svg>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent text-sm outline-none text-[#3b2e23]"
                  />
                </div>

                <div className="bg-[#f9f7f4] border border-[#e8dfd4] rounded-xl px-4 py-3 flex items-center gap-3">
                  <svg width="18" height="18" fill="none" className="stroke-[#6b5640]">
                    <circle cx="9" cy="6" r="4" strokeWidth="1.5"/>
                    <path d="M2 16c0-4 4-7 8-7s8 3 8 7" strokeWidth="1.5"/>
                  </svg>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full bg-transparent text-sm outline-none text-[#3b2e23]"
                  />
                  <svg width="18" height="18" className="stroke-[#6b5640]">
                    <circle cx="9" cy="9" r="3" strokeWidth="1.5"/>
                    <path d="M2 9c2-4 6-6 7-6s5 2 7 6c-2 4-6 6-7 6s-5-2-7-6z" strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>

              <div className="text-right mt-3 mb-4">
                <button className="text-[#7a5e3a] text-sm hover:underline">
                  Forget password
                </button>
              </div>

              <button className="w-full bg-[#3b2e23] text-white py-3 rounded-xl text-sm hover:bg-[#2e241a] transition">
                Log in
              </button>

              <p className="text-center text-sm text-[#6d5c49] mt-4">
                Don’t have an account?{" "}
                <button className="text-[#7a5e3a] font-medium hover:underline">
                  Sign up
                </button>
              </p>

              <div className="flex items-center gap-4 my-6">
                <div className="h-px bg-[#d4c7b8] flex-1" />
                <span className="text-xs uppercase tracking-wide text-[#9b8b78]">or</span>
                <div className="h-px bg-[#d4c7b8] flex-1" />
              </div>

              <div className="space-y-3">
                <button className="w-full border border-[#ded4c7] bg-white py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-[#f3ece4] transition">
                  <Image src="/google.png" width={20} height={20} alt="Google" />
                  <span className="text-sm text-[#3b2e23]">Continue with Google</span>
                </button>

                <button className="w-full border border-[#ded4c7] bg-white py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-[#f3ece4] transition">
                  <Image src="/github.png" width={20} height={20} alt="Github" />
                  <span className="text-sm text-[#3b2e23]">Continue with Github</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔸 CART MODAL */}
      <AnimatePresence>
        {showCart && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-end z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white w-full sm:w-96 h-full shadow-2xl p-6 flex flex-col"
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              exit={{ x: 200 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-[#3b2e23]">Your Cart</h3>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X />
                </button>
              </div>

              {/* 🛒 Daftar Item di Keranjang */}
              <div className="flex-1 space-y-4 overflow-y-auto">
                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
                ) : (
                  <>
                    <div className="pb-3 mb-4">
                      <h4 className="text-sm font-medium text-[#3b2e23]">In Your Cart</h4>
                    </div>
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center border-b pb-3"
                      >
                        <div>
                          <h4 className="text-sm font-medium text-[#3b2e23]">{item.name}</h4>
                          <p className="text-xs text-gray-500">
                            Rp{item.price.toLocaleString()} × {item.quantity}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 flex items-center justify-center border rounded-md text-stone-600 hover:bg-stone-100"
                          >
                            -
                          </button>
                          <span className="text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 flex items-center justify-center border rounded-md text-stone-600 hover:bg-stone-100"
                          >
                            +
                          </button>
                          <p className="font-semibold ml-2 text-[#3b2e23]">
                            Rp{(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </>
                )}

                {/* 🍽️ Daftar Menu Lengkap */}
                <div className="mt-6 pt-4">
                  <h4 className="text-sm font-medium text-[#3b2e23] mb-3">Add More Items</h4>
                  <div className="space-y-3">
                    {menuItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-2 border rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={40}
                            height={40}
                            className="rounded-md object-cover"
                          />
                          <div>
                            <h5 className="text-sm font-medium text-[#3b2e23]">{item.name}</h5>
                            <p className="text-xs text-gray-500">Rp{item.price.toLocaleString()}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => addToCart(item)}
                          className="px-3 py-1 bg-[#3b2e23] text-white text-xs rounded-lg hover:bg-[#2e241a] transition"
                        >
                          Add
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 🧾 Total & Checkout */}
              <div className="mt-6 border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-[#3b2e23]">Total</span>
                  <span className="text-lg font-semibold text-[#3b2e23]">
                    Rp
                    {cart
                      .reduce((acc, item) => acc + item.price * item.quantity, 0)
                      .toLocaleString()}
                  </span>
                </div>

                <button className="w-full bg-[#3b2e23] text-white py-3 rounded-xl text-sm font-medium hover:bg-[#2e241a] transition">
                  Checkout
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
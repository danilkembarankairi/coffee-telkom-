"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function LoginModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 text-center relative"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X />
            </button>
            <h2 className="text-2xl font-semibold text-stone-800 mb-6">
              Login to Coffee Telkom
            </h2>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-stone-300" 
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-stone-300" 
              />
              <button 
                type="submit" 
                className="w-full bg-stone-800 text-white py-2 rounded-xl hover:bg-stone-700 transition"
              >
                Login
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              Don’t have an account? <a href="#" className="underline">Sign up</a>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

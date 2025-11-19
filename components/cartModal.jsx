"use client";
import { motion } from "framer-motion";

export default function CartModal({ cartItems, setCartItems, onClose }) {
  const updateQty = (name, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.name === name
            ? { ...item, qty: Math.max(1, item.qty + delta) }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.35 }}
      className="fixed top-0 right-0 h-full w-[420px] bg-white shadow-xl z-50 p-6 overflow-y-auto"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-[#2f2417]">Your Cart</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 text-2xl"
        >
          ×
        </button>
      </div>

      {/* Cart Items */}
      <div className="space-y-6">
        {cartItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-[#faf7f3] border border-[#e6e1da] rounded-xl p-4 shadow-sm"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-lg object-cover"
            />

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-[#2f2417]">
                {item.name}
              </h3>
              <p className="text-sm text-[#6f5d48]">
                Rp{item.price.toLocaleString()}
              </p>

              {/* Quantity */}
              <div className="flex items-center mt-2">
                <button
                  className="px-3 py-1 bg-[#e8e2db] rounded-lg hover:bg-[#d6cec4]"
                  onClick={() => updateQty(item.name, -1)}
                >
                  −
                </button>
                <span className="px-4">{item.qty}</span>
                <button
                  className="px-3 py-1 bg-[#e8e2db] rounded-lg hover:bg-[#d6cec4]"
                  onClick={() => updateQty(item.name, 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-10 border-t pt-6">
        <div className="flex justify-between text-lg font-semibold text-[#2f2417]">
          <span>Total:</span>
          <span>Rp{total.toLocaleString()}</span>
        </div>

        <button className="w-full bg-[#2f2417] text-white py-3 rounded-xl mt-6 hover:bg-[#1f1810] transition">
          Checkout
        </button>
      </div>
    </motion.div>
  );
}

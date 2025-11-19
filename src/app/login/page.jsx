"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-[#faf7f3] text-[#3b2e23] px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-10 w-full max-w-md text-center border border-[#e6e0d8]"
      >
        <Image
          src="/Logo-Telu-Coffee-new.png"
          alt="Coffee Telkom Logo"
          width={50}
          height={50}
          className="mx-auto mb-3"
        />
        <h2 className="text-2xl font-semibold mb-2 tracking-widest uppercase">
          Welcome Back
        </h2>
        <p className="text-sm text-[#7a6a55] mb-8">
          Login to continue enjoying Coffee Telkom
        </p>

        {/* Email & Password Login */}
        <form className="flex flex-col gap-4 mb-6">
          <input
            type="email"
            placeholder="Email"
            className="border border-[#d2c4b2] bg-[#fdfaf6] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b89b77]"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-[#d2c4b2] bg-[#fdfaf6] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b89b77]"
          />
          <button
            type="submit"
            className="bg-[#4b3b2a] text-white py-3 rounded-lg hover:bg-[#7a5e3a] transition"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-[#d4c6b8]" />
          <span className="px-3 text-xs uppercase text-[#8a7966]">or</span>
          <div className="flex-grow border-t border-[#d4c6b8]" />
        </div>

        {/* OAuth Buttons */}
        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-3 border border-[#d2c4b2] py-2.5 rounded-lg hover:bg-[#f2ede7] transition">
            <Image src="/google.svg" alt="Google" width={18} height={18} />
            <span>Continue with Google</span>
          </button>

          <button className="flex items-center justify-center gap-3 border border-[#d2c4b2] py-2.5 rounded-lg hover:bg-[#f2ede7] transition">
            <Image src="/apple.svg" alt="Apple" width={18} height={18} />
            <span>Continue with Apple</span>
          </button>
        </div>

        <p className="mt-6 text-xs text-[#8a7966]">
          Don’t have an account?{" "}
          <Link href="/signup" className="underline hover:text-[#4b3b2a]">
            Sign up
          </Link>
        </p>
      </motion.div>
    </main>
  );
}

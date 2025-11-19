"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold text-amber-500">Coffee Telkom</span>.  
          All rights reserved.
        </p>
        <p className="text-xs mt-2 text-gray-500">
          Dibuat dengan ☕ oleh tim Coffee Telkom.
        </p>
      </div>
    </footer>
  );
}

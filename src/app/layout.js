import "./globals.css";

export const metadata = {
  title: "Coffee Telkom | Modern Coffee Experience",
  description: "Kopi Telkom — modern, profesional, dan penuh cita rasa lokal premium.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-zinc-950 text-zinc-100 font-sans">
        {children}
      </body>
    </html>
  );
}

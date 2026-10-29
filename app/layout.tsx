import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "PaharShokti — CHT Community Microgrid Prototype",
  description:
    "AI-driven solar microgrid prioritization prototype for off-grid Chittagong Hill Tracts villages in Bangladesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="min-h-screen bg-canvas font-sans text-slate-900 selection:bg-solar-300 selection:text-forest-950">
        {children}
      </body>
    </html>
  );
}

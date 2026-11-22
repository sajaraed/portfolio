import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saja Alwahedi | Front-End Developer & UI Enthusiast",
  description:
    "I build responsive user interfaces, interactive web applications, and modern digital experiences using React.js, Next.js, Tailwind CSS, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#090a0f] text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
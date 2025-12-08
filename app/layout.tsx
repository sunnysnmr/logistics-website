import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "oneGlobe Console — Logistics",
  description: "Elegant logistics solutions — oneGlobe Console",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <main className="min-h-[calc(100vh-72px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

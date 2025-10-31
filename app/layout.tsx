import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "onGlobe Console — Logistics",
  description: "Elegant logistics solutions — onGlobe Console",
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
        <footer className="site-footer mt-12">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="footer-deco mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 relative">
                  <img src="/ogl_logo.png" alt="onGlobe" style={{width:40,height:40}} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">onGlobe Console</div>
                  <div className="text-sm text-[var(--muted)] mt-1">Global logistics, smarter decisions for Malaysia.</div>
                </div>
              </div>

              <div className="flex items-start justify-center">
                <nav className="flex flex-col gap-2 text-sm">
                  <div className="text-slate-900 font-semibold mb-1">Quick Links</div>
                  <a href="/" className="text-[var(--muted)] hover:text-slate-900">Home</a>
                  <a href="/about" className="text-[var(--muted)] hover:text-slate-900">About</a>
                  <a href="/services" className="text-[var(--muted)] hover:text-slate-900">Services</a>
                  <a href="/contact" className="text-[var(--muted)] hover:text-slate-900">Contact</a>
                </nav>
              </div>

              <div className="flex items-start justify-end flex-col text-sm">
                <div className="text-slate-900 font-semibold">Contact</div>
                <div className="mt-2 text-slate-900">support@onglobe.my</div>
                <div className="mt-1 text-slate-900">+60 3-1234 5678</div>
                <div className="mt-3 text-[var(--muted)]">© {new Date().getFullYear()} onGlobe Console Malaysia</div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

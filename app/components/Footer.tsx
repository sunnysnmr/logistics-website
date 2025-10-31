import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t-4 border-[#E63946] bg-[#F8FAFC] text-[#0F172A]">
      <div className="site-container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative rounded-md overflow-hidden bg-white ring-1 ring-white/80">
                <Image src="/ogl_logo.png" alt="onGlobe logo" fill sizes="48px" className="object-contain p-2" />
              </div>
              <div>
                <div className="text-lg font-semibold">onGlobe Console</div>
                <div className="text-xs text-slate-500">Logistics & Supply Chain</div>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm text-slate-700">
              Global logistics, smarter decisions for Malaysia. We connect sea, air and land networks
              to provide integrated logistics solutions, real-time insights and trusted operations
              across the supply chain.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/" className="hover:underline hover:underline-offset-4 hover:decoration-[#E63946] transition">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline hover:underline-offset-4 hover:decoration-[#E63946] transition">About</Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline hover:underline-offset-4 hover:decoration-[#E63946] transition">Services</Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:underline hover:underline-offset-4 hover:decoration-[#E63946] transition">Solutions</Link>
              </li>
              <li>
                <Link href="/industries" className="hover:underline hover:underline-offset-4 hover:decoration-[#E63946] transition">Industries</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline hover:underline-offset-4 hover:decoration-[#E63946] transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Contact</h3>
            <div className="text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0" />
                </svg>
                <a href="mailto:support@onglobe.my" className="hover:underline">support@onglobe.my</a>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <svg className="h-4 w-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l2 5-2 5H3" />
                </svg>
                <a href="tel:+60312345678" className="hover:underline">+60 3-1234 5678</a>
              </div>

              <address className="mt-3 not-italic text-sm text-slate-600">
                onGlobe Console Malaysia HQ
                <br />
                12 Supply Chain Ave, Kuala Lumpur, Malaysia
              </address>

              <div className="mt-4 flex items-center gap-3">
                <a href="https://www.linkedin.com" aria-label="LinkedIn" className="text-slate-700 hover:text-[#0F172A] transition">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6 1.1 6 0 4.88 0 3.5 0 2.12 1.1 1 2.48 1 3.86 1 4.98 2.12 4.98 3.5zM.22 8.98h4.52V24H.22zM8.98 8.98H13v2.06h.06c.55-1 1.9-2.06 3.92-2.06 4.19 0 4.96 2.76 4.96 6.36V24h-4.5v-7.16c0-1.71 0-3.92-2.38-3.92-2.38 0-2.74 1.86-2.74 3.78V24H8.98z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com" aria-label="Facebook" className="text-slate-700 hover:text-[#0F172A] transition">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.62.77-1.62 1.56v1.86h2.77l-.44 2.9h-2.33v7.03C18.34 21.19 22 17.06 22 12.07z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com" aria-label="Instagram" className="text-slate-700 hover:text-[#0F172A] transition">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5A4.5 4.5 0 1016.5 13 4.5 4.5 0 0012 8.5zm6.5-3a1.5 1.5 0 11-1.5 1.5A1.5 1.5 0 0118.5 5.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-[#F8FAFC]">
        <div className="site-container py-4 flex flex-col items-center justify-between gap-3 md:flex-row">
          <p className="text-xs text-slate-600">© 2025 onGlobe Console Malaysia. All Rights Reserved.</p>
          <div className="text-xs text-slate-500">Designed for reliable, enterprise-grade logistics.</div>
        </div>
      </div>
    </footer>
  );
}

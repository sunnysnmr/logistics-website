import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="site-container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white/10 ring-2 ring-white/20">
                <Image
                  src="/ogl_logo.png"
                  alt="onGlobe Console"
                  fill
                  sizes="48px"
                  className="object-contain p-2"
                />
              </div>
              <div>
                <div className="text-lg font-bold">onGlobe Console</div>
                <div className="text-xs text-white/70">Logistics & Supply Chain</div>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Your trusted partner for global logistics solutions. Connecting businesses across Malaysia and beyond with reliable, efficient, and innovative supply chain services.
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-4 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600"></span>
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Track Shipment", href: "/tracking" },
                { label: "Get a Quote", href: "/quote" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold mb-4 relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600"></span>
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Air Freight", href: "/air-freight" },
                { label: "Sea Freight", href: "/sea-freight" },
                { label: "Project Cargo", href: "/project-cargo" },
                { label: "Warehousing", href: "/warehousing" },
                { label: "Customs Clearance", href: "/customs-clearance" },
                { label: "Supply Chain", href: "/supply-chain" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold mb-4 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+60312345678"
                  className="flex items-start gap-3 text-sm text-white/80 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-red-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60 mb-0.5">Phone</div>
                    <div className="font-medium">+60 3-1234 5678</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@onglobe.my"
                  className="flex items-start gap-3 text-sm text-white/80 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-red-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60 mb-0.5">Email</div>
                    <div className="font-medium">support@onglobe.my</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/80">
                  <div className="w-9 h-9 rounded-lg bg-red-600/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60 mb-0.5">Address</div>
                    <div className="font-medium leading-relaxed">
                      onGlobe Console Malaysia HQ<br />
                      189, Jalan Ampang<br />
                      Kuala Lumpur, Malaysia
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="site-container mx-auto px-4 py-4 md:py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
            <div className="text-center md:text-left">
              <p> {currentYear} onGlobe Console. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

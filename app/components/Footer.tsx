import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const linkStyle = "text-sm text-white/80 hover:text-red-400 transition-colors duration-200 flex items-center gap-2 group";
  const iconStyle = "w-4 h-4 text-red-500 opacity-80 group-hover:opacity-100 transition-opacity";
  const headingStyle = "text-lg font-bold mb-4 relative tracking-wide";

  return (
    <footer className="bg-slate-900 text-white pt-16">
      <div className="site-container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

          {/* 1. Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-32 h-28 rounded-md overflow-hidden bg-red-600/10 flex-shrink-0">
                <Image
                  src="/ogl_logo.png"
                  alt="OneGlobe Console"
                  fill
                  sizes="128px"
                  className="object-contain p-1.5"
                />
              </div>
              <div>
                <div className="text-xl font-extrabold tracking-wide">OneGlobe Console</div>
                <div className="text-xs text-red-400/80">Logistics & Supply Chain</div>
              </div>
            </div>

            <p className="text-sm text-white/70 leading-relaxed">
              Your trusted partner for global logistics solutions. Connecting businesses across Malaysia
              and beyond with reliable, efficient, and innovative supply chain services.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a href="https://facebook.com" target="_blank" className="text-white/70 hover:text-red-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" className="text-white/70 hover:text-red-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" className="text-white/70 hover:text-red-500 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" className="text-white/70 hover:text-red-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className={headingStyle}>Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Get a Quote", href: "/quote" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkStyle}>
                    <ArrowRight className={iconStyle} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Services */}
          <div>
            <h3 className={headingStyle}>Our Services</h3>
            <ul className="space-y-3">
              {[
                { label: "Air Freight", href: "/air-freight" },
                { label: "Sea Freight", href: "/sea-freight" },
                { label: "Project Cargo", href: "/project-cargo" },
                { label: "Warehousing", href: "/warehousing" },
                { label: "Customs Clearance", href: "/customs-clearance" },
                { label: "Supply Chain", href: "/supply-chain" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkStyle}>
                    <ArrowRight className={iconStyle} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact */}
          <div>
            <h3 className={headingStyle}>Contact Us</h3>
            <ul className="space-y-6">
              <li>
                <a href="tel:+60312345678" className="flex items-start gap-4 text-white/80 hover:text-white">
                  <Phone className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <div className="text-xs text-white/60">Phone</div>
                    <div className="font-medium text-sm">+60 7 2831000</div>
                  </div>
                </a>
              </li>

              <li>
                <a href="mailto:support@oneglobe.my" className="flex items-start gap-4 text-white/80 hover:text-white">
                  <Mail className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <div className="text-xs text-white/60">Email</div>
                    <div className="font-medium text-sm">info@oneglobemy.com</div>
                  </div>
                </a>
              </li>

              <li>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <div className="text-xs text-white/60">Address</div>
                    <div className="font-medium leading-relaxed text-sm">
                     OneGlobe Consolidators (M) Sdn. Bhd.<br />
                      No 2 Jalan Kuning, Taman Pelangi<br />
                      Level 16 Menara Pelangi Johor 80400 
                      
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ★ Updated Bottom Bar with Singapore + India Links */}
      <div className="border-t border-white/10 mt-12 bg-slate-800/50">
        <div className="site-container mx-auto px-4 max-w-7xl py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">

            <div className="text-center md:text-left">
              <p>&copy; {currentYear} OneGlobe Console. All rights reserved.</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">

              {/* ⭐ New Links Added */}
              <a
                href="https://oneglobeindia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 transition-colors"
              >
                Visit India Website
              </a>

              <a
                href="https://www.oneglobeconsole.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 transition-colors"
              >
                Visit Singapore Website
              </a>

              <Link href="/privacy-policy" className="hover:text-red-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-red-400 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/sitemap" className="hover:text-red-400 transition-colors">
                Sitemap
              </Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

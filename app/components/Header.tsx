"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function loadGoogleTranslate() {
  if (typeof window === "undefined") return;
  if (document.getElementById("google-translate-script")) return;
  const script = document.createElement("script");
  script.id = "google-translate-script";
  script.type = "text/javascript";
  script.async = true;
  script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.body.appendChild(script);
  (window as any).googleTranslateElementInit = function () {
    new (window as any).google.translate.TranslateElement({
      pageLanguage: "en",
      includedLanguages: "en,ms",
      autoDisplay: false,
      layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
    }, "google_translate_element");
  };
}

import { ChevronDown, ChevronRight, Menu, X, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    loadGoogleTranslate();
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:block bg-gradient-to-r from-slate-900 to-primary-900 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="tel:+60312345678" className="flex items-center gap-1.5 hover:text-red-400 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span>+60 7 2831000</span>
              </a>
              <a href="mailto:info@oneglobemy.com" className="flex items-center gap-1.5 hover:text-red-400 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span>info@oneglobemy.com</span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Menara Pelangi, Johor 80400</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? "shadow-lg" : "shadow-md"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0 min-w-0">
              <div className="relative w-24 h-20 sm:w-28 sm:h-24 md:w-32 md:h-28 overflow-hidden">
                <Image
                  src="/ogl_logo.png"
                  alt="OneGlobe Console logo"
                  fill
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden xs:block min-w-0">
                <div className="text-sm sm:text-base md:text-lg font-bold text-slate-900 leading-tight truncate">
                  OneGlobe Console
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 leading-tight truncate">
                  Logistics & Supply Chain
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2 flex-shrink-0">
              <Link href="/" className="nav-link px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium whitespace-nowrap">
                Home
              </Link>

              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="nav-link px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium flex items-center gap-1 whitespace-nowrap">
                  Services
                  <ChevronDown className="w-3 h-3 transition-transform text-slate-700" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2 w-56 z-50">
                    <div className="bg-white rounded-lg shadow-xl border border-slate-100 py-2 animate-fade-in">
                      <Link href="/air-freight" className="dropdown-link text-sm">Air Freight</Link>
                      <Link href="/sea-freight" className="dropdown-link text-sm">Sea Freight</Link>
                      <Link href="/project-cargo" className="dropdown-link text-sm">Project Cargo</Link>
                      <Link href="/warehousing" className="dropdown-link text-sm">Warehousing</Link>
                      <Link href="/customs-clearance" className="dropdown-link text-sm">Customs Clearance</Link>
                      <Link href="/supply-chain" className="dropdown-link text-sm">Supply Chain Solutions</Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/solutions" className="nav-link px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium whitespace-nowrap">
                Solutions
              </Link>

              {/* Industries Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() => setIndustriesOpen(false)}
              >
                <button className="nav-link px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium flex items-center gap-1 whitespace-nowrap">
                  Industries
                  <ChevronDown className="w-3 h-3 transition-transform text-slate-700" />
                </button>
                {industriesOpen && (
                  <div className="absolute top-full left-0 pt-2 w-56 z-50">
                    <div className="bg-white rounded-lg shadow-xl border border-slate-100 py-2 animate-fade-in">
                      <Link href="/industries/manufacturing" className="dropdown-link text-sm">Manufacturing</Link>
                      <Link href="/industries/retail" className="dropdown-link text-sm">Retail & E-commerce</Link>
                      <Link href="/industries/automotive" className="dropdown-link text-sm">Automotive</Link>
                      <Link href="/industries/healthcare" className="dropdown-link text-sm">Healthcare</Link>
                      <Link href="/industries/technology" className="dropdown-link text-sm">Technology</Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about" className="nav-link px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium whitespace-nowrap">
                About Us
              </Link>

              <Link href="/contact" className="nav-link px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium whitespace-nowrap">
                Contact
              </Link>

              {/* Country Links - Desktop */}
              <div className="flex items-center gap-1 border-l border-slate-200 pl-2 ml-1">
                <a 
                  href="https://oneglobeindia.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-link px-2 xl:px-2.5 py-2 text-xs xl:text-sm font-medium flex items-center gap-1 whitespace-nowrap hover:text-green-600 transition-colors"
                >
                  India
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a 
                  href="https://www.oneglobeconsole.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-link px-2 xl:px-2.5 py-2 text-xs xl:text-sm font-medium flex items-center gap-1 whitespace-nowrap hover:text-blue-600 transition-colors"
                >
                  Singapore
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Google Translate element container */}
              <div id="google_translate_element" className="hidden sm:flex items-center"></div>

              {/* Get Quote Button */}
              <Link
                href="/quote"
                className="hidden sm:inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-bold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
              >
                Get Quote
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 text-slate-700 hover:text-primary-600 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden fixed inset-0 z-40 bg-white transition-all duration-300 ${
            mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}>
            <div className={`w-full h-screen pt-4 transform transition-transform duration-200 ${
              mobileMenuOpen ? "translate-y-0" : "-translate-y-1"
            }`}>
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 mb-4 pb-4 border-b border-slate-200">
                <div className="relative w-20 h-16 sm:w-24 sm:h-20">
                  <Image
                    src="/ogl_logo.png"
                    alt="OneGlobe Console logo"
                    fill
                    sizes="(max-width: 640px) 80px, 96px"
                    className="object-contain"
                    priority
                  />
                </div>

                <div className="flex items-center gap-3">
                  {/* Google Translate in mobile menu */}
                  <div id="google_translate_element_mobile" className="flex items-center"></div>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
                  </button>
                </div>
              </div>
              
              <div className="w-full max-w-md mx-auto px-4 sm:px-6 py-4 space-y-3">
                <Link 
                  href="/" 
                  className="block text-center text-lg sm:text-xl font-medium text-slate-900 hover:text-primary-600 transition-colors py-2" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              
                {/* Mobile Services */}
                <div className="w-full text-center">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="inline-flex items-center gap-2 text-lg sm:text-xl font-medium text-slate-900 hover:text-primary-600 transition-colors py-2"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${
                    servicesOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}>
                    <div className="space-y-3">
                      <Link href="/air-freight" className="block text-base sm:text-lg text-slate-700 hover:text-primary-600 transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>
                        Air Freight
                      </Link>
                      <Link href="/sea-freight" className="block text-base sm:text-lg text-slate-700 hover:text-primary-600 transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>
                        Sea Freight
                      </Link>
                      <Link href="/project-cargo" className="block text-base sm:text-lg text-slate-700 hover:text-primary-600 transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>
                        Project Cargo
                      </Link>
                      <Link href="/warehousing" className="block text-base sm:text-lg text-slate-700 hover:text-primary-600 transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>
                        Warehousing
                      </Link>
                      <Link href="/customs-clearance" className="block text-base sm:text-lg text-slate-700 hover:text-primary-600 transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>
                        Customs Clearance
                      </Link>
                      <Link href="/supply-chain" className="block text-base sm:text-lg text-slate-700 hover:text-primary-600 transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>
                        Supply Chain Solutions
                      </Link>
                    </div>
                  </div>
                </div>

                <Link 
                  href="/solutions" 
                  className="block text-center text-lg sm:text-xl font-medium text-slate-900 hover:text-primary-600 transition-colors py-2" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solutions
                </Link>

                {/* Mobile Industries */}
                <div className="w-full text-center">
                  <button
                    onClick={() => setIndustriesOpen(!industriesOpen)}
                    className="inline-flex items-center gap-2 text-lg sm:text-xl font-medium text-slate-900 hover:text-primary-600 transition-colors py-2"
                  >
                    <span>Industries</span>
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${
                    industriesOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}>
                    <div className="space-y-3">
                      <Link href="/industries/manufacturing" className="block text-base sm:text-lg text-slate-700 hover:text-primary-600 transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>
                        Manufacturing
                      </Link>
                      <Link href="/industries/retail" className="block text-base sm:text-lg text-slate-700 hover:text-primary-600 transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>
                        Retail & E-commerce
                      </Link>
                      <Link href="/industries/automotive" className="block text-base sm:text-lg text-slate-700 hover:text-primary-600 transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>
                        Automotive
                      </Link>
                      <Link href="/industries/healthcare" className="block text-base sm:text-lg text-slate-700 hover:text-primary-600 transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>
                        Healthcare
                      </Link>
                      <Link href="/industries/technology" className="block text-base sm:text-lg text-slate-700 hover:text-primary-600 transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>
                        Technology
                      </Link>
                    </div>
                  </div>
                </div>

                <Link 
                  href="/about" 
                  className="block text-center text-lg sm:text-xl font-medium text-slate-900 hover:text-primary-600 transition-colors py-2" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>

                <Link 
                  href="/contact" 
                  className="block text-center text-lg sm:text-xl font-medium text-slate-900 hover:text-primary-600 transition-colors py-2" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                {/* Country Links - Mobile */}
                <div className="pt-4 border-t border-slate-200 mt-4">
                  <div className="text-sm sm:text-base font-medium text-slate-500 mb-3">Other Regions</div>
                  <div className="flex flex-col gap-3">
                    <a 
                      href="https://oneglobeindia.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-base sm:text-lg font-medium text-green-600 hover:text-green-700 transition-colors py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      India
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://www.oneglobeconsole.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-base sm:text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Singapore
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Mobile Quote Button */}
                <Link
                  href="/quote"
                  className="inline-block px-6 sm:px-8 py-3 sm:py-4 mt-6 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover:from-red-700 hover:to-red-800 transition-all shadow-md hover:shadow-lg mx-auto"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <style jsx global>{`
        #google_translate_element,
        #google_translate_element_mobile { 
          display: flex !important; 
          align-items: center !important; 
          gap: 0.4rem; 
        }
        #google_translate_element .goog-te-gadget-simple, 
        #google_translate_element .goog-te-gadget,
        #google_translate_element_mobile .goog-te-gadget-simple, 
        #google_translate_element_mobile .goog-te-gadget { 
          display: flex !important; 
          align-items: center !important; 
          gap: 0.35rem; 
          font-size: 11px !important;
        }
        #google_translate_element img,
        #google_translate_element_mobile img { 
          height: 16px !important; 
          width: auto !important; 
          display: inline-block !important; 
        }
        #google_translate_element .goog-te-combo,
        #google_translate_element_mobile .goog-te-combo { 
          margin-left: 0.15rem !important;
          font-size: 11px !important;
        }
        
        .nav-link {
          color: #374151;
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: #dc2626;
        }
        
        .dropdown-link {
          display: block;
          padding: 8px 16px;
          color: #374151;
          transition: all 0.2s ease;
        }
        .dropdown-link:hover {
          background-color: #f8fafc;
          color: #dc2626;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Ensure proper mobile viewport */
        @media (max-width: 640px) {
          .max-w-7xl {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}
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

function triggerGoogleTranslate(lang: "en" | "ms") {
  if (typeof window === "undefined") return;
  // Try to trigger after Google Translate loads
  const trySwitch = () => {
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
      return true;
    }
    return false;
  };
  // If not ready, retry a few times
  if (!trySwitch()) {
    let attempts = 0;
    const interval = setInterval(() => {
      if (trySwitch() || ++attempts > 10) {
        clearInterval(interval);
      }
    }, 200);
  }
}

import { ChevronDown, ChevronRight, Menu, X, Phone, Mail, MapPin } from "lucide-react";

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
        <div className="site-container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="tel:+60312345678" className="flex items-center gap-1.5 hover:text-red-400 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span>+60 3-1234 5678</span>
              </a>
              <a href="mailto:support@onglobe.my" className="flex items-center gap-1.5 hover:text-red-400 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span>support@onglobe.my</span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Kuala Lumpur, Malaysia</span>
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
        <nav className="site-container mx-auto px-3 md:px-4">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 group flex-shrink-0">
              <div className="relative w-32 h-28 md:w-36 md:h-28 overflow-hidden">
                <Image
                  src="/ogl_logo.png"
                  alt="OneGlobe Console logo"
                  fill
                  sizes="(max-width: 768px) 128px, 144px"
                  className="object-contain p-1"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-base md:text-lg font-bold text-slate-900 leading-tight">
                  OneGlobe Console
                </div>
                <div className="text-[10px] md:text-xs text-slate-500 leading-tight">
                  Logistics & Supply Chain
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link href="/" className="nav-link px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium whitespace-nowrap">
                Home
              </Link>

              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="nav-link px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium flex items-center gap-1.5 whitespace-nowrap">
                  Services
                  <ChevronDown className="w-4 h-4 ml-1 transition-transform text-slate-700" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2 w-60 z-50">
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

              <Link href="/solutions" className="nav-link px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium whitespace-nowrap">
                Solutions
              </Link>

              {/* Industries Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() => setIndustriesOpen(false)}
              >
                <button className="nav-link px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium flex items-center gap-1.5 whitespace-nowrap">
                  Industries
                  <ChevronDown className="w-4 h-4 ml-1 transition-transform text-slate-700" />
                </button>
                {industriesOpen && (
                  <div className="absolute top-full left-0 pt-2 w-60 z-50">
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

              <Link href="/about" className="nav-link px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium whitespace-nowrap">
                About Us
              </Link>

              <Link href="/contact" className="nav-link px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium whitespace-nowrap">
                Contact
              </Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-1.5 md:gap-2">
              {/* Language Selector - Hidden on small screens */}
              {/* <div className="hidden md:flex items-center gap-0.5 border border-slate-200 rounded-lg px-1.5 py-1">
                <button className="text-[10px] xl:text-xs font-medium text-primary-600 hover:text-primary-700 px-1.5 py-0.5 rounded hover:bg-primary-50 transition-colors" onClick={() => triggerGoogleTranslate("en")}>
                  EN
                </button>
                <span className="text-slate-300 text-xs">|</span>
                <button className="text-[10px] xl:text-xs font-medium text-slate-600 hover:text-primary-600 px-1.5 py-0.5 rounded hover:bg-slate-50 transition-colors" onClick={() => triggerGoogleTranslate("ms")}>
                  MS
                </button>
              </div> */}
                {/* Google Translate element container (visible for widget) */}
                <div id="google_translate_element" className="flex items-center"></div>

                {/* Small global styles to force Google Translate widget to lay out horizontally
                    We keep this minimal and scoped to the widget ID so no other styles change. */}
                <style jsx global>{`
                  #google_translate_element { display: flex !important; align-items: center !important; gap: 0.4rem; }
                  #google_translate_element .goog-te-gadget-simple, 
                  #google_translate_element .goog-te-gadget { display: flex !important; align-items: center !important; gap: 0.35rem; }
                  #google_translate_element img { height: 18px !important; width: auto !important; display: inline-block !important; }
                  #google_translate_element .goog-te-combo { margin-left: 0.15rem !important; }
                `}</style>

              {/* Get Quote Button */}
              <Link
                href="/quote"
                className="hidden sm:inline-flex items-center justify-center px-3 md:px-4 py-1.5 md:py-2 text-[11px] md:text-xs font-bold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 whitespace-nowrap"
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
                  <X className="w-7 h-7" />
                ) : (
                  <Menu className="w-7 h-7" />
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
              <div className="flex items-center justify-between px-4 mb-4 pb-4 border-b border-slate-200">
                <div className="relative w-24 h-20">
                  <Image
                    src="/ogl_logo.png"
                    alt="OneGlobe Console logo"
                    fill
                    sizes="96px"
                    className="object-contain"
                    priority
                  />
                </div>

                <div className="flex items-center gap-3">
                  {/* Language selector (visible in mobile menu) */}
                  <div className="flex items-center gap-0.5 border border-slate-200 rounded-lg px-1.5 py-1 text-xs bg-white">
                    <button className="text-[10px] font-medium text-primary-600 px-1.5 py-0.5 rounded">EN</button>
                    <span className="text-slate-300 text-xs">|</span>
                    <button className="text-[10px] font-medium text-slate-600 px-1.5 py-0.5 rounded">MS</button>
                  </div>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2"
                  >
                    <X className="w-6 h-6 text-slate-600" />
                  </button>
                </div>
              </div>
              <div className="w-full max-w-md mx-auto px-4 py-4 space-y-2 text-center">
                <Link 
                  href="/" 
                  className="block text-center text-lg font-medium text-slate-900 hover:text-primary-600 transition-colors" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              
                {/* Mobile Services */}
                <div className="w-full text-center">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="inline-flex items-center gap-2 text-lg font-medium text-slate-900 hover:text-primary-600 transition-colors"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${
                    servicesOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}>
                    <div className="space-y-3">
                      <Link href="/air-freight" className="block text-base text-slate-700 hover:text-primary-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        Air Freight
                      </Link>
                      <Link href="/sea-freight" className="block text-base text-slate-700 hover:text-primary-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        Sea Freight
                      </Link>
                      <Link href="/project-cargo" className="block text-base text-slate-700 hover:text-primary-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        Project Cargo
                      </Link>
                      <Link href="/warehousing" className="block text-base text-slate-700 hover:text-primary-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        Warehousing
                      </Link>
                      <Link href="/customs-clearance" className="block text-base text-slate-700 hover:text-primary-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        Customs Clearance
                      </Link>
                      <Link href="/supply-chain" className="block text-base text-slate-700 hover:text-primary-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        Supply Chain Solutions
                      </Link>
                    </div>
                  </div>
                </div>

                <Link 
                  href="/solutions" 
                  className="block text-center text-lg font-medium text-slate-900 hover:text-primary-600 transition-colors" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solutions
                </Link>

                {/* Mobile Industries */}
                <div className="w-full text-center">
                  <button
                    onClick={() => setIndustriesOpen(!industriesOpen)}
                    className="inline-flex items-center gap-2 text-lg font-medium text-slate-900 hover:text-primary-600 transition-colors"
                  >
                    <span>Industries</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${
                    industriesOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}>
                    <div className="space-y-3">
                      <Link href="/industries/manufacturing" className="block text-base text-slate-700 hover:text-primary-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        Manufacturing
                      </Link>
                      <Link href="/industries/retail" className="block text-base text-slate-700 hover:text-primary-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        Retail & E-commerce
                      </Link>
                      <Link href="/industries/automotive" className="block text-base text-slate-700 hover:text-primary-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        Automotive
                      </Link>
                      <Link href="/industries/healthcare" className="block text-base text-slate-700 hover:text-primary-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        Healthcare
                      </Link>
                      <Link href="/industries/technology" className="block text-base text-slate-700 hover:text-primary-600 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        Technology
                      </Link>
                    </div>
                  </div>
                </div>

                <Link 
                  href="/about" 
                  className="block text-center text-lg font-medium text-slate-900 hover:text-primary-600 transition-colors" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>

                <Link 
                  href="/contact" 
                  className="block text-center text-lg font-medium text-slate-900 hover:text-primary-600 transition-colors" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                {/* Mobile Quote Button */}
                <Link
                  href="/quote"
                  className="inline-block px-8 py-3 mt-6 text-base font-bold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover:from-red-700 hover:to-red-800 active:from-red-800 active:to-red-900 transition-all shadow-md hover:shadow-lg mx-auto"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

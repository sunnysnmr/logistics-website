"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, Menu, X, Phone, Mail, MapPin } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
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
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5 md:gap-2 group flex-shrink-0">
              <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-lg overflow-hidden bg-white ring-2 ring-primary-100 group-hover:ring-primary-300 transition-all">
                <Image
                  src="/ogl_logo.png"
                  alt="onGlobe Console"
                  fill
                  sizes="48px"
                  className="object-contain p-1.5"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-sm md:text-base font-bold text-slate-900 leading-tight">
                  onGlobe Console
                </div>
                <div className="text-[9px] md:text-[10px] text-slate-500 leading-tight">
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
                  <ChevronDown className="w-4 h-4 transition-transform text-slate-700" />
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
                  <ChevronDown className="w-4 h-4 transition-transform text-slate-700" />
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
              <div className="hidden md:flex items-center gap-0.5 border border-slate-200 rounded-lg px-1.5 py-1">
                <button className="text-[10px] xl:text-xs font-medium text-primary-600 hover:text-primary-700 px-1.5 py-0.5 rounded hover:bg-primary-50 transition-colors">
                  EN
                </button>
                <span className="text-slate-300 text-xs">|</span>
                <button className="text-[10px] xl:text-xs font-medium text-slate-600 hover:text-primary-600 px-1.5 py-0.5 rounded hover:bg-slate-50 transition-colors">
                  MS
                </button>
              </div>

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
                className="lg:hidden p-2 text-slate-700 hover:text-primary-600 hover:bg-slate-50 rounded-lg transition-colors"
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
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-slate-100 animate-fade-in">
              <div className="space-y-1">
                <Link href="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
                
                {/* Mobile Services */}
                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="mobile-nav-link w-full flex items-center justify-between"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      <Link href="/air-freight" className="mobile-nav-link text-sm" onClick={() => setMobileMenuOpen(false)}>
                        Air Freight
                      </Link>
                      <Link href="/sea-freight" className="mobile-nav-link text-sm" onClick={() => setMobileMenuOpen(false)}>
                        Sea Freight
                      </Link>
                      <Link href="/project-cargo" className="mobile-nav-link text-sm" onClick={() => setMobileMenuOpen(false)}>
                        Project Cargo
                      </Link>
                      <Link href="/warehousing" className="mobile-nav-link text-sm" onClick={() => setMobileMenuOpen(false)}>
                        Warehousing
                      </Link>
                      <Link href="/customs-clearance" className="mobile-nav-link text-sm" onClick={() => setMobileMenuOpen(false)}>
                        Customs Clearance
                      </Link>
                      <Link href="/supply-chain" className="mobile-nav-link text-sm" onClick={() => setMobileMenuOpen(false)}>
                        Supply Chain Solutions
                      </Link>
                    </div>
                  )}
                </div>

                <Link href="/solutions" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Solutions
                </Link>

                {/* Mobile Industries */}
                <div>
                  <button
                    onClick={() => setIndustriesOpen(!industriesOpen)}
                    className="mobile-nav-link w-full flex items-center justify-between"
                  >
                    <span>Industries</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${industriesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {industriesOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      <Link href="/industries/manufacturing" className="mobile-nav-link text-sm" onClick={() => setMobileMenuOpen(false)}>
                        Manufacturing
                      </Link>
                      <Link href="/industries/retail" className="mobile-nav-link text-sm" onClick={() => setMobileMenuOpen(false)}>
                        Retail & E-commerce
                      </Link>
                      <Link href="/industries/automotive" className="mobile-nav-link text-sm" onClick={() => setMobileMenuOpen(false)}>
                        Automotive
                      </Link>
                      <Link href="/industries/healthcare" className="mobile-nav-link text-sm" onClick={() => setMobileMenuOpen(false)}>
                        Healthcare
                      </Link>
                      <Link href="/industries/technology" className="mobile-nav-link text-sm" onClick={() => setMobileMenuOpen(false)}>
                        Technology
                      </Link>
                    </div>
                  )}
                </div>

                <Link href="/about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  About Us
                </Link>
                <Link href="/contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>

                {/* Mobile Quote Button */}
                <Link
                  href="/quote"
                  className="block w-full mt-4 px-4 py-3 text-sm font-bold text-center text-white bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover:from-red-700 hover:to-red-800 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

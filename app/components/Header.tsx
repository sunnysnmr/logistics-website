"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const servicesTimer = useRef<number | null>(null);
  const industriesTimer = useRef<number | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = (locale: string) => {
    // preserve path, switch locale (basic)
    // router.push type doesn't accept locale in this signature in some Next versions
    // cast to any to perform locale navigation when available
    (router as any).push(pathname, { locale });
  };

  // add scroll listener for subtle transparency/shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const services = [
    { name: 'Air Freight', href: '/services/air-freight' },
    { name: 'Sea Freight', href: '/services/sea-freight' },
    { name: 'Customs Clearance', href: '/services/customs-clearance' },
    { name: 'Project Cargo', href: '/services/project-cargo' },
  ];

  const industries = [
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Automotive', href: '/industries/automotive' },
    { name: 'Pharma', href: '/industries/pharma' },
    { name: 'Energy', href: '/industries/energy' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'backdrop-blur-sm bg-white/80 shadow-sm' : 'bg-white/95'
      }`}
    >
      <div className="site-container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 relative rounded-md overflow-hidden transition-transform duration-300 hover:scale-105 ring-1 ring-white/90 bg-white flex-shrink-0">
            <Image src="/ogl_logo.png" alt="onGlobe logo" fill sizes="48px" className="object-contain" />
          </div>
          <div>
            <div className="text-lg font-semibold text-[#0F172A] leading-tight">onGlobe Console</div>
            <div className="text-xs text-slate-500">Logistics & Supply Chain</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-base font-medium text-[#0F172A]">
          <Link href="/" className="nav-link px-2 py-1 rounded hover:text-[#E63946] transition-colors">Home</Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (servicesTimer.current) {
                window.clearTimeout(servicesTimer.current);
                servicesTimer.current = null;
              }
              setServicesOpen(true);
            }}
            onMouseLeave={() => {
              // delay close slightly to allow pointer to move into submenu
              servicesTimer.current = window.setTimeout(() => {
                setServicesOpen(false);
                servicesTimer.current = null;
              }, 150) as unknown as number;
            }}
            onFocus={(e: any) => {
              if (servicesTimer.current) {
                window.clearTimeout(servicesTimer.current);
                servicesTimer.current = null;
              }
              setServicesOpen(true);
            }}
            onBlur={(e: any) => {
              // close when focus leaves the wrapper (with small delay)
              if (!e.currentTarget.contains(e.relatedTarget)) {
                servicesTimer.current = window.setTimeout(() => {
                  setServicesOpen(false);
                  servicesTimer.current = null;
                }, 150) as unknown as number;
              }
            }}
            tabIndex={0}
          >
            <button
              className="flex items-center gap-2 px-2 py-1 rounded hover:text-[#E63946] transition-colors"
              aria-expanded={servicesOpen}
            >
              Services
              <svg className="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div
              className={`absolute right-0 mt-2 w-56 rounded-md bg-white border border-zinc-100 shadow-lg transition-all duration-200 ${servicesOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto visible' : 'opacity-0 translate-y-1 scale-95 pointer-events-none invisible'}`}
            >
              <div className="py-2">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">{s.name}</Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/solutions" className="nav-link px-2 py-1 rounded hover:text-[#E63946] transition-colors">Solutions</Link>

          {/* Industries dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (industriesTimer.current) {
                window.clearTimeout(industriesTimer.current);
                industriesTimer.current = null;
              }
              setIndustriesOpen(true);
            }}
            onMouseLeave={() => {
              industriesTimer.current = window.setTimeout(() => {
                setIndustriesOpen(false);
                industriesTimer.current = null;
              }, 150) as unknown as number;
            }}
            onFocus={(e: any) => {
              if (industriesTimer.current) {
                window.clearTimeout(industriesTimer.current);
                industriesTimer.current = null;
              }
              setIndustriesOpen(true);
            }}
            onBlur={(e: any) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                industriesTimer.current = window.setTimeout(() => {
                  setIndustriesOpen(false);
                  industriesTimer.current = null;
                }, 150) as unknown as number;
              }
            }}
            tabIndex={0}
          >
            <button
              className="flex items-center gap-2 px-2 py-1 rounded hover:text-[#E63946] transition-colors"
              aria-expanded={industriesOpen}
            >
              Industries
              <svg className="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div
              className={`absolute right-0 mt-2 w-56 rounded-md bg-white border border-zinc-100 shadow-lg transition-all duration-200 ${industriesOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto visible' : 'opacity-0 translate-y-1 scale-95 pointer-events-none invisible'}`}
            >
              <div className="py-2">
                {industries.map((i) => (
                  <Link key={i.href} href={i.href} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">{i.name}</Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/about" className="nav-link px-2 py-1 rounded hover:text-[#E63946] transition-colors">About Us</Link>
          <Link href="/contact" className="nav-link px-2 py-1 rounded hover:text-[#E63946] transition-colors">Contact</Link>

          {/* Language selector */}
          <div className="ml-4 flex items-center gap-2">
            <button onClick={() => changeLocale('en')} className="px-3 py-1 rounded-md border border-[#E63946] text-[#0F172A] hover:bg-[#E63946]/10 transition">EN</button>
            <button onClick={() => changeLocale('ms')} className="px-3 py-1 rounded-md border border-slate-200 text-[#0F172A] hover:bg-slate-50 transition">MS</button>
            <button onClick={() => changeLocale('zh')} className="px-3 py-1 rounded-md border border-slate-200 text-[#0F172A] hover:bg-slate-50 transition">中文</button>
          </div>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            className="rounded-md p-2 border border-zinc-200 bg-white text-[#0F172A] hover:bg-slate-50"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div className={`${open ? 'block' : 'hidden'} md:hidden border-t border-zinc-100 bg-white`}>
        <div className="site-container py-4 flex flex-col gap-2">
          <Link href="/" className="py-2">Home</Link>

          {/* mobile services collapsible */}
          <div>
            <button onClick={() => setServicesOpen((s) => !s)} className="w-full flex items-center justify-between py-2">
              <span>Services</span>
              <svg className={`h-4 w-4 transform transition ${servicesOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="pl-4">
                {services.map(s => (
                  <Link key={s.href} href={s.href} className="block py-2">{s.name}</Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/solutions" className="py-2">Solutions</Link>

          <div>
            <button onClick={() => setIndustriesOpen((s) => !s)} className="w-full flex items-center justify-between py-2">
              <span>Industries</span>
              <svg className={`h-4 w-4 transform transition ${industriesOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {industriesOpen && (
              <div className="pl-4">
                {industries.map(i => (
                  <Link key={i.href} href={i.href} className="block py-2">{i.name}</Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="py-2">About Us</Link>
          <Link href="/contact" className="py-2">Contact</Link>

          <div className="pt-2 flex items-center gap-2">
            <button onClick={() => changeLocale('en')} className="px-3 py-1 rounded-md border border-slate-200">EN</button>
            <button onClick={() => changeLocale('ms')} className="px-3 py-1 rounded-md border border-slate-200">MS</button>
            <button onClick={() => changeLocale('zh')} className="px-3 py-1 rounded-md border border-slate-200">中文</button>
          </div>
        </div>
      </div>
    </header>
  );
}

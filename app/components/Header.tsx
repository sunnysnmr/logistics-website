"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = (locale: string) => {
    router.push(pathname, { locale });
  };

  return (
    <header className="sticky top-0 z-50 w-full nav-backdrop">
      <div className="site-container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-16 h-16 relative rounded-full overflow-hidden anim-float transition-transform duration-500 hover:scale-105 ring-2 ring-white/80 bg-white">
            <Image src="/ogl_logo.png" alt="onGlobe logo" fill sizes="64px" className="object-contain" />
          </div>
          <div>
            <div className="text-lg font-bold text-slate-900">onGlobe Console</div>
            <div className="text-xs text-slate-500">Logistics & Supply Chain</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-base font-semibold">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <div className="ml-4 flex items-center gap-2">
            <button onClick={() => changeLocale("en")} className="px-2 py-1 rounded border border-zinc-300 bg-white hover:bg-slate-50">EN</button>
            <button onClick={() => changeLocale("ms")} className="px-2 py-1 rounded border border-zinc-300 bg-white hover:bg-slate-50">MS</button>
            <button onClick={() => changeLocale("zh")} className="px-2 py-1 rounded border border-zinc-300 bg-white hover:bg-slate-50">中文</button>
          </div>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            className="rounded-md p-2 border border-zinc-300 bg-white text-slate-800 hover:bg-slate-50"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-zinc-200">
          <div className="site-container py-4 flex flex-col gap-3">
            <Link href="/" className="py-2">Home</Link>
            <Link href="/services" className="py-2">Services</Link>
            <Link href="/about" className="py-2">About</Link>
            <Link href="/contact" className="py-2">Contact</Link>
            <div className="pt-2 flex items-center gap-2">
              <button onClick={() => changeLocale("en")} className="px-2 py-1 rounded border border-zinc-300 bg-white">EN</button>
              <button onClick={() => changeLocale("ms")} className="px-2 py-1 rounded border border-zinc-300 bg-white">MS</button>
              <button onClick={() => changeLocale("zh")} className="px-2 py-1 rounded border border-zinc-300 bg-white">中文</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

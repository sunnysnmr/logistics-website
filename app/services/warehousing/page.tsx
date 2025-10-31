import Image from "next/image";
import Link from "next/link";

export default function Warehousing() {
  return (
    <div className="site-container mx-auto py-16">
      <nav className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/services" className="hover:text-slate-700">Services</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">Warehousing</span>
      </nav>

      <div className="w-full rounded-2xl card overflow-hidden mb-8">
        <div className="relative w-full h-56">
          <Image src="/window.svg" alt="Warehousing" fill sizes="800px" className="object-contain" />
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Warehousing</h1>
      <p className="mt-4 text-lg text-slate-600 max-w-3xl">
        OneGlobe offers top-tier warehousing, secure storage, value‑added services, and efficient distribution across Malaysia. From bonded storage to eCommerce fulfillment, we provide flexible solutions that scale with demand.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {["Ambient and temperature‑controlled storage","Pick & pack, kitting, and labelling","Inventory visibility and cycle counting","Nationwide distribution and last‑mile"].map((b, i) => (
          <div key={i} className="card p-6 anim-fade-up" style={{animationDelay: `${i*70}ms`}}>
            <div className="text-slate-900 font-semibold">{b}</div>
            <div className="mt-2 text-slate-600">Flexible SLAs and billing.</div>
          </div>
        ))}
      </div>

      <div className="mt-12 card p-6 flex items-center justify-between gap-4 flex-col md:flex-row">
        <div>
          <div className="text-xl font-semibold text-slate-900">Need storage?</div>
          <div className="text-slate-600">Let’s tailor capacity and services to your demand.</div>
        </div>
        <Link href="/contact" className="btn-primary">Contact our team</Link>
      </div>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold text-slate-900">Value-Added</h3>
          <ul className="mt-2 text-slate-600 list-disc pl-5 space-y-1">
            <li>Kitting and light assembly</li>
            <li>Relabelling and repackaging</li>
            <li>QC and returns management</li>
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-slate-900">Operations</h3>
          <ul className="mt-2 text-slate-600 list-disc pl-5 space-y-1">
            <li>WMS with live inventory</li>
            <li>Cycle counts and audits</li>
            <li>Cross-docking and consolidation</li>
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-slate-900">Distribution</h3>
          <ul className="mt-2 text-slate-600 list-disc pl-5 space-y-1">
            <li>Same/next-day within Klang Valley</li>
            <li>Nationwide linehaul</li>
            <li>Reverse logistics</li>
          </ul>
        </div>
      </section>
    </div>
  );
}



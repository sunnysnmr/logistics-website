import Image from "next/image";
import Link from "next/link";

export default function SeaFreight() {
  return (
    <div className="site-container mx-auto py-16">
      <nav className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/services" className="hover:text-slate-700">Services</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">Sea Freight</span>
      </nav>

      <div className="w-full rounded-2xl card overflow-hidden mb-8">
        <div className="relative w-full h-56">
          <Image src="/globe.svg" alt="Sea Freight" fill sizes="800px" className="object-contain" />
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Sea Freight</h1>
      <p className="mt-4 text-lg text-slate-600 max-w-3xl">
        OneGlobe optimizes sea freight with efficient routes, dependable schedules, and cost‑effective FCL/LCL services to and from Malaysian ports. We manage carrier allocation, VGM, port handling, and last-mile drayage for predictable end-to-end lead times.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {["FCL and LCL services to major trade lanes","Port handling and drayage coordination","Flexible sailing schedules and space commitments","Customs and documentation support"].map((b, i) => (
          <div key={i} className="card p-6 anim-fade-up" style={{animationDelay: `${i*70}ms`}}>
            <div className="text-slate-900 font-semibold">{b}</div>
            <div className="mt-2 text-slate-600">Plan your next shipment with our sea team.</div>
          </div>
        ))}
      </div>

      <div className="mt-12 card p-6 flex items-center justify-between gap-4 flex-col md:flex-row">
        <div>
          <div className="text-xl font-semibold text-slate-900">Ready to sail?</div>
          <div className="text-slate-600">Get schedules and consolidation options.</div>
        </div>
        <Link href="/contact" className="btn-primary">Contact our team</Link>
      </div>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold text-slate-900">Service Options</h3>
          <ul className="mt-2 text-slate-600 list-disc pl-5 space-y-1">
            <li>FCL, LCL, buyer’s consolidation</li>
            <li>CY/CY, door/door, door/CY</li>
            <li>Temperature-controlled reefer</li>
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-slate-900">Documentation</h3>
          <ul className="mt-2 text-slate-600 list-disc pl-5 space-y-1">
            <li>Bill of Lading, Form D/COO support</li>
            <li>ISF, AMS where applicable</li>
            <li>Customs and port permits</li>
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-slate-900">Coverage</h3>
          <ul className="mt-2 text-slate-600 list-disc pl-5 space-y-1">
            <li>Port Klang, Penang, Pasir Gudang</li>
            <li>Weekly sailings to major lanes</li>
            <li>End-to-end visibility</li>
          </ul>
        </div>
      </section>
    </div>
  );
}



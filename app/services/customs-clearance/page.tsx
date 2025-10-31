import Image from "next/image";
import Link from "next/link";

export default function CustomsClearance() {
  return (
    <div className="site-container mx-auto py-16">
      <nav className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/services" className="hover:text-slate-700">Services</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">Customs Clearance</span>
      </nav>

      <div className="w-full rounded-2xl card overflow-hidden mb-8">
        <div className="relative w-full h-56">
          <Image src="/file.svg" alt="Customs Clearance" fill sizes="800px" className="object-contain" />
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Customs Clearance</h1>
      <p className="mt-4 text-lg text-slate-600 max-w-3xl">
        OneGlobe streamlines customs clearance, expediting cross‑border movement with expertise and partnerships to ensure compliance. We prepare accurate documents, manage permits and classifications, and resolve exceptions quickly.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {["HS classification and duty/tax estimation","Permits and SIRIM/KKM coordination","AEO practices and compliant documentation","Import/export advisory and audits"].map((b, i) => (
          <div key={i} className="card p-6 anim-fade-up" style={{animationDelay: `${i*70}ms`}}>
            <div className="text-slate-900 font-semibold">{b}</div>
            <div className="mt-2 text-slate-600">Reduce border delays and penalties.</div>
          </div>
        ))}
      </div>

      <div className="mt-12 card p-6 flex items-center justify-between gap-4 flex-col md:flex-row">
        <div>
          <div className="text-xl font-semibold text-slate-900">Need a quick clearance?</div>
          <div className="text-slate-600">We’ll guide documentation and permits end‑to‑end.</div>
        </div>
        <Link href="/contact" className="btn-primary">Contact our team</Link>
      </div>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold text-slate-900">Documents</h3>
          <ul className="mt-2 text-slate-600 list-disc pl-5 space-y-1">
            <li>Invoice, packing list, COO</li>
            <li>Permits and licenses</li>
            <li>Tariff classification</li>
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-slate-900">Compliance</h3>
          <ul className="mt-2 text-slate-600 list-disc pl-5 space-y-1">
            <li>AEO practices</li>
            <li>HS code validation</li>
            <li>Tax/duty estimation</li>
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-slate-900">Support</h3>
          <ul className="mt-2 text-slate-600 list-disc pl-5 space-y-1">
            <li>Appeals and audits</li>
            <li>Broker coordination</li>
            <li>24/7 exception handling</li>
          </ul>
        </div>
      </section>
    </div>
  );
}



import Image from "next/image";
import Link from "next/link";

export default function SupplyChain() {
  return (
    <div className="site-container mx-auto py-16">
      <nav className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/services" className="hover:text-slate-700">Services</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">Supply Chain</span>
      </nav>

      <div className="w-full rounded-2xl card overflow-hidden mb-8">
        <div className="relative w-full h-56">
          <Image src="/globe.svg" alt="Supply Chain" fill sizes="800px" className="object-contain" />
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Supply Chain</h1>
      <p className="mt-4 text-lg text-slate-600 max-w-3xl">
        OneGlobe maximizes supply chain efficiency from procurement to last mile. We reduce lead times and costs with smart planning, visibility, and coordinated execution.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {["Network design and inventory optimisation","Supplier consolidation and VMI options","KPI dashboards and analytics","Sustainability and packaging optimisation"].map((b, i) => (
          <div key={i} className="card p-6 anim-fade-up" style={{animationDelay: `${i*70}ms`}}>
            <div className="text-slate-900 font-semibold">{b}</div>
            <div className="mt-2 text-slate-600">Improve service while reducing cost and risk.</div>
          </div>
        ))}
      </div>

      <div className="mt-12 card p-6 flex items-center justify-between gap-4 flex-col md:flex-row">
        <div>
          <div className="text-xl font-semibold text-slate-900">Optimise your network</div>
          <div className="text-slate-600">We’ll map scenarios and KPIs with you.</div>
        </div>
        <Link href="/contact" className="btn-primary">Contact our team</Link>
      </div>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold text-slate-900">Planning</h3>
          <ul className="mt-2 text-slate-600 list-disc pl-5 space-y-1">
            <li>Demand and inventory planning</li>
            <li>Network and facility design</li>
            <li>Safety stock optimization</li>
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-slate-900">Execution</h3>
          <ul className="mt-2 text-slate-600 list-disc pl-5 space-y-1">
            <li>Supplier consolidation (VMI)</li>
            <li>Multi-leg coordination</li>
            <li>OTIF improvement programs</li>
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-slate-900">Visibility</h3>
          <ul className="mt-2 text-slate-600 list-disc pl-5 space-y-1">
            <li>KPI dashboards and alerts</li>
            <li>Risk monitoring and mitigation</li>
            <li>Sustainability metrics</li>
          </ul>
        </div>
      </section>
    </div>
  );
}



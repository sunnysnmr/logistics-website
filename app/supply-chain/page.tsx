import Image from "next/image";
import Link from "next/link";

export default function SupplyChainTop() {
  return (
    <div className="site-container mx-auto py-16">
      <div className="relative rounded-2xl overflow-hidden mb-8" style={{minHeight: '14rem'}}>
        <div className="bg-accent-wave absolute inset-0 -z-10" />
        <div className="bg-grid bg-grid-animate absolute inset-0 -z-20" />
        <div className="relative p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Supply Chain</h1>
          <p className="mt-3 text-slate-700 max-w-3xl">From planning to last-mile, improve service while reducing cost and risk.</p>
        </div>
      </div>

      <div className="w-full rounded-2xl card overflow-hidden mb-8">
        <div className="relative w-full h-56">
          <Image src="/globe.svg" alt="Supply Chain" fill sizes="800px" className="object-contain" />
        </div>
      </div>

      <p className="text-lg text-slate-600 max-w-3xl">
        OneGlobe maximizes supply chain efficiency from procurement to last mile. We reduce lead times and costs with smart planning, visibility, and coordinated execution.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {["Network design and inventory optimisation","Supplier consolidation and VMI options","KPI dashboards and analytics","Sustainability and packaging optimisation"].map((b, i) => (
          <div key={i} className="card p-6 anim-fade-up" style={{animationDelay: `${i*70}ms`}}>
            <div className="text-slate-900 font-semibold">{b}</div>
            <div className="mt-2 text-slate-600">Improve service while reducing cost and risk.</div>
          </div>
        ))}
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

      <div className="mt-12 card p-6 flex items-center justify-between gap-4 flex-col md:flex-row">
        <div>
          <div className="text-xl font-semibold text-slate-900">Optimise your network</div>
          <div className="text-slate-600">We’ll map scenarios and KPIs with you.</div>
        </div>
        <Link href="/contact" className="btn-primary">Contact our team</Link>
      </div>
    </div>
  );
}



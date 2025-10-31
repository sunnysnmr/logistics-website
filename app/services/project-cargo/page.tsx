import Image from "next/image";
import Link from "next/link";

export default function ProjectCargo() {
  return (
    <div className="site-container mx-auto py-16">
      <nav className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/services" className="hover:text-slate-700">Services</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">Project Cargo</span>
      </nav>

      <div className="w-full rounded-2xl card overflow-hidden mb-8">
        <div className="relative w-full h-56">
          <Image src="/file.svg" alt="Project Cargo" fill sizes="800px" className="object-contain" />
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Project Cargo</h1>
      <p className="mt-4 text-lg text-slate-600 max-w-3xl">
        OneGlobe excels in project cargo for heavy or complex shipments, ensuring seamless execution and timely delivery for oversized moves. We design safe routes, coordinate heavy lifts, and manage permits with on-site supervision.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {["Route surveys, lifting plans, and permits","Heavy‑haul, barge, and multimodal solutions","On‑site coordination and safety compliance","Milestone tracking and stakeholder reporting"].map((b, i) => (
          <div key={i} className="card p-6 anim-fade-up" style={{animationDelay: `${i*70}ms`}}>
            <div className="text-slate-900 font-semibold">{b}</div>
            <div className="mt-2 text-slate-600">We manage end‑to‑end execution.</div>
          </div>
        ))}
      </div>

      <div className="mt-12 card p-6 flex items-center justify-between gap-4 flex-col md:flex-row">
        <div>
          <div className="text-xl font-semibold text-slate-900">Planning a move?</div>
          <div className="text-slate-600">Get a route survey and execution plan.</div>
        </div>
        <Link href="/contact" className="btn-primary">Contact our team</Link>
      </div>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold text-slate-900">Engineering</h3>
          <ul className="mt-2 text-slate-600 list-disc pl-5 space-y-1">
            <li>Load plans and lift studies</li>
            <li>Escort, permits, police approvals</li>
            <li>Risk assessments and method statements</li>
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-slate-900">Execution</h3>
          <ul className="mt-2 text-slate-600 list-disc pl-5 space-y-1">
            <li>Heavy-haul trailers, barge, rail</li>
            <li>Crane lifts and site coordination</li>
            <li>Milestone reporting and HSE</li>
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-slate-900">Industries</h3>
          <ul className="mt-2 text-slate-600 list-disc pl-5 space-y-1">
            <li>Energy and utilities</li>
            <li>Construction and heavy machinery</li>
            <li>Manufacturing and EPC projects</li>
          </ul>
        </div>
      </section>
    </div>
  );
}



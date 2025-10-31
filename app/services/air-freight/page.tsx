import Image from "next/image";
import Link from "next/link";

export default function AirFreight() {
  return (
    <div className="site-container mx-auto py-16">
      <nav className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/services" className="hover:text-slate-700">Services</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">Air Freight</span>
      </nav>

      <div className="w-full rounded-2xl card overflow-hidden mb-8">
        <div className="relative w-full h-56">
          <Image src="/globe.svg" alt="Air Freight" fill sizes="800px" className="object-contain" />
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Air Freight</h1>
      <p className="mt-4 text-lg text-slate-600 max-w-3xl">
        OneGlobe streamlines air freight logistics with swift delivery and meticulous handling, prioritizing reliability and customer satisfaction across Malaysia and beyond. From urgent samples to high-value electronics and temperature-controlled shipments, we secure fast, predictable transit times.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {["Time-critical air solutions with daily departures","Door-to-door and airport-to-airport service models","Temperature-controlled and high-value cargo handling","Real-time tracking with proactive notifications"].map((b, i) => (
          <div key={i} className="card p-6 anim-fade-up" style={{animationDelay: `${i*70}ms`}}>
            <div className="text-slate-900 font-semibold">{b}</div>
            <div className="mt-2 text-slate-600">Talk to our Malaysia team for the best route and service level.</div>
          </div>
        ))}
      </div>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold text-slate-900">Service Options</h3>
          <ul className="mt-2 text-slate-600 list-disc pl-5 space-y-1">
            <li>Express and deferred air</li>
            <li>Consolidation and direct MAWB</li>
            <li>DAP/DDP including duties & taxes</li>
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-slate-900">Compliance</h3>
          <ul className="mt-2 text-slate-600 list-disc pl-5 space-y-1">
            <li>IATA DG handling where applicable</li>
            <li>Commodity-specific packing and labels</li>
            <li>End-to-end documentation support</li>
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold text-slate-900">Coverage</h3>
          <ul className="mt-2 text-slate-600 list-disc pl-5 space-y-1">
            <li>KUL, PEN, JHB and major Asia & EU hubs</li>
            <li>First-flight out for urgent lanes</li>
            <li>24/7 tracking and exception handling</li>
          </ul>
        </div>
      </section>

      <div className="mt-12 card p-6 flex items-center justify-between gap-4 flex-col md:flex-row">
        <div>
          <div className="text-xl font-semibold text-slate-900">Ready to ship by air?</div>
          <div className="text-slate-600">We’ll tailor the schedule to your timelines and cargo.</div>
        </div>
        <Link href="/contact" className="btn-primary">Contact our team</Link>
      </div>
    </div>
  );
}



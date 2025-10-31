import Link from "next/link";

export default function Services() {
  const services = [
    { slug: 'air-freight', title: 'Air Freight', desc: 'Swift, reliable air cargo for time-critical shipments.' },
    { slug: 'sea-freight', title: 'Sea Freight', desc: 'Cost-effective FCL/LCL with dependable schedules.' },
    { slug: 'project-cargo', title: 'Project Cargo', desc: 'Heavy and oversized cargo, engineered end-to-end.' },
    { slug: 'warehousing', title: 'Warehousing', desc: 'Secure storage and efficient distribution nationwide.' },
    { slug: 'customs-clearance', title: 'Customs Clearance', desc: 'Fast clearance with Malaysian compliance expertise.' },
    { slug: 'supply-chain', title: 'Supply Chain', desc: 'From procurement to last-mile, managed for efficiency.' },
  ];

  return (
    <div className="site-container mx-auto py-20">
      <h1 className="text-3xl font-bold mb-6">Services</h1>

      <div className="grid grid-cols-1 gap-5">
        {services.map((s, i) => (
          <div key={s.slug} className="service-row anim-fade-up" style={{animationDelay: `${i*70}ms`}}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-semibold text-slate-900 text-xl">{s.title}</h3>
                <p className="text-sm text-[var(--muted)] mt-1">{s.desc}</p>
              </div>
              <div className="flex items-center gap-3">
                <Link href={`/${s.slug}`} className="btn-primary">Read more</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

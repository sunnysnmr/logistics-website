import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background">
      <section className="relative site-container mx-auto py-20">
        <div className="bg-accent-wave rounded-2xl absolute -inset-x-6 -top-10 bottom-0 -z-10" />
        <div className="bg-grid bg-grid-animate rounded-2xl absolute -inset-x-6 -top-10 bottom-0 -z-20" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Trusted logistics for Malaysia — air, sea, and supply chain.
            </h1>
            <p className="text-lg text-[var(--muted)] max-w-xl">
              We help Malaysian businesses plan, track, and optimise shipments with reliability, transparency, and cost-efficiency.
            </p>

            <div className="flex gap-4">
              <Link href="/services" className="btn-primary anim-glow">
                Explore Services
              </Link>
              <Link href="/contact" className="btn-ghost">
                Contact Sales
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md h-80 rounded-2xl card overflow-hidden">
              <div className="relative w-full h-full">
                <Image src="/globe.svg" alt="Global logistics" fill sizes="480px" className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 gap-5">
          {[{
            slug: 'air-freight',
            title: 'Air Freight',
            desc: 'Swift delivery and meticulous handling for time-critical cargo.'
          },{
            slug: 'sea-freight',
            title: 'Sea Freight',
            desc: 'Cost-effective FCL/LCL with reliable schedules to Malaysian ports.'
          },{
            slug: 'project-cargo',
            title: 'Project Cargo',
            desc: 'Heavy, oversized and complex shipments, executed end-to-end.'
          },{
            slug: 'warehousing',
            title: 'Warehousing',
            desc: 'Secure storage and efficient distribution across Malaysia.'
          },{
            slug: 'customs-clearance',
            title: 'Customs Clearance',
            desc: 'Expedited clearance with Malaysian compliance expertise.'
          },{
            slug: 'supply-chain',
            title: 'Supply Chain',
            desc: 'From procurement to last-mile, coordinated for efficiency.'
          }].map((s, i) => (
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
      </section>
    </div>
  );
}

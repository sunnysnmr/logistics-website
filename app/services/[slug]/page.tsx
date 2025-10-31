import Link from "next/link";
import Image from "next/image";

type ServiceKey = 'air-freight' | 'sea-freight' | 'project-cargo' | 'warehousing' | 'customs-clearance' | 'supply-chain';

const SERVICE_CONTENT: Record<ServiceKey, { title: string; intro: string; bullets: string[] } > = {
  'air-freight': {
    title: 'Air Freight',
    intro: 'OneGlobe streamlines air freight logistics with swift delivery and meticulous handling, prioritizing reliability and customer satisfaction across Malaysia and beyond.',
    bullets: [
      'Time-critical air solutions with daily departures',
      'Door-to-door and airport-to-airport service models',
      'Temperature-controlled and high-value cargo handling',
      'Real-time tracking with proactive notifications'
    ]
  },
  'sea-freight': {
    title: 'Sea Freight',
    intro: 'OneGlobe optimizes sea freight with efficient routes, dependable schedules, and cost‑effective FCL/LCL services to and from Malaysian ports.',
    bullets: [
      'FCL and LCL services to major global trade lanes',
      'Port handling and drayage coordination',
      'Flexible sailing schedules and space commitments',
      'Customs and documentation support'
    ]
  },
  'project-cargo': {
    title: 'Project Cargo',
    intro: 'OneGlobe excels in project cargo for heavy or complex shipments, ensuring seamless execution and timely delivery for oversized moves.',
    bullets: [
      'Route surveys, lifting plans, and permits',
      'Heavy-haul, barge, and multimodal solutions',
      'On-site coordination and safety compliance',
      'Milestone tracking and stakeholder reporting'
    ]
  },
  'warehousing': {
    title: 'Warehousing',
    intro: 'OneGlobe offers top-tier warehousing, secure storage and efficient distribution with value‑added services across Malaysia.',
    bullets: [
      'Ambient and temperature-controlled storage',
      'Pick & pack, kitting, labelling',
      'Inventory visibility and cycle counting',
      'Nationwide distribution and last-mile'
    ]
  },
  'customs-clearance': {
    title: 'Customs Clearance',
    intro: 'OneGlobe streamlines customs clearance, expediting cross‑border movement with expertise and partnerships to ensure compliance.',
    bullets: [
      'HS classification and duty/tax estimation',
      'Permit applications and SIRIM/KKM coordination (where applicable)',
      'AEO practices and compliant documentation',
      'Import/export advisory and audits'
    ]
  },
  'supply-chain': {
    title: 'Supply Chain',
    intro: 'OneGlobe maximizes supply chain efficiency, ensuring seamless coordination from procurement to distribution for operational success.',
    bullets: [
      'Network design and inventory optimisation',
      'Supplier consolidation and VMI options',
      'KPI dashboards and analytics',
      'Sustainability and packaging optimisation'
    ]
  }
};

export default function ServiceDetail({ params }: { params: { slug: ServiceKey }}) {
  const key = params.slug;
  const content = SERVICE_CONTENT[key];
  const imageByKey: Record<ServiceKey, string> = {
    'air-freight': '/globe.svg',
    'sea-freight': '/globe.svg',
    'project-cargo': '/file.svg',
    'warehousing': '/window.svg',
    'customs-clearance': '/file.svg',
    'supply-chain': '/globe.svg',
  };

  if (!content) {
    return (
      <div className="site-container mx-auto py-20">
        <h1 className="text-3xl font-bold text-slate-900">Service not found</h1>
        <p className="mt-4 text-slate-600">Please return to the services page.</p>
        <Link href="/services" className="mt-6 inline-block btn-primary">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="site-container mx-auto py-16">
      <div className="w-full rounded-2xl card overflow-hidden mb-8">
        <div className="relative w-full h-56">
          <Image src={imageByKey[key]} alt={`${content.title} image`} fill sizes="800px" className="object-contain" />
        </div>
      </div>
      <nav className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/services" className="hover:text-slate-700">Services</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">{content.title}</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">{content.title}</h1>
      <p className="mt-4 text-lg text-slate-600 max-w-3xl">{content.intro}</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {content.bullets.map((b, i) => (
          <div key={i} className="card p-6 anim-fade-up" style={{animationDelay: `${i*70}ms`}}>
            <div className="text-slate-900 font-semibold">{b}</div>
            <div className="mt-2 text-slate-600">Learn how this applies to your lane and product mix.</div>
          </div>
        ))}
      </div>

      <div className="mt-12 card p-6 anim-glow flex items-center justify-between gap-4 flex-col md:flex-row">
        <div>
          <div className="text-xl font-semibold text-slate-900">Ready to ship with {content.title}?</div>
          <div className="text-slate-600">Talk to our Malaysia team for a tailored plan and quote.</div>
        </div>
        <Link href="/contact" className="btn-primary">Contact our team</Link>
      </div>
    </div>
  );
}



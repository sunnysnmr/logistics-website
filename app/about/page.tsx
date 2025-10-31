import Image from "next/image";

export default function About() {
  return (
    <div className="site-container mx-auto py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">About onGlobe Console</h1>
          <p className="mt-4 text-slate-600">
            We are a logistics services provider dedicated to simplifying trade for Malaysian businesses. Our team combines operational expertise with modern tools to give customers control and clarity over their supply chains.
          </p>

          <h3 className="mt-6 font-semibold text-slate-900">Our mission</h3>
          <p className="text-slate-600">Enable businesses of all sizes to move goods faster, safer, and more sustainably.</p>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-64 h-64 relative card p-6">
            <Image src="/ogl_logo.png" alt="logo" fill sizes="256px" className="object-contain transition-transform duration-500 hover:rotate-6" />
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900">Milestones</h2>
        <ul className="mt-4 space-y-3 text-slate-600">
          <li>• 2015 — Founded with a mission to modernize logistics</li>
          <li>• 2018 — Launched real-time tracking platform</li>
          <li>• 2022 — Expanded warehousing & fulfillment network</li>
        </ul>
      </section>
    </div>
  );
}

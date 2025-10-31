export default function Contact() {
  return (
    <div className="site-container mx-auto py-20">
      <h1 className="text-3xl font-bold text-slate-900">Contact Us</h1>
      <p className="mt-3 text-slate-600">Have a question or need a quote? Send us a message and we’ll respond within one business day.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-800">Name</label>
            <input className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-3" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-800">Email</label>
            <input className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-3" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-800">Message</label>
            <textarea className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-3" rows={6} placeholder="Tell us about your shipment or ask a question" />
          </div>
          <div>
            <button type="button" className="btn-primary">Send message</button>
          </div>
        </form>

        <div className="space-y-4">
          <div className="card p-6">
            <h3 className="font-semibold text-slate-900">Malaysia Office</h3>
            <p className="text-sm text-slate-600 mt-2">Kuala Lumpur, Malaysia</p>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold text-slate-900">Support</h3>
            <p className="text-sm text-slate-600 mt-2">support@onglobe.my<br/>+60 3-1234 5678</p>
          </div>
        </div>
      </div>
    </div>
  );
}

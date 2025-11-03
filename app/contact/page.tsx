"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, Facebook, Linkedin, Instagram, ChevronDown } from "lucide-react";

const faqs = [
  { q: "How do I track my shipment?", a: "Use our online tracking system with your tracking number for real-time updates." },
  { q: "What are your shipping rates?", a: "Contact us for a custom quote based on your specific requirements." },
  { q: "Do you offer insurance?", a: "Yes, we provide comprehensive cargo insurance for all shipments." },
  { q: "What documents do I need?", a: "Required documents vary by service. Our team will guide you through the process." },
  { q: "How long does customs clearance take?", a: "Typically 1-3 business days, depending on cargo type and compliance." },
  { q: "Do you handle dangerous goods?", a: "Yes, we're certified to handle DG cargo following IATA and IMDG regulations." },
];

function FAQGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.06 }}
          className="bg-white rounded-xl p-5 hover:shadow-lg transition-all overflow-hidden"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between text-left"
            aria-expanded={openIndex === index}
          >
            <span className="text-sm md:text-base font-bold text-slate-900">{faq.q}</span>
            <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.25 }}>
              <ChevronDown className="w-5 h-5 text-slate-400" />
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-3 text-xs md:text-sm text-slate-600 overflow-hidden"
              >
                {faq.a}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Visit Us",
      details: ["123 Jalan Logistics", "Petaling Jaya, Selangor 46000", "Malaysia"],
      color: "from-primary-600 to-primary-700"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call Us",
      details: ["+60 3-1234 5678", "+60 12-345 6789", "Toll-Free: 1-800-88-1234"],
      color: "from-red-600 to-red-700"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Us",
      details: ["info@onglobeconsole.com", "support@onglobeconsole.com", "sales@onglobeconsole.com"],
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"],
      color: "from-emerald-600 to-emerald-700"
    },
  ];

  const services = [
    "Air Freight",
    "Sea Freight",
    "Project Cargo",
    "Warehousing",
    "Customs Clearance",
    "Supply Chain Solutions",
    "General Inquiry"
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-slate-900 text-white py-12 md:py-16">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="site-container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 leading-tight">
              Get in Touch
            </h1>
            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              Have questions about our logistics services? Our team is ready to help you find the perfect solution for your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-10 md:py-12 bg-slate-50">
        <div className="site-container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.1 }} 
                className="bg-white rounded-lg p-4 md:p-5 hover:shadow-lg transition-all group"
              >
                <div className={`w-10 h-10 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform`}>
                  {info.icon}
                </div>
                <h3 className="text-sm md:text-base font-bold text-slate-900 mb-2">
                  {info.title}
                </h3>
                <div className="space-y-0.5">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-xs text-slate-600">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-10 md:py-12 bg-white">
        <div className="site-container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
            >
              <div className="mb-5 md:mb-6">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-2 md:mb-3">
                  Send Us a Message
                </h2>
                <p className="text-xs md:text-sm text-slate-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      value={formData.name} 
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      value={formData.email} 
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all" 
                      placeholder="john@company.com" 
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      value={formData.phone} 
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all" 
                      placeholder="+60 12-345 6789" 
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Company Name
                    </label>
                    <input 
                      type="text" 
                      id="company" 
                      value={formData.company} 
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })} 
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all" 
                      placeholder="Company Inc." 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Service Interest
                  </label>
                  <select 
                    id="service" 
                    value={formData.service} 
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })} 
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-white"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Message *
                  </label>
                  <textarea 
                    id="message" 
                    required 
                    rows={4} 
                    value={formData.message} 
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none" 
                    placeholder="Tell us about your logistics needs..." 
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-lg font-semibold transition-all text-sm shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              className="space-y-5"
            >
              {/* Map Placeholder */}
              <div className="relative h-[250px] md:h-[280px] bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-10 h-10 text-primary-600 mx-auto mb-2" />
                    <p className="text-xs text-slate-600">Map placeholder</p>
                    <p className="text-[10px] text-slate-500 mt-1">Integrate Google Maps</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-primary-900 to-slate-900 rounded-lg p-5 md:p-6 text-white">
                <h3 className="text-base md:text-lg font-bold mb-2">Need Immediate Assistance?</h3>
                <p className="text-xs text-white/90 mb-4">
                  Our support team is available 24/7 for urgent inquiries and shipment tracking.
                </p>
                <div className="space-y-2.5">
                  <a href="tel:+60312345678" className="flex items-center gap-2.5 hover:text-red-400 transition-colors">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+60 3-1234 5678</span>
                  </a>
                  <a href="mailto:support@onglobeconsole.com" className="flex items-center gap-2.5 hover:text-red-400 transition-colors">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">support@onglobeconsole.com</span>
                  </a>
                </div>

                {/* Social Links */}
                <div className="mt-5 pt-5 border-t border-white/20">
                  <p className="text-xs text-white/80 mb-2.5">Follow us on social media</p>
                  <div className="flex gap-2.5">
                    <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="site-container mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4">Frequently Asked Questions</h2>
            <p className="text-sm md:text-base text-slate-600">Find quick answers to common questions</p>
          </div>

          <FAQGrid />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-br from-primary-900 to-slate-900 text-white">
        <div className="site-container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Ready to Get Started?</h2>
            <p className="text-sm md:text-base text-white/90 mb-6 md:mb-8 leading-relaxed">Request a quote today and discover how we can optimize your logistics operations.</p>
            <a href="/quote" className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-all text-sm md:text-base shadow-lg hover:shadow-xl transform hover:scale-105">
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

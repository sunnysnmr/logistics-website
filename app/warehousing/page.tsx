"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Warehouse, Package, BarChart3, Shield, CheckCircle2, Clock } from "lucide-react";

export default function WarehousingPage() {
  const services = [
    { icon: <Warehouse className="w-6 h-6" />, title: "Storage Solutions", description: "Secure, climate-controlled warehousing facilities with advanced security systems." },
    { icon: <Package className="w-6 h-6" />, title: "Inventory Management", description: "Real-time inventory tracking and management with integrated WMS technology." },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Order Fulfillment", description: "Efficient pick, pack, and ship services for e-commerce and retail businesses." },
    { icon: <Clock className="w-6 h-6" />, title: "Cross-Docking", description: "Fast transfer of goods from inbound to outbound without long-term storage." },
  ];

  const features = ["Climate-controlled storage", "24/7 security monitoring", "WMS integration", "Pick and pack services", "Same-day fulfillment", "Returns processing"];

  return (
    <main className="min-h-screen">
      <section className="relative bg-gradient-to-br from-emerald-900 via-primary-900 to-slate-900 text-white py-16 md:py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="site-container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Warehouse className="w-8 h-8 text-emerald-400" />
              <span className="text-xs md:text-sm font-semibold px-3 py-1 bg-emerald-600/20 rounded-full border border-emerald-500/30">Warehousing Services</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">Smart Warehousing & Distribution</h1>
            <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 leading-relaxed">State-of-the-art warehousing solutions with advanced inventory management. From storage to fulfillment, we optimize your supply chain operations.</p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link href="/quote" className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-semibold transition-all text-sm md:text-base shadow-lg hover:shadow-xl transform hover:scale-105">
                Get a Quote<ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-all text-sm md:text-base backdrop-blur-sm border border-white/20">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="site-container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4">Warehousing Services</h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">Complete storage and distribution solutions for your business</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-slate-50 rounded-xl p-5 md:p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="site-container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-xl">
              <Image src="/wherehouse_img1.jpg" alt="Warehousing" fill className="object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6">Why Choose Our Warehousing?</h2>
              <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">Our modern warehousing facilities offer secure storage, advanced inventory systems, and efficient fulfillment services to support your business growth.</p>
              <div className="grid gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/quote" className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-lg font-semibold transition-all text-sm md:text-base shadow-lg hover:shadow-xl transform hover:scale-105">
                  Request Warehousing Quote<ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-br from-emerald-900 to-slate-900 text-white">
        <div className="site-container mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">100K+</div>
              <div className="text-xs md:text-sm text-white/80">Square Feet Storage</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
              <div className="text-xs md:text-sm text-white/80">Inventory Accuracy</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-xs md:text-sm text-white/80">Operations</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="site-container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6">Optimize Your Storage Today</h2>
            <p className="text-sm md:text-base text-slate-600 mb-6 md:mb-8 leading-relaxed">Discover how our warehousing solutions can streamline your operations and reduce costs.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-lg font-semibold transition-all text-sm md:text-base shadow-lg hover:shadow-xl transform hover:scale-105">
              Contact Our Team<ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

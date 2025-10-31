"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, BarChart3, Network, Zap, CheckCircle2, Target } from "lucide-react";

export default function SupplyChainPage() {
  const services = [
    { icon: <TrendingUp className="w-6 h-6" />, title: "Supply Chain Optimization", description: "Data-driven analysis and optimization to improve efficiency and reduce costs." },
    { icon: <Network className="w-6 h-6" />, title: "End-to-End Visibility", description: "Real-time tracking and visibility across your entire supply chain network." },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Performance Analytics", description: "Advanced analytics and reporting to drive informed decision-making." },
    { icon: <Target className="w-6 h-6" />, title: "Risk Management", description: "Proactive risk identification and mitigation strategies for supply chain resilience." },
  ];

  const features = ["Supply chain consulting", "Vendor management", "Route optimization", "Demand forecasting", "Cost analysis", "KPI tracking"];

  return (
    <main className="min-h-screen">
      <section className="relative bg-gradient-to-br from-indigo-900 via-primary-900 to-slate-900 text-white py-16 md:py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="site-container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Network className="w-8 h-8 text-indigo-400" />
              <span className="text-xs md:text-sm font-semibold px-3 py-1 bg-indigo-600/20 rounded-full border border-indigo-500/30">Supply Chain Solutions</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">Intelligent Supply Chain Solutions</h1>
            <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 leading-relaxed">Transform your supply chain with data-driven optimization, end-to-end visibility, and strategic consulting. Reduce costs, improve efficiency, and build resilience.</p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link href="/quote" className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition-all text-sm md:text-base shadow-lg hover:shadow-xl transform hover:scale-105">
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4">Supply Chain Services</h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">Comprehensive solutions to optimize your supply chain operations</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-slate-50 rounded-xl p-5 md:p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
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
              <Image src="/Ocean_Freight_img2.jpg" alt="Supply Chain" fill className="object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6">Why Choose Our Supply Chain Services?</h2>
              <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">Our supply chain solutions leverage advanced analytics, technology, and industry expertise to drive measurable improvements in your operations.</p>
              <div className="grid gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/quote" className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-lg font-semibold transition-all text-sm md:text-base shadow-lg hover:shadow-xl transform hover:scale-105">
                  Request Consultation<ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-br from-indigo-900 to-slate-900 text-white">
        <div className="site-container mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">35%</div>
              <div className="text-xs md:text-sm text-white/80">Average Cost Reduction</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">50+</div>
              <div className="text-xs md:text-sm text-white/80">Supply Chain Projects</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">95%</div>
              <div className="text-xs md:text-sm text-white/80">Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="site-container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6">Optimize Your Supply Chain</h2>
            <p className="text-sm md:text-base text-slate-600 mb-6 md:mb-8 leading-relaxed">Discover how our supply chain solutions can transform your operations and drive business growth.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-lg font-semibold transition-all text-sm md:text-base shadow-lg hover:shadow-xl transform hover:scale-105">
              Contact Our Team<ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

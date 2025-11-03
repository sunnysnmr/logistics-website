"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Truck, Warehouse, Ship, Plane, Box, Shield } from "lucide-react";

export default function SolutionsPage() {
  const solutions = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "End-to-End Transportation",
      description: "Complete transportation solutions covering air, sea, and land freight with real-time tracking and visibility.",
      features: ["Multi-modal transport", "Door-to-door delivery", "Last-mile logistics", "Express shipping"],
      image: "/Air_Freight_img1.jpg",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: <Warehouse className="w-8 h-8" />,
      title: "Warehousing & Distribution",
      description: "State-of-the-art warehousing facilities with advanced inventory management and distribution networks.",
      features: ["Climate-controlled storage", "Inventory management", "Order fulfillment", "Cross-docking"],
      image: "/wherehouse_img1.jpg",
      color: "from-emerald-600 to-emerald-700",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Supply Chain Optimization",
      description: "Advanced analytics and optimization tools to streamline your entire supply chain operations.",
      features: ["Route optimization", "Cost reduction", "Risk management", "Performance analytics"],
      image: "/Ocean_Freight_img2.jpg",
      color: "from-purple-600 to-purple-700",
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: "Customs & Compliance",
      description: "Expert customs clearance and trade compliance services ensuring smooth international operations.",
      features: ["Customs brokerage", "Documentation", "Compliance consulting", "Duty optimization"],
      image: "/Customs_Clearance_img2.jpg",
      color: "from-red-600 to-red-700",
    },
  ];

  const benefits = [
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Reduced operational costs by up to 30%" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Improved delivery times and reliability" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Real-time visibility across the supply chain" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Scalable solutions for business growth" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "24/7 customer support and monitoring" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Advanced technology integration" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-slate-900 text-white py-16 md:py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="site-container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-3 py-1 bg-red-600/20 rounded-full text-xs md:text-sm font-semibold mb-4 border border-red-500/30">
              Complete Logistics Solutions
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Tailored Solutions for Your Business
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 leading-relaxed">
              From transportation to warehousing, customs to supply chain optimization - we provide end-to-end logistics solutions designed to meet your unique business needs.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-all text-sm md:text-base shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-all text-sm md:text-base backdrop-blur-sm border border-white/20"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="site-container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4">
              Our Solutions Portfolio
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              Comprehensive logistics solutions designed to optimize your operations and drive growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-40`}></div>
                  <div className="absolute top-4 left-4 w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary-600 shadow-lg">
                    {solution.icon}
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs md:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="site-container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                Why Choose Our Solutions?
              </h2>
              <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                Our integrated logistics solutions are designed to deliver measurable results and drive your business forward with cutting-edge technology and industry expertise.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2 md:gap-3">
                    <div className="text-green-600 mt-0.5">{benefit.icon}</div>
                    <span className="text-xs md:text-sm text-slate-700">{benefit.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-all text-sm md:text-base shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/Ocean_Freight_img1.jpg"
                alt="Logistics Solutions"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary-900 to-slate-900 text-white">
        <div className="site-container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Ready to Transform Your Logistics?
            </h2>
            <p className="text-sm md:text-base text-white/90 mb-6 md:mb-8 leading-relaxed">
              Let's discuss how our solutions can help optimize your supply chain and drive business growth.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-all text-sm md:text-base shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

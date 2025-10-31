"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Car, Truck, Ship, Clock, Shield, Gauge, CheckCircle2 } from "lucide-react";

export default function AutomotivePage() {
  const services = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Parts Distribution",
      description: "Efficient distribution of automotive parts and components to dealers, repair shops, and assembly plants.",
    },
    {
      icon: <Ship className="w-6 h-6" />,
      title: "Vehicle Shipping",
      description: "Specialized vehicle transportation services for cars, trucks, and heavy equipment worldwide.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "JIT Manufacturing Support",
      description: "Just-in-time delivery systems to support lean manufacturing and minimize inventory costs.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Handling",
      description: "Protected transport with specialized equipment for high-value automotive components and vehicles.",
    },
  ];

  const benefits = [
    "Reduced inventory carrying costs",
    "Optimized supply chain efficiency",
    "Global shipping network coverage",
    "Specialized automotive expertise",
    "Temperature-controlled transport",
    "Compliance with industry standards",
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 text-white py-16 md:py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="site-container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-8 h-8 text-red-400" />
              <span className="text-xs md:text-sm font-semibold px-3 py-1 bg-red-600/20 rounded-full border border-red-500/30">
                Automotive Industry
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Driving Automotive Logistics Forward
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 leading-relaxed">
              Specialized logistics solutions for the automotive industry, from parts distribution to vehicle shipping, supporting manufacturers, dealers, and aftermarket suppliers.
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

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="site-container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4">
              Automotive Logistics Services
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored for the automotive supply chain
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-xl p-5 md:p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="site-container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/project_cargo_img1.jpg"
                alt="Automotive Logistics"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                Automotive Industry Benefits
              </h2>
              <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                Our automotive logistics expertise helps you maintain lean operations, reduce costs, and ensure timely delivery of parts and vehicles.
              </p>
              <div className="grid gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-all text-sm md:text-base shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-900 to-red-900 text-white">
        <div className="site-container mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">15K+</div>
              <div className="text-xs md:text-sm text-white/80">Vehicles Shipped Annually</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">99.8%</div>
              <div className="text-xs md:text-sm text-white/80">Damage-Free Delivery</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">300+</div>
              <div className="text-xs md:text-sm text-white/80">Automotive Partners</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="site-container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
              Accelerate Your Automotive Operations
            </h2>
            <p className="text-sm md:text-base text-slate-600 mb-6 md:mb-8 leading-relaxed">
              Partner with us for reliable, efficient automotive logistics that keeps your supply chain moving.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-all text-sm md:text-base shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

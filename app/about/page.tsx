"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Globe, TrendingUp, CheckCircle2, Target } from "lucide-react";

export default function AboutPage() {
  const values = [
    { icon: <Target className="w-6 h-6" />, title: "Customer-Centric", description: "Your success is our priority. We tailor solutions to meet your unique needs." },
    { icon: <Award className="w-6 h-6" />, title: "Excellence", description: "We maintain the highest standards in every aspect of our logistics services." },
    { icon: <Globe className="w-6 h-6" />, title: "Global Reach", description: "Connected worldwide with reliable partners and extensive network coverage." },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Innovation", description: "Leveraging technology to deliver smarter, faster logistics solutions." },
  ];

  const milestones = [
    { year: "2015", title: "Company Founded", description: "Established with a mission to modernize logistics for Malaysian businesses" },
    { year: "2018", title: "Tech Platform Launch", description: "Introduced real-time tracking and digital logistics management system" },
    { year: "2020", title: "Network Expansion", description: "Extended services across Southeast Asia with new partnerships" },
    { year: "2022", title: "Warehousing Growth", description: "Expanded warehousing and fulfillment network to support e-commerce boom" },
    { year: "2025", title: "Industry Leader", description: "Recognized as one of Malaysia's top logistics solution providers" },
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "5000+", label: "Happy Clients" },
    { number: "50+", label: "Countries Served" },
    { number: "1M+", label: "Shipments Delivered" },
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
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              About onGlobe Console
            </h1>
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              We are a leading logistics services provider dedicated to simplifying trade for Malaysian businesses. Our team combines operational expertise with modern technology to give customers control and clarity over their supply chains.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-16 bg-white">
        <div className="site-container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/Ocean_Freight_img1.jpg"
                alt="About Us"
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
                Our Mission
              </h2>
              <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                Enable businesses of all sizes to move goods faster, safer, and more sustainably. We strive to be the trusted logistics partner that empowers your growth through reliable, efficient, and innovative supply chain solutions.
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">
                Our Vision
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                To be Southeast Asia's most customer-centric logistics company, recognized for excellence in service, technology innovation, and sustainable operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary-900 to-slate-900 text-white">
        <div className="site-container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">{stat.number}</div>
                <div className="text-xs md:text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="site-container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4">
              Our Core Values
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 md:p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="site-container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4">
              Our Journey
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              Key milestones in our growth story
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-12 pb-8 md:pb-10 border-l-2 border-primary-200 last:border-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary-600 -translate-x-[9px] ring-4 ring-white"></div>
                <div className="bg-slate-50 rounded-xl p-5 md:p-6 hover:shadow-lg transition-all">
                  <div className="text-lg md:text-xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">{milestone.title}</h3>
                  <p className="text-xs md:text-sm text-slate-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="site-container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                Expert Team
              </h2>
              <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                Our team of logistics professionals brings decades of combined experience in freight forwarding, warehousing, customs clearance, and supply chain management.
              </p>
              <div className="grid gap-3">
                {[
                  "Licensed customs brokers",
                  "Certified logistics professionals",
                  "24/7 customer support",
                  "Multilingual team",
                  "Industry experts",
                  "Dedicated account managers"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/Air_Freight_img1.jpg"
                alt="Our Team"
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
              Ready to Work with Us?
            </h2>
            <p className="text-sm md:text-base text-white/90 mb-6 md:mb-8 leading-relaxed">
              Let's discuss how we can help optimize your logistics and grow your business.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-all text-sm md:text-base shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-all text-sm md:text-base backdrop-blur-sm border border-white/20"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

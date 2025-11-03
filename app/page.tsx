"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Truck, Ship, Plane, Package, Award, Globe } from "lucide-react";
import StatsCounter from "./components/StatsCounter";
import Testimonials from "./components/Testimonials";
import PartnersSlider from "./components/PartnersSlider";
import FAQAccordion from "./components/FAQAccordion";
import { useEffect, useState } from "react";

// Client-only animated background component
function AnimatedBackground() {
  const [dots, setDots] = useState<Array<{left: string; top: string}>>([]);

  useEffect(() => {
    // Generate random positions only on client side
    setDots(
      Array.from({ length: 15 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }))
    );
  }, []);

  if (dots.length === 0) {
    // Return minimal static version for SSR
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-400/20 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 25}%`,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-red-400/20 rounded-full"
          style={{
            left: dot.left,
            top: dot.top,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white">
      {/* Animated Background Elements - Client Only */}
      <AnimatedBackground />

      {/* Hero Section with Video Background */}
      <section className="relative min-h-[450px] md:min-h-[550px] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-primary-900 to-navy-900">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/background_Video1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-primary-900/70 to-navy-900/70" />
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-red-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="site-container mx-auto py-10 md:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 md:space-y-5"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-lg"
              >
                Trusted Logistics for{" "}
                <motion.span
                  animate={{ 
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent bg-[length:200%_200%]"
                >
                  Malaysia
                </motion.span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-sm md:text-base lg:text-lg text-white/90 max-w-xl drop-shadow-md leading-relaxed"
              >
                Air, sea, and supply chain solutions with reliability, transparency, and cost-efficiency for Malaysian businesses.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row flex-wrap gap-2 md:gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/quote" className="inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-bold text-white text-sm md:text-base bg-red-600 hover:bg-red-700 transition-all duration-300 shadow-xl hover:shadow-2xl">
                    Get a Quote
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/services" className="inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-bold text-slate-900 text-sm md:text-base bg-white hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Explore Services
                  </Link>
                </motion.div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 pt-4 md:pt-6"
              >
                {[
                  { icon: <Package className="w-4 h-4" />, value: "50K+", label: "Shipments" },
                  { icon: <Ship className="w-4 h-4" />, value: "85+", label: "Countries" },
                  { icon: <Plane className="w-4 h-4" />, value: "24/7", label: "Support" },
                  { icon: <Truck className="w-4 h-4" />, value: "10+", label: "Years" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-white p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
                  >
                    <div className="flex items-center gap-1.5 md:gap-2 mb-1">
                      <motion.div
                        animate={{ rotate: [0, 5, 0, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                      >
                        {stat.icon}
                      </motion.div>
                      <span className="text-base md:text-lg font-bold drop-shadow">{stat.value}</span>
                    </div>
                    <div className="text-[10px] md:text-xs text-white/80">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:flex items-center justify-center"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full max-w-md h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image 
                  src="/Carousel_img1.jpg" 
                  alt="Global logistics" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 480px" 
                  className="object-cover"
                  priority
                  loading="eager"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e120_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e120_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#3b82f608,transparent_50%),radial-gradient(circle_at_70%_60%,#64748b08,transparent_50%)]" />

        {/* Animated background dots */}
        <motion.div
          className="absolute top-10 right-10 w-4 h-4 bg-red-400/30 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <div className="relative site-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image 
                  src="/Carousel_img1.jpg" 
                  alt="Our logistics team at work" 
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>

            {/* Content - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 md:space-y-6 order-1 lg:order-2"
            >
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-2"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Award className="w-4 h-4 text-red-600" />
                </motion.div>
                <span className="text-sm font-semibold text-red-700 uppercase tracking-wide">
                  About Our Company
                </span>
              </motion.div> */}

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900"
              >
                Leading Logistics Solutions in{" "}
                <motion.span
                  animate={{ 
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent bg-[length:200%_200%]"
                >
                  Malaysia
                </motion.span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm sm:text-base text-slate-600 leading-relaxed"
              >
                With over a decade of experience, onGlobe Console has established itself as a trusted 
                partner for businesses across Malaysia and beyond. We specialize in providing 
                comprehensive logistics solutions tailored to meet the unique needs of each client.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "10+ years of industry experience",
                  "85+ countries served worldwide", 
                  "50,000+ successful shipments",
                  "24/7 customer support",
                  "99% on-time delivery rate",
                  "Customized logistics solutions"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.1 + (index * 0.1) }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/80 border border-slate-200 hover:border-red-200 hover:bg-white transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-green-500 flex items-center justify-center"
                    >
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <span className="text-sm font-medium text-slate-800 leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-2"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/about" 
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-white text-sm md:text-base bg-red-600 hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Learn More About Us
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Services Overview */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e120_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e120_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#3b82f608,transparent_50%),radial-gradient(circle_at_70%_60%,#64748b08,transparent_50%)]" />

        <div className="relative site-container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-10 lg:mb-12"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg font-bold text-slate-800 uppercase text-gaping-5 mb-5"
            >
              Our Services
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3"
            >
              Comprehensive Logistics{" "}
              <motion.span
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent bg-[length:200%_200%]"
              >
                Solutions
              </motion.span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed px-4"
            >
              Tailored services designed to meet your unique business requirements
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
            {[{
              slug: 'air-freight',
              title: 'Air Freight',
              desc: 'Swift delivery and meticulous handling for time-critical cargo.',
              icon: <Plane className="w-6 h-6" />,
              gradient: 'from-red-600 to-red-700',
            },{
              slug: 'sea-freight',
              title: 'Sea Freight',
              desc: 'Cost-effective FCL/LCL with reliable schedules to Malaysian ports.',
              icon: <Ship className="w-6 h-6" />,
              gradient: 'from-slate-600 to-slate-700',
            },{
              slug: 'project-cargo',
              title: 'Project Cargo',
              desc: 'Heavy, oversized and complex shipments, executed end-to-end.',
              icon: <Package className="w-6 h-6" />,
              gradient: 'from-red-600 to-red-700',
            },{
              slug: 'warehousing',
              title: 'Warehousing',
              desc: 'Secure storage and efficient distribution across Malaysia.',
              icon: <Truck className="w-6 h-6" />,
              gradient: 'from-slate-600 to-slate-700',
            },{
              slug: 'customs-clearance',
              title: 'Customs Clearance',
              desc: 'Expedited clearance with Malaysian compliance expertise.',
              icon: <Package className="w-6 h-6" />,
              gradient: 'from-red-600 to-red-700',
            },{
              slug: 'supply-chain',
              title: 'Supply Chain',
              desc: 'From procurement to last-mile, coordinated for efficiency.',
              icon: <Truck className="w-6 h-6" />,
              gradient: 'from-slate-600 to-slate-700',
            }].map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: i * 0.08,
                }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <Link href={`/${s.slug}`} className="block">
                  <div className="relative bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-red-300 hover:shadow-lg transition-all duration-300">
                    <div className="p-6">
                      <div className="flex items-start gap-5">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.3 }}
                          className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300`}
                        >
                          <motion.div
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            className="text-white"
                          >
                            {s.icon}
                          </motion.div>
                        </motion.div>

                        <div className="flex-1 min-w-0 pt-1">
                          <motion.h3
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            className="text-lg font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors duration-300"
                          >
                            {s.title}
                          </motion.h3>
                          
                          <p className="text-sm text-slate-600 leading-relaxed mb-4">
                            {s.desc}
                          </p>

                          <motion.div
                            whileHover={{ x: 5 }}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-red-600"
                          >
                            <span>Learn more</span>
                            <motion.svg
                              animate={{ x: [0, 3, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="w-4 h-4"
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </motion.svg>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scaleX: 1 }}
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 origin-left"
                      style={{ scaleX: 0 }}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Slider */}
      <PartnersSlider />

      {/* Testimonials */}
      <Testimonials />

      {/* Why Choose Us Section */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e120_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e120_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#ef444408,transparent_50%),radial-gradient(circle_at_70%_60%,#64748b08,transparent_50%)]" />

        <div className="relative site-container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 md:mb-14"
          >
           

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3"
            >
              Why Choose{" "}
              <motion.span
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent bg-[length:200%_200%]"
              >
                onGlobe Console?
              </motion.span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed"
            >
              Experience the difference with our commitment to excellence and innovation
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-7xl mx-auto">
            {[
              {
                title: "Expert Team",
                desc: "Dedicated logistics professionals with decades of combined experience. Our specialists ensure your cargo receives the attention it deserves.",
                image: "/Ocean_Freight_img2.jpg",
              },
              {
                title: "Global Network",
                desc: "Strategic partnerships across 85+ countries worldwide. We deliver anywhere, ensuring your business reaches every corner of the globe.",
                image: "/Carousel_img1.jpg",
              },
              {
                title: "Cost Efficiency",
                desc: "Optimized routes and consolidated shipping for maximum savings. We help you reduce costs without compromising on quality or speed.",
                image: "/Air_Freight_img1.jpg",
              },
              {
                title: "Secure Storage",
                desc: "State-of-the-art warehousing with climate control and 24/7 security. Your inventory is protected with the highest safety standards.",
                image: "/wherehouse_img1.jpg",
              },
              {
                title: "Customs Expertise",
                desc: "Seamless clearance with full regulatory compliance. Navigate complex customs procedures effortlessly with our experienced team.",
                image: "/Customs_Clearance_img2.jpg",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative h-[320px] sm:h-[360px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute inset-0">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent group-hover:from-slate-900/95 group-hover:via-slate-900/80 transition-all duration-500" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                    <motion.h3
                      whileHover={{ x: 5 }}
                      className="text-white font-bold text-xl md:text-2xl mb-2 drop-shadow-lg"
                    >
                      {feature.title}
                    </motion.h3>
                    
                    <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out">
                      <p className="text-white/90 text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {feature.desc}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scaleX: 1 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 origin-left"
                    style={{ scaleX: 0 }}
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                >
                  <Award className="w-5 h-5 text-white" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e120_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e120_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#3b82f608,transparent_50%),radial-gradient(circle_at_70%_60%,#64748b08,transparent_50%)]" />

        <div className="relative site-container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-10 lg:mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3"
            >
              See Our Operations in{" "}
              <motion.span
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent bg-[length:200%_200%]"
              >
                Action
              </motion.span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed px-4"
            >
              Watch how we handle your cargo with precision and care
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-slate-900">
              <video
                controls
                poster="/Carousel_img1.jpg"
                className="w-full h-full object-cover"
                preload="metadata"
              >
                <source src="/background_Video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center text-xs text-slate-500 mt-3"
            >
              Click play to watch our logistics operations
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e120_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e120_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#3b82f608,transparent_50%),radial-gradient(circle_at_70%_60%,#64748b08,transparent_50%)]" />

        <div className="relative site-container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-10 lg:mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3"
            >
              Frequently Asked{" "}
              <motion.span
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent bg-[length:200%_200%]"
              >
                Questions
              </motion.span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed px-4"
            >
              Find answers to common questions about our logistics services
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <FAQAccordion
              faqs={[
                {
                  question: "What shipping methods do you offer?",
                  answer: "We offer comprehensive air freight, sea freight (FCL/LCL), and road transportation services. Our multimodal solutions can combine different methods to optimize cost and delivery time based on your specific requirements.",
                },
                {
                  question: "Do you handle customs clearance?",
                  answer: "Yes, we provide full customs clearance services in Malaysia and internationally. Our experienced team handles all documentation, tariff classifications, duty calculations, and regulatory compliance to ensure smooth clearance of your goods.",
                },
                {
                  question: "What industries do you serve?",
                  answer: "We serve a wide range of industries including manufacturing, retail, automotive, healthcare, technology, construction, and e-commerce. Our tailored solutions are designed to meet the unique logistics challenges of each sector.",
                },
                {
                  question: "How do I get a quote?",
                  answer: "You can request a quote through our online form, by calling our customer service team, or by emailing us directly. We'll need details about your shipment including origin, destination, cargo type, dimensions, and weight to provide an accurate quote.",
                },
                {
                  question: "What is your service coverage area?",
                  answer: "We operate across Malaysia with warehousing facilities in major cities and ports. Internationally, we have partnerships in over 85 countries, providing seamless door-to-door service worldwide.",
                },
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e120_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e120_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#3b82f608,transparent_50%),radial-gradient(circle_at_70%_60%,#64748b08,transparent_50%)]" />

        <div className="relative site-container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-10 lg:mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3"
            >
              Ready to Optimize Your{" "}
              <motion.span
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent bg-[length:200%_200%]"
              >
                Supply Chain?
              </motion.span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed px-4"
            >
              Get in touch with our logistics experts and discover how we can help your business grow.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center px-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/quote" 
                className="inline-flex items-center justify-center px-6 md:px-7 py-2.5 md:py-3 text-sm md:text-base bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-all duration-300 shadow-xl"
              >
                Request a Quote
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 md:px-7 py-2.5 md:py-3 text-sm md:text-base border-2 border-slate-900 text-slate-900 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition-all duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
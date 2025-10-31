"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Truck, Ship, Plane, Package } from "lucide-react";
import StatsCounter from "./components/StatsCounter";
import Testimonials from "./components/Testimonials";
import PartnersSlider from "./components/PartnersSlider";
import FAQAccordion from "./components/FAQAccordion";

export default function Home() {
  return (
    <div className="bg-white">
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
                Trusted Logistics for Malaysia
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
                <Link href="/quote" className="inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-bold text-white text-sm md:text-base bg-red-600 hover:bg-red-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                  Get a Quote
                </Link>
                <Link href="/tracking" className="inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-bold text-white text-sm md:text-base border-2 border-white hover:bg-white hover:text-primary-700 transition-all duration-300">
                  Track Shipment
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-bold text-slate-900 text-sm md:text-base bg-white hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Explore Services
                </Link>
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
                  <div key={i} className="text-white">
                    <div className="flex items-center gap-1.5 md:gap-2 mb-1">
                      {stat.icon}
                      <span className="text-base md:text-lg font-bold drop-shadow">{stat.value}</span>
                    </div>
                    <div className="text-[10px] md:text-xs text-white/80">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full max-w-md h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/Carousel_img1.jpg" 
                  alt="Global logistics" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 480px" 
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Services Overview */}
      <section className="site-container mx-auto py-10 md:py-14 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2 md:mb-3">Our Services</h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto px-4">
            Comprehensive logistics solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 md:gap-4 max-w-5xl mx-auto">
          {[{
            slug: 'air-freight',
            title: 'Air Freight',
            desc: 'Swift delivery and meticulous handling for time-critical cargo.',
            icon: <Plane className="w-5 h-5" />,
          },{
            slug: 'sea-freight',
            title: 'Sea Freight',
            desc: 'Cost-effective FCL/LCL with reliable schedules to Malaysian ports.',
            icon: <Ship className="w-5 h-5" />,
          },{
            slug: 'project-cargo',
            title: 'Project Cargo',
            desc: 'Heavy, oversized and complex shipments, executed end-to-end.',
            icon: <Package className="w-5 h-5" />,
          },{
            slug: 'warehousing',
            title: 'Warehousing',
            desc: 'Secure storage and efficient distribution across Malaysia.',
            icon: <Truck className="w-5 h-5" />,
          },{
            slug: 'customs-clearance',
            title: 'Customs Clearance',
            desc: 'Expedited clearance with Malaysian compliance expertise.',
            icon: <Package className="w-5 h-5" />,
          },{
            slug: 'supply-chain',
            title: 'Supply Chain',
            desc: 'From procurement to last-mile, coordinated for efficiency.',
            icon: <Truck className="w-5 h-5" />,
          }].map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="service-row group"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 text-base md:text-lg">{s.title}</h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-0.5">{s.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 ml-auto md:ml-0">
                  <Link href={`/${s.slug}`} className="btn-primary text-xs md:text-sm px-4 py-2">
                    Read more
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partners Slider */}
      <PartnersSlider />

      {/* Testimonials */}
      <Testimonials />

      {/* Why Choose Us Section */}
      <section className="py-10 md:py-14 bg-gradient-to-br from-slate-50 to-primary-50">
        <div className="site-container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 md:mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2 md:mb-3">
              Why Choose onGlobe Console?
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              Experience the difference with our commitment to excellence and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Real-Time Tracking",
                desc: "Monitor your shipments 24/7 with our advanced tracking system",
                image: "/Carousel_img2.jpg",
              },
              {
                title: "Expert Team",
                desc: "Dedicated logistics professionals with decades of combined experience",
                image: "/Ocean_Freight_img2.jpg",
              },
              {
                title: "Global Network",
                desc: "Strategic partnerships across 85+ countries worldwide",
                image: "/Carousel_img1.jpg",
              },
              {
                title: "Cost Efficiency",
                desc: "Optimized routes and consolidated shipping for maximum savings",
                image: "/Air_Freight_img1.jpg",
              },
              {
                title: "Secure Storage",
                desc: "State-of-the-art warehousing with climate control and 24/7 security",
                image: "/wherehouse_img1.jpg",
              },
              {
                title: "Customs Expertise",
                desc: "Seamless clearance with full regulatory compliance",
                image: "/Customs_Clearance_img2.jpg",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card overflow-hidden group hover:shadow-glow bg-white"
              >
                <div className="relative h-40 md:h-48 overflow-hidden bg-slate-200">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <h3 className="absolute bottom-3 left-3 right-3 text-white font-bold text-base md:text-lg drop-shadow-lg">
                    {feature.title}
                  </h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-10 md:py-14 bg-white">
        <div className="site-container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 md:mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2 md:mb-3">
              See Our Operations in Action
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              Watch how we handle your cargo with precision and care
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
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
            </div>
            <p className="text-center text-xs text-slate-500 mt-3">
              Click play to watch our logistics operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 md:py-14 bg-white">
        <div className="site-container px-4">
          <FAQAccordion
            title="Frequently Asked Questions"
            faqs={[
              {
                question: "What shipping methods do you offer?",
                answer: "We offer comprehensive air freight, sea freight (FCL/LCL), and road transportation services. Our multimodal solutions can combine different methods to optimize cost and delivery time based on your specific requirements.",
              },
              {
                question: "How can I track my shipment?",
                answer: "You can track your shipment 24/7 using our online tracking system. Simply enter your tracking number on our tracking page, and you'll get real-time updates on your cargo's location and status. You'll also receive automated notifications at key milestones.",
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-gradient-to-br from-primary-600 via-navy-700 to-primary-800">
        <div className="site-container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3 px-4">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-sm md:text-base text-white/90 mb-6 max-w-2xl mx-auto px-4">
              Get in touch with our logistics experts and discover how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center px-4">
              <Link 
                href="/quote" 
                className="inline-flex items-center justify-center px-6 md:px-7 py-2.5 md:py-3 text-sm md:text-base bg-white text-primary-600 rounded-xl font-bold hover:scale-105 transition-transform duration-300 shadow-xl"
              >
                Request a Quote
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 md:px-7 py-2.5 md:py-3 text-sm md:text-base border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

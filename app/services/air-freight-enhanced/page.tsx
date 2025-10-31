"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plane, Clock, Shield, Globe, CheckCircle } from "lucide-react";
import FAQAccordion from "@/app/components/FAQAccordion";

const airFreightFAQs = [
  {
    question: "What is the typical transit time for air freight?",
    answer: "Transit times vary by destination, but typically range from 1-5 days for express services and 5-10 days for standard air freight. We offer daily departures to major hubs worldwide."
  },
  {
    question: "Can you handle temperature-controlled shipments?",
    answer: "Yes, we provide specialized temperature-controlled solutions for pharmaceuticals, perishables, and other sensitive cargo. Our facilities are equipped with the latest cold chain technology."
  },
  {
    question: "What are the weight and size limitations?",
    answer: "Standard air freight can handle shipments up to 150kg per piece. For oversized or heavier cargo, we offer charter services and specialized handling solutions."
  },
  {
    question: "Do you provide door-to-door service?",
    answer: "Absolutely! We offer both door-to-door and airport-to-airport services. Our door-to-door service includes pickup, customs clearance, and final delivery to your destination."
  },
  {
    question: "How do I track my air freight shipment?",
    answer: "Once your shipment is booked, you'll receive a tracking number. You can track your shipment in real-time through our tracking portal or mobile app with proactive notifications at every stage."
  },
];

export default function AirFreightEnhanced() {
  return (
    <div className="bg-background">
      {/* Breadcrumb */}
      <div className="site-container py-4">
        <nav className="text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-slate-700">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700 font-medium">Air Freight</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <Image 
          src="/Air_Freight_img1.jpg" 
          alt="Air Freight Service" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-navy-900/80 to-primary-800/90" />
        <div className="site-container h-full flex items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Plane className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white">Air Freight</h1>
            </div>
            <p className="text-xl text-slate-100">
              Swift, reliable air cargo for time-critical shipments with end-to-end handling and visibility
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="site-container py-16">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Fast, Secure, and Reliable Air Freight Solutions
            </h2>
            <p className="text-lg text-slate-600 mb-4">
              OneGlobe streamlines air freight logistics with swift delivery and meticulous handling, 
              prioritizing reliability and customer satisfaction across Malaysia and beyond. From urgent 
              samples to high-value electronics and temperature-controlled shipments, we secure fast, 
              predictable transit times.
            </p>
            <p className="text-lg text-slate-600">
              Our extensive network of airline partners and strategic hub locations ensures your cargo 
              reaches its destination quickly and safely, with full tracking visibility throughout the journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Grid */}
      <section className="bg-slate-50 py-16">
        <div className="site-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-slate-900 mb-12 text-center"
          >
            Why Choose Our Air Freight Service
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Time-Critical Solutions",
                description: "Daily departures with express and deferred options to meet your deadlines"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Secure Handling",
                description: "High-value and sensitive cargo handled with maximum security protocols"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Network",
                description: "Access to major hubs worldwide through our airline partnerships"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Real-Time Tracking",
                description: "Proactive notifications and 24/7 visibility of your shipment"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 hover:shadow-glow transition-all duration-300"
              >
                <div className="text-primary-600 mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features Image */}
      <section className="site-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Comprehensive Service Options
            </h2>
            <div className="space-y-4">
              {[
                "Time-critical air solutions with daily departures",
                "Door-to-door and airport-to-airport service models",
                "Temperature-controlled and high-value cargo handling",
                "Real-time tracking with proactive notifications",
                "IATA DG handling for dangerous goods",
                "Customs clearance and documentation support"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image 
              src="/Air_Freight_img3.png" 
              alt="Air Freight Operations" 
              fill 
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Service Details Grid */}
      <section className="bg-white py-16">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card p-6"
            >
              <h3 className="font-semibold text-slate-900 text-xl mb-4">Service Options</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>Express and deferred air</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>Consolidation and direct MAWB</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>DAP/DDP including duties & taxes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>Charter services for urgent cargo</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-6"
            >
              <h3 className="font-semibold text-slate-900 text-xl mb-4">Compliance</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>IATA DG handling where applicable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>Commodity-specific packing and labels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>End-to-end documentation support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>Regulatory compliance expertise</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-6"
            >
              <h3 className="font-semibold text-slate-900 text-xl mb-4">Coverage</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>KUL, PEN, JHB and major Asia & EU hubs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>First-flight out for urgent lanes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>24/7 tracking and exception handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>Global network of partners</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="site-container py-16">
        <FAQAccordion faqs={airFreightFAQs} title="Air Freight FAQs" />
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-600 via-navy-700 to-primary-800 py-16">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Ship by Air?
            </h2>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
              We'll tailor the schedule to your timelines and cargo requirements. Get a customized quote today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/quote" className="btn-primary shadow-glow-lg">
                Get a Quote
              </Link>
              <Link href="/contact" className="btn-ghost">
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Globe, TrendingUp, CheckCircle2, Target, Ship, Plane, Truck } from "lucide-react";

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
    { number: "10+", label: "Years Experience", icon: <Award className="w-5 h-5" /> },
    { number: "5000+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
    { number: "50+", label: "Countries Served", icon: <Globe className="w-5 h-5" /> },
    { number: "1M+", label: "Shipments Delivered", icon: <Ship className="w-5 h-5" /> },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-slate-900 text-white py-16 md:py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="site-container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              About oneGlobe Console
            </h1>
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              We are a leading logistics services provider dedicated to simplifying trade for Malaysian businesses. Our team combines operational expertise with modern technology to give customers control and clarity over their supply chains.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Mission & Vision - Enhanced */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e110_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e110_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
        
        <div className="site-container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Ocean_Freight_img1.jpg"
                  alt="Our Mission in Action"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
              </div>
              
         
           
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
              

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  Mission &{" "}
                  <span className="text-red-600">Vision</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-red-200 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <Ship className="w-4 h-4 text-red-600" />
                    </div>
                    Our Mission
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Enable businesses of all sizes to move goods faster, safer, and more sustainably. We strive to be the trusted logistics partner that empowers your growth through reliable, efficient, and innovative supply chain solutions.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-red-200 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <Globe className="w-4 h-4 text-red-600" />
                    </div>
                    Our Vision
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    To be Southeast Asia's most customer-centric logistics company, recognized for excellence in service, technology innovation, and sustainable operations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-primary-900 via-slate-800 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#3b82f620,transparent_50%)]" />
        
        <div className="relative site-container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Delivering excellence through measurable results</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-300"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-4"
                >
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">{stat.number}</div>
                <div className="text-sm text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e110_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e110_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
        
        <div className="relative site-container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
          

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Core Values That{" "}
              <span className="text-red-600">Drive Us</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-6 md:p-8 border-2 border-slate-200 hover:border-red-300 hover:shadow-2xl transition-all duration-500"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:shadow-xl"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
                
                {/* Hover Border Effect */}
                <motion.div
                  whileHover={{ scaleX: 1 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 origin-left"
                  style={{ scaleX: 0 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
            {/* Enhanced Timeline Section */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e110_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e110_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
        
        <div className="relative site-container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
        

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Milestones &{" "}
              <span className="text-red-600">Achievements</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Key moments that shaped our growth and success story
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12 pb-12 last:pb-0"
              >
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-red-300"></div>
                
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-0 top-0 w-4 h-4 rounded-full bg-red-600 -translate-x-[7px] ring-4 ring-white shadow-lg"
                />

                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 md:p-8 border-2 border-slate-200 hover:border-red-200 hover:shadow-2xl transition-all duration-500 ml-4 md:ml-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full"
                    >
                      <span className="text-lg font-bold text-red-700">{milestone.year}</span>
                    </motion.div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">{milestone.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e110_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e110_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
        
        <div className="relative site-container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
               

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  Expert Team of{" "}
                  <span className="text-red-600">Professionals</span>
                </h2>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                Our team of logistics professionals brings decades of combined experience in freight forwarding, warehousing, customs clearance, and supply chain management.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Licensed customs brokers",
                  "Certified logistics professionals",
                  "24/7 customer support",
                  "Multilingual team",
                  "Industry experts",
                  "Dedicated account managers"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-red-50 transition-colors duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <CheckCircle2 className="w-3 h-3 text-red-600" />
                    </motion.div>
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Air_Freight_img1.jpg"
                  alt="Our Professional Team"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
              </div>
              
              {/* Floating Team Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border border-slate-200"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 mb-1">50+</div>
                  <div className="text-sm font-medium text-slate-600">Team Members</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-primary-900 via-slate-800 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#ef444420,transparent_50%)]" />
        
        <div className="relative site-container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <Target className="w-4 h-4 text-red-400" />
              <span className="text-sm font-semibold text-white/90">Get Started Today</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your{" "}
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
                Logistics?
              </motion.span>
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto"
            >
              Let's discuss how we can help optimize your logistics and grow your business with our expert solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl font-bold text-white transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-white transition-all duration-300 backdrop-blur-sm border border-white/20 text-lg"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, PhoneCall, MapPin, Clock, Send, ArrowRight, CheckCircle2, Building2, Globe2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus({ 
        type: 'success', 
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.' 
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);

    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.' 
      });
    }
  };

  const contactInfo = [
   {
  icon: <MapPin className="w-6 h-6" />,
  title: "Visit Us",
  details: [
    "OneGlobe Consolidators (M) Sdn. Bhd.",
    "No 2 Jalan Kuning, Taman Pelangi",
    "Level 16 Menara Pelangi Johor 80400"
  ],
  color: "from-red-600 to-red-700",
  bgColor: "bg-red-50",
  borderColor: "border-red-100"
},

    {
      icon: <PhoneCall className="w-6 h-6 text-white" />,
      title: "Call Us",
      details: ["+60 7 2831000"],
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-primary-50",
      borderColor: "border-primary-100"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
<<<<<<< HEAD
      details: [ "info@oneglobemy.com"],
=======
      details: ["info@oneglobeconsole.com", "support@oneglobeconsole.com", "sales@oneglobeconsole.com"],
>>>>>>> 8b1764c (fixed spellings)
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"],
      color: "from-emerald-600 to-emerald-700",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-100"
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

  const whyContactUs = [
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "24/7 Customer Support" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Quick Response Time" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Expert Consultation" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Custom Solutions" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Matching Home/About */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-slate-900 text-white py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        {/* Animated Background Dots */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-red-500/10 rounded-full blur-xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <div className="site-container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <Mail className="w-4 h-4 text-red-400" />
              <span className="text-sm font-semibold text-white">We're Here to Help</span>
            </motion.div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Get in Touch with{" "}
              <motion.span
                animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent bg-[length:200%_200%]"
              >
                Our Team
              </motion.span>
            </h1>
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              Have questions about our logistics services? Our team is ready to help you find the perfect solution for your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards - Enhanced Design */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e120_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e120_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
        
        <div className="site-container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Contact Information
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Reach out to us through any of these channels. We're always ready to assist you.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.1 }} 
                whileHover={{ y: -5 }}
                className={`bg-white rounded-2xl p-6 border ${info.borderColor} hover:shadow-xl transition-all duration-300 group`}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  {info.icon}
                </div>
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1.5">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-slate-600 leading-relaxed">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-white">
        <div className="site-container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-lg"
            >
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                  Send Us a Message
                </h2>
                <p className="text-sm md:text-base text-slate-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {/* Why Contact Us */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {whyContactUs.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-2 text-xs md:text-sm text-slate-700"
                  >
                    <span className="text-green-600">{item.icon}</span>
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Status Messages */}
                <AnimatePresence>
                  {status.type !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-4 rounded-xl ${
                        status.type === 'success' 
                          ? 'bg-green-50 border border-green-200 text-green-800' 
                          : status.type === 'error'
                          ? 'bg-red-50 border border-red-200 text-red-800'
                          : 'bg-blue-50 border border-blue-200 text-blue-800'
                      }`}
                    >
                      <p className="text-sm font-medium flex items-center gap-2">
                        {status.type === 'success' && <CheckCircle2 className="w-4 h-4" />}
                        {status.type === 'loading' ? 'Sending your message...' : status.message}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      disabled={status.type === 'loading'}
                      value={formData.name} 
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                      className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      disabled={status.type === 'loading'}
                      value={formData.email} 
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                      className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white" 
                      placeholder="john@company.com" 
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      disabled={status.type === 'loading'}
                      value={formData.phone} 
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                      className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white" 
                      placeholder="+60 12-345 6789" 
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                      Company Name
                    </label>
                    <input 
                      type="text" 
                      id="company" 
                      disabled={status.type === 'loading'}
                      value={formData.company} 
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })} 
                      className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white" 
                      placeholder="Company Inc." 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                    Service Interest
                  </label>
                  <select 
                    id="service" 
                    value={formData.service} 
                    disabled={status.type === 'loading'}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })} 
                    className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea 
                    id="message" 
                    required 
                    rows={5} 
                    disabled={status.type === 'loading'}
                    value={formData.message} 
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                    className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed bg-white" 
                    placeholder="Tell us about your logistics needs..." 
                  />
                </div>

                <motion.button 
                  type="submit" 
                  disabled={status.type === 'loading'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl font-bold transition-all text-sm shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.type === 'loading' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Google Map */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.996897502774!2d103.75560087485849!3d1.4816010617095227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da725d8f25954f%3A0x9b6ecf635f93c125!2sMenara%20Pelangi%2C%2080400%20Johor%20Bahru%2C%20Johor%2C%20Malaysia!5e0!3m2!1sen!2smy!4v1708867023451!5m2!1sen!2smy"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="OneGlobe Console Location"
                  className="w-full h-full"
                />
              </div>

              {/* Quick Contact Card */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-primary-900 via-primary-800 to-slate-900 rounded-2xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                      <Globe2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold">Need Immediate Help?</h3>
                  </div>
                  
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Our support team is available 24/7 for urgent inquiries and shipment tracking assistance.
                  </p>
                  
                  <div className="space-y-4">
                    <motion.a 
                      href="tel:+6072831000"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-white hover:text-red-300 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                        <PhoneCall className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-white/70">Call Now</div>
                        <div className="font-bold">+60 7 2831000</div>
                      </div>
                    </motion.a>

                    <motion.a 
                      href="mailto:info@oneglobeconsole.com"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-white hover:text-red-300 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-white/70">Email Us</div>
<<<<<<< HEAD
                        <div className="font-bold">info@oneglobemy.com</div>
=======
                        <div className="font-bold">info@oneglobeconsole.com</div>
>>>>>>> 8b1764c (fixed spellings)
                      </div>
                    </motion.a>

                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-white group"
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-white/70">Visit Us</div>
                        <div className="font-bold">Menara Pelangi, Johor 80400</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
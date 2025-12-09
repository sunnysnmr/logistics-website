"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, PhoneCall, MapPin, Clock, Send, ArrowRight, 
  CheckCircle2, Globe2 
} from "lucide-react";

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
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Failed to send message");

      setStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });

      setTimeout(() => {
        setStatus({ type: "idle", message: "" });
      }, 5000);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again.",
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
        "Level 16 Menara Pelangi Johor 80400",
      ],
      color: "from-red-600 to-red-700",
      bgColor: "bg-red-50",
      borderColor: "border-red-100",
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-white" />,
      title: "Call Us",
      details: ["+60 7 2831000"],
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-primary-50",
      borderColor: "border-primary-100",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",

      details: ["info@oneglobemy.com"],
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: [
        "Mon - Fri: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed",
      ],
      color: "from-emerald-600 to-emerald-700",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-100",
    },
  ];

  const services = [
    "Air Freight",
    "Sea Freight",
    "Project Cargo",
    "Warehousing",
    "Customs Clearance",
    "Supply Chain Solutions",
    "General Inquiry",
  ];

  const whyContactUs = [
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "24/7 Customer Support" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Quick Response Time" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Expert Consultation" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Custom Solutions" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-slate-900 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="site-container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch with{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Our Team
            </span>
          </h1>
          <p className="text-white/90 text-lg">
            Have questions about our logistics services? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-slate-50">
        <div className="site-container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Contact Information
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl p-6 border ${info.borderColor} shadow-sm hover:shadow-xl transition`}
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl mb-4 flex items-center justify-center text-white shadow`}
                >
                  {info.icon}
                </div>

                <h3 className="text-lg font-bold mb-3">{info.title}</h3>

                {info.details.map((d, i) => (
                  <p key={i} className="text-sm text-slate-600">
                    {d}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-16 bg-white">
        <div className="site-container mx-auto px-4 grid lg:grid-cols-2 gap-12">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>

            {/* Why Contact */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {whyContactUs.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <span className="text-green-600">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            {/* Status */}
            <AnimatePresence>
              {status.type !== "idle" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-4 rounded-xl mb-4 ${
                    status.type === "success"
                      ? "bg-green-50 border border-green-200 text-green-800"
                      : status.type === "error"
                      ? "bg-red-50 border border-red-200 text-red-800"
                      : "bg-blue-50 border border-blue-200 text-blue-800"
                  }`}
                >
                  {status.message}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={formData.name}
                  disabled={status.type === "loading"}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="input"
                />

                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  disabled={status.type === "loading"}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="input"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  disabled={status.type === "loading"}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="input"
                />

                <input
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  disabled={status.type === "loading"}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="input"
                />
              </div>

              <select
                value={formData.service}
                disabled={status.type === "loading"}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                className="input"
              >
                <option value="">Select a service...</option>
                {services.map((s, i) => (
                  <option key={i}>{s}</option>
                ))}
              </select>

              <textarea
                rows={5}
                placeholder="Message *"
                required
                value={formData.message}
                disabled={status.type === "loading"}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="input resize-none"
              />

              <motion.button
                disabled={status.type === "loading"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-red-600 text-white rounded-xl py-4 flex items-center justify-center gap-2 font-bold"
              >
                {status.type === "loading" ? (
                  <>
                    <ArrowRight className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Map + Quick Contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Map */}
            <div className="h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.996897502774!2d103.7556!3d1.4816"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-slate-900 text-white rounded-2xl p-8 relative">
              <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>

              <p className="text-white/90 mb-6">
                Our support team is available 24/7 for urgent inquiries.
              </p>

              <div className="space-y-4">

                <a
                  href="tel:+6072831000"
                  className="flex items-center gap-3 group"
                >
                  <div className="icon-box">
                    <PhoneCall />
                  </div>
                  <div>
                    <div className="text-xs text-white/70">Call Now</div>
                    <div className="font-bold">+60 7 2831000</div>
                  </div>
                </a>

                <a
                  href="mailto:info@oneglobemy.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="icon-box">
                    <Mail />
                  </div>
                  <div>
                    <div className="text-xs text-white/70">Email Us</div>
                    <div className="font-bold">info@oneglobemy.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div className="icon-box">
                    <MapPin />
                  </div>
                  <div>
                    <div className="text-xs text-white/70">Visit Us</div>
                    <div className="font-bold">Menara Pelangi, Johor 80400</div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/* Utility class (add to global CSS or use tailwind @apply)
.input {
  @apply w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:ring-2 
         focus:ring-red-500 focus:border-red-500 transition-all bg-white;
}
.icon-box {
  @apply w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center 
         group-hover:bg-white/20 transition;
}
*/

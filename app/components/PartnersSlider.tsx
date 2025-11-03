"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Award } from "lucide-react";

const partners = [
  { name: "DHL", color: "text-slate-700", bgColor: "bg-white" },
  { name: "Maersk", color: "text-slate-700", bgColor: "bg-white" },
  { name: "FedEx", color: "text-slate-700", bgColor: "bg-white" },
  { name: "UPS", color: "text-slate-700", bgColor: "bg-white" },
  { name: "TNT", color: "text-slate-700", bgColor: "bg-white" },
  { name: "COSCO", color: "text-slate-700", bgColor: "bg-white" },
  { name: "MSC", color: "text-slate-700", bgColor: "bg-white" },
  { name: "Hapag-Lloyd", color: "text-slate-700", bgColor: "bg-white" },
  { name: "CMA CGM", color: "text-slate-700", bgColor: "bg-white" },
  { name: "Evergreen", color: "text-slate-700", bgColor: "bg-white" },
  { name: "DB Schenker", color: "text-slate-700", bgColor: "bg-white" },
  { name: "Kuehne+Nagel", color: "text-slate-700", bgColor: "bg-white" },
];

const duplicatedPartners = [...partners, ...partners, ...partners];

export default function PartnersSlider() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e120_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e120_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#3b82f608,transparent_50%),radial-gradient(circle_at_70%_60%,#64748b08,transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-10 lg:mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200 backdrop-blur-sm mb-4 shadow-sm">
          <Award className="w-4 h-4 text-red-600" />
          <span className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
            Our Partners
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Trusted Global{" "}
          <span className="text-red-600">Network</span>
        </h2>
        
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
          Partnering with the world&apos;s leading shipping lines and logistics providers
        </p>
      </div>

      <div 
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        role="region"
        aria-label="Partner companies slider"
      >
        <div className="flex w-full px-4 sm:px-0">
          <motion.div
            className="flex gap-4 sm:gap-5 md:gap-6 items-center whitespace-nowrap py-4 md:py-6"
            animate={{
              x: isPaused ? undefined : ["0%", "-33.33%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center min-w-[140px] sm:min-w-[160px] md:min-w-[180px] group relative"
              >
                <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/5 rounded-xl blur-xl transition-all duration-300" />
                
                <div
                  className={`relative ${partner.bgColor} backdrop-blur-sm ${partner.color} text-sm md:text-base font-bold px-6 md:px-7 py-4 rounded-xl shadow-md border border-slate-200/80 hover:border-red-400/70 hover:shadow-xl group-hover:scale-105 transition-all duration-300 cursor-default w-full text-center overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-red-50/40 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mr-8 -mt-8" />
                  
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <span className="relative">{partner.name}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute inset-y-0 left-0 w-24 sm:w-32 md:w-40 bg-gradient-to-r from-slate-50 via-slate-50/80 via-slate-50/40 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-32 md:w-40 bg-gradient-to-l from-slate-50 via-slate-50/80 via-slate-50/40 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}

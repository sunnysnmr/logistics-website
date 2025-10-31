"use client";

import { motion } from "framer-motion";

// Placeholder partner logos - in real implementation, these would be actual company logos
const partners = [
  { name: "DHL", color: "text-red-600" },
  { name: "Maersk", color: "text-blue-600" },
  { name: "FedEx", color: "text-purple-600" },
  { name: "UPS", color: "text-amber-600" },
  { name: "TNT", color: "text-orange-600" },
  { name: "COSCO", color: "text-navy-700" },
  { name: "MSC", color: "text-blue-700" },
  { name: "Hapag", color: "text-red-700" },
];

// Duplicate the array to create seamless infinite scroll
const duplicatedPartners = [...partners, ...partners];

export default function PartnersSlider() {
  return (
    <section className="py-6 md:py-10 bg-white border-y border-slate-200 overflow-hidden">
      <div className="site-container mb-4 md:mb-6 px-4">
        <h3 className="text-center text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
          Trusted Partners & Carriers
        </h3>
        <p className="text-center text-slate-600 text-xs md:text-sm">
          Working with the world's leading shipping lines and logistics providers
        </p>
      </div>

      <div className="relative overflow-hidden max-w-full">
        <div className="flex w-full">
          <motion.div
            className="flex gap-8 md:gap-16 items-center whitespace-nowrap"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-24 md:w-32 h-12 md:h-16"
              >
                <div
                  className={`text-lg md:text-2xl font-bold ${partner.color} opacity-60 hover:opacity-100 transition-opacity duration-300`}
                >
                  {partner.name}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}

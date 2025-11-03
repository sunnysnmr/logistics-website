"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Package, Globe, Users, Award, TrendingUp, Clock } from "lucide-react";

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
  icon: React.ReactNode;
  gradient: string;
  description: string;
}

const stats: StatItem[] = [
  {
    value: 50000,
    label: "Shipments Delivered",
    suffix: "+",
    icon: <Package className="w-5 h-5" strokeWidth={1.5} />,
    gradient: "from-red-600 to-red-700",
    description: "Successfully completed deliveries"
  },
  {
    value: 85,
    label: "Countries Served",
    suffix: "+",
    icon: <Globe className="w-5 h-5" strokeWidth={1.5} />,
    gradient: "from-slate-600 to-slate-700",
    description: "Global logistics network"
  },
  {
    value: 500,
    label: "Happy Clients",
    suffix: "+",
    icon: <Users className="w-5 h-5" strokeWidth={1.5} />,
    gradient: "from-red-600 to-red-700",
    description: "Trusted business partners"
  },
  {
    value: 15,
    label: "Years in Business",
    suffix: "+",
    icon: <Award className="w-5 h-5" strokeWidth={1.5} />,
    gradient: "from-slate-600 to-slate-700",
    description: "Industry expertise"
  },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2500;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-3xl sm:text-3xl md:text-4xl font-bold">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e120_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e120_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#ef444408,transparent_50%),radial-gradient(circle_at_70%_60%,#64748b08,transparent_50%)]" />

      <div className="relative site-container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-12 lg:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Delivering Excellence{" "}
            <span className="text-red-600">
              Worldwide
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Trusted by <span className="font-semibold text-slate-900">500+ businesses</span> across the globe
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto mb-10 md:mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 120
              }}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-red-500/5 rounded-xl blur-lg group-hover:blur-xl group-hover:opacity-100 transition-all duration-300 opacity-0" />
              
              <div className="relative bg-white/90 backdrop-blur-sm rounded-xl border border-slate-200/80 p-6 sm:p-5 md:p-6 overflow-hidden hover:border-red-400/60 hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f920_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f920_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute -top-20 -right-20 w-40 h-40 opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500">
                  <div className="w-full h-full bg-red-500 rounded-full blur-2xl" />
                </div>

                <motion.div 
                  className="relative z-10"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.gradient} mb-4 shadow-md group-hover:shadow-lg transition-all duration-300`}>
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>

                  <div>
                    <div className="text-slate-900 mb-2">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                      {stat.label}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="border-t border-slate-200 pt-8 md:pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center gap-2.5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center mb-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-slate-900 font-bold text-xl">99.9%</span>
                  <span className="text-slate-600 text-xs sm:text-sm font-medium">Uptime Guarantee</span>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-2.5 sm:border-l sm:border-slate-200">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center mb-1">
                  <Clock className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-slate-900 font-bold text-xl">24/7</span>
                  <span className="text-slate-600 text-xs sm:text-sm font-medium">Expert Support</span>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-2.5 sm:border-l sm:border-slate-200">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center mb-1">
                  <Award className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-slate-900 font-bold text-xl">ISO 9001</span>
                  <span className="text-slate-600 text-xs sm:text-sm font-medium">Certified Quality</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

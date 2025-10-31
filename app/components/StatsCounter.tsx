"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Package, Globe, Users, Award } from "lucide-react";

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  {
    value: 50000,
    label: "Shipments Delivered",
    suffix: "+",
    icon: <Package className="w-8 h-8" />,
  },
  {
    value: 85,
    label: "Countries Served",
    suffix: "+",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    value: 500,
    label: "Happy Clients",
    suffix: "+",
    icon: <Users className="w-8 h-8" />,
  },
  {
    value: 10,
    label: "Years in Business",
    suffix: "+",
    icon: <Award className="w-8 h-8" />,
  },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-600">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-10 md:py-14 bg-gradient-to-br from-primary-50 via-white to-navy-50">
      <div className="site-container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2 md:mb-3 px-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto px-4">
            Our commitment to excellence has earned us the trust of hundreds of companies across the globe.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-4 md:p-5 text-center hover:shadow-glow transition-shadow duration-300"
            >
              <div className="flex justify-center mb-2 md:mb-3 text-primary-600">
                {stat.icon}
              </div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-xs md:text-sm text-slate-600 mt-1.5 md:mt-2 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

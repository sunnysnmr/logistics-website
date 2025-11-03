"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  position: string;
  company: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "onGlobe Console has transformed our supply chain operations. Their real-time tracking and reliability have been game-changing for our business.",
    name: "Sarah Tan",
    position: "Supply Chain Director",
    company: "TechMart Malaysia",
  },
  {
    id: 2,
    quote: "Outstanding service! The team handled our complex project cargo with expertise and professionalism. Highly recommended for international logistics.",
    name: "Ahmad Rahman",
    position: "Operations Manager",
    company: "BuildCorp Industries",
  },
  {
    id: 3,
    quote: "Fast, efficient, and transparent. Their air freight services have consistently delivered on time, helping us meet our critical deadlines.",
    name: "Michelle Lee",
    position: "Procurement Lead",
    company: "Global Electronics Sdn Bhd",
  },
  {
    id: 4,
    quote: "The customs clearance expertise of onGlobe Console is unmatched. They've simplified what used to be a complex process for us.",
    name: "David Wong",
    position: "CEO",
    company: "Import Solutions Asia",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
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
         

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            What Our Clients{" "}
            <span className="text-red-600">Say</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
            Real feedback from businesses who trust us with their logistics needs
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <div className="relative bg-white/90 backdrop-blur-sm rounded-xl border border-slate-200/80 p-6 md:p-10 overflow-hidden shadow-lg mx-4 sm:mx-6 lg:mx-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f920_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f920_1px,transparent_1px)] bg-[size:20px_20px] opacity-50" />
            
            {/* Large quote icon background */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-5">
              <Quote className="w-16 h-16 md:w-20 md:h-20 text-red-600" />
            </div>
            
            {/* Navigation buttons - positioned outside the card */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 -right-4 sm:-left-6 sm:-right-6 md:-left-8 md:-right-8 flex justify-between pointer-events-none z-20">
              <button
                onClick={handlePrev}
                className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-slate-200 shadow-lg hover:border-red-400 hover:shadow-xl transition-all flex items-center justify-center text-slate-700 hover:text-red-600 hover:scale-110 duration-300 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:-translate-x-0.5" />
              </button>
              <button
                onClick={handleNext}
                className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-slate-200 shadow-lg hover:border-red-400 hover:shadow-xl transition-all flex items-center justify-center text-slate-700 hover:text-red-600 hover:scale-110 duration-300 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                {/* Star rating */}
                <div className="flex gap-1 mb-4 justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Star className="w-4 h-4 md:w-5 md:h-5 fill-red-500 text-red-500" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial quote */}
                <blockquote className="text-base md:text-lg lg:text-xl text-slate-700 mb-6 md:mb-8 leading-relaxed text-center md:text-left px-2 sm:px-0">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                {/* Client info */}
                <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white font-bold text-xl md:text-2xl flex-shrink-0 shadow-md">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-base md:text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-slate-600">
                      {testimonials[currentIndex].position}
                    </div>
                    <div className="text-sm text-red-600 font-semibold">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  index === currentIndex
                    ? "bg-red-600 w-8 shadow-sm"
                    : "bg-slate-300 hover:bg-slate-400 w-2"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional decorative elements */}
        <motion.div
          className="absolute bottom-10 left-10 w-6 h-6 bg-red-400/20 rounded-full blur-sm"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-10 right-10 w-4 h-4 bg-blue-400/20 rounded-full blur-sm"
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </div>
    </section>
  );
}
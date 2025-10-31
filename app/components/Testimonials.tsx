"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
    <section className="py-10 md:py-14 bg-slate-50">
      <div className="site-container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2 md:mb-3">
            What Our Clients Say
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto px-4">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="card p-6 md:p-8 relative overflow-hidden">
            {/* Quote icon - positioned better to avoid overlap */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 opacity-10">
              <Quote className="w-12 h-12 md:w-16 md:h-16 text-primary-600" />
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <blockquote className="text-sm md:text-base lg:text-lg text-slate-700 mb-4 md:mb-6 italic leading-relaxed pr-12 md:pr-16">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg md:text-xl flex-shrink-0">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm md:text-base">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-xs md:text-sm text-slate-600">
                      {testimonials[currentIndex].position}
                    </div>
                    <div className="text-xs md:text-sm text-primary-600 font-medium">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 md:left-4 md:right-4 flex justify-between pointer-events-none">
              <button
                onClick={handlePrev}
                className="pointer-events-auto w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg hover:bg-primary-50 transition-colors flex items-center justify-center text-primary-600 hover:scale-110 transform duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={handleNext}
                className="pointer-events-auto w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg hover:bg-primary-50 transition-colors flex items-center justify-center text-primary-600 hover:scale-110 transform duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-4 md:mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary-600 w-6 md:w-8"
                    : "bg-slate-300 hover:bg-slate-400 w-2 md:w-3"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const slides = [
  {
    type: 'video',
    title: "Trusted logistics for Malaysia — air, sea, and supply chain.",
    desc: "We help Malaysian businesses plan, track, and optimise shipments with reliability, transparency, and cost-efficiency.",
    btn: [
      { text: "Explore Services", href: "/services" },
      { text: "Contact Sales", href: "/contact" },
    ],
    video: "/background_Video1.mp4",
  },
  {
    type: 'image',
    title: "Air Freight",
    desc: "Swift delivery and meticulous handling for time-critical cargo.",
    img: "/Air_Freight_img1.jpg",
    btn: [{ text: "Read More", href: "/air-freight" }],
  },
  {
    type: 'image',
    title: "Sea Freight",
    desc: "Cost-effective FCL/LCL with reliable schedules to Malaysian ports.",
    img: "/Ocean_Freight_img1.jpg",
    btn: [{ text: "Read More", href: "/sea-freight" }],
  },
  {
    type: 'image',
    title: "Project Cargo",
    desc: "Heavy, oversized and complex shipments, executed end-to-end.",
    img: "/project_cargo_img1.jpg",
    btn: [{ text: "Read More", href: "/project-cargo" }],
  },
  {
    type: 'image',
    title: "Warehousing",
    desc: "Secure storage and efficient distribution across Malaysia.",
    img: "/wherehouse_img3.jpg",
    btn: [{ text: "Read More", href: "/warehousing" }],
  },
  {
    type: "image",
    title: "Customs Clearance",
    desc: "Expedited clearance with Malaysian compliance expertise.",
    img: "/Customs_Clearance_img2.jpg",
    btn: [{ text: "Read More", href: "/customs-clearance" }],
  },
  {
    type: "image",
    title: "Supply Chain",
    desc: "From procurement to last-mile, coordinated for efficiency.",
    img: "/supply_chain_img1.png",
    btn: [{ text: "Read More", href: "/supply-chain" }],
  }
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (slides[index].type === 'image') {
      timeout = setTimeout(next, 5000);
    } else if (slides[index].type === 'video' && videoRef.current) {
      const vid = videoRef.current;
      const handleEnded = () => next();
      vid.onended = handleEnded;
      return () => {
        vid.onended = null;
        if (timeout) clearTimeout(timeout);
      };
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [index]);

  return (
    <main>
      <section className="relative h-[686px] w-full overflow-hidden mb-12 rounded-2xl shadow-lg">
        {slides.map((s, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center ${
              idx === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="absolute inset-0">
              {s.type === "video" ? (
                <video
                  key={index === idx ? `video-slide-${index}` : undefined}
                  ref={index === idx ? videoRef : null}
                  src={s.video}
                  autoPlay
                  loop={false}
                  muted
                  className="w-full h-full object-cover"
                  poster={slides[1].img}
                />
              ) : (
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="relative z-20 w-full flex flex-col items-start justify-center px-8 md:px-20 py-12 text-white max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">{s.title}</h1>
              <p className="text-lg md:text-xl mb-6 drop-shadow-md">{s.desc}</p>
              <div className="flex gap-4">
                {s.btn.map((b, i) => (
                  <Link
                    key={i}
                    href={b.href}
                    className="px-6 py-2 rounded-lg font-semibold shadow transition text-white"
                    style={{
                      background: "linear-gradient(90deg, var(--primary-600), var(--primary-500))"
                    }}
                  >
                    {b.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
        <button
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white text-black rounded-full p-3 shadow-lg z-30"
          onClick={prev} aria-label="Prev"
        >&#8592;</button>
        <button
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white text-black rounded-full p-3 shadow-lg z-30"
          onClick={next} aria-label="Next"
        >&#8594;</button>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, i) => (
            <span key={i}
              onClick={() => setIndex(i)}
              className={`w-4 h-4 rounded-full border-[2px] border-white cursor-pointer transition ${
                i === index ? "bg-blue-600" : "bg-white/60"
              }`}
            ></span>
          ))}
        </div>
      </section>
      <section className="site-container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 gap-5">
          {[{
            slug: 'air-freight',
            title: 'Air Freight',
            desc: 'Swift delivery and meticulous handling for time-critical cargo.'
          },{
            slug: 'sea-freight',
            title: 'Sea Freight',
            desc: 'Cost-effective FCL/LCL with reliable schedules to Malaysian ports.'
          },{
            slug: 'project-cargo',
            title: 'Project Cargo',
            desc: 'Heavy, oversized and complex shipments, executed end-to-end.'
          },{
            slug: 'warehousing',
            title: 'Warehousing',
            desc: 'Secure storage and efficient distribution across Malaysia.'
          },{
            slug: 'customs-clearance',
            title: 'Customs Clearance',
            desc: 'Expedited clearance with Malaysian compliance expertise.'
          },{
            slug: 'supply-chain',
            title: 'Supply Chain',
            desc: 'From procurement to last-mile, coordinated for efficiency.'
          }].map((s, i) => (
            <div key={s.slug} className="service-row anim-fade-up" style={{animationDelay: `${i*70}ms`}}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-slate-900 text-xl">{s.title}</h3>
                  <p className="text-sm text-[var(--muted)] mt-1">{s.desc}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Link href={`/${s.slug}`} className="btn-primary">Read more</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

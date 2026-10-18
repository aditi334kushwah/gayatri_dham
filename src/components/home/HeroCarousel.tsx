'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Play, Heart, ArrowRight } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    bg: '/images/hero.jfif',
    theme: 'green-spotify',
    badge: 'GAYATRI DHAM AUDIO SANGRAH',
    headingMain: 'LISTEN to soulful',
    headingDevotional: 'HEALING CHANTS',
    headingSub: '& NATUROPATHY PRAVACHAN',
    desc: 'Listen to the timeless discourses of Pt. Shriram Sharma Acharya Ji and therapeutic Gayatri Rhythms for holistic mental well-being.',
    btnText: 'Listen Now!',
    btnLink: '#audio-pravachan',
    iconColor: '#10b981',
  },
  {
    id: 2,
    bg: '/images/hero2.jfif',
    theme: 'vedic-nature',
    badge: 'YUG NIRMAN YOJANA • SENDHWA',
    headingMain: 'Return to nature.',
    headingDevotional: 'RESTORE YOUR',
    headingSub: 'NATURAL RHYTHM',
    desc: 'Complete holistic wellness combining Panchamahabhuta therapies (Earth, Water, Fire, Air, Ether) and Yogic Sadhana in Madhya Pradesh.',
    btnText: 'Explore Treatments',
    btnLink: '/treatments',
    iconColor: '#f59e0b',
  },
  {
    id: 3,
    bg: '/images/hero3.jfif',
    theme: 'shibir-highlight',
    badge: '7-DAY RESIDENTIAL RETREAT',
    headingMain: 'Join the Upcoming',
    headingDevotional: 'KAYA KALPA',
    headingSub: 'DETOX CAMP 2026',
    desc: 'Supervised natural detoxification, organic satvik nutrition, mud baths, and guided meditation amidst the quiet sanctuary of Gayatri Dham.',
    btnText: 'Book Shibir Seat',
    btnLink: '/camps',
    iconColor: '#3b82f6',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const slide = SLIDES[currentSlide];

  return (
    <div className="relative w-full h-[480px] sm:h-[520px] overflow-hidden bg-[#0d2818] select-none text-white">
      {/* Background Images */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${s.bg})`,
            opacity: i === currentSlide ? 1 : 0,
          }}
        />
      ))}
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#032014]/90 via-[#0b3b24]/80 to-[#041c11]/70" />
      
      {/* Organic circular soundwave ripples (Matching Screenshot 355 green wave) */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-emerald-500/20 blur-sm pointer-events-none" />
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full border border-emerald-400/10 pointer-events-none" />

      {/* Main Slide Content */}
      <div className="relative max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Left Side: 3D Disc Graphic / Spotify Style Visual[cite: 1] */}
        <div className="hidden lg:flex items-center justify-center w-5/12">
          <div className="relative group">
            {/* Glowing Backdrop */}
            <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-2xl group-hover:bg-emerald-500/30 transition duration-500" />
            
            {/* 3D Round Disc */}
            <div className="relative w-72 h-72 rounded-full bg-gradient-to-tr from-emerald-950 via-emerald-800 to-teal-400 p-2 shadow-2xl flex items-center justify-center border-4 border-emerald-300/40">
              <div className="w-full h-full rounded-full bg-[#0a291a] flex flex-col items-center justify-center text-center p-6 border border-emerald-500/30">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-3">
                  <Play className="w-10 h-10 text-emerald-300 fill-emerald-300 ml-1" />
                </div>
                <span className="text-xs uppercase tracking-widest text-emerald-300 font-bold">Gayatri Dhun</span>
                <span className="text-[11px] text-gray-300 mt-1">Nature Wellness Audio</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Bold Typography & Dynamic Content */}
        <div className="w-full lg:w-7/12 pl-0 lg:pl-12 flex flex-col items-start justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            {slide.badge}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight font-sans">
            {slide.headingMain}{' '}
            <span className="text-emerald-300 underline decoration-amber-400/80 decoration-4">
              {slide.headingDevotional}
            </span>{' '}
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl text-emerald-100 font-semibold">
              {slide.headingSub}
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-emerald-100/90 max-w-xl leading-relaxed">
            {slide.desc}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={slide.btnLink}
              className="bg-emerald-500 hover:bg-emerald-400 text-[#042012] font-black text-sm uppercase px-8 py-3.5 rounded-full shadow-lg hover:shadow-emerald-500/30 transition duration-200 flex items-center gap-2"
            >
              {slide.btnText} <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/donate"
              className="bg-transparent hover:bg-white/10 text-white border border-white/40 font-bold text-sm uppercase px-6 py-3.5 rounded-full transition duration-200 flex items-center gap-2"
            >
              <Heart className="w-4 h-4 text-amber-400" /> Support Seva
            </Link>
          </div>
        </div>
      </div>

      {/* Manual Slide Controls */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2.5 rounded-full transition border border-white/20 backdrop-blur-sm"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2.5 rounded-full transition border border-white/20 backdrop-blur-sm"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-amber-400 w-8' : 'bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
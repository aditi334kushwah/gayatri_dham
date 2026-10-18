'use client';
import Link from 'next/link';
import { CheckCircle2, Clock, Calendar, ArrowRight, ChevronDown, AlertCircle, Lightbulb, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import TREATMENTS from '@/data/treatmentsData';

const COLOR_MAP: Record<string, { badge: string; accent: string; btn: string; border: string; bg: string }> = {
  indigo: { badge: 'bg-indigo-100 text-indigo-800 border-indigo-200', accent: 'text-indigo-700', btn: 'bg-indigo-700 hover:bg-indigo-800', border: 'border-indigo-400', bg: 'bg-indigo-50' },
  amber:  { badge: 'bg-amber-100 text-amber-800 border-amber-200',   accent: 'text-amber-700',  btn: 'bg-amber-600 hover:bg-amber-700',   border: 'border-amber-400',  bg: 'bg-amber-50'  },
  blue:   { badge: 'bg-blue-100 text-blue-800 border-blue-200',       accent: 'text-blue-700',   btn: 'bg-blue-700 hover:bg-blue-800',     border: 'border-blue-400',   bg: 'bg-blue-50'   },
  orange: { badge: 'bg-orange-100 text-orange-800 border-orange-200', accent: 'text-orange-700', btn: 'bg-orange-600 hover:bg-orange-700', border: 'border-orange-400', bg: 'bg-orange-50' },
  green:  { badge: 'bg-green-100 text-green-800 border-green-200',    accent: 'text-green-700',  btn: 'bg-green-700 hover:bg-green-800',   border: 'border-green-400',  bg: 'bg-green-50'  },
};

export default function TreatmentDetailPage({ params }: { params: { slug: string } }) {
  const treatment = TREATMENTS.find((t) => t.slug === params.slug);
  if (!treatment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
        <div className="text-center">
          <h1 className="text-2xl font-serif font-black text-stone-900">Treatment Not Found</h1>
          <Link href="/treatments" className="mt-4 inline-block bg-[#1b3d75] text-white px-6 py-2 rounded-lg text-sm font-bold">Back to Treatments</Link>
        </div>
      </div>
    );
  }

  const c = COLOR_MAP[treatment.elementColor] ?? COLOR_MAP.indigo;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800">

      {/* Hero Banner */}
      <div className="relative h-[340px] sm:h-[420px] overflow-hidden">
        <img src={treatment.heroImage} alt={treatment.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 max-w-4xl">
          <Link href="/treatments" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-xs font-bold uppercase tracking-wider mb-4 transition">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Treatments
          </Link>
          <span className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider w-fit mb-3 ${c.badge}`}>
            {treatment.element}
          </span>
          <h1 className="text-2xl sm:text-4xl font-serif font-black text-white leading-tight">{treatment.name}</h1>
          <p className="text-sm text-white/80 font-medium mt-1">{treatment.hindiName}</p>
          <p className="text-base sm:text-lg text-amber-300 font-semibold italic mt-2">"{treatment.tagline}"</p>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="bg-[#1b3d75] text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-300 shrink-0" />
            <div><div className="text-white/60 uppercase tracking-wider text-[10px]">Duration</div><div className="font-bold">{treatment.duration}</div></div>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-300 shrink-0" />
            <div><div className="text-white/60 uppercase tracking-wider text-[10px]">Sessions</div><div className="font-bold">{treatment.sessions}</div></div>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <div><div className="text-white/60 uppercase tracking-wider text-[10px]">Seva Contribution</div><div className="font-bold">{treatment.sevaContribution}</div></div>
          </div>
          <div className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-amber-300 shrink-0" />
            <div><div className="text-white/60 uppercase tracking-wider text-[10px]">Conditions Treated</div><div className="font-bold">{treatment.conditions.length}+ Ailments</div></div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-10">

          {/* Overview */}
          <section>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ea7b11]">Overview</span>
            <h2 className="text-xl sm:text-2xl font-serif font-black text-stone-900 mt-1 mb-3">What is {treatment.name}?</h2>
            <p className="text-sm text-stone-600 leading-relaxed">{treatment.overview}</p>
          </section>

          {/* How It Works */}
          <section className={`rounded-xl border p-6 ${c.bg} ${c.border}`}>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ea7b11]">Mechanism</span>
            <h2 className="text-lg font-serif font-black text-stone-900 mt-1 mb-3">How It Works</h2>
            <p className="text-sm text-stone-700 leading-relaxed">{treatment.howItWorks}</p>
          </section>

          {/* Step-by-Step Process */}
          <section>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ea7b11]">Protocol</span>
            <h2 className="text-lg font-serif font-black text-stone-900 mt-1 mb-5">Step-by-Step Session Process</h2>
            <div className="space-y-4">
              {treatment.steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black shrink-0 mt-0.5 ${c.btn}`}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">{step.title}</h4>
                    <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ea7b11]">Clinical Benefits</span>
            <h2 className="text-lg font-serif font-black text-stone-900 mt-1 mb-4">Therapeutic Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {treatment.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-2.5 bg-white border border-stone-200 rounded-lg p-3 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-stone-700 leading-snug">{b}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Contraindications & Vaidya Tip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-rose-600" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-rose-700">Contraindications</span>
              </div>
              <p className="text-xs text-rose-800 leading-relaxed">{treatment.contraindications}</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-emerald-700" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">Vaidya's Tip</span>
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed italic">"{treatment.vaidyaTip}"</p>
            </div>
          </div>

          {/* FAQs */}
          <section>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ea7b11]">FAQs</span>
            <h2 className="text-lg font-serif font-black text-stone-900 mt-1 mb-4">Common Questions</h2>
            <div className="space-y-2">
              {treatment.faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-stone-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left p-4 flex justify-between items-center gap-3 hover:bg-stone-50 transition"
                  >
                    <span className="font-bold text-sm text-stone-900">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180 text-[#ea7b11]' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 text-xs text-stone-600 leading-relaxed border-t border-stone-100 pt-3 bg-stone-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">

          {/* Book CTA */}
          <div className="bg-[#1b3d75] text-white rounded-xl p-6 shadow-lg">
            <h3 className="font-serif font-black text-lg mb-1">Book This Treatment</h3>
            <p className="text-xs text-blue-200 mb-4">Consult our resident Vaidya for a personalized prescription.</p>
            <a
              href="tel:+919425088219"
              className="block w-full text-center bg-[#ea7b11] hover:bg-[#d66e0b] text-white font-black text-sm uppercase py-3 rounded-lg transition mb-3"
            >
              Call: +91 94250 88219
            </a>
            <a
              href="https://wa.me/919425088219"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-sm uppercase py-3 rounded-lg transition"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Conditions Treated */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs">
            <h4 className="font-bold text-sm text-stone-900 mb-3 uppercase tracking-wider">Conditions Treated</h4>
            <div className="flex flex-wrap gap-2">
              {treatment.conditions.map((c, i) => (
                <span key={i} className="text-[11px] font-semibold bg-stone-100 text-stone-700 border border-stone-200 px-2.5 py-1 rounded-full">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Other Treatments */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs">
            <h4 className="font-bold text-sm text-stone-900 mb-3 uppercase tracking-wider">Other Treatments</h4>
            <div className="space-y-2">
              {TREATMENTS.filter((t) => t.slug !== treatment.slug).map((t) => (
                <Link
                  key={t.slug}
                  href={`/treatments/${t.slug}`}
                  className="flex items-center justify-between p-2.5 rounded-lg hover:bg-stone-50 border border-stone-100 transition group"
                >
                  <div>
                    <div className="text-xs font-bold text-stone-900 group-hover:text-[#244c8c] transition">{t.name}</div>
                    <div className="text-[10px] text-stone-500">{t.element}</div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#244c8c] transition" />
                </Link>
              ))}
            </div>
          </div>

          {/* Address */}
          <div className={`rounded-xl border p-5 ${c.bg} ${c.border}`}>
            <h4 className="font-bold text-sm text-stone-900 mb-2 uppercase tracking-wider">Visit Us</h4>
            <p className="text-xs text-stone-700 leading-relaxed">
              माँ भगवती योगनिसर्गोपचार केंद्र<br />
              Gayatri Dham, NH-52, Sendhwa<br />
              Dist. Barwani – 451666 (M.P.)
            </p>
            <p className="text-xs font-bold text-[#1b3d75] mt-2">OPD: 7:00 AM – 6:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

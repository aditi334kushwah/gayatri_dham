import HeroCarousel from '@/components/home/HeroCarousel';
import FeaturesStrip from '@/components/home/FeaturesStrip';
import TreatmentsSection from '@/components/home/TreatmentsSection';
import DonationSidebarSection from '@/components/home/DonationSidebarSection';
import Link from 'next/link';
import { Calendar, Volume2, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with Carousel (Screenshot 355 inspired) */}
      <HeroCarousel />

      {/* 2. 3-Pillar Foundation Bar (Screenshot 364 inspired) */}
      <FeaturesStrip />

      {/* 3. Treatments Section (Screenshot 363 inspired) */}
      <TreatmentsSection />

      {/* 4. Camps & Upcoming Events Section (Screenshot 356 inspired) */}
      <section className="py-14 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-3">
            <div>
              <h3 className="font-serif font-bold text-xl text-[#1b3d75] uppercase tracking-wide">
                UPCOMING HEALTH CAMPS & SHIBIRS
              </h3>
              <p className="text-xs text-gray-500">Supervised 7-day holistic living and detox programs</p>
            </div>
            <Link
              href="/camps"
              className="bg-[#244c8c] hover:bg-[#1b3d75] text-white text-xs font-bold uppercase px-3 py-1.5 rounded"
            >
              View More
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'Kaya Kalpa & Fasting Shibir',
                date: '10 Oct - 17 Oct 2026',
                desc: 'Specialized herbal decoctions, complete bowel detox, and guided spiritual swadhyaya at Sendhwa campus.',
              },
              {
                title: 'Diabetes & Hypertension Care Camp',
                date: '25 Oct - 31 Oct 2026',
                desc: 'Natural glycemic control through mud therapy, hydro immersion baths, and sattvic alkaline dietary plans.',
              },
              {
                title: 'Spine & Joint Pain Relief Camp',
                date: '08 Nov - 14 Nov 2026',
                desc: 'Targeted medicinal spinal sprays, Kati Basti, and gentle therapeutic yoga for lumbar and cervical issues.',
              },
              {
                title: 'Student Memory & Pranayama Camp',
                date: '20 Nov - 25 Nov 2026',
                desc: 'Gayatri mantra meditation, Trataka, and memory strengthening methods for youth based on Yug Nirman vision.',
              },
            ].map((camp, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-4 rounded flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#ea7b11]">
                    <Calendar className="w-3.5 h-3.5" /> {camp.date}
                  </span>
                  <h4 className="font-bold text-sm text-[#1b3d75] mt-1">{camp.title}</h4>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">{camp.desc}</p>
                </div>
                <Link
                  href="/camps"
                  className="mt-4 block text-center border border-[#244c8c] text-[#244c8c] hover:bg-[#244c8c] hover:text-white text-xs font-bold py-1.5 rounded transition"
                >
                  Register Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Donation and Timings / Guest House Sidebar (Screenshot 358 inspired) */}
      <DonationSidebarSection />

      {/* 6. Audio Sangrah / Bhajans Section (Screenshot 359 inspired) */}
      <section id="audio-pravachan" className="py-14 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-3">
            <div>
              <h3 className="font-serif font-bold text-xl text-[#1b3d75] uppercase tracking-wide flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-emerald-700" /> BHAJANS & HEALTH DISCOURSES
              </h3>
              <p className="text-xs text-gray-500">Audio recordings for meditation and natural living awareness</p>
            </div>
            <Link
              href="/#audio-pravachan"
              className="bg-[#244c8c] hover:bg-[#1b3d75] text-white text-xs font-bold uppercase px-3 py-1.5 rounded"
            >
              Explore Library
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Gayatri Mahamantra Japa (108 Times)',
                artist: 'Ashram Brahmavarchas Choirs',
                duration: '42 Mins',
              },
              {
                title: 'Arogya Aur Prakritik Jeevan Charya',
                artist: 'Pt. Shriram Sharma Acharya Ji',
                duration: '28 Mins',
              },
              {
                title: 'Morning Sandhya & Yagya Sangeet',
                artist: 'Gayatri Dham Sadhaks',
                duration: '35 Mins',
              },
            ].map((track, i) => (
              <div key={i} className="bg-white border border-gray-200 p-4 rounded shadow-sm flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-gray-900">{track.title}</h4>
                  <p className="text-[11px] text-gray-500">{track.artist} • {track.duration}</p>
                </div>
                <button
                  type="button"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-3 py-1.5 rounded uppercase"
                >
                  Listen
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
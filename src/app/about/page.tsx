'use client';
import Link from 'next/link';
import { CheckCircle2, MapPin, Phone, Mail, Leaf, Droplet, Sun, Wind, Star, ArrowRight } from 'lucide-react';

const STATS = [
  { number: '31+', label: 'Years of Service' },
  { number: '50 Acres', label: 'Nature Campus' },
  { number: '5,000+', label: 'Patients Healed' },
  { number: '100%', label: 'Drugless Healing' },
];

const VALUES = [
  { icon: Leaf, title: 'Harmony with Nature', desc: 'Encouraging a lifestyle deeply connected with the five natural elements and mindful daily Dinacharya.' },
  { icon: Star, title: 'Holistic Wellness', desc: 'Uniting physical therapy, Sattvic nutrition, Pranayama, and spiritual Sadhana for complete healing.' },
  { icon: CheckCircle2, title: 'Seva & Community', desc: 'A welcoming ashram environment built on care, respect, and the spirit of Yug Nirman Yojana.' },
];

const ELEMENTS = [
  { icon: Leaf, label: 'Prithvi', hindi: 'पृथ्वी', title: 'Earth', desc: 'Mud therapy, earthen poultice, and grounding practices for detoxification.', color: 'bg-amber-50 border-amber-200 text-amber-700' },
  { icon: Droplet, label: 'Jal', hindi: 'जल', title: 'Water', desc: 'Hip baths, spinal sprays, and hydrotherapy for circulation and bowel health.', color: 'bg-blue-50 border-blue-200 text-blue-700' },
  { icon: Sun, label: 'Agni', hindi: 'अग्नि', title: 'Fire & Sun', desc: 'Chromotherapy, herbal steam, and Atap Snana for metabolic activation.', color: 'bg-orange-50 border-orange-200 text-orange-700' },
  { icon: Wind, label: 'Vayu', hindi: 'वायु', title: 'Air', desc: 'Pranayama, Shatkarma, and open-air Yoga for respiratory and nervous health.', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
  { icon: Star, label: 'Aakash', hindi: 'आकाश', title: 'Space', desc: 'Meditation, Gayatri Sadhana, and Yoga Nidra for mental and spiritual clarity.', color: 'bg-indigo-50 border-indigo-200 text-indigo-700' },
];

const THERAPIES = [
  'Mud Therapy (Mritika Chikitsa)', 'Hydrotherapy (Jal Chikitsa)',
  'Sun & Chromotherapy (Atap Snana)', 'Therapeutic Yoga & Shatkarma',
  'Herbal Steam Chamber', 'Sattvic Diet & Juice Fasting',
  'Shirodhara & Herbal Oil Massage', 'Gayatri Yagyopathy (Havan Therapy)',
];

const TEAM = [
  { name: 'Dr. Ramesh Vaidya', role: 'Chief Naturopathy Physician', exp: '22 Years Experience', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400' },
  { name: 'Yogacharya Suresh Ji', role: 'Resident Yoga & Pranayama Instructor', exp: '18 Years Experience', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400' },
  { name: 'Vaidya Sunita Devi', role: 'Naturopathy & Diet Therapist', exp: '15 Years Experience', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800">

      {/* HERO */}
      <div className="relative h-[400px] sm:h-[480px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1600" alt="Gayatri Dham Campus" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f16]/90 via-[#0a1f16]/70 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-16 max-w-4xl">
          <span className="inline-flex items-center gap-2 bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Yug Nirman Yojana • Sendhwa
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-white leading-tight">
            About <span className="text-amber-300">Gayatri Dham</span>
          </h1>
          <p className="text-sm sm:text-base text-emerald-100/90 mt-4 max-w-xl leading-relaxed">
            A sacred 50-acre nature-cure sanctuary in Sendhwa, M.P. — rooted in the Vedic wisdom of Pt. Shriram Sharma Acharya Ji and the Panchamahabhuta healing tradition.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="#mission" className="bg-[#ea7b11] hover:bg-[#d66e0b] text-white font-black text-sm uppercase px-7 py-3 rounded-full shadow-lg transition flex items-center gap-2">
              Our Mission <ArrowRight className="w-4 h-4" />
            </a>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/40 text-white font-bold text-sm uppercase px-7 py-3 rounded-full transition">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="bg-[#1b3d75] text-white">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {STATS.map((s, i) => (
            <div key={i}>
              <div className="text-2xl sm:text-3xl font-black text-amber-300">{s.number}</div>
              <div className="text-blue-200 uppercase tracking-wider text-[10px] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MISSION */}
      <section id="mission" className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-2xl overflow-hidden h-80 shadow-xl">
          <img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80&w=800" alt="Nature" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow">
            <div className="font-bold text-sm text-stone-900">🌿 Reconnect with Nature</div>
            <div className="text-xs text-stone-500">A journey towards mindful living</div>
          </div>
        </div>
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ea7b11]">OUR STORY</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mt-1 mb-4">
            Where <span className="text-[#1b3d75]">Nature meets Wellness</span>
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            माँ भगवती योगनिसर्गोपचार केंद्र, Gayatri Dham, Sendhwa is a nature-inspired wellness center rooted in traditional Indian philosophy and the principles of natural living, inspired by Yug Nirman Yojana and the teachings of Pandit Shriram Sharma Acharya Ji.
          </p>
          <p className="text-sm text-stone-600 leading-relaxed mb-5">
            For over 31 years, we have served thousands of patients using 100% drugless Panchamahabhuta therapies — healing through Earth, Water, Fire, Air, and Space.
          </p>
          <div className="space-y-2">
            {['Promote mindful and healthy natural living', 'Encourage preventive wellness practices', 'Serve rural and underprivileged patients free of cost'].map((p, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#FAF5ED] border-y border-amber-900/10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ea7b11]">WHAT GUIDES US</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mt-1">Our Mission & Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm text-center">
                  <div className="w-12 h-12 bg-[#1b3d75]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#1b3d75]" />
                  </div>
                  <h3 className="font-serif font-black text-lg text-stone-900 mb-2">{v.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PANCHAMAHABHUTA */}
      <section id="our-philosophy" className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ea7b11]">OUR PHILOSOPHY</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mt-1">Panch Mahabhuta Healing</h2>
          <p className="text-sm text-stone-500 mt-2 max-w-xl mx-auto">Five sacred elements from Vedic philosophy that form the foundation of all our therapies.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {ELEMENTS.map((el, i) => {
            const Icon = el.icon;
            return (
              <div key={i} className={`rounded-2xl border p-5 text-center ${el.color}`}>
                <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-xs font-black uppercase tracking-wider">{el.label}</div>
                <div className="text-sm font-bold mt-0.5">{el.hindi}</div>
                <div className="font-serif font-black text-lg mt-1">{el.title}</div>
                <p className="text-xs mt-2 leading-relaxed opacity-80">{el.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* THERAPIES */}
      <section className="bg-[#0F281E] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400">NATURAL WELLNESS PRACTICES</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-white mt-1 mb-4">Our Therapies & Activities</h2>
            <p className="text-sm text-emerald-200/80 leading-relaxed mb-6">
              A combination of traditional natural therapies, Yoga practices, and Vedic wellness activities — all prescribed individually after Nadi Parikshan by our resident Vaidya.
            </p>
            <Link href="/treatments" className="inline-flex items-center gap-2 bg-[#ea7b11] hover:bg-[#d66e0b] text-white font-black text-sm uppercase px-6 py-3 rounded-full transition">
              Explore All Treatments <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {THERAPIES.map((t, i) => (
              <div key={i} className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <span className="text-amber-400 font-black text-sm">✦</span>
                <span className="text-sm text-emerald-100">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="founder" className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ea7b11]">OUR HEALERS</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mt-1">Resident Vaidya & Experts</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM.map((m, i) => (
            <div key={i} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition text-center">
              <div className="h-52 overflow-hidden">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-serif font-black text-lg text-stone-900">{m.name}</h3>
                <p className="text-xs text-[#ea7b11] font-bold uppercase tracking-wider mt-1">{m.role}</p>
                <p className="text-xs text-stone-500 mt-1">{m.exp}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CAMPUS */}
      <section id="campus" className="bg-[#FAF5ED] border-y border-amber-900/10 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ea7b11]">OUR NATURAL SURROUNDINGS</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mt-1 mb-4">A Peaceful Sanctuary in Sendhwa</h2>
            <p className="text-sm text-stone-600 leading-relaxed mb-4">
              The Gayatri Dham campus spans 50 acres of lush greenery on the Mumbai-Agra National Highway (NH-52). Surrounded by medicinal herb gardens, a sacred Gaushala, open therapy grounds, and the serene Yagya Shala.
            </p>
            <div className="space-y-2 mb-6">
              {[
                { icon: MapPin, text: 'NH-52, Sendhwa, Dist. Barwani, M.P. – 451666' },
                { icon: Phone, text: '+91 94250 88219 / 07281-222000' },
                { icon: Mail, text: 'info@gayatridhamsendhwa.org' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-stone-700">
                    <Icon className="w-4 h-4 text-[#ea7b11] shrink-0" /> {item.text}
                  </div>
                );
              })}
            </div>
            <a href="https://maps.google.com/?q=Gayatri+Dham+Sendhwa+Madhya+Pradesh" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#1b3d75] hover:bg-[#244c8c] text-white font-black text-sm uppercase px-6 py-3 rounded-full transition">
              View on Google Maps <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-80 shadow-xl">
            <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800" alt="Campus" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1b3d75] text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400">YOUR JOURNEY STARTS HERE</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-white mt-2 mb-3">Take a Step Towards Mindful Living</h2>
          <p className="text-sm text-blue-200 leading-relaxed mb-8">Connect with Gayatri Dham to learn more about the center, its programs, and visiting arrangements.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919425088219" className="bg-[#ea7b11] hover:bg-[#d66e0b] text-white font-black text-sm uppercase px-8 py-3 rounded-full transition">
              Call +91 94250 88219
            </a>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/40 text-white font-bold text-sm uppercase px-8 py-3 rounded-full transition">
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

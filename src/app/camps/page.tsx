'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  Calendar, Clock, Users, CheckCircle2, ArrowRight, Phone,
  MapPin, Star, ChevronDown, Leaf, Droplet, Sun, Wind,
  Heart, Shield, Award, MessageCircle
} from 'lucide-react';

const CAMPS = [
  {
    id: 1,
    badge: 'MOST POPULAR',
    badgeColor: 'bg-amber-500 text-white',
    title: 'Kaya Kalpa Shibir',
    hindi: 'काया कल्प शिविर',
    duration: '7 Days / 6 Nights',
    nextDate: 'February 10 – 16, 2026',
    seats: 12,
    totalSeats: 20,
    price: '₹4,500',
    priceNote: 'All inclusive (Stay + Meals + Therapy)',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800',
    desc: 'Complete 7-day residential detox combining Panchamahabhuta therapies, Sattvic diet, Yoga, and Gayatri Sadhana for deep cellular rejuvenation.',
    includes: ['Full Body Mud Bath Daily', 'Hydrotherapy Sessions', 'Herbal Steam Chamber', 'Sattvic Organic Meals', 'Yoga & Pranayama', 'Vaidya Consultation'],
    ideal: 'Chronic fatigue, diabetes, acidity, stress, joint pain',
  },
  {
    id: 2,
    badge: 'NEW BATCH',
    badgeColor: 'bg-emerald-600 text-white',
    title: 'Prakriti Parikshan Shibir',
    hindi: 'प्रकृति परीक्षण शिविर',
    duration: '3 Days / 2 Nights',
    nextDate: 'January 25 – 27, 2026',
    seats: 8,
    totalSeats: 15,
    price: '₹1,800',
    priceNote: 'Includes stay, meals & assessment',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=800',
    desc: 'Intensive 3-day Dosha assessment, Nadi Parikshan, personalized diet chart, and introductory Panchamahabhuta therapy sessions.',
    includes: ['Nadi Parikshan (Pulse Diagnosis)', 'Dosha Assessment Report', 'Personalized Diet Chart', 'Intro Mud & Hydro Therapy', 'Morning Yoga Session', 'Sattvic Meals'],
    ideal: 'First-time visitors, preventive health check, lifestyle correction',
  },
  {
    id: 3,
    badge: 'UPCOMING',
    badgeColor: 'bg-blue-600 text-white',
    title: 'Diabetes & Metabolism Camp',
    hindi: 'मधुमेह एवं चयापचय शिविर',
    duration: '10 Days / 9 Nights',
    nextDate: 'March 1 – 10, 2026',
    seats: 15,
    totalSeats: 15,
    price: '₹6,500',
    priceNote: 'Specialized diabetes protocol',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=800',
    desc: 'Specialized 10-day protocol for Type 2 Diabetes, obesity, and metabolic syndrome using bitter gourd fasting, chromotherapy, and Yoga Nidra.',
    includes: ['Bitter Gourd Juice Fasting', 'Sun Chromotherapy', 'Mud Abdominal Packs', 'Yoga Nidra Daily', 'Blood Sugar Monitoring', 'Discharge Diet Plan'],
    ideal: 'Type 2 diabetes, obesity, high cholesterol, fatty liver',
  },
  {
    id: 4,
    badge: 'FAMILY SPECIAL',
    badgeColor: 'bg-rose-600 text-white',
    title: 'Parivar Swasthya Shibir',
    hindi: 'परिवार स्वास्थ्य शिविर',
    duration: '5 Days / 4 Nights',
    nextDate: 'April 5 – 9, 2026',
    seats: 20,
    totalSeats: 30,
    price: '₹2,800',
    priceNote: 'Per person (family discount available)',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    desc: 'Family wellness retreat combining nature therapies, Sattvic cooking workshops, children\'s yoga, and evening Gayatri Yagya for holistic family health.',
    includes: ['Family Yoga Sessions', 'Sattvic Cooking Workshop', 'Children\'s Nature Activities', 'Evening Gayatri Yagya', 'Organic Farm Visit', 'Family Diet Planning'],
    ideal: 'Families seeking preventive wellness, children health, bonding retreat',
  },
];

const SCHEDULE = [
  { time: '5:00 AM', activity: 'Brahma Muhurta Jaagran & Gayatri Mantra Jap', icon: Sun },
  { time: '5:30 AM', activity: 'Sukshma Vyayama & Pranayama', icon: Wind },
  { time: '6:30 AM', activity: 'Therapeutic Yoga & Shatkarma (Neti / Kunjal)', icon: Leaf },
  { time: '7:30 AM', activity: 'Sattvic Breakfast (Fruits / Sprouts / Herbal Tea)', icon: Leaf },
  { time: '8:30 AM', activity: 'Mud Therapy / Hydrotherapy Sessions', icon: Droplet },
  { time: '10:30 AM', activity: 'Herbal Steam Chamber & Sun Chromotherapy', icon: Sun },
  { time: '12:30 PM', activity: 'Sattvic Lunch (Oil-free, Organic)', icon: Leaf },
  { time: '2:00 PM', activity: 'Rest & Swadhyaya (Study of Acharya Ji\'s Literature)', icon: Star },
  { time: '4:00 PM', activity: 'Vaidya OPD Consultation & Follow-up', icon: Shield },
  { time: '5:00 PM', activity: 'Evening Yoga & Meditation', icon: Wind },
  { time: '6:30 PM', activity: 'Sandhya Gayatri Yagya (Group Havan)', icon: Sun },
  { time: '7:00 PM', activity: 'Light Sattvic Dinner', icon: Leaf },
  { time: '9:00 PM', activity: 'Yoga Nidra & Lights Out', icon: Star },
];

const TESTIMONIALS = [
  {
    name: 'Ramesh Patidar',
    city: 'Indore, M.P.',
    stars: 5,
    text: 'After 7 days at Gayatri Dham, my blood sugar dropped from 280 to 160 without any medicine change. The mud therapy and diet plan were life-changing.',
    camp: 'Kaya Kalpa Shibir 2025',
  },
  {
    name: 'Sunita Devi',
    city: 'Sendhwa, M.P.',
    stars: 5,
    text: 'I had chronic acidity for 8 years. After the 7-day camp, I am completely free from antacids. The Vaidya ji\'s guidance was exceptional.',
    camp: 'Kaya Kalpa Shibir 2024',
  },
  {
    name: 'Mahesh Sharma',
    city: 'Bhopal, M.P.',
    stars: 5,
    text: 'The ashram atmosphere, Gayatri Yagya, and natural therapies together created a transformation I cannot describe in words. Highly recommended.',
    camp: 'Prakriti Parikshan Shibir 2025',
  },
];

const FAQS = [
  { q: 'What should I bring for the residential camp?', a: 'Comfortable cotton clothes (white/light colors preferred), personal toiletries, any current medical reports, and a positive mindset. All therapy materials, towels, and meals are provided.' },
  { q: 'Are allopathic medicines stopped during the camp?', a: 'No. Medicines are never abruptly stopped. The resident Vaidya reviews your current medications and may gradually taper them under supervision as your condition improves.' },
  { q: 'Is the accommodation comfortable?', a: 'Yes. Clean, simple ashram-style rooms with attached bathrooms are available. AC rooms are available on request at nominal extra charge.' },
  { q: 'Can family members accompany the patient?', a: 'Yes. One attendant can stay with the patient. They are also welcome to participate in yoga and yagya sessions.' },
  { q: 'How do I register for a camp?', a: 'Call or WhatsApp us at +91 94250 88219. A ₹500 advance confirms your seat. Balance is paid on arrival.' },
];

export default function CampsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', city: '', camp: '', date: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800">

      {/* HERO */}
      <div className="relative h-[420px] sm:h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1600"
          alt="Gayatri Dham Camps"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f16]/90 via-[#0a1f16]/70 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-16 max-w-5xl">
          <span className="inline-flex items-center gap-2 bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Residential Wellness Retreats 2026
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-white leading-tight">
            Panchamahabhuta<br />
            <span className="text-amber-300">Shibir & Health Camps</span>
          </h1>
          <p className="text-sm sm:text-base text-emerald-100/90 mt-4 max-w-xl leading-relaxed">
            7-day to 10-day residential nature-cure retreats at Gayatri Dham, Sendhwa — combining Vedic therapies, Sattvic diet, Yoga, and Gayatri Sadhana for complete holistic healing.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="#camps-grid" className="bg-[#ea7b11] hover:bg-[#d66e0b] text-white font-black text-sm uppercase px-7 py-3 rounded-full shadow-lg transition flex items-center gap-2">
              View All Camps <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#register" className="bg-white/10 hover:bg-white/20 border border-white/40 text-white font-bold text-sm uppercase px-7 py-3 rounded-full transition">
              Register Now
            </a>
          </div>
        </div>
      </div>

      {/* STATS BAR */}
      <div className="bg-[#1b3d75] text-white">
        <div className="max-w-6xl mx-auto px-4 py-5 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-xs">
          {[
            { num: '5,000+', label: 'Patients Healed' },
            { num: '15+', label: 'Years of Service' },
            { num: '100%', label: 'Drugless Healing' },
            { num: '50 Acres', label: 'Ashram Campus' },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-2xl font-black text-amber-300">{s.num}</div>
              <div className="text-blue-200 uppercase tracking-wider text-[10px] mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CAMPS GRID */}
      <section id="camps-grid" className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ea7b11]">2026 BATCH SCHEDULE</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mt-1">Upcoming Health Camps</h2>
          <p className="text-sm text-stone-500 mt-2 max-w-xl mx-auto">Limited seats per batch. Early registration recommended.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAMPS.map((camp) => {
            const seatsLeft = camp.totalSeats - camp.seats;
            const seatsPercent = Math.round((camp.seats / camp.totalSeats) * 100);
            return (
              <div key={camp.id} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <img src={camp.image} alt={camp.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <span className={`absolute top-3 left-3 text-[10px] font-black uppercase px-3 py-1 rounded-full ${camp.badgeColor}`}>
                    {camp.badge}
                  </span>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-300" /> {camp.duration}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs font-bold text-[#ea7b11] uppercase tracking-wider">{camp.hindi}</p>
                  <h3 className="text-xl font-serif font-black text-stone-900 mt-1">{camp.title}</h3>

                  <div className="flex items-center gap-2 mt-2 text-xs text-stone-600">
                    <Calendar className="w-3.5 h-3.5 text-[#1b3d75]" />
                    <span className="font-semibold">{camp.nextDate}</span>
                  </div>

                  <p className="text-xs text-stone-600 mt-3 leading-relaxed">{camp.desc}</p>

                  {/* Includes */}
                  <div className="mt-4 grid grid-cols-2 gap-1.5">
                    {camp.includes.map((item, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-stone-700">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For */}
                  <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">Ideal For: </span>
                    <span className="text-[11px] text-amber-900">{camp.ideal}</span>
                  </div>

                  {/* Seats Progress */}
                  <div className="mt-4">
                    <div className="flex justify-between text-[11px] text-stone-500 mb-1">
                      <span>{camp.seats} seats booked</span>
                      <span className="font-bold text-rose-600">{seatsLeft} seats left</span>
                    </div>
                    <div className="w-full bg-stone-100 rounded-full h-1.5">
                      <div className="bg-[#ea7b11] h-1.5 rounded-full transition-all" style={{ width: `${seatsPercent}%` }} />
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="mt-5 flex items-center justify-between pt-4 border-t border-stone-100">
                    <div>
                      <div className="text-xl font-black text-[#1b3d75]">{camp.price}</div>
                      <div className="text-[10px] text-stone-500">{camp.priceNote}</div>
                    </div>
                    <a href="#register" className="bg-[#1b3d75] hover:bg-[#244c8c] text-white font-black text-xs uppercase px-5 py-2.5 rounded-lg transition flex items-center gap-1.5">
                      Book Seat <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* DAILY SCHEDULE */}
      <section className="bg-[#0F281E] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400">ASHRAM DINACHARYA</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-white mt-1">Daily Camp Schedule</h2>
            <p className="text-sm text-emerald-200/80 mt-2">Every day at Gayatri Dham follows a sacred rhythm aligned with nature.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SCHEDULE.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 transition">
                  <div className="w-16 text-amber-300 font-black text-xs shrink-0">{item.time}</div>
                  <Icon className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-sm text-emerald-100">{item.activity}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GUEST HOUSE */}
      <section id="guest-house" className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ea7b11]">ASHRAM ACCOMMODATION</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mt-1 mb-4">Guest House & Stay Facilities</h2>
            <p className="text-sm text-stone-600 leading-relaxed mb-6">
              Simple, clean, and spiritually charged ashram rooms set amidst the 50-acre Gayatri Dham campus. Surrounded by medicinal herb gardens, a Gaushala, and the sacred Yagya Shala.
            </p>
            <div className="space-y-3">
              {[
                { icon: Shield, title: 'Clean & Safe Rooms', desc: 'Attached bathrooms, clean linen, 24-hour security' },
                { icon: Leaf, title: 'Organic Gaushala Kitchen', desc: 'All meals prepared with organic produce and cow ghee' },
                { icon: Sun, title: 'Nature Surroundings', desc: '50-acre campus with herb gardens and open therapy areas' },
                { icon: Heart, title: 'Spiritual Atmosphere', desc: 'Daily Gayatri Yagya, Satsang, and Acharya Ji\'s literature' },
              ].map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="flex items-start gap-3 p-3 bg-white border border-stone-200 rounded-xl shadow-xs">
                    <div className="w-8 h-8 bg-[#1b3d75]/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#1b3d75]" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-stone-900">{f.title}</div>
                      <div className="text-xs text-stone-500">{f.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-80 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800"
              alt="Guest House"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div>
                <div className="text-white font-black text-lg font-serif">Ashram Guest House</div>
                <div className="text-amber-300 text-xs font-semibold">Sendhwa, Madhya Pradesh</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#FAF5ED] border-y border-amber-900/10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ea7b11]">PATIENT EXPERIENCES</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mt-1">What Our Patients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-stone-700 leading-relaxed italic">"{t.text}"</p>
                <div className="mt-4 pt-4 border-t border-stone-100">
                  <div className="font-bold text-stone-900 text-sm">{t.name}</div>
                  <div className="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" /> {t.city}
                  </div>
                  <div className="text-[10px] text-[#ea7b11] font-bold uppercase tracking-wider mt-1">{t.camp}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM */}
      <section id="register" className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl border border-stone-200 shadow-lg overflow-hidden">
          <div className="bg-[#1b3d75] text-white px-8 py-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300">SEAT BOOKING</span>
            <h2 className="text-xl sm:text-2xl font-serif font-black mt-1">Register for a Health Camp</h2>
            <p className="text-xs text-blue-200 mt-1">Fill the form below. Our team will confirm your seat within 24 hours.</p>
          </div>

          <div className="p-8">
            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                <h3 className="font-serif font-black text-xl text-stone-900">Pranam! Registration Received</h3>
                <p className="text-sm text-stone-600 max-w-sm mx-auto">Our team will contact you on WhatsApp within 24 hours to confirm your seat and share payment details.</p>
                <button onClick={() => setSubmitted(false)} className="mt-4 bg-[#1b3d75] text-white text-xs font-bold px-6 py-2.5 rounded-lg uppercase">
                  Register Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
                <div>
                  <label className="block font-bold text-stone-700 mb-1.5 uppercase tracking-wider">Full Name *</label>
                  <input required type="text" placeholder="Sri / Smt. ..." value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 border border-stone-300 rounded-lg focus:outline-none focus:border-[#1b3d75] text-sm" />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1.5 uppercase tracking-wider">WhatsApp Number *</label>
                  <input required type="tel" placeholder="+91 ..." value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 border border-stone-300 rounded-lg focus:outline-none focus:border-[#1b3d75] text-sm" />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1.5 uppercase tracking-wider">City / State *</label>
                  <input required type="text" placeholder="e.g. Indore, M.P." value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    className="w-full p-3 border border-stone-300 rounded-lg focus:outline-none focus:border-[#1b3d75] text-sm" />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1.5 uppercase tracking-wider">Select Camp *</label>
                  <select required value={formData.camp}
                    onChange={e => setFormData({ ...formData, camp: e.target.value })}
                    className="w-full p-3 border border-stone-300 rounded-lg focus:outline-none focus:border-[#1b3d75] text-sm font-semibold">
                    <option value="">-- Choose Camp --</option>
                    {CAMPS.map(c => <option key={c.id} value={c.title}>{c.title} ({c.nextDate})</option>)}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block font-bold text-stone-700 mb-1.5 uppercase tracking-wider">Preferred Arrival Date</label>
                  <input type="date" value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                    className="w-full p-3 border border-stone-300 rounded-lg focus:outline-none focus:border-[#1b3d75] text-sm" />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="w-full bg-[#ea7b11] hover:bg-[#d66e0b] text-white font-black text-sm uppercase py-4 rounded-xl shadow-md transition tracking-wider">
                    Confirm Registration Request
                  </button>
                  <p className="text-center text-stone-400 text-[11px] mt-2">Or call us directly: <a href="tel:+919425088219" className="text-[#1b3d75] font-bold">+91 94250 88219</a></p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="bg-[#FAF8F5] border-t border-stone-200 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ea7b11]">FREQUENTLY ASKED</span>
            <h2 className="text-2xl font-serif font-black text-stone-900 mt-1">Camp FAQs</h2>
          </div>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white border border-stone-200 rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-4 sm:p-5 flex justify-between items-center gap-3 hover:bg-stone-50 transition">
                  <span className="font-bold text-sm text-stone-900">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180 text-[#ea7b11]' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-xs text-stone-600 leading-relaxed border-t border-stone-100 pt-3 bg-stone-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <a href="https://wa.me/919425088219?text=Namaste%2C%20I%20want%20to%20register%20for%20a%20Health%20Camp%20at%20Gayatri%20Dham%20Sendhwa"
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white p-4 rounded-full shadow-2xl transition hover:scale-110 flex items-center justify-center group">
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pl-0 group-hover:pl-2">
          Register via WhatsApp
        </span>
      </a>

    </div>
  );
}

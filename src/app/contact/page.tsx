'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle2, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', concern: 'Digestive / Gastric issues', message: '' });

  return (
    <div className="min-h-screen bg-[#FDFBF7]">

      {/* HERO */}
      <div className="bg-[#1b3d75] text-white py-12 px-4 text-center">
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400">CONNECT WITH US</span>
        <h1 className="text-2xl sm:text-4xl font-serif font-black text-white mt-2">Gayatri Dham, Sendhwa</h1>
        <p className="text-sm text-blue-200 mt-2">माँ भगवती योगनिसर्गोपचार केंद्र • District Barwani, Madhya Pradesh</p>
      </div>

      {/* QUICK CONTACT BAR */}
      <div className="bg-[#ea7b11] text-white">
        <div className="max-w-6xl mx-auto px-4 py-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs font-bold">
          <a href="tel:+919425088219" className="flex items-center justify-center gap-2 hover:text-white/80 transition">
            <Phone className="w-4 h-4" /> +91 94250 88219
          </a>
          <a href="mailto:info@gayatridhamsendhwa.org" className="flex items-center justify-center gap-2 hover:text-white/80 transition">
            <Mail className="w-4 h-4" /> info@gayatridhamsendhwa.org
          </a>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" /> OPD: 7:00 AM – 6:00 PM Daily
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT */}
        <div className="space-y-6">

          {/* Contact Info */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-serif font-black text-lg text-[#1b3d75] mb-5">Center Information</h3>
            <div className="space-y-4 text-sm text-stone-700">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#ea7b11]/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#ea7b11]" />
                </div>
                <div>
                  <div className="font-bold text-stone-900">Address</div>
                  <div className="text-xs text-stone-600 mt-0.5">माँ भगवती योगनिसर्गोपचार केंद्र, Gayatri Dham,<br />NH-52 (AB Road), Sendhwa, Dist. Barwani (M.P.) – 451666</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#ea7b11]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#ea7b11]" />
                </div>
                <div>
                  <div className="font-bold text-stone-900">Phone / WhatsApp</div>
                  <a href="tel:+919425088219" className="text-xs text-[#1b3d75] font-bold hover:underline">+91 94250 88219</a>
                  <span className="text-xs text-stone-500"> / 07281-222000</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#ea7b11]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#ea7b11]" />
                </div>
                <div>
                  <div className="font-bold text-stone-900">Email</div>
                  <div className="text-xs text-stone-600">info@gayatridhamsendhwa.org</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#ea7b11]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#ea7b11]" />
                </div>
                <div>
                  <div className="font-bold text-stone-900">OPD Timings</div>
                  <div className="text-xs text-stone-600">7 Days a Week: 7:00 AM – 6:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* How to Reach */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <h4 className="font-bold text-sm text-[#1b3d75] uppercase tracking-wider mb-3">How to Reach Sendhwa</h4>
            <ul className="text-xs text-stone-700 space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#ea7b11] font-black mt-0.5">✈</span><span><strong>By Air:</strong> Indore Airport (IDR) — approx. 150 km. Cab available.</span></li>
              <li className="flex items-start gap-2"><span className="text-[#ea7b11] font-black mt-0.5">🚂</span><span><strong>By Train:</strong> Dhule (MH) 80 km or Indore (MP) 150 km. Auto/cab to Sendhwa.</span></li>
              <li className="flex items-start gap-2"><span className="text-[#ea7b11] font-black mt-0.5">🚗</span><span><strong>By Road:</strong> Directly on Agra-Mumbai NH-52 (AB Road). Easy GPS navigation.</span></li>
              <li className="flex items-start gap-2"><span className="text-[#ea7b11] font-black mt-0.5">🚌</span><span><strong>By Bus:</strong> Regular buses from Indore, Dhule, Barwani to Sendhwa Bus Stand (2 km from center).</span></li>
            </ul>
          </div>

          {/* Google Map Embed */}
          <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.5!2d75.0966!3d21.6833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd9f5b5b5b5b5b5%3A0x0!2sGayatri+Dham+Sendhwa!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gayatri Dham Location"
            />
          </div>
        </div>

        {/* RIGHT - FORM */}
        <div className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-[#1b3d75] text-white px-6 py-5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300">CONSULTATION REQUEST</span>
            <h3 className="font-serif font-black text-lg mt-1">Send an Enquiry</h3>
            <p className="text-xs text-blue-200 mt-1">We respond within 24 hours via WhatsApp or call.</p>
          </div>

          <div className="p-6">
            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
                <h3 className="font-serif font-black text-xl text-stone-900">Pranam! Message Received</h3>
                <p className="text-sm text-stone-600 max-w-sm mx-auto">Our team will contact you at <strong>{form.phone}</strong> within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-4 bg-[#1b3d75] text-white text-xs font-bold px-6 py-2.5 rounded-lg uppercase">Send Another</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-stone-700 uppercase mb-1.5 tracking-wider">Your Name *</label>
                  <input required type="text" placeholder="Full name" value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2.5 border border-stone-300 rounded-lg bg-white focus:outline-none focus:border-[#1b3d75] text-sm" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-stone-700 uppercase mb-1.5 tracking-wider">Phone *</label>
                    <input required type="tel" placeholder="+91 ..." value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3 py-2.5 border border-stone-300 rounded-lg bg-white focus:outline-none focus:border-[#1b3d75] text-sm" />
                  </div>
                  <div>
                    <label className="block font-bold text-stone-700 uppercase mb-1.5 tracking-wider">Email</label>
                    <input type="email" placeholder="email@..." value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3 py-2.5 border border-stone-300 rounded-lg bg-white focus:outline-none focus:border-[#1b3d75] text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block font-bold text-stone-700 uppercase mb-1.5 tracking-wider">Health Concern</label>
                  <select value={form.concern} onChange={e => setForm({ ...form, concern: e.target.value })}
                    className="w-full px-3 py-2.5 border border-stone-300 rounded-lg bg-white focus:outline-none focus:border-[#1b3d75] text-sm font-semibold">
                    <option>Digestive / Gastric issues</option>
                    <option>Arthritis & Joint pain</option>
                    <option>Diabetes / Hypertension</option>
                    <option>Stress, Insomnia & BP</option>
                    <option>General 7-Day Residential Detox</option>
                    <option>Other / Swadhyaya stay</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-stone-700 uppercase mb-1.5 tracking-wider">Your Message</label>
                  <textarea rows={4} placeholder="Tell us about your symptoms or visit dates..." value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3 py-2.5 border border-stone-300 rounded-lg bg-white focus:outline-none focus:border-[#1b3d75] text-sm" />
                </div>
                <button type="submit" className="w-full bg-[#ea7b11] hover:bg-[#d66e0b] text-white font-black py-3.5 rounded-xl text-sm uppercase tracking-wider transition shadow-md">
                  Submit Enquiry
                </button>
                <a href="https://wa.me/919425088219" target="_blank" rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-black py-3 rounded-xl text-sm uppercase tracking-wider transition">
                  <MessageCircle className="w-4 h-4 fill-white" /> Chat on WhatsApp
                </a>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

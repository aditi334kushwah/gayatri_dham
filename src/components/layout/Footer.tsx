'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Calendar, Clock, Award, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#121619] text-gray-300 pt-14 pb-8 border-t-4 border-[#ea7b11]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-xs">
        {/* Col 1: Founder Acharya */}
        <div>
          <h3 className="text-white font-bold tracking-wider uppercase mb-4 text-sm border-b border-gray-700 pb-2">
            Founder-Guide
          </h3>
          <div className="relative w-36 h-48 rounded bg-gray-800 overflow-hidden mb-3 border border-amber-600/30">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=400"
              alt="Pandit Shriram Sharma Acharya"
              className="object-cover w-full h-full grayscale opacity-80 hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <p className="font-serif text-sm font-semibold text-amber-200">
            Vedamurti Pandit Shriram Sharma Acharya Ji
          </p>
          <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
            Patron of Yug Nirman Yojana. Champion of pure nature-cure, Yagya therapy, and moral-spiritual resurgence.
          </p>
        </div>

        {/* Col 2: Contact Info */}
        <div>
          <h3 className="text-white font-bold tracking-wider uppercase mb-4 text-sm border-b border-gray-700 pb-2">
            Contact Us
          </h3>
          <p className="font-bold text-gray-100 text-sm mb-1">माँ भगवती योगनिसर्गोपचार केंद्र</p>
          <p className="text-gray-400 mb-3 leading-relaxed">
            Gayatri Dham, AB Road, Sendhwa,<br />
            District Barwani, Madhya Pradesh - 451666, India
          </p>
          <div className="space-y-2 mt-4 text-gray-300">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+91 98260 00000 / 07281-222000</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>info@gayatridhamsendhwa.org</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>OPD Timings: 7:00 AM - 6:00 PM Daily</span>
            </div>
          </div>
        </div>

        {/* Col 3: Newsletter & Sankalp */}
        <div>
          <h3 className="text-white font-bold tracking-wider uppercase mb-4 text-sm border-b border-gray-700 pb-2">
            Health Newsletter
          </h3>
          <p className="text-gray-400 mb-3 leading-relaxed">
            Subscribe for monthly health camps, natural dietary advice, and seasonal yoga routine updates.
          </p>
          <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded text-xs border border-gray-700 focus:outline-none focus:border-amber-400"
            />
            <input
              type="email"
              placeholder="Your Email ID"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded text-xs border border-gray-700 focus:outline-none focus:border-amber-400"
            />
            <button
              type="submit"
              className="w-full bg-[#ea7b11] hover:bg-[#d66e0b] text-white font-bold py-2 rounded text-xs uppercase tracking-wider transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Col 4: Quick Action Portals (Screenshot 360 Reference) */}
        <div>
          <h3 className="text-white font-bold tracking-wider uppercase mb-4 text-sm border-b border-gray-700 pb-2">
            Quick Portals
          </h3>
          <div className="space-y-2.5">
            <Link
              href="/camps"
              className="flex items-center gap-3 p-2.5 bg-[#1b3d75] hover:bg-[#244c8c] rounded text-white transition duration-150"
            >
              <Calendar className="w-5 h-5 text-amber-300" />
              <div>
                <p className="font-bold text-xs">Shibir Calendar</p>
                <p className="text-[10px] text-blue-200">Residential 7-day batches</p>
              </div>
            </Link>

            <Link
              href="/camps#guest-house"
              className="flex items-center gap-3 p-2.5 bg-[#1b3d75] hover:bg-[#244c8c] rounded text-white transition duration-150"
            >
              <Clock className="w-5 h-5 text-amber-300" />
              <div>
                <p className="font-bold text-xs">Ashram Dinacharya</p>
                <p className="text-[10px] text-blue-200">Daily health schedule</p>
              </div>
            </Link>

            <Link
              href="/donate"
              className="flex items-center gap-3 p-2.5 bg-[#1b3d75] hover:bg-[#244c8c] rounded text-white transition duration-150"
            >
              <ShieldCheck className="w-5 h-5 text-amber-300" />
              <div>
                <p className="font-bold text-xs">Tax-Exempt Donation</p>
                <p className="text-[10px] text-blue-200">80G tax exemption receipt</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-500 gap-4">
        <p>© 2026 माँ भगवती योगनिसर्गोपचार केंद्र, गायत्री धाम, सेंधवा. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/about" className="hover:text-gray-300">Privacy Policy</Link>
          <Link href="/about" className="hover:text-gray-300">Terms of Care</Link>
          <Link href="/contact" className="hover:text-gray-300">How to Reach</Link>
        </div>
      </div>
    </footer>
  );
}
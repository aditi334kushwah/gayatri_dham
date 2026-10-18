import Link from 'next/link';
import { Clock, Home, Heart } from 'lucide-react';

export default function DonationSidebarSection() {
  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Seva & Annadana Cards */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-3">
            <h3 className="font-serif font-bold text-xl text-[#1b3d75] uppercase tracking-wide">
              DONATE & SEVA OPPPORTUNITIES
            </h3>
            <Link
              href="/donate"
              className="bg-[#244c8c] hover:bg-[#1b3d75] text-white text-[11px] font-bold uppercase px-3 py-1 rounded"
            >
              View More
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="border border-gray-200 rounded p-4 flex flex-col justify-between">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400"
                  alt="Satvik Bhojan"
                  className="h-32 w-full object-cover rounded mb-3"
                />
                <h4 className="font-bold text-sm text-[#244c8c]">Annadana Seva</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Sponsor organic sattvic grain meals for shibir seekers and ailing patients.
                </p>
              </div>
              <Link
                href="/donate"
                className="mt-4 block text-center bg-[#244c8c] hover:bg-[#1b3d75] text-white font-bold text-xs py-2 uppercase rounded"
              >
                Donate ₹1,100
              </Link>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-200 rounded p-4 flex flex-col justify-between">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400"
                  alt="Naturopathy Bed"
                  className="h-32 w-full object-cover rounded mb-3"
                />
                <h4 className="font-bold text-sm text-[#244c8c]">Patient Bed Seva</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Sponsor 7 days of treatment, accommodation, and herbs for rural poor.
                </p>
              </div>
              <Link
                href="/donate"
                className="mt-4 block text-center bg-[#244c8c] hover:bg-[#1b3d75] text-white font-bold text-xs py-2 uppercase rounded"
              >
                Donate ₹5,100
              </Link>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-200 rounded p-4 flex flex-col justify-between">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=400"
                  alt="Arogya Dham Nirman"
                  className="h-32 w-full object-cover rounded mb-3"
                />
                <h4 className="font-bold text-sm text-[#244c8c]">Kendra Nirmana</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Contribute to expanding the Naturopathy Yoga Hall and Solar Herbal Steam labs.
                </p>
              </div>
              <Link
                href="/donate"
                className="mt-4 block text-center bg-[#244c8c] hover:bg-[#1b3d75] text-white font-bold text-xs py-2 uppercase rounded"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>

        {/* Right 1 Col: Ashram Timings & Guest House Sidebar (Screenshot 358)[cite: 4] */}
        <div className="space-y-6">
          {/* Timings Widget */}
          <div className="border border-gray-200 rounded p-5 bg-[#faf8f5]">
            <h4 className="font-bold text-sm text-[#1b3d75] uppercase border-b border-gray-200 pb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#ea7b11]" /> Daily Ashram Timings
            </h4>
            <div className="mt-3 space-y-2 text-xs text-gray-700">
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="font-semibold">Morning Yagya & Mantra:</span>
                <span>5:30 AM - 6:30 AM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="font-semibold">Yoga & Pranayama:</span>
                <span>6:30 AM - 8:00 AM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="font-semibold">Naturopathy Therapies:</span>
                <span>8:30 AM - 12:30 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="font-semibold">Doctor Consultation:</span>
                <span>4:00 PM - 6:30 PM</span>
              </div>
            </div>
          </div>

          {/* Guest House Widget */}
          <div className="border border-gray-200 rounded p-5 bg-[#244c8c] text-white">
            <h4 className="font-bold text-sm uppercase flex items-center gap-2 text-amber-300">
              <Home className="w-4 h-4" /> Guest House & Stay
            </h4>
            <p className="text-xs text-blue-100 mt-2 leading-relaxed">
              Quiet AC/Non-AC rooms available inside Gayatri Dham for sadhaks and patients.
            </p>
            <div className="mt-3 text-xs bg-white/10 p-2.5 rounded">
              <p>For enquiries & room booking:</p>
              <p className="font-bold mt-1 text-white">Contact: 07281-222000 / +91 98260 00000</p>
              <p className="text-[11px] text-blue-200">Email: stay@gayatridhamsendhwa.org</p>
            </div>
            <Link
              href="/camps#guest-house"
              className="mt-3 block text-center bg-[#ea7b11] hover:bg-[#d66e0b] text-white font-bold text-xs py-2 uppercase rounded transition"
            >
              Check Availability
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
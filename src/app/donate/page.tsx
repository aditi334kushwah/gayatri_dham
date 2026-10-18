'use client';
import { useState } from 'react';
import { Heart, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function DonatePage() {
  const [selectedSeva, setSelectedSeva] = useState('annadana');
  const [customAmount, setCustomAmount] = useState('1100');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-[#faf8f5] py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-[#ea7b11] font-bold text-xs tracking-widest uppercase">
            PUNYA SANKALP • SEVA
          </span>
          <h1 className="text-3xl font-serif font-bold text-[#1b3d75] mt-1">
            Support Health & Naturopathy Seva
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-xl mx-auto">
            All donations made to Gayatri Dham, Sendhwa are eligible for 50% tax exemption under Section 80G of the Indian Income Tax Act.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-4 py-2 rounded-full">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> 80G Tax Exemption Certificate Provided
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 shadow-sm">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
              <h2 className="text-xl font-bold text-[#1b3d75]">Dhanyawad! Punya Sankalp Recorded</h2>
              <p className="text-xs text-gray-600 max-w-md mx-auto">
                Receipt for ₹{customAmount} under Section 80G has been generated. Confirmation SMS and email have been sent.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-[#244c8c] text-white text-xs font-bold px-6 py-2 rounded uppercase"
              >
                Make Another Seva
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-6"
            >
              {/* Seva Type Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                  Select Seva Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'annadana', title: 'Annadana Seva', desc: '₹1,100 / Day', defaultAmt: '1100' },
                    { id: 'bed', title: 'Patient Bed Care', desc: '₹5,100 / 7 Days', defaultAmt: '5100' },
                    { id: 'nirmana', title: 'Kendra Nirmana', desc: 'Any Amount', defaultAmt: '2100' },
                  ].map((cat) => (
                    <div
                      key={cat.id}
                      onClick={() => {
                        setSelectedSeva(cat.id);
                        setCustomAmount(cat.defaultAmt);
                      }}
                      className={`cursor-pointer p-4 rounded border text-left transition ${
                        selectedSeva === cat.id
                          ? 'border-[#ea7b11] bg-amber-50/50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <p className="font-bold text-xs text-[#1b3d75]">{cat.title}</p>
                      <p className="text-[11px] text-gray-500 mt-1">{cat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                  Contribution Amount (₹)
                </label>
                <div className="flex gap-3 mb-3">
                  {['500', '1100', '2100', '5100', '11000'].map((amt) => (
                    <button
                      type="button"
                      key={amt}
                      onClick={() => setCustomAmount(amt)}
                      className={`px-3 py-1.5 rounded text-xs font-bold border ${
                        customAmount === amt
                          ? 'bg-[#244c8c] text-white border-[#244c8c]'
                          : 'border-gray-200 text-gray-700'
                      }`}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#244c8c]"
                  required
                />
              </div>

              {/* Donor Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Full Name (for 80G Receipt) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Sri / Smt. ..."
                    className="w-full px-3 py-2 border border-gray-300 rounded text-xs focus:outline-none focus:border-[#244c8c]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    PAN Number (Mandatory for 80G) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ABCDE1234F"
                    className="w-full px-3 py-2 border border-gray-300 rounded text-xs focus:outline-none focus:border-[#244c8c]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 ..."
                    className="w-full px-3 py-2 border border-gray-300 rounded text-xs focus:outline-none focus:border-[#244c8c]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="xyz@gmail.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded text-xs focus:outline-none focus:border-[#244c8c]"
                  />
                </div>
              </div>

              <div className="p-3 bg-blue-50 rounded border border-blue-200 text-xs text-[#1b3d75] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  Official electronic receipt with registration number will be sent instantly.
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-[#ea7b11] hover:bg-[#d66e0b] text-white font-bold py-3 rounded text-xs uppercase tracking-wider transition shadow"
              >
                Proceed to Pay ₹{customAmount}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
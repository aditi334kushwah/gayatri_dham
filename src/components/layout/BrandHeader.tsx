import Link from 'next/link';
import { Sparkles, Heart } from 'lucide-react';

export default function BrandHeader() {
  return (
    <header className="bg-[#244c8c] text-white py-4 px-4 shadow-sm border-b border-blue-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand identity */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-amber-200 flex items-center justify-center text-[#1b3d75] shadow-md border-2 border-white/80">
            <Sparkles className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-white leading-tight">
              माँ भगवती योगनिसर्गोपचार केंद्र
            </h1>
            <p className="text-xs text-amber-200 tracking-wider uppercase font-medium">
              Gayatri Dham, Sendhwa • Yug Nirman Yojana
            </p>
          </div>
        </Link>

        {/* Highlighted Donate Button (Screenshot Reference) */}
        <div className="flex items-center gap-3">
          <Link
            href="/donate"
            className="bg-[#ea7b11] hover:bg-[#d66e0b] text-white font-bold uppercase tracking-wider text-sm px-6 py-2.5 rounded shadow hover:shadow-lg transition-all duration-200 flex items-center gap-1.5"
          >
            <Heart className="w-4 h-4 fill-white" /> Donate / Seva
          </Link>
        </div>
      </div>
    </header>
  );
}
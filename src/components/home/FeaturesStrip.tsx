import { Leaf, ShieldCheck, MapPin } from 'lucide-react';

export default function FeaturesStrip() {
  return (
    <div className="bg-[#f5efe6] border-b border-amber-900/10 py-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full bg-emerald-800 text-white flex items-center justify-center shrink-0">
            <Leaf className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Nature-Led Pure Care</h4>
            <p className="text-gray-600 text-xs">Panchamahabhuta treatments under qualified Vaidyas</p>
          </div>
        </div>

        <div className="flex items-center gap-3.5 md:border-l border-amber-900/10 md:pl-6">
          <div className="w-10 h-10 rounded-full bg-emerald-800 text-white flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Individual Attention</h4>
            <p className="text-gray-600 text-xs">Personalized dietary, mud, and hydro therapy chart</p>
          </div>
        </div>

        <div className="flex items-center gap-3.5 md:border-l border-amber-900/10 md:pl-6">
          <div className="w-10 h-10 rounded-full bg-emerald-800 text-white flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Gayatri Dham, Sendhwa</h4>
            <p className="text-gray-600 text-xs">Serene 50-acre spiritual retreat on AB Road</p>
          </div>
        </div>
      </div>
    </div>
  );
}
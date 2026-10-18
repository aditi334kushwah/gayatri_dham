import Link from 'next/link';
import { Calendar, Video, BookOpen, MapPin, Users, HeartHandshake, PhoneCall } from 'lucide-react';

export default function TopUtilityBar() {
  return (
    <div className="bg-[#1b3d75] text-blue-100 text-xs py-2 px-4 border-b border-blue-900/50">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center space-x-4 overflow-x-auto">
          <Link href="/#audio-pravachan" className="hover:text-amber-300 flex items-center gap-1 shrink-0">
            <Video className="w-3.5 h-3.5 text-red-400 animate-pulse" /> Live Darshan & Yagya
          </Link>
          <Link href="/#audio-pravachan" className="hover:text-amber-300 flex items-center gap-1 shrink-0">
            <BookOpen className="w-3.5 h-3.5" /> Swadhyaya
          </Link>
          <Link href="/camps" className="hover:text-amber-300 flex items-center gap-1 shrink-0">
            <Calendar className="w-3.5 h-3.5" /> Shibir Calendar
          </Link>
          <Link href="/contact" className="hover:text-amber-300 flex items-center gap-1 shrink-0">
            <MapPin className="w-3.5 h-3.5" /> Sendhwa Center
          </Link>
          <Link href="/contact" className="hover:text-amber-300 flex items-center gap-1 shrink-0">
            <HeartHandshake className="w-3.5 h-3.5" /> Seva Volunteering
          </Link>
        </div>

        <div className="flex items-center space-x-3 text-[11px]">
          <span className="flex items-center gap-1 text-amber-200">
            <PhoneCall className="w-3 h-3" /> Helpline: +91 98260 00000
          </span>
          <span className="text-blue-300">|</span>
          <span className="font-semibold text-white">गायत्री धाम, सेंधवा</span>
        </div>
      </div>
    </div>
  );
}
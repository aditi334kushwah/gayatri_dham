import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const TREATMENTS = [
  {
    hindi: 'चिकित्सीय योग',
    title: 'Therapeutic Yoga',
    desc: 'Personalised movement, breathwork (Pranayama), and restorative Shatkarma practices to revive metabolism and cellular harmony.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=600',
    slug: 'yoga',
  },
  {
    hindi: 'मृदा चिकित्सा',
    title: 'Mud Therapy',
    desc: 'Sun-charged medicinal earth applications applied over abdomen and forehead to disperse toxins and soothe systemic heat.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600',
    slug: 'mud-therapy',
  },
  {
    hindi: 'जल चिकित्सा',
    title: 'Hydrotherapy',
    desc: 'Hip baths, spinal sprays, and wet sheet packs designed around comfort, blood circulation, and restorative natural immunity.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600',
    slug: 'hydrotherapy',
  },
  {
    hindi: 'औषधीय वाष्प',
    title: 'Herbal Steam Care',
    desc: 'Calming therapeutic herbal steam infused with forest herbs from Nimar hills for deep pore cleanse and joint agility.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=600',
    slug: 'steam-care',
  },
];

export default function TreatmentsSection() {
  return (
    <section className="py-16 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-8 border-b border-amber-900/10 pb-4">
          <div>
            <span className="text-[#ea7b11] font-bold text-xs uppercase tracking-widest">
              OUR CARE & HEALING
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1b3d75] mt-1">
              Natural Healing Paths
            </h2>
          </div>
          <Link
            href="/treatments"
            className="text-xs font-bold text-[#1b3d75] hover:text-[#ea7b11] flex items-center gap-1 uppercase tracking-wider"
          >
            View All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TREATMENTS.map((item) => (
            <div
              key={item.slug}
              className="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div>
                <div className="h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-[#ea7b11] font-bold text-[11px] block">{item.hindi}</span>
                  <h3 className="font-serif font-bold text-lg text-gray-900 mt-0.5">{item.title}</h3>
                  <p className="text-gray-600 text-xs mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <div className="p-4 pt-0">
                <Link
                  href={`/treatments/${item.slug}`}
                  className="block text-center border border-[#1b3d75] text-[#1b3d75] hover:bg-[#1b3d75] hover:text-white font-bold text-xs py-2 uppercase tracking-wider transition-colors duration-150"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
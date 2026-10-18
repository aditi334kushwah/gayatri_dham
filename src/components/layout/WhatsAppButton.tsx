import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919826000000?text=Namaste,%20I%20want%20information%20regarding%20Naturopathy%20Camps"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-50 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-2xl transition transform hover:scale-110 flex items-center justify-center group"
    >
      <MessageCircle className="w-7 h-7 fill-white" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
        Naturopathy Helpdesk
      </span>
    </a>
  );
}
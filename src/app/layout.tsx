import type { Metadata } from 'next';
import './globals.css';
import TopUtilityBar from '@/components/layout/TopUtilityBar';
import BrandHeader from '@/components/layout/BrandHeader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

export const metadata: Metadata = {
  title: 'माँ भगवती योगनिसर्गोपचार केंद्र | Gayatri Dham, Sendhwa',
  description:
    'Vedic Naturopathy, Panchamahabhuta therapies, and Yoga center based on Pt. Shriram Sharma Acharya Jis Yug Nirman Yojana at Sendhwa, Madhya Pradesh.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans bg-white antialiased text-gray-800">
        <TopUtilityBar />
        <BrandHeader />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
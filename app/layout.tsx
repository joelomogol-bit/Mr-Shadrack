 import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

// Updated to reflect Shadrack Kaome's official "Behind The Hustle" Mentorship Program
export const metadata = {
  title: 'Behind The Hustle - Build a Profitable Online Brand with Shadrack Kaome',
  description: 'Master physical product research, local sourcing, global importing, Shopify development, viral organic content, and Meta/TikTok Ads.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} bg-background text-creamText min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

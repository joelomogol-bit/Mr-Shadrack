 "use client";

import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, BookOpen, Layers, Users, Award, ExternalLink } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-background text-creamText min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-orangeAccent font-semibold text-sm tracking-wider uppercase block mb-3">
            ✨ Trusted by Aspiring Entrepreneurs
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-creamText leading-tight mb-6">
            Build a Profitable <br />
            <span className="text-orangeAccent">Online Brand</span> From Scratch
          </h1>
          <p className="text-mutedText text-lg mb-8 leading-relaxed">
            Learn how to build a profitable online brand using your smartphone or computer. Master the exact blueprints behind product validation, local sourcing, global importing, Shopify creation, and viral marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link 
              href="/courses/profitable-online-brand" 
              className="bg-orangeAccent hover:bg-orangeHover text-creamText font-bold px-8 py-4 rounded-xl text-center transition shadow-lg"
            >
              Explore Mentorship
            </Link>
            <a 
              href="https://forms.gle/zCM4wpGt3sVrhfbs6" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border border-gray-700 hover:border-gray-500 text-creamText font-bold px-8 py-4 rounded-xl text-center transition flex items-center justify-center gap-2"
            >
              Apply for Mentorship <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          {/* Trust Badge */}
          <div className="flex items-center gap-2 text-sm text-mutedText border-t border-gray-900 pt-6">
            <span className="flex -space-x-2">
              <span className="w-8 h-8 rounded-full bg-orangeAccent/20 border border-background flex items-center justify-center text-xs font-bold text-orangeAccent">SK</span>
              <span className="w-8 h-8 rounded-full bg-gray-800 border border-background flex items-center justify-center text-xs font-bold">BH</span>
            </span>
            <p>Join students building real digital assets in Kenya</p>
          </div>
        </div>

        {/* Profile Image Placeholder */}
        <div className="relative flex justify-center">
          <div className="w-full max-w-md aspect-square rounded-2xl border border-gray-800 bg-cardBg overflow-hidden flex items-center justify-center relative group">
            {/* IMAGE PLACEHOLDER: Replace src with Shadrack's photo once uploaded */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <div className="text-center p-6 z-20">
              <div className="w-20 h-20 rounded-full bg-orangeAccent/10 flex items-center justify-center mx-auto mb-4 border border-orangeAccent/30">
                <Users className="h-8 w-8 text-orangeAccent" />
              </div>
              <p className="font-bold text-creamText">Shadrack Kaome</p>
              <p className="text-xs text-mutedText mt-1">Founder, Behind The Hustle</p>
            </div>
            {/* Fallback pattern background */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ff6b00_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-cardBg border-y border-gray-900 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-orangeAccent">10</p>
            <p className="text-xs md:text-sm text-mutedText mt-1 uppercase tracking-wider font-semibold">Core Modules</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-creamText">8 Weeks</p>
            <p className="text-xs md:text-sm text-mutedText mt-1 uppercase tracking-wider font-semibold">Duration</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-creamText">1-on-1</p>
            <p className="text-xs md:text-sm text-mutedText mt-1 uppercase tracking-wider font-semibold">Personal Support</p>
          </div>
        </div>
      </section>

      {/* 3. CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-creamText">Explore Mentorship Pillars</h2>
          <p className="text-mutedText mt-4">We break down online brand building into structural, actionable disciplines.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-cardBg border border-gray-800 p-8 rounded-2xl hover:border-orangeAccent/30 transition duration-300">
            <div className="text-4xl mb-4">🛍️</div>
            <h3 className="text-xl font-bold text-creamText mb-2">E-Commerce & Sourcing</h3>
            <p className="text-mutedText text-sm mb-6 leading-relaxed">
              Master product demand analysis, physical product sourcing strategies (both locally and global import infrastructures), and setting up conversions on Shopify.
            </p>
            <Link href="/courses" className="text-orangeAccent hover:text-orangeHover font-semibold text-sm flex items-center gap-1">
              Explore Modules &rarr;
            </Link>
          </div>

          <div className="bg-cardBg border border-gray-800 p-8 rounded-2xl hover:border-orangeAccent/30 transition duration-300">
            <div className="text-4xl mb-4">🎥</div>
            <h3 className="text-xl font-bold text-creamText mb-2">Marketing & Brand Strategy</h3>
            <p className="text-mutedText text-sm mb-6 leading-relaxed">
              Learn viral organic content production algorithms using CapCut, scale traffic via Meta and TikTok advertising architectures, and close clients with proven sales scripts.
            </p>
            <Link href="/courses" className="text-orangeAccent hover:text-orangeHover font-semibold text-sm flex items-center gap-1">
              Explore Modules &rarr;
            </Link>
          </div>

        </div>
      </section>

      {/* 4. VALUE PROPOSITION SECTION */}
      <section className="bg-cardBg border-t border-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-creamText mb-6">Why Join the Behind The Hustle Mentorship?</h2>
            <p className="text-mutedText mb-8">
              This isn't theory. This is a practical roadmap built directly from real-world execution, designed to give you a clear, straightforward path to building digital income assets.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-orangeAccent flex-shrink-0 mt-0.5" />
                <span className="text-mutedText">Complete step-by-step masterclass modules taught by Shadrack Kaome.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-orangeAccent flex-shrink-0 mt-0.5" />
                <span className="text-mutedText">Learn at your pace using a smartphone, Samsung device, tablet, or computer.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-orangeAccent flex-shrink-0 mt-0.5" />
                <span className="text-mutedText">Actionable steps on local wholesale sourcing and international importing.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-orangeAccent flex-shrink-0 mt-0.5" />
                <span className="text-mutedText">Direct guidance on paid ad optimizations and high-converting organic video scripts.</span>
              </li>
            </ul>
          </div>

          <div className="bg-background border border-gray-800 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-creamText mb-6">Course Modules Blueprint</h3>
            <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
              <div className="border-b border-gray-900 pb-3">
                <p className="text-orangeAccent font-bold text-xs uppercase tracking-wider">Module 1</p>
                <p className="font-semibold text-creamText">Mindset & Personal Development</p>
              </div>
              <div className="border-b border-gray-900 pb-3">
                <p className="text-orangeAccent font-bold text-xs uppercase tracking-wider">Module 2</p>
                <p className="font-semibold text-creamText">Finding the Right Business & Validation</p>
              </div>
              <div className="border-b border-gray-900 pb-3">
                <p className="text-orangeAccent font-bold text-xs uppercase tracking-wider">Module 3</p>
                <p className="font-semibold text-creamText">Product Research & Profitability</p>
              </div>
              <div className="border-b border-gray-900 pb-3">
                <p className="text-orangeAccent font-bold text-xs uppercase tracking-wider">Module 4</p>
                <p className="font-semibold text-creamText">Product Sourcing & Global Importing</p>
              </div>
              <div className="border-b border-gray-900 pb-3">
                <p className="text-orangeAccent font-bold text-xs uppercase tracking-wider">Module 5</p>
                <p className="font-semibold text-creamText">Shopify Setup & Store Optimization</p>
              </div>
              <div className="border-b border-gray-900 pb-3">
                <p className="text-orangeAccent font-bold text-xs uppercase tracking-wider">Module 6 - 10</p>
                <p className="font-semibold text-creamText">Content, SMM, Paid Ads, Closings & POS Systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

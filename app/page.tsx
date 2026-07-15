 "use client";

import Link from 'next/link';
import { 
  CheckCircle, 
  Smartphone, 
  Target, 
  Search, 
  Truck, 
  ShoppingBag, 
  Video, 
  Share2, 
  TrendingUp, 
  Users, 
  DollarSign,
  ExternalLink
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-background text-creamText min-h-screen">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-orangeAccent font-semibold text-sm tracking-wider uppercase block mb-3">
            ✨ Behind The Hustle Mentorship Program
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-creamText leading-tight mb-6">
            MENTORSHIP Outline: <br />
            <span className="text-orangeAccent">Build a Profitable Online Brand</span>
          </h1>
          
          <div className="bg-cardBg border border-gray-800 p-6 rounded-2xl mb-8">
            <h2 className="text-orangeAccent font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
              <Smartphone className="h-4 w-4" /> Course Objective:
            </h2>
            <p className="text-mutedText text-base leading-relaxed">
              Learn how to build a profitable online brand using a smartphone, Samsung device, HP, Lenovo, MacBook, or any computer. The goal is to create a brand that consistently generates income by selling profitable products.[cite: 4]
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a 
              href="https://forms.gle/zCM4wpGt3sVrhfbs6" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-orangeAccent hover:bg-orangeHover text-creamText font-bold px-8 py-4 rounded-xl text-center transition shadow-lg flex items-center justify-center gap-2"
            >
              Apply for Mentorship <ExternalLink className="h-4 w-4" />
            </a>
            <Link 
              href="#curriculum" 
              className="border border-gray-700 hover:border-gray-500 text-creamText font-bold px-8 py-4 rounded-xl text-center transition"
            >
              View Full 10 Modules
            </Link>
          </div>
        </div>

        {/* Hero Banner / Visual Block */}
        <div className="relative flex justify-center">
          <div className="w-full max-w-md aspect-square rounded-2xl border border-gray-800 bg-cardBg overflow-hidden flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <div className="text-center p-6 z-20">
              <div className="w-20 h-20 rounded-full bg-orangeAccent/10 flex items-center justify-center mx-auto mb-4 border border-orangeAccent/30">
                <Target className="h-8 w-8 text-orangeAccent" />
              </div>
              <p className="font-extrabold text-creamText text-lg">Shadrack Kaome</p>
              <p className="text-xs text-mutedText mt-1 uppercase tracking-widest">Behind The Hustle</p>
            </div>
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ff6b00_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>
        </div>
      </section>

      {/* CURRICULUM SECTION (Modules 1 - 10) */}
      <section id="curriculum" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-900">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-creamText">The 10-Module Blueprint</h2>
          <p className="text-mutedText mt-4">Every section and topic covered in the mentorship program.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Module 1 */}
          <div className="bg-cardBg border border-gray-800 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-orangeAccent/10 text-orangeAccent flex items-center justify-center font-bold">1</span>
              <h3 className="text-xl font-bold text-creamText">Mindset & Personal Development[cite: 4]</h3>
            </div>
            <p className="text-sm text-mutedText mb-4">Build the foundation required for long-term business success.[cite: 4]</p>
            <p className="text-xs font-bold text-orangeAccent uppercase tracking-wider mb-2">Topics Covered[cite: 4]</p>
            <ul className="space-y-2 text-sm text-mutedText">
              <li className="flex items-center gap-2">🔹 Discipline[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Consistency[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Time Management[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Goal Setting[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Productivity[cite: 4]</li>
            </ul>
          </div>

          {/* Module 2 */}
          <div className="bg-cardBg border border-gray-800 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-orangeAccent/10 text-orangeAccent flex items-center justify-center font-bold">2</span>
              <h3 className="text-xl font-bold text-creamText">Finding the Right Business[cite: 4]</h3>
            </div>
            <p className="text-sm text-mutedText mb-4">Learn how to choose the right business instead of starting one simply because you have capital.[cite: 4]</p>
            <p className="text-xs font-bold text-orangeAccent uppercase tracking-wider mb-2">Topics Covered[cite: 4]</p>
            <ul className="space-y-2 text-sm text-mutedText">
              <li className="flex items-center gap-2">🔹 How to choose a business[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 How to validate a business idea[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Types of businesses[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Common mistakes entrepreneurs make[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 How to avoid costly business mistakes[cite: 4]</li>
            </ul>
          </div>

          {/* Module 3 */}
          <div className="bg-cardBg border border-gray-800 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-orangeAccent/10 text-orangeAccent flex items-center justify-center font-bold">3</span>
              <h3 className="text-xl font-bold text-creamText">Product Research[cite: 4]</h3>
            </div>
            <p className="text-sm text-mutedText mb-4">Discover how to identify products that have a high chance of selling.[cite: 4]</p>
            <p className="text-xs font-bold text-orangeAccent uppercase tracking-wider mb-2">Topics Covered[cite: 4]</p>
            <ul className="space-y-2 text-sm text-mutedText">
              <li className="flex items-center gap-2">🔹 What makes a good product[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Characteristics of a winning product[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Product demand research[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Profitability analysis[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Understanding product sourcing[cite: 4]</li>
            </ul>
          </div>

          {/* Module 4 */}
          <div className="bg-cardBg border border-gray-800 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-orangeAccent/10 text-orangeAccent flex items-center justify-center font-bold">4</span>
              <h3 className="text-xl font-bold text-creamText">Product Sourcing[cite: 4]</h3>
            </div>
            <p className="text-sm text-mutedText mb-4">Learn how products move from suppliers to customers.[cite: 4]</p>
            <p className="text-xs font-bold text-orangeAccent uppercase tracking-wider mb-2">Topics Covered[cite: 4]</p>
            <ul className="space-y-2 text-sm text-mutedText">
              <li className="flex items-center gap-2">🔹 How suppliers work[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Wholesalers vs. Retailers[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Local sourcing[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Importing products[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Choosing reliable suppliers[cite: 4]</li>
            </ul>
          </div>

          {/* Module 5 */}
          <div className="bg-cardBg border border-gray-800 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-orangeAccent/10 text-orangeAccent flex items-center justify-center font-bold">5</span>
              <h3 className="text-xl font-bold text-creamText">Shopify & E-commerce[cite: 4]</h3>
            </div>
            <p className="text-sm text-mutedText mb-4">Learn how to build and manage an online store using Shopify.[cite: 4]</p>
            <p className="text-xs font-bold text-orangeAccent uppercase tracking-wider mb-2">Topics Covered[cite: 4]</p>
            <ul className="space-y-2 text-sm text-mutedText">
              <li className="flex items-center gap-2">🔹 Introduction to Shopify[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Shopify Dashboard[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Creating and managing products[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Shopify Apps[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Search Engine Optimization (SEO)[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Optimizing your online store for more sales[cite: 4]</li>
            </ul>
          </div>

          {/* Module 6 */}
          <div className="bg-cardBg border border-gray-800 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-orangeAccent/10 text-orangeAccent flex items-center justify-center font-bold">6</span>
              <h3 className="text-xl font-bold text-creamText">Content Creation[cite: 4]</h3>
            </div>
            <p className="text-sm text-mutedText mb-4">Master the art of creating content that attracts attention and drives sales.[cite: 4]</p>
            <p className="text-xs font-bold text-orangeAccent uppercase tracking-wider mb-2">Topics Covered[cite: 4]</p>
            <ul className="space-y-2 text-sm text-mutedText">
              <li className="flex items-center gap-2">🔹 Hooks (How to grab attention)[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Recording marketing videos[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Video editing[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Editing with CapCut[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Professional editing tools[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 How to create viral content[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Content Calendar[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Content planning strategy[cite: 4]</li>
            </ul>
          </div>

          {/* Module 7 */}
          <div className="bg-cardBg border border-gray-800 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-orangeAccent/10 text-orangeAccent flex items-center justify-center font-bold">7</span>
              <h3 className="text-xl font-bold text-creamText">Social Media Marketing[cite: 4]</h3>
            </div>
            <p className="text-sm text-mutedText mb-4">Learn how to use social media platforms to grow your brand.[cite: 4]</p>
            <p className="text-xs font-bold text-orangeAccent uppercase tracking-wider mb-2">Topics Covered[cite: 4]</p>
            <ul className="space-y-2 text-sm text-mutedText">
              <li className="flex items-center gap-2">🔹 TikTok Marketing[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Instagram Marketing[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Facebook Marketing[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 WhatsApp Business[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Daily Posting System[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Growth Strategies[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Building an engaged audience[cite: 4]</li>
            </ul>
          </div>

          {/* Module 8 */}
          <div className="bg-cardBg border border-gray-800 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-orangeAccent/10 text-orangeAccent flex items-center justify-center font-bold">8</span>
              <h3 className="text-xl font-bold text-creamText">Paid Advertising (Ads)[cite: 4]</h3>
            </div>
            <p className="text-sm text-mutedText mb-4">Learn how to scale your business using paid advertising.[cite: 4]</p>
            <p className="text-xs font-bold text-orangeAccent uppercase tracking-wider mb-2">Topics Covered[cite: 4]</p>
            <ul className="space-y-2 text-sm text-mutedText">
              <li className="flex items-center gap-2">🔹 Meta Ads (Facebook & Instagram)[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 TikTok Ads[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Campaign Structure[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Budgeting Ads[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Optimizing advertising results[cite: 4]</li>
            </ul>
          </div>

          {/* Module 9 */}
          <div className="bg-cardBg border border-gray-800 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-orangeAccent/10 text-orangeAccent flex items-center justify-center font-bold">9</span>
              <h3 className="text-xl font-bold text-creamText">Sales & Customer Service[cite: 4]</h3>
            </div>
            <p className="text-sm text-mutedText mb-4">Learn how to convert visitors into paying customers.[cite: 4]</p>
            <p className="text-xs font-bold text-orangeAccent uppercase tracking-wider mb-2">Topics Covered[cite: 4]</p>
            <ul className="space-y-2 text-sm text-mutedText">
              <li className="flex items-center gap-2">🔹 Building Trust[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Customer Service[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Sales Scripts[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 WhatsApp Selling[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Increasing Conversion Rates[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Closing Sales[cite: 4]</li>
            </ul>
          </div>

          {/* Module 10 */}
          <div className="bg-cardBg border border-gray-800 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-orangeAccent/10 text-orangeAccent flex items-center justify-center font-bold">10</span>
              <h3 className="text-xl font-bold text-creamText">Money Management & Business Systems[cite: 4]</h3>
            </div>
            <p className="text-sm text-mutedText mb-4">Understand the financial side of running a profitable business.[cite: 4]</p>
            <p className="text-xs font-bold text-orangeAccent uppercase tracking-wider mb-2">Topics Covered[cite: 4]</p>
            <ul className="space-y-2 text-sm text-mutedText">
              <li className="flex items-center gap-2">🔹 Profit vs. Revenue[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Cash Flow[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Financial Systems[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Inventory Planning[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Business Finances[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Point of Sale (POS) Systems[cite: 4]</li>
              <li className="flex items-center gap-2">🔹 Tracking Business Performance[cite: 4]</li>
            </ul>
          </div>

        </div>
      </section>

      {/* OUTCOMES SECTION */}
      <section className="bg-cardBg border-t border-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-creamText mb-4">
              By the End of This MENTORSHIP You Will Learn How To:[cite: 4]
            </h2>
            <p className="text-mutedText">Your concrete path forward to financial and strategic independence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-background border border-gray-850 p-5 rounded-xl flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-orangeAccent flex-shrink-0 mt-0.5" />
              <span className="text-mutedText">Build a profitable online brand from scratch.[cite: 4]</span>
            </div>
            <div className="bg-background border border-gray-850 p-5 rounded-xl flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-orangeAccent flex-shrink-0 mt-0.5" />
              <span className="text-mutedText">Find and validate winning business ideas.[cite: 4]</span>
            </div>
            <div className="bg-background border border-gray-850 p-5 rounded-xl flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-orangeAccent flex-shrink-0 mt-0.5" />
              <span className="text-mutedText">Source profitable products.[cite: 4]</span>
            </div>
            <div className="bg-background border border-gray-850 p-5 rounded-xl flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-orangeAccent flex-shrink-0 mt-0.5" />
              <span className="text-mutedText">Create and manage a Shopify store.[cite: 4]</span>
            </div>
            <div className="bg-background border border-gray-850 p-5 rounded-xl flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-orangeAccent flex-shrink-0 mt-0.5" />
              <span className="text-mutedText">Produce engaging content that attracts customers.[cite: 4]</span>
            </div>
            <div className="bg-background border border-gray-850 p-5 rounded-xl flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-orangeAccent flex-shrink-0 mt-0.5" />
              <span className="text-mutedText">Grow your audience on TikTok, Instagram, Facebook, and WhatsApp.[cite: 4]</span>
            </div>
            <div className="bg-background border border-gray-850 p-5 rounded-xl flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-orangeAccent flex-shrink-0 mt-0.5" />
              <span className="text-mutedText">Run effective paid advertising campaigns.[cite: 4]</span>
            </div>
            <div className="bg-background border border-gray-850 p-5 rounded-xl flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-orangeAccent flex-shrink-0 mt-0.5" />
              <span className="text-mutedText">Increase sales using proven selling strategies.[cite: 4]</span>
            </div>
            <div className="bg-background border border-gray-850 p-5 rounded-xl flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-orangeAccent flex-shrink-0 mt-0.5" />
              <span className="text-mutedText">Manage your finances like a successful entrepreneur.[cite: 4]</span>
            </div>
            <div className="bg-background border border-gray-850 p-5 rounded-xl flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-orangeAccent flex-shrink-0 mt-0.5" />
              <span className="text-mutedText">Build a business that generates consistent profits.[cite: 4]</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

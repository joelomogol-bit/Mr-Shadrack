"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ } from '@/lib/types';

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div key={faq.id} className="bg-cardBg border border-gray-800 rounded-2xl overflow-hidden">
            <button onClick={() => toggle(faq.id)} className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
              <span className="font-bold text-creamText text-base md:text-lg">{faq.question}</span>
              {isOpen ? <ChevronUp className="text-orangeAccent h-5 w-5" /> : <ChevronDown className="text-mutedText h-5 w-5" />}
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-sm md:text-base text-mutedText border-t border-gray-800 pt-4 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
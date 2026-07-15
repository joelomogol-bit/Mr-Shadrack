import { Testimonial } from '@/lib/types';

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-cardBg border border-gray-800 p-6 rounded-2xl flex flex-col justify-between h-full">
      <p className="text-sm text-mutedText italic leading-relaxed mb-6">
        "${testimonial.quote}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-orangeAccent/20 flex items-center justify-center font-bold text-orangeAccent">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="text-sm font-bold text-creamText">{testimonial.name}</h4>
          <p className="text-xs text-mutedText">Verified Scholar</p>
        </div>
      </div>
    </div>
  );
}
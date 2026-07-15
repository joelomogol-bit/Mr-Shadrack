import Link from 'next/link';
import { Category } from '@/lib/types';

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/courses?category=${category.slug}`} className="group bg-cardBg border border-gray-800 hover:border-orangeAccent/50 p-6 rounded-2xl transition duration-300 flex flex-col justify-between h-full">
      <div>
        <span className="text-4xl block mb-4 group-hover:scale-110 transition duration-300 w-fit">{category.icon || '📚'}</span>
        <h3 className="text-lg font-bold text-creamText mb-2">{category.name}</h3>
        <p className="text-sm text-mutedText leading-relaxed mb-6">{category.description}</p>
      </div>
      <div className="text-sm font-bold text-orangeAccent flex items-center gap-1 group-hover:translate-x-1 transition duration-200">
        Start Learning &rarr;
      </div>
    </Link>
  );
}
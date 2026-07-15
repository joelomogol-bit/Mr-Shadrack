import Link from 'next/link';
import { Course } from '@/lib/types';

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-cardBg border border-gray-800 rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-xl transition duration-300">
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex gap-2 items-center mb-4">
            {course.duration && (
              <span className="bg-gray-800 text-xs font-semibold px-2.5 py-1 rounded-md text-mutedText">
                ⏱ {course.duration}
              </span>
            )}
            <span className="bg-orangeAccent/10 text-orangeAccent text-xs font-semibold px-2.5 py-1 rounded-md">
              📝 {course.lessons_count} Lessons
            </span>
          </div>
          <h3 className="text-xl font-bold text-creamText mb-3 leading-snug">{course.title}</h3>
          <p className="text-sm text-mutedText line-clamp-3 mb-6 leading-relaxed">
            {course.description}
          </p>
        </div>
        <div>
          <div className="flex items-center justify-between border-t border-gray-800 pt-4 mt-2">
            <div>
              <p className="text-xs text-mutedText uppercase font-semibold">Tuition</p>
              <p className="text-lg font-extrabold text-creamText">KSH {course.price.toLocaleString()}</p>
            </div>
            <Link href={`/courses/${course.slug}`} className="bg-orangeAccent hover:bg-orangeHover text-creamText px-4 py-2 rounded-lg text-sm font-bold transition">
              View Course
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
 import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export const revalidate = 0;

export default async function CourseDetailPage({ params }: { params: { slug: string } }) {
  // FIX: Added await here to resolve the client promise first
  const supabase = await createClient();

  const { data: course } = await supabase
    .from('courses')
    .select('*, categories(*)')
    .eq('slug', params.slug)
    .single();

  if (!course) {
    notFound();
  }

  const { data: { user } } = await supabase.auth.getUser();
  let isEnrolled = false;

  if (user) {
    const { data: enroll } = await supabase
      .from('enrollments')
      .select('id')
      .eq('user_id', user.id)
      .eq('course_id', course.id)
      .single();
    if (enroll) {
      isEnrolled = true;
    }
  }

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="mb-8 border-b border-gray-800 pb-8">
          <Link href="/courses" className="text-orangeAccent hover:underline text-sm font-semibold mb-4 block">&larr; Back to catalog</Link>
          <div className="flex gap-2 items-center mb-4">
            <span className="bg-orangeAccent/10 text-orangeAccent text-xs font-semibold px-3 py-1 rounded-full">
              {course.categories?.name || 'Education'}
            </span>
            <span className="text-mutedText text-sm font-semibold">⏱ {course.duration}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-creamText mb-4 leading-tight">{course.title}</h1>
          <p className="text-base text-mutedText leading-relaxed mb-6 max-w-3xl">{course.description}</p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between pt-4">
            <div>
              <p className="text-xs uppercase font-semibold text-mutedText">Tuition Fee</p>
              <p className="text-3xl font-extrabold text-creamText">KSH {course.price.toLocaleString()}</p>
            </div>
            
            {isEnrolled ? (
              <Link href="/dashboard" className="bg-green-600 hover:bg-green-700 text-creamText px-8 py-3 rounded-lg font-bold transition">
                Already Enrolled (Open Dashboard)
              </Link>
            ) : (
              <Link href={`/enroll/${course.id}`} className="bg-orangeAccent hover:bg-orangeHover text-creamText px-8 py-3 rounded-lg font-bold transition">
                Enroll in Course
              </Link>
            )}
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-creamText mb-6">Course Modules ({course.lessons_count} Lessons)</h2>
          <div className="space-y-4">
            <div className="bg-cardBg border border-gray-800 p-6 rounded-2xl">
              <h3 className="font-bold text-creamText text-lg mb-2">Module 1: Complete Fundamentals</h3>
              <p className="text-sm text-mutedText mb-4">Learn basic terms, standard frameworks, and environment setup.</p>
              <span className="text-xs text-orangeAccent font-semibold">🔓 Free Preview Included</span>
            </div>
            <div className="bg-cardBg border border-gray-800 p-6 rounded-2xl">
              <h3 className="font-bold text-creamText text-lg mb-2">Module 2: Practical Core Projects</h3>
              <p className="text-sm text-mutedText mb-4">Translate theory into active design projects, writing, and analytical assignments.</p>
              <span className="text-xs text-mutedText font-semibold">🔒 Premium Content Only</span>
            </div>
            <div className="bg-cardBg border border-gray-800 p-6 rounded-2xl">
              <h3 className="font-bold text-creamText text-lg mb-2">Module 3: Portfolio & Launch Strategy</h3>
              <p className="text-sm text-mutedText mb-4">Build and configure client packages, host dynamic products, and master negotiations.</p>
              <span className="text-xs text-mutedText font-semibold">🔒 Premium Content Only</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

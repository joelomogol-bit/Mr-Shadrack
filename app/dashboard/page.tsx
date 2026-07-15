 import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export const revalidate = 0;

export default async function DashboardPage() {
  // FIX: Added await to resolve the promise first
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  const { data: enrollments } = await supabase
    .from('enrollments')
    .select('*, courses(*, categories(*))')
    .eq('user_id', user.id);

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Welcome Banner */}
        <div className="bg-cardBg border border-gray-800 rounded-2xl p-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orangeAccent">Student Portal</span>
            <h1 className="text-2xl md:text-4xl font-extrabold text-creamText mt-1">
              Welcome back, {profile?.full_name || 'Scholar'}!
            </h1>
            <p className="text-sm text-mutedText mt-2">
              Track your premium marketing modules, review materials, and access certificates.
            </p>
          </div>
          <form action="/auth/signout" method="POST">
            <button
              type="submit"
              className="border border-red-500/30 text-red-400 hover:bg-red-500/10 px-6 py-2.5 rounded-xl text-sm font-semibold transition"
            >
              Sign Out
            </button>
          </form>
        </div>

        {/* My Enrolled Courses */}
        <h2 className="text-xl md:text-2xl font-bold text-creamText mb-6">My Active Masterclasses</h2>

        {enrollments && enrollments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrollments.map((enroll: any) => {
              const course = enroll.courses;
              if (!course) return null;

              return (
                <div
                  key={enroll.id}
                  className="bg-cardBg border border-gray-800 rounded-2xl overflow-hidden hover:border-orangeAccent/50 transition duration-300 flex flex-col h-full"
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex gap-2 items-center mb-4">
                      <span className="bg-orangeAccent/10 text-orangeAccent text-xs font-semibold px-3 py-1 rounded-full">
                        {course.categories?.name || 'Class'}
                      </span>
                      <span className="text-mutedText text-xs font-semibold">⏱ {course.duration}</span>
                    </div>

                    <h3 className="text-lg font-bold text-creamText mb-2">{course.title}</h3>
                    <p className="text-mutedText text-sm line-clamp-2 leading-relaxed mb-6">
                      {course.description}
                    </p>

                    <div className="border-t border-gray-800 pt-4 flex items-center justify-between mt-auto">
                      <span className="text-xs font-semibold text-green-500 bg-green-500/10 px-2.5 py-1 rounded-lg">
                        ● Enrolled
                      </span>
                      <Link
                        href={`/courses/${course.slug}`}
                        className="bg-orangeAccent hover:bg-orangeHover text-creamText font-bold text-xs px-4 py-2 rounded-lg transition"
                      >
                        Launch Portal &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-cardBg border border-gray-800 rounded-2xl max-w-md mx-auto">
            <span className="text-4xl">📚</span>
            <h3 className="text-lg font-bold text-creamText mt-4 mb-2">You aren't enrolled in any courses yet</h3>
            <p className="text-sm text-mutedText px-6 mb-6">
              Browse our catalog of premium, high-income masterclasses to jumpstart your copywriting, web design, or AI workflows.
            </p>
            <Link
              href="/courses"
              className="bg-orangeAccent hover:bg-orangeHover text-creamText font-bold px-6 py-2.5 rounded-xl text-sm transition inline-block"
            >
              Explore Courses
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}

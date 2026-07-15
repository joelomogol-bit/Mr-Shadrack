import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

export const revalidate = 0;

export default async function DashboardPage() {
  const supabase = createClient();

  const { data: { user } } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user?.id)
    .single();

  const { data: enrollments } = await supabase
    .from('enrollments')
    .select('*, courses(*)')
    .eq('user_id', user?.id);

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-cardBg border border-gray-800 rounded-2xl p-6 md:p-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-creamText">
              Jambo, {profile?.full_name || user?.email?.split('@')[0]}
            </h1>
            <p className="text-sm text-mutedText mt-1">Student Portal Workspace &middot; Registered via {user?.email}</p>
          </div>
          <div className="bg-orangeAccent/10 border border-orangeAccent/20 rounded-xl px-4 py-2">
            <span className="text-orangeAccent font-bold text-sm block">Enrolled Masterclasses</span>
            <span className="text-xl font-black text-creamText">{enrollments?.length || 0}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-creamText mb-4">My Dashboard Courses</h2>
            
            {enrollments && enrollments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {enrollments.map((enr) => {
                  const course = enr.courses;
                  if (!course) return null;
                  return (
                    <div key={enr.id} className="bg-cardBg border border-gray-800 rounded-2xl overflow-hidden flex flex-col justify-between h-full">
                      <div className="p-6">
                        <span className="bg-green-500/10 text-green-400 text-xs font-semibold px-2.5 py-1 rounded-md mb-3 block w-fit">
                          🟢 {enr.status.toUpperCase()}
                        </span>
                        <h3 className="text-lg font-bold text-creamText mb-2 leading-snug">{course.title}</h3>
                        <p className="text-xs text-mutedText line-clamp-2 leading-relaxed">{course.description}</p>
                      </div>
                      <div className="bg-gray-900/40 p-4 border-t border-gray-800 flex items-center justify-between">
                        <span className="text-xs text-mutedText font-semibold">⏱ {course.duration}</span>
                        <Link href={`/courses/${course.slug}`} className="bg-orangeAccent hover:bg-orangeHover text-creamText px-4 py-1.5 rounded-lg text-xs font-bold transition">
                          Launch Lessons &rarr;
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-cardBg border border-gray-800 rounded-2xl p-8 text-center">
                <p className="text-mutedText text-sm mb-4">You have not enrolled in any masterclasses yet.</p>
                <Link href="/courses" className="bg-orangeAccent hover:bg-orangeHover text-creamText px-6 py-2.5 rounded-lg font-bold text-sm transition">
                  Enroll in a Course
                </Link>
              </div>
            )}
          </div>

          <div>
            <h2 className="text-xl font-bold text-creamText mb-4">Learning Tips</h2>
            <div className="bg-cardBg border border-gray-800 rounded-2xl p-6 space-y-4">
              <div className="border-b border-gray-800 pb-4">
                <span className="text-orangeAccent font-bold text-xs">TIP #1</span>
                <h4 className="font-bold text-creamText text-sm mt-1">Practice with Real Files</h4>
                <p className="text-xs text-mutedText mt-1">Download raw assets, element templates, or draft copy blocks directly inside class pages.</p>
              </div>
              <div className="border-b border-gray-800 pb-4">
                <span className="text-orangeAccent font-bold text-xs">TIP #2</span>
                <h4 className="font-bold text-creamText text-sm mt-1">Complete 1 Lesson Daily</h4>
                <p className="text-xs text-mutedText mt-1">Consistency outweighs long cram sessions. Set aside 30 minutes daily to complete one full project video.</p>
              </div>
              <div>
                <span className="text-orangeAccent font-bold text-xs">TIP #3</span>
                <h4 className="font-bold text-creamText text-sm mt-1">Need help?</h4>
                <p className="text-xs text-mutedText mt-1">Connect with the community, submit your designs, and get actionable reviews on your portfolios.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
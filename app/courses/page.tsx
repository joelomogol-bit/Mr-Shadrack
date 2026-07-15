 import { createClient } from '@/lib/supabase/server';
import CourseCard from '@/components/CourseCard';

export const revalidate = 0;

interface CoursesPageProps {
  searchParams: {
    category?: string;
    search?: string;
  };
}

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  // FIX: Added await to resolve the promise first
  const supabase = await createClient();
  const catSlug = searchParams.category;
  const searchQuery = searchParams.search;

  const { data: categories } = await supabase.from('categories').select('*');

  let query = supabase.from('courses').select('*, categories!inner(*)');

  if (catSlug) {
    query = query.eq('categories.slug', catSlug);
  }

  if (searchQuery) {
    query = query.ilike('title', `%${searchQuery}%`);
  }

  const { data: courses } = await query;

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          <aside className="w-full md:w-64 flex-shrink-0">
            <h3 className="text-lg font-bold text-creamText mb-4 uppercase tracking-wider text-xs">Filter by Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="/courses" className={`block p-3 rounded-xl transition font-medium ${!catSlug ? 'bg-orangeAccent text-creamText' : 'bg-cardBg text-mutedText hover:bg-gray-800'}`}>
                  All Classes
                </a>
              </li>
              {categories?.map((cat) => {
                const isActive = catSlug === cat.slug;
                return (
                  <li key={cat.id}>
                    <a href={`/courses?category=${cat.slug}`} className={`block p-3 rounded-xl transition font-medium ${isActive ? 'bg-orangeAccent text-creamText' : 'bg-cardBg text-mutedText hover:bg-gray-800'}`}>
                      {cat.icon} {cat.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </aside>

          <main className="flex-1">
            <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <h1 className="text-2xl md:text-3xl font-extrabold text-creamText">
                {catSlug ? `Mastering ${catSlug.replace('-', ' ')}` : 'Our Masterclasses'}
              </h1>
              
              <form action="/courses" method="GET" className="w-full sm:w-80 flex gap-2">
                <input
                  type="text"
                  name="search"
                  defaultValue={searchQuery || ''}
                  placeholder="Search courses..."
                  className="w-full px-4 py-2 bg-cardBg border border-gray-800 text-creamText rounded-lg focus:outline-none focus:border-orangeAccent text-sm"
                />
                <button type="submit" className="bg-orangeAccent hover:bg-orangeHover px-4 py-2 text-creamText font-bold text-sm rounded-lg transition">
                  Find
                </button>
              </form>
            </div>

            {courses && courses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="bg-cardBg border border-gray-800 p-12 text-center rounded-2xl">
                <h3 className="text-lg font-semibold text-creamText mb-2">No courses found</h3>
                <p className="text-sm text-mutedText mb-4">Try altering your selection, or clear search queries.</p>
                <a href="/courses" className="text-orangeAccent font-bold hover:underline">Reset Filters</a>
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
}

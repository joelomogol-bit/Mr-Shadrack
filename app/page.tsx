 import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

export const revalidate = 0;

export default async function HomePage() {
  // FIX: Added await to resolve the promise first
  const supabase = await createClient();

  const { count: studentsCount } = await supabase.from('profiles').select('*', { count: 'exact', head: true });
  const { count: coursesCount } = await supabase.from('courses').select('*', { count: 'exact', head: true });

  const { data: categories } = await supabase.from('categories').select('*').limit(4);
  const { data: featuredCourses } = await supabase.from('courses').select('*, categories(*)').limit(3);
  const { data: testimonials } = await supabase.from('testimonials').select('*').limit(3);
  const { data: faqs } = await supabase.from('faqs').select('*').order('display_order', { ascending: true }).limit(3);

  return (
    <div className="bg-background min-h-screen text-creamText">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="bg-orangeAccent/10 text-orangeAccent text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block">
            Empowering Kenyan Creators
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl mx-auto text-creamText">
            Acquire High-Income Digital Skills Online
          </h1>
          <p className="text-lg md:text-xl text-mutedText max-w-2xl mx-auto mb-10 leading-relaxed">
            Master Web Design, AI workflows, Graphic Design, and Copywriting with step-by-step video lessons and dedicated guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses"
              className="bg-orangeAccent hover:bg-orangeHover text-creamText font-extrabold px-8 py-4 rounded-xl shadow-lg transition text-base"
            >
              Explore Masterclasses
            </Link>
            <Link
              href="/signup"
              className="bg-cardBg hover:bg-gray-800 border border-gray-800 text-creamText font-bold px-8 py-4 rounded-xl transition text-base"
            >
              Join Free Today
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-cardBg/50 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-5xl font-extrabold text-orangeAccent">{(studentsCount || 0) + 120}+</p>
              <p className="text-xs uppercase font-bold text-mutedText mt-2 tracking-wider">Students Enrolled</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-extrabold text-creamText">{coursesCount || 3}</p>
              <p className="text-xs uppercase font-bold text-mutedText mt-2 tracking-wider">Premium Courses</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-extrabold text-creamText">99%</p>
              <p className="text-xs uppercase font-bold text-mutedText mt-2 tracking-wider">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-extrabold text-creamText">KSH 0</p>
              <p className="text-xs uppercase font-bold text-mutedText mt-2 tracking-wider">Hidden Fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-creamText">Choose Your Specialty</h2>
          <p className="text-mutedText mt-3 text-base">Select a domain to begin upgrading your skill set instantly.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories?.map((cat) => (
            <Link
              key={cat.id}
              href={`/courses?category=${cat.slug}`}
              className="bg-cardBg border border-gray-800 hover:border-orangeAccent/50 p-8 rounded-2xl transition duration-300 group text-left"
            >
              <span className="text-4xl block mb-4 group-hover:scale-110 transition duration-300">{cat.icon}</span>
              <h3 className="text-lg font-bold text-creamText mb-2 group-hover:text-orangeAccent transition-colors">
                {cat.name}
              </h3>
              <p className="text-mutedText text-xs leading-relaxed">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-cardBg/30 border-t border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-extrabold text-creamText">Featured Masterclasses</h2>
              <p className="text-mutedText mt-2 text-sm">Enroll now and access instant self-paced learning portal.</p>
            </div>
            <Link href="/courses" className="text-orangeAccent hover:underline font-bold text-sm mt-4 sm:mt-0">
              View All Courses &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses?.map((course) => (
              <div
                key={course.id}
                className="bg-cardBg border border-gray-800 rounded-2xl overflow-hidden hover:border-orangeAccent/50 transition duration-300 flex flex-col h-full group"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex gap-2 items-center mb-4">
                    <span className="bg-orangeAccent/10 text-orangeAccent text-xs font-semibold px-3 py-1 rounded-full">
                      {course.categories?.name}
                    </span>
                    <span className="text-mutedText text-xs font-semibold">⏱ {course.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-creamText mb-2 group-hover:text-orangeAccent transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-mutedText text-sm leading-relaxed mb-6 line-clamp-3">
                    {course.description}
                  </p>

                  <div className="border-t border-gray-800 pt-4 flex items-center justify-between mt-auto">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-mutedText">Tuition</p>
                      <p className="text-lg font-extrabold text-creamText">KSH {course.price.toLocaleString()}</p>
                    </div>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="bg-orangeAccent hover:bg-orangeHover text-creamText font-bold text-xs px-4 py-2 rounded-lg transition"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-creamText">Loved by 100+ Students</h2>
          <p className="text-mutedText mt-3 text-base">Here is what actual students are saying about our masterclasses.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials?.map((t) => (
            <div key={t.id} className="bg-cardBg border border-gray-800 p-8 rounded-2xl relative">
              <span className="text-orangeAccent text-4xl font-serif absolute top-4 right-6 opacity-30">“</span>
              <p className="text-mutedText text-sm leading-relaxed italic mb-6 relative z-10">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="bg-orangeAccent/20 text-orangeAccent font-bold rounded-full w-10 h-10 flex items-center justify-center text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-creamText text-sm">{t.name}</h4>
                  <p className="text-[10px] uppercase font-bold text-orangeAccent tracking-wider">Verified Graduate</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cardBg/30 border-t border-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-creamText">Frequently Asked Questions</h2>
            <p className="text-mutedText mt-3 text-sm">Everything you need to know about starting your classes.</p>
          </div>
          <div className="space-y-6">
            {faqs?.map((faq) => (
              <div key={faq.id} className="bg-cardBg border border-gray-800 p-6 rounded-2xl">
                <h4 className="font-bold text-creamText mb-2 text-base">{faq.question}</h4>
                <p className="text-mutedText text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

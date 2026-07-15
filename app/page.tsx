import { createClient } from '@/lib/supabase/server';
import Hero from '@/components/Hero';
import CategoryCard from '@/components/CategoryCard';
import CourseCard from '@/components/CourseCard';
import TestimonialCard from '@/components/TestimonialCard';
import FAQAccordion from '@/components/FAQAccordion';
import Link from 'next/link';

export const revalidate = 0;

export default async function Home() {
  const supabase = createClient();

  const { count: studentsCount } = await supabase.from('profiles').select('*', { count: 'exact', head: true });
  const { count: coursesCount } = await supabase.from('courses').select('*', { count: 'exact', head: true });

  const { data: categories } = await supabase.from('categories').select('*').limit(4);
  const { data: courses } = await supabase.from('courses').select('*').limit(3);
  const { data: testimonials } = await supabase.from('testimonials').select('*').limit(3);
  const { data: faqs } = await supabase.from('faqs').select('*').order('display_order');

  return (
    <div className="relative">
      <Hero studentsCount={studentsCount || 150} coursesCount={coursesCount || 3} />

      {/* Explore Course Categories */}
      <section className="py-16 md:py-24 bg-[#081a24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-creamText">Explore Course Categories</h2>
            <p className="text-sm md:text-base text-mutedText max-w-xl mx-auto">
              Select your path. Learn premium, digital skillsets formatted for hands-on application.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories?.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold mb-2 text-creamText">Featured Masterclasses</h2>
              <p className="text-sm md:text-base text-mutedText">Learn at your pace. Real projects. No fluff.</p>
            </div>
            <Link href="/courses" className="bg-orangeAccent hover:bg-orangeHover text-creamText px-6 py-3 rounded-lg font-bold transition text-sm">
              See All Courses
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses?.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-[#081a24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-creamText">What Our Scholars Say</h2>
            <p className="text-sm md:text-base text-mutedText max-w-xl mx-auto">
              Hear directly from learners who transformed their digital skillsets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials?.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-creamText">Frequently Asked Questions</h2>
            <p className="text-sm md:text-base text-mutedText">Clear answers to help you start your journey.</p>
          </div>
          {faqs && faqs.length > 0 ? (
            <FAQAccordion faqs={faqs} />
          ) : (
            <p className="text-center text-mutedText text-sm">FAQs coming soon!</p>
          )}
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-gradient-to-r from-orangeAccent/20 to-transparent border-y border-orangeAccent/10 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-creamText mb-6">Ready to Advance Your Tech IQ?</h2>
          <p className="text-base text-mutedText max-w-xl mx-auto mb-8">
            Sign up today and get dynamic course updates, access dashboard workspace, and download lesson resource files.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/courses" className="bg-orangeAccent hover:bg-orangeHover text-creamText px-8 py-3 rounded-lg font-bold transition">
              Browse All Courses
            </Link>
            <Link href="/signup" className="text-creamText hover:underline font-bold text-sm">
              Create a Free Account &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
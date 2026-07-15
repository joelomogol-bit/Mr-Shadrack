import Link from 'next/link';

interface HeroProps {
  studentsCount: number;
  coursesCount: number;
}

export default function Hero({ studentsCount, coursesCount }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orangeAccent/10 border border-orangeAccent/20 text-orangeAccent text-xs font-semibold uppercase tracking-wider mb-6">
          <span>🚀 Trusted by {studentsCount}+ Learners Worldwide</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-creamText tracking-tight mb-6 leading-tight">
          Master Digital Marketing, Copywriting & <span className="text-orangeAccent">AI Workflows</span>
        </h1>
        <p className="text-lg md:text-xl text-mutedText max-w-2xl mx-auto mb-10 leading-relaxed">
          Learn directly from experienced practitioners. Actionable, self-paced certification masterclasses designed to launch or accelerate your tech career.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link href="/courses" className="w-full sm:w-auto bg-orangeAccent hover:bg-orangeHover text-creamText px-8 py-4 rounded-xl font-bold shadow-lg transition duration-200">
            Browse All Courses
          </Link>
          <Link href="/signup" className="w-full sm:w-auto bg-transparent hover:bg-cardBg border border-gray-700 text-creamText px-8 py-4 rounded-xl font-bold transition duration-200">
            Start Learning Free
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-8">
          <div className="bg-cardBg border border-gray-800 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-extrabold text-orangeAccent mb-2">{studentsCount}+</h3>
            <p className="text-sm font-medium text-mutedText">Students Trained</p>
          </div>
          <div className="bg-cardBg border border-gray-800 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-extrabold text-orangeAccent mb-2">50+</h3>
            <p className="text-sm font-medium text-mutedText">Actionable Lessons</p>
          </div>
          <div className="bg-cardBg border border-gray-800 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-extrabold text-orangeAccent mb-2">{coursesCount}</h3>
            <p className="text-sm font-medium text-mutedText">Curated Masterclasses</p>
          </div>
        </div>
      </div>
    </section>
  );
}
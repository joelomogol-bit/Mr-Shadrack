import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#051119] border-t border-gray-800 text-mutedText py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-creamText font-bold text-lg mb-4">
              <span className="text-orangeAccent">Kihato</span> Marketing
            </h3>
            <p className="text-sm text-mutedText mb-4 max-w-sm">
              Empowering African creators, copywriters, and marketers to learn digital skillsets that unlock global opportunities.
            </p>
          </div>
          <div>
            <h4 className="text-creamText font-semibold text-sm uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-creamText transition">Home</Link></li>
              <li><Link href="/courses" className="hover:text-creamText transition">All Courses</Link></li>
              <li><Link href="/dashboard" className="hover:text-creamText transition">Student Portal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-creamText font-semibold text-sm uppercase tracking-wider mb-4">Social & Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-creamText transition">Facebook</a></li>
              <li><a href="#" className="hover:text-creamText transition">Instagram</a></li>
              <li><a href="#" className="hover:text-creamText transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Kihato Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
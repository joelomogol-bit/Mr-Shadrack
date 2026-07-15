 "use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, User, LogOut } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    async function getUser() {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    }
    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
    router.push('/');
  };

  return (
    <nav className="bg-cardBg border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Updated Brand Logo and Text to Shadrack Kaome's official Brand */}
            <Link href="/" className="text-creamText font-bold text-xl flex items-center gap-2">
              <span className="text-orangeAccent">Behind</span> The Hustle
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/courses" className="text-mutedText hover:text-creamText transition">Courses</Link>
            {user ? (
              <>
                <Link href="/dashboard" className="text-mutedText hover:text-creamText transition">Dashboard</Link>
                <div className="flex items-center gap-4 pl-4 border-l border-gray-700">
                  <span className="text-creamText text-sm font-medium flex items-center gap-1">
                    <User className="h-4 w-4 text-orangeAccent" />
                    {user.email}
                  </span>
                  <button onClick={handleLogout} className="text-red-400 hover:text-red-300 text-sm flex items-center gap-1 transition">
                    <LogOut className="h-4 w-4" /> Sign Out
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <Link href="/login" className="text-creamText hover:text-orangeAccent transition">Log In</Link>
                <Link href="/signup" className="bg-orangeAccent hover:bg-orangeHover text-creamText px-4 py-2 rounded-lg font-medium transition text-sm">
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-mutedText hover:text-creamText focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-cardBg border-b border-gray-800 px-2 pt-2 pb-4 space-y-1">
          <Link href="/courses" className="block px-3 py-2 rounded-md text-base font-medium text-mutedText hover:text-creamText" onClick={() => setIsOpen(false)}>Courses</Link>
          {user ? (
            <>
              <Link href="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-mutedText hover:text-creamText" onClick={() => setIsOpen(false)}>Dashboard</Link>
              <div className="px-3 py-2 text-sm text-creamText border-t border-gray-700 mt-2">
                User: {user.email}
              </div>
              <button onClick={() => { handleLogout(); setIsOpen(false); }} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-red-400 hover:bg-gray-800">
                Sign Out
              </button>
            </>
          ) : (
            <div className="pt-2 border-t border-gray-700 mt-2 space-y-2">
              <Link href="/login" className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-creamText hover:bg-gray-800" onClick={() => setIsOpen(false)}>Log In</Link>
              <Link href="/signup" className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-orangeAccent text-creamText" onClick={() => setIsOpen(false)}>Sign Up</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

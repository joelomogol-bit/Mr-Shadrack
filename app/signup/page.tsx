"use client";

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import Link from 'next/link';

export default function SignupPage() {
  const supabase = createClient();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    setLoading(false);
    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setSuccess(true);
      setMessage('Registration successful! Check your email to confirm registration before logging in.');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-cardBg p-8 rounded-2xl border border-gray-800">
        <h2 className="text-center text-3xl font-extrabold text-creamText mb-6">Create your scholar account</h2>
        
        {message && (
          <div className={`p-4 rounded-lg mb-4 text-sm text-center border ${success ? 'bg-green-500/10 border-green-500 text-green-200' : 'bg-red-500/10 border-red-500 text-red-200'}`}>
            {message}
          </div>
        )}

        {!success && (
          <form className="space-y-4" onSubmit={handleSignup}>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-mutedText mb-1">Full Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 bg-background border border-gray-800 text-creamText rounded-lg focus:outline-none focus:border-orangeAccent text-sm"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-mutedText mb-1">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 bg-background border border-gray-800 text-creamText rounded-lg focus:outline-none focus:border-orangeAccent text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-mutedText mb-1">Password</label>
              <input
                type="password"
                required
                className="w-full px-4 py-2 bg-background border border-gray-800 text-creamText rounded-lg focus:outline-none focus:border-orangeAccent text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orangeAccent hover:bg-orangeHover text-creamText py-3 rounded-lg font-bold transition text-sm disabled:opacity-50"
            >
              {loading ? 'Registering...' : 'Register Account'}
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-xs text-mutedText">
          Already registered?{' '}
          <Link href="/login" className="text-orangeAccent hover:underline font-semibold">Log In</Link>
        </p>
      </div>
    </div>
  );
}
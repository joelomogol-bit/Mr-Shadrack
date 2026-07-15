"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Course } from '@/lib/types';
import Link from 'next/link';

export default function EnrollPage({ params }: { params: { courseId: string } }) {
  const supabase = createClient();
  const router = useRouter();

  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function init() {
      const { data: authData } = await supabase.auth.getUser();
      if (!authData.user) {
        router.push(`/login?redirect=/enroll/${params.courseId}`);
        return;
      }
      setUser(authData.user);

      const { data: courseData } = await supabase
        .from('courses')
        .select('*')
        .eq('id', params.courseId)
        .single();
      
      setCourse(courseData);
      setLoading(false);
    }
    init();
  }, [params.courseId]);

  const handleEnrollmentSubmit = async () => {
    if (!user || !course) return;
    setSubmitting(true);
    setErrorMessage('');

    const paymentInitiated = initiatePayment(course.price);

    if (paymentInitiated) {
      const { error } = await supabase
        .from('enrollments')
        .insert({
          user_id: user.id,
          course_id: course.id,
          status: 'active'
        });

      if (error) {
        setErrorMessage(`Enrollment failed: ${error.message}`);
        setSubmitting(false);
      } else {
        router.push('/dashboard');
      }
    }
  };

  const initiatePayment = (amount: number) => {
    console.log(`Initiating checkout process for: KSH ${amount}`);
    return true; 
  };

  if (loading) {
    return (
      <div className="py-24 text-center">
        <p className="text-mutedText">Verifying checkout credentials...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="py-24 text-center">
        <p className="text-mutedText">Invalid Masterclass Product Selected.</p>
        <Link href="/courses" className="text-orangeAccent font-bold mt-4 block">Return to catalog</Link>
      </div>
    );
  }

  return (
    <div className="py-12 bg-background min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-cardBg border border-gray-800 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-creamText mb-6 text-center">Review Your Enrollment</h2>
        
        {errorMessage && (
          <div className="bg-red-500/10 border border-red-500 text-red-200 p-4 rounded-lg mb-4 text-sm text-center">
            {errorMessage}
          </div>
        )}

        <div className="bg-[#051119] p-4 rounded-xl mb-6">
          <p className="text-xs text-mutedText uppercase font-semibold">Masterclass Course</p>
          <h3 className="text-base font-bold text-creamText mt-1">{course.title}</h3>
          
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-800">
            <span className="text-sm font-semibold text-mutedText">Enrollment Fee</span>
            <span className="text-lg font-black text-creamText">KSH {course.price.toLocaleString()}</span>
          </div>
        </div>

        <div className="text-xs text-mutedText mb-6 space-y-2">
          <p className="flex items-center gap-2">🟢 Instant workspace & dashboard access</p>
          <p className="flex items-center gap-2">🟢 Complete video guides & premium checklist resources</p>
        </div>

        <button
          onClick={handleEnrollmentSubmit}
          disabled={submitting}
          className="w-full bg-orangeAccent hover:bg-orangeHover text-creamText py-3 rounded-lg font-bold transition text-sm disabled:opacity-50"
        >
          {submitting ? 'Processing Enrollment...' : 'Confirm Enrollment & Launch Course'}
        </button>

        <p className="text-center text-[10px] text-mutedText mt-4 leading-relaxed">
          Need custom billing support or Kenyan M-Pesa options? Contact admissions at support@kihatomarketing4.co.ke
        </p>
      </div>
    </div>
  );
}
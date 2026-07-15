export interface Profile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string | null;
  description: string | null;
  created_at: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  category_id: string | null;
  price: number;
  duration: string | null;
  lessons_count: number;
  image_url: string | null;
  created_at: string;
  categories?: Category;
}

export interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  enrolled_at: string;
  status: string;
  courses?: Course;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  avatar_url: string | null;
  created_at: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  display_order: number;
  created_at: string;
}
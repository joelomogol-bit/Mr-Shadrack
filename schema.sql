-- Create Profiles table (linked to Supabase Auth users)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create Categories table
create table public.categories (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  slug text not null unique,
  icon text, -- Emoji or icon name
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create Courses table
create table public.courses (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text not null unique,
  description text not null,
  category_id uuid references public.categories(id) on delete set null,
  price numeric not null default 0.00,
  duration text, -- e.g., "3 Days", "12 Hours"
  lessons_count integer default 0,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create Enrollments table
create table public.enrollments (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users on delete cascade not null,
  course_id uuid references public.courses(id) on delete cascade not null,
  enrolled_at timestamp with time zone default timezone('utc'::text, now()) not null,
  status text default 'active', -- 'active', 'completed'
  unique (user_id, course_id)
);

-- Create Testimonials table
create table public.testimonials (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  quote text not null,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create FAQs table
create table public.faqs (
  id uuid default gen_random_uuid() primary key,
  question text not null,
  answer text not null,
  display_order integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS) on all tables
alter table public.profiles enable row level security;
alter table public.categories enable row level security;
alter table public.courses enable row level security;
alter table public.enrollments enable row level security;
alter table public.testimonials enable row level security;
alter table public.faqs enable row level security;

-- Setup RLS Policies

-- Profiles
create policy "Public profiles are viewable by everyone." on public.profiles
  for select using (true);

create policy "Users can update their own profile." on public.profiles
  for update using (auth.uid() = id);

create policy "Users can insert their own profile." on public.profiles
  for insert with check (auth.uid() = id);

-- Categories (Readable by everyone)
create policy "Categories are viewable by everyone" on public.categories
  for select using (true);

-- Courses (Readable by everyone)
create policy "Courses are viewable by everyone" on public.courses
  for select using (true);

-- Enrollments (Users can only read/write their own enrollments)
create policy "Users can view their own enrollments" on public.enrollments
  for select using (auth.uid() = user_id);

create policy "Users can insert their own enrollments" on public.enrollments
  for insert with check (auth.uid() = user_id);

-- Testimonials (Readable by everyone)
create policy "Testimonials are viewable by everyone" on public.testimonials
  for select using (true);

-- FAQs (Readable by everyone)
create policy "FAQs are viewable by everyone" on public.faqs
  for select using (true);

-- Automated Profile Creation Trigger on Auth Signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Seed Sample Categories
insert into public.categories (name, slug, icon, description) values
('Web Design & WordPress', 'web-design', '🌐', 'Build websites with WordPress, Elementor, and modern UX principles.'),
('AI & Productivity', 'ai-productivity', '🤖', 'ChatGPT, automation, and workflows to 10x your output.'),
('Graphic Design & Canva', 'graphic-design', '🎨', 'Design beautiful brand assets and social graphics with Canva.'),
('Digital Marketing', 'digital-marketing', '📱', 'SEO, social media, content strategy, and paid ads for growth.');

-- Seed Sample Courses
insert into public.courses (title, slug, description, price, duration, lessons_count, image_url) values
('The Complete Web Design Masterclass', 'web-design-masterclass', 'Learn how to build, host, and design professional WordPress websites without code.', 4900.00, '6 Weeks', 35, null),
('AI & Automation Bootcamp', 'ai-automation-bootcamp', '10x your productivity by learning ChatGPT, Midjourney, and Make.com integrations.', 3500.00, '3 Days', 12, null),
('Canva for Creators & Entrepreneurs', 'canva-for-creators', 'Create stunning visual assets, logos, and presentation decks like a pro.', 2500.00, '5 Hours', 15, null);

-- Seed Sample Testimonials
insert into public.testimonials (name, quote) values
('Lucy Wakori Ngugi', 'Amazing course. Elvis has dedicated himself to teach this course with passion. I would recommend it to anyone whose goal is to become a web designer.'),
('Beatrice Mwangi', 'Marvelous course. Confident enough, head high, designing a website in less than 8 weeks! God bless—looking forward to business website launch.'),
('Kuon Wechtuor Duop', 'Great impact. Value for money. Skills that touched my life because I have been struggling to highlight on my resume. Bright future guarantee.');

-- Seed Sample FAQs
insert into public.faqs (question, answer, display_order) values
('How do I access my certificates?', 'Complete all lessons inside your course dashboard, click "Complete Course" and write a quick review to generate your downloadable PDF instantly.', 1),
('Are the courses live or self-paced?', 'These are self-paced, recorded masterclasses based on live monthly cohorts, complete with projects and checklists.', 2),
('Can I access these on my phone?', 'Yes! The platform and all masterclass videos are optimized to learn and run on mobile devices.', 3);

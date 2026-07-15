# Kihato Marketing - Course Selling Website

Built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, and **Supabase**.

## Setup Guide

1. **Supabase Database setup**:
   - Log into [Supabase Console](https://supabase.com).
   - Create a fresh Postgres Project.
   - Go to the **SQL Editor** tab, paste the full code inside `schema.sql`, and hit Run.

2. **Supabase Authentication config**:
   - Go to **Project Settings** > **API**.
   - Copy `Project URL` and `anon public` keys.
   - Create a `.env.local` file locally, using `.env.local.example` as a format, and paste your keys.

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Launch locally**:
   ```bash
   npm run dev
   ```

5. **Deploy**:
   - Link your local project to a GitHub repository.
   - Log into Vercel and import your repository.
   - Configure your environment variables (`NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`) in your Vercel project settings, and Deploy!

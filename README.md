# Personal Profile Dashboard

A private, read-only dashboard for an existing professional profile in Supabase, built with Next.js, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Run `npm run build` to verify the production build.

Sign in with an existing Supabase Auth email and password. Public registration is not available in the app.

## Supabase setup

Copy `.env.example` to `.env.local` and enter the Supabase project URL and publishable key:

```dotenv
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

The existing `NEXT_PUBLIC_SUPABASE_ANON_KEY` variable is supported as a fallback. Never use a service role or secret key here. `.env.local` is ignored by Git.

The browser and server Supabase clients live in `src/lib/supabase`. The server reads `profile_access` for the signed-in user, resolves the accessible profile, and loads read-only data behind the existing Row Level Security policies. Dashboard routes render on each request; refreshing a page requests current Supabase data. No database writes, migrations, or schema changes are performed by the app.

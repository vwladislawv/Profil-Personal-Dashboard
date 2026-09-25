# AGENTS.md

## Project

This repository contains the web dashboard for the project:

"Profil personal și profesional"

The dashboard is the human-facing application for an existing Supabase relational database.

Supabase is the source of truth for profile data.

Before making architectural or data-related changes, read the documentation in `/docs`.

---

## Core principles

- Do not duplicate Supabase data in frontend source files.
- Do not hardcode personal or professional profile data that already belongs in Supabase.
- Do not invent missing information.
- Do not infer facts that are not supported by the stored data.
- Preserve the relational structure of the information.
- Keep each piece of information in the correct conceptual category.
- Avoid unnecessary duplication between entities.
- Prefer relationships between entities instead of copying the same information into multiple places.

The system must preserve the distinction between:

- profile information;
- experiences;
- projects and achievements;
- skills and knowledge;
- software and tools;
- languages;
- education and learning;
- professional directions;
- evidence.

---

## Semantic rules

Do not confuse:

- an experience with a project;
- a skill with a software tool;
- studying something with applying it in practice;
- participation with personal contribution;
- a team result with an individual result.

Where relevant, preserve the distinction between:

- studied;
- practiced;
- applied;
- demonstrated.

Do not automatically infer a skill level from the simple presence of a tool, course, project, or technology.

---

## Supabase rules

- Supabase is the canonical data source.
- Do not modify the database schema without explicit approval.
- Do not create or delete tables, columns, functions, triggers, policies, or migrations without explicit approval.
- Do not insert, update, or delete profile data unless explicitly requested.
- Respect Row Level Security.
- Never expose a `service_role` key in frontend code.
- Never commit credentials or secrets to Git.
- Keep secrets in environment variables.
- `.env.local` must not be committed.

---

## Application architecture

Keep presentation logic separate from data-access logic.

Preferred architecture:

UI
→ application/data-access layer
→ Supabase client
→ Supabase database

Avoid scattering raw Supabase queries throughout unrelated UI components.

Create reusable data-access functions when queries are introduced.

---

## Frontend principles

- Use TypeScript.
- Keep components modular and reusable.
- Keep pages visually consistent.
- Preserve the current design unless a redesign is explicitly requested.
- Prefer human-readable labels over database terminology.
- Do not expose UUIDs or junction-table mechanics in the normal UI.
- Resolve relationships into understandable entity names.
- Keep the interface usable on desktop and mobile.

---

## Data integrity

If information is missing:

- leave it absent; or
- present a neutral empty state.

Never transform:

- unknown → assumed;
- studied → applied;
- mentioned → proficient;
- team result → personal achievement.

---

## Quality

For substantial code changes:

- run TypeScript/type checks where configured;
- run linting where configured;
- run the production build;
- report unresolved errors or warnings.

When completing a task, briefly explain:

- what was changed;
- why;
- whether Supabase data or schema was affected.
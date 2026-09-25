# Project Context

## Project name

Profil personal și profesional

## Purpose

This project is a structured system for storing, organizing and presenting personal and professional information.

Its purpose is to keep relevant information in a clear, coherent and maintainable structure, including:

- general personal and professional information;
- professional and relevant personal experiences;
- projects and achievements;
- skills and knowledge;
- software and tools;
- languages;
- education and learning;
- professional interests and directions;
- preferences, objectives, resources and constraints;
- evidence supporting important information.

The system should remain simple enough to maintain over time while preserving the relationships and context needed to understand the person's professional profile.

---

## System architecture

The project has two distinct layers with different purposes.

### 1. Data layer — Supabase

Supabase / PostgreSQL is the central data source and the source of truth.

It stores:

- structured profile information;
- individual entities;
- relationships between entities;
- supporting evidence;
- metadata required by the application.

The database must remain structured, consistent and reusable.

It should be possible for the same data to be accessed by:

- the dashboard application;
- other software or services;
- AI systems;
- future applications or integrations.

The database should therefore preserve meaningful structure and relationships instead of storing only presentation-ready text.

---

### 2. Dashboard — human interface

The dashboard is the human-facing interface built on top of the Supabase database.

Its primary audience is people.

Its purpose is to make the information:

- easy to read;
- easy to understand;
- easy to navigate;
- visually clear;
- useful for reviewing the professional profile;
- useful for exploring related experiences, projects, skills and other information.

The dashboard does not need to reproduce the database structure literally.

Database tables, foreign keys and relationship tables should be translated into an interface that makes sense to a person.

For example, a person should see:

`Photoshop`

rather than:

`tool_id: 31a7...`

and:

`Related projects`

rather than the internal name of a relationship table.

Human usability takes priority in dashboard presentation.

---

## AI and programmatic use

AI is not the primary audience of the dashboard.

AI systems should not depend on interpreting the visual dashboard in order to understand the professional profile.

When AI analysis is required, AI should work with the structured information from the database, an API, a structured export or another appropriate data-access layer.

The same principle applies to other software integrations.

Therefore:

- the dashboard is optimized for humans;
- the database is structured for reliable programmatic access;
- AI and applications may consume the database independently of the dashboard.

---

## Main information categories

### Profile

General personal and professional context.

This may include:

- professional summary;
- employment preferences;
- preferred work mode;
- industries or areas of interest;
- professional objectives;
- resources;
- constraints;
- relevant personal context.

---

### Experiences

Broader contexts in which relevant activity took place.

Examples:

- employment;
- freelance activity;
- business activity;
- collaborations;
- internships;
- volunteering;
- relevant personal experience.

An experience represents a broader role or context over a period of time.

Concrete projects completed within an experience should normally remain separate entities and be connected through relationships.

---

### Projects and achievements

Concrete activities with a meaningful objective, contribution, process or result.

They may include:

- professional projects;
- freelance projects;
- personal projects;
- educational projects;
- work for clients;
- important problems solved;
- processes created or improved;
- notable achievements.

Projects may be connected to:

- experiences;
- skills;
- tools;
- education;
- evidence.

---

### Skills and knowledge

Things the person knows or can do.

This may include:

- technical skills;
- digital skills;
- soft skills;
- communication skills;
- organizational skills;
- business skills;
- marketing skills;
- domain knowledge.

Skills and knowledge must remain conceptually separate from software and tools.

Example:

`Image editing` = skill

`Adobe Photoshop` = tool

---

### Software and tools

Programs, platforms, technologies, systems and other tools that the person has studied or used.

The presence of a tool in the database does not by itself prove a particular level of proficiency.

Context, level, usage and supporting projects or experiences should be preserved separately.

---

### Languages

Languages known or studied.

The system may distinguish between:

- overall level;
- comprehension;
- speaking;
- reading;
- writing;
- practical usage;
- development interest.

---

### Education and learning

Sources through which knowledge or skills were acquired or developed.

This may include:

- formal education;
- courses;
- educational programs;
- certifications;
- books;
- tutorials;
- structured individual learning.

The system must preserve the distinction between learning something and applying it in practice.

---

### Professional directions

Professions, roles, services or business ideas that are being considered, analyzed or tested.

A professional direction may be connected to:

- existing skills;
- required skills;
- skills to develop;
- relevant experiences;
- relevant projects;
- personal preferences and objectives.

---

### Evidence

Documents, links, files, results or other materials that support information stored elsewhere in the system.

Examples:

- certificates;
- diplomas;
- reports;
- screenshots;
- portfolio items;
- links;
- completed work;
- measurable results.

Evidence should support claims rather than replace the structured information itself.

---

## Relationship model

The system is relational.

Examples of important relationships include:

- one profile can have many experiences;
- one experience can contain several projects;
- one project can use several skills;
- one project can use several tools;
- one skill can appear in several experiences and projects;
- education can develop multiple skills;
- education can involve multiple tools;
- a professional direction can require several skills;
- experiences and projects can support professional directions;
- evidence can support several types of information.

Information should normally be stored once in its appropriate place and connected to related information through relationships.

Unnecessary duplication should be avoided.

---

## Information integrity

The system must preserve the difference between:

- facts;
- self-assessments;
- interpretations;
- supporting evidence.

It must also distinguish between:

- responsibility;
- activity;
- personal contribution;
- result;
- team result;
- organizational result.

A result should not be presented as an individual achievement unless the stored information supports that attribution.

---

## Learning and proficiency distinctions

Where relevant, the system should distinguish between:

- studied;
- practiced;
- applied in practice;
- demonstrated through projects, results or evidence.

For example:

Studying a technology does not automatically mean practical experience.

Using a software tool does not automatically imply advanced proficiency.

Participating in a project does not automatically mean ownership of the entire result.

---

## Human-first dashboard principle

The database structure exists to preserve information correctly.

The dashboard exists to make that information understandable to people.

The dashboard may therefore:

- summarize information;
- group related information;
- use cards, sections, timelines, tags or other visual patterns;
- hide technical database details;
- resolve relationships into readable names;
- present the same underlying data differently depending on the page or context.

The dashboard should not expose database complexity unless there is a specific reason to do so.

---

## Long-term use

The structured information may later support activities such as:

- reviewing the professional profile;
- identifying strengths;
- identifying skills to develop;
- discovering transferable skills;
- comparing the profile with jobs or professional roles;
- evaluating professional directions;
- creating CVs;
- creating professional profiles;
- preparing portfolios and case studies;
- preparing cover letters;
- preparing for interviews;
- creating LinkedIn or freelance profiles;
- exploring services or business ideas.

These analyses may be performed manually, through software, or with the assistance of AI.

They should operate on the structured information stored in the system rather than changing the factual meaning of the underlying data.

---

## Design philosophy

The overall system should be:

- clear;
- structured;
- relational;
- maintainable;
- reusable;
- easy to update.

The database should prioritize data integrity and structured access.

The dashboard should prioritize human understanding and usability.

These are complementary goals, but they are not the same thing.
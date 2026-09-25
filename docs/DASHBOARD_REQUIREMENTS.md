# Dashboard Requirements

## Purpose

The dashboard is the human-readable interface for the "Profil personal și profesional" database.

It should make relational professional-profile information easy to:

- browse;
- understand;
- navigate;
- compare;
- analyze;
- reuse.

Supabase remains the source of truth.

---

# Main navigation

The primary navigation should include:

1. Overview
2. Experiences
3. Projects
4. Skills & Knowledge
5. Tools
6. Education
7. Languages
8. Professional Directions

Evidence may be presented:

- inside related entity pages;
- and, if useful later, through a dedicated secondary section.

---

# Overview

The Overview page should provide a concise picture of the profile.

It may include:

- professional summary;
- main experience areas;
- selected skills;
- selected projects;
- professional preferences;
- objectives;
- development priorities;
- professional directions.

Overview content should summarize existing entities rather than duplicate them into a separate data model.

---

# Experiences

The experience list should use information such as:

- title;
- organization;
- type;
- period;
- location;
- work mode;
- domains.

An experience detail view may include:

- context;
- responsibilities;
- activities;
- results;
- learning;
- related projects;
- related skills;
- related tools;
- related languages;
- supporting evidence.

---

# Projects

Project lists should emphasize:

- title;
- type;
- status;
- associated experience;
- period;
- domains;
- result or impact.

A project detail view may include:

- goal;
- contribution;
- process;
- result;
- attribution;
- impact;
- associated experience;
- related skills;
- related tools;
- evidence.

Projects should be easy to reuse later for:

- CV preparation;
- portfolio preparation;
- case studies;
- interview preparation.

---

# Skills & Knowledge

The skill interface should support:

- title;
- type;
- categories;
- level;
- usage stage;
- self-assessment status;
- development interest.

Where relationships exist, a skill should make it possible to see supporting context such as:

- experiences;
- projects;
- education;
- related tools;
- evidence.

The interface should preserve the distinction between:

- studied;
- practiced;
- applied;
- demonstrated.

---

# Tools

Tool views should support:

- title;
- type;
- categories;
- level;
- usage stage;
- functions used;
- last usage information;
- development interest.

Where available, tools should be connected visually to:

- experiences;
- projects;
- skills;
- education.

Tools and skills must remain separate concepts.

---

# Education

Education views should support:

- title;
- type;
- institution;
- instructor;
- status;
- period;
- qualification;
- program;
- study mode;
- learning notes;
- practical application;
- results.

Where relationships exist, education may be connected to:

- skills;
- tools;
- languages;
- projects.

The interface must not imply that studying a subject automatically proves practical professional experience.

---

# Languages

Language views should support:

- language;
- native-language status;
- overall level;
- comprehension level;
- speaking level;
- reading level;
- writing level;
- self-assessment status;
- development interest;
- usage context.

---

# Professional Directions

Professional-direction views should support:

- title;
- type;
- status;
- domains;
- level of interest;
- compatibility;
- description;
- advantages;
- disadvantages;
- conclusion;
- next step.

Relationships should help distinguish:

- skills already held;
- skills required;
- skills to develop;
- relevant experiences;
- supporting projects.

Compatibility should not be automatically calculated unless a separate methodology is explicitly defined.

---

# Relationships in the UI

Database relationships should be translated into understandable navigation.

Useful presentation patterns may include:

- linked cards;
- badges;
- tags;
- grouped sections;
- related-item lists;
- detail pages;
- drawers.

The normal user interface should not expose:

- raw foreign keys;
- UUIDs;
- junction-table names;
- database implementation mechanics.

---

# Search and filtering

Search and filters should be introduced where they improve usability.

Potential filtering dimensions include:

- type;
- status;
- domain;
- period;
- level;
- usage stage;
- development interest.

Do not add filters merely because a database field exists.

---

# Empty and unknown information

Missing information should not be guessed.

If a field has no value:

- omit it where appropriate; or
- show a neutral empty state such as `Not specified`.

The interface must not transform:

- unknown information into assumptions;
- studying into practical experience;
- tool exposure into proficiency;
- participation into ownership;
- team results into personal achievements.

---

# Security and privacy

The database may contain both public professional information and private personal information.

The application architecture must allow these to be separated.

Sensitive information should not become publicly accessible by default.

Supabase Row Level Security should remain the main database-level access-control mechanism.

---

# UX principles

The interface should be:

- clear;
- consistent;
- human-readable;
- easy to navigate;
- responsive;
- suitable for both quick overview and deeper exploration.

The database structure should support the interface, but the interface should not feel like a raw database administration tool.
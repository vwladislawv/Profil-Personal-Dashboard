# Supabase Schema

## Overview

Database platform:

Supabase / PostgreSQL

Main application schema:

`public`

Supabase is the canonical data source for the application.

---

# Core entities

## profiles

Represents the main personal and professional profile.

Key fields:

- `id`
- `import_key`
- `display_name`
- `full_name`
- `date_of_birth`
- `city`
- `country`
- `postal_address`
- `email`
- `phone`
- `linkedin_url`
- `summary`
- `preferred_employment`
- `preferred_work_mode`
- `preferred_industry`
- `desired_salary_amount`
- `desired_salary_currency`
- `preferences`
- `objectives`
- `resources`
- `constraints`
- `hobbies`
- `source_document`
- `created_at`
- `updated_at`

Primary key:

`id`

---

## experiences

Represents broader professional or personally relevant contexts.

Key fields:

- `id`
- `profile_id`
- `import_key`
- `title`
- `kind`
- `organization`
- `domains`
- `work_mode`
- `location`
- `period_label`
- `start_year`
- `end_year`
- `started_on`
- `ended_on`
- `context`
- `responsibilities`
- `activities`
- `results`
- `learning`
- `personal_notes`
- `source_document`
- `created_at`
- `updated_at`

Main relationship:

`experiences.profile_id → profiles.id`

---

## projects

Represents projects and achievements.

Key fields:

- `id`
- `profile_id`
- `import_key`
- `title`
- `kind`
- `status`
- `experience_id`
- `domains`
- `period_label`
- `start_year`
- `end_year`
- `started_on`
- `ended_on`
- `goal`
- `contribution`
- `process`
- `result`
- `attribution`
- `impact_note`
- `source_document`
- `created_at`
- `updated_at`

Main relationships:

`projects.profile_id → profiles.id`

`projects.experience_id → experiences.id`

A project may exist without being linked to an experience.

---

## skills

Represents skills, knowledge and soft skills.

Key fields:

- `id`
- `profile_id`
- `import_key`
- `title`
- `kind`
- `categories`
- `level`
- `usage_stage`
- `self_assessed`
- `want_to_develop`
- `description`
- `evidence_note`
- `source_document`
- `created_at`
- `updated_at`

Current `kind` categories:

- `competenta`
- `cunostinta`
- `soft_skill`

Current `usage_stage` values:

- `studiat`
- `exersat`
- `aplicat`
- `demonstrat`

---

## tools

Represents software, platforms, technologies and tools.

Key fields:

- `id`
- `profile_id`
- `import_key`
- `title`
- `kind`
- `categories`
- `level`
- `usage_stage`
- `self_assessed`
- `want_to_develop`
- `functions_used`
- `last_used_label`
- `url`
- `source_document`
- `created_at`
- `updated_at`

---

## languages

Represents languages known or studied.

Key fields:

- `id`
- `profile_id`
- `import_key`
- `title`
- `native_language`
- `overall_level`
- `comprehension_level`
- `speaking_level`
- `reading_level`
- `writing_level`
- `self_assessed`
- `want_to_develop`
- `usage_notes`
- `source_document`
- `created_at`
- `updated_at`

---

## education

Represents formal education and learning activities.

Key fields:

- `id`
- `profile_id`
- `import_key`
- `title`
- `kind`
- `institution`
- `instructor`
- `status`
- `domains`
- `period_label`
- `start_year`
- `end_year`
- `started_on`
- `ended_on`
- `qualification`
- `program`
- `study_mode`
- `learning_notes`
- `practice_notes`
- `applied_in_practice`
- `results_note`
- `source_document`
- `created_at`
- `updated_at`

---

## directions

Represents professional directions under consideration.

Key fields:

- `id`
- `profile_id`
- `import_key`
- `title`
- `kind`
- `status`
- `domains`
- `interest`
- `compatibility`
- `description`
- `advantages`
- `disadvantages`
- `conclusion`
- `next_step`
- `source_document`
- `created_at`
- `updated_at`

---

## evidence

Represents evidence supporting other information.

Key fields:

- `id`
- `profile_id`
- `import_key`
- `title`
- `kind`
- `url`
- `storage_path`
- `description`
- `verification_status`
- `source_document`
- `created_at`
- `updated_at`

---

# Access

## profile_access

Associates Supabase authenticated users with profiles.

Fields:

- `profile_id`
- `user_id`
- `access_role`

Current supported access roles:

- `owner`
- `editor`
- `viewer`

---

# Relationship tables

Relationship tables implement many-to-many associations.

## Experience relationships

### experience_skills

- `profile_id`
- `experience_id`
- `skill_id`

### experience_tools

- `profile_id`
- `experience_id`
- `tool_id`

### experience_languages

- `profile_id`
- `experience_id`
- `language_id`

---

## Project relationships

### project_skills

- `profile_id`
- `project_id`
- `skill_id`

### project_tools

- `profile_id`
- `project_id`
- `tool_id`

---

## Skill relationships

### skill_tools

- `profile_id`
- `skill_id`
- `tool_id`

---

## Education relationships

### education_skills

- `profile_id`
- `education_id`
- `skill_id`

### education_tools

- `profile_id`
- `education_id`
- `tool_id`

### education_languages

- `profile_id`
- `education_id`
- `language_id`

### education_projects

- `profile_id`
- `education_id`
- `project_id`

---

## Professional-direction relationships

### direction_skills

- `profile_id`
- `direction_id`
- `skill_id`
- `relation_type`

Current relation types:

- `necesara`
- `detinuta`
- `de_dezvoltat`

### direction_experiences

- `profile_id`
- `direction_id`
- `experience_id`

### direction_projects

- `profile_id`
- `direction_id`
- `project_id`

---

## Evidence relationships

### evidence_experiences

- `profile_id`
- `evidence_id`
- `experience_id`

### evidence_projects

- `profile_id`
- `evidence_id`
- `project_id`

### evidence_skills

- `profile_id`
- `evidence_id`
- `skill_id`

### evidence_education

- `profile_id`
- `evidence_id`
- `education_id`

### evidence_languages

- `profile_id`
- `evidence_id`
- `language_id`

---

# Simplified relationship map

profiles
├── experiences
│   └── projects
├── skills
├── tools
├── languages
├── education
├── directions
└── evidence

experiences ↔ skills
experiences ↔ tools
experiences ↔ languages

projects ↔ skills
projects ↔ tools

skills ↔ tools

education ↔ skills
education ↔ tools
education ↔ languages
education ↔ projects

directions ↔ skills
directions ↔ experiences
directions ↔ projects

evidence ↔ experiences
evidence ↔ projects
evidence ↔ skills
evidence ↔ education
evidence ↔ languages

---

# Application interpretation

Relationship tables are implementation details.

The dashboard should resolve foreign keys and relationships into human-readable entities.

For example:

Instead of displaying:

`experience_id: 8b812...`

display:

`Experience: Online Specialist — Avon`

Instead of showing rows from `project_skills`, display the related skills directly inside the project interface.

The live Supabase schema takes precedence over this document if the two ever become inconsistent.
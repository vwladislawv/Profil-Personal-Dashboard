import "server-only";

import { getCurrentProfile } from "./current-profile";

export async function getDashboardSnapshot() {
  const context = await getCurrentProfile();
  if (context.kind !== "ok") return context;

  const { supabase, profileId } = context;
  const [
    profile, experiences, projects, skills, tools, education, languages, directions,
    experienceSkills, experienceTools, experienceLanguages,
    projectSkills, projectTools, skillTools,
    educationSkills, educationTools, educationLanguages, educationProjects,
    directionSkills, directionExperiences, directionProjects,
  ] = await Promise.all([
    supabase.from("profiles").select("*").eq("id", profileId).maybeSingle(),
    supabase.from("experiences").select("*").eq("profile_id", profileId),
    supabase.from("projects").select("*").eq("profile_id", profileId),
    supabase.from("skills").select("*").eq("profile_id", profileId),
    supabase.from("tools").select("*").eq("profile_id", profileId),
    supabase.from("education").select("*").eq("profile_id", profileId),
    supabase.from("languages").select("*").eq("profile_id", profileId),
    supabase.from("directions").select("*").eq("profile_id", profileId),
    supabase.from("experience_skills").select("*").eq("profile_id", profileId),
    supabase.from("experience_tools").select("*").eq("profile_id", profileId),
    supabase.from("experience_languages").select("*").eq("profile_id", profileId),
    supabase.from("project_skills").select("*").eq("profile_id", profileId),
    supabase.from("project_tools").select("*").eq("profile_id", profileId),
    supabase.from("skill_tools").select("*").eq("profile_id", profileId),
    supabase.from("education_skills").select("*").eq("profile_id", profileId),
    supabase.from("education_tools").select("*").eq("profile_id", profileId),
    supabase.from("education_languages").select("*").eq("profile_id", profileId),
    supabase.from("education_projects").select("*").eq("profile_id", profileId),
    supabase.from("direction_skills").select("*").eq("profile_id", profileId),
    supabase.from("direction_experiences").select("*").eq("profile_id", profileId),
    supabase.from("direction_projects").select("*").eq("profile_id", profileId),
  ]);

  const results = [
    profile, experiences, projects, skills, tools, education, languages, directions,
    experienceSkills, experienceTools, experienceLanguages,
    projectSkills, projectTools, skillTools,
    educationSkills, educationTools, educationLanguages, educationProjects,
    directionSkills, directionExperiences, directionProjects,
  ];
  const failed = results.find((result) => result.error);
  if (failed?.error) {
    console.error("Unable to load dashboard data:", failed.error);
    return { kind: "error" as const };
  }

  if (!profile.data) return { kind: "no-access" as const };

  return {
    kind: "ok" as const,
    profile: profile.data,
    experiences: experiences.data ?? [],
    projects: projects.data ?? [],
    skills: skills.data ?? [],
    tools: tools.data ?? [],
    education: education.data ?? [],
    languages: languages.data ?? [],
    directions: directions.data ?? [],
    experienceSkills: experienceSkills.data ?? [],
    experienceTools: experienceTools.data ?? [],
    experienceLanguages: experienceLanguages.data ?? [],
    projectSkills: projectSkills.data ?? [],
    projectTools: projectTools.data ?? [],
    skillTools: skillTools.data ?? [],
    educationSkills: educationSkills.data ?? [],
    educationTools: educationTools.data ?? [],
    educationLanguages: educationLanguages.data ?? [],
    educationProjects: educationProjects.data ?? [],
    directionSkills: directionSkills.data ?? [],
    directionExperiences: directionExperiences.data ?? [],
    directionProjects: directionProjects.data ?? [],
  };
}

export type DashboardSnapshot = Extract<
  Awaited<ReturnType<typeof getDashboardSnapshot>>,
  { kind: "ok" }
>;

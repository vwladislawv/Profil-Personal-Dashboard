import type { DashboardSnapshot } from "@/lib/data/profile";
import { period, readable, recentFirst, skillsByEvidence } from "@/lib/data/format";
import { DetailCard, EmptySection, Field, Pill, Pills, Related } from "./primitives";

type Props = { section: string; snapshot: DashboardSnapshot };

function namesByIds<T extends { id: string; title: string }>(items: T[], ids: string[]) {
  const wanted = new Set(ids);
  return items.filter((item) => wanted.has(item.id)).map((item) => item.title);
}

function Experiences({ snapshot: s }: { snapshot: DashboardSnapshot }) {
  if (!s.experiences.length) return <EmptySection title="Experiences" />;
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {recentFirst(s.experiences).map((item) => (
        <DetailCard key={item.id}>
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div><h2 className="text-lg font-semibold">{item.title}</h2>{item.organization && <p className="mt-1 text-sm text-slate-500">{item.organization}</p>}</div>
            {item.kind && <Pill>{readable(item.kind)}</Pill>}
          </div>
          <dl className="mt-5 grid gap-4 sm:grid-cols-2">
            <Field label="Period" value={period(item)} />
            <Field label="Location" value={item.location} />
            <Field label="Work mode" value={readable(item.work_mode)} />
          </dl>
          <Pills items={item.domains} />
          <dl className="mt-5 space-y-4">
            <Field label="Context" value={item.context} />
            <Field label="Responsibilities" value={item.responsibilities} />
            <Field label="Results" value={item.results} />
          </dl>
          <Related label="Projects" names={s.projects.filter((project) => project.experience_id === item.id).map((project) => project.title)} />
          <Related label="Skills" names={namesByIds(s.skills, s.experienceSkills.filter((link) => link.experience_id === item.id).map((link) => link.skill_id))} />
          <Related label="Tools" names={namesByIds(s.tools, s.experienceTools.filter((link) => link.experience_id === item.id).map((link) => link.tool_id))} />
          <Related label="Languages" names={namesByIds(s.languages, s.experienceLanguages.filter((link) => link.experience_id === item.id).map((link) => link.language_id))} />
        </DetailCard>
      ))}
    </div>
  );
}

function Projects({ snapshot: s }: { snapshot: DashboardSnapshot }) {
  if (!s.projects.length) return <EmptySection title="Projects" />;
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {recentFirst(s.projects).map((item) => {
        const experience = s.experiences.find((entry) => entry.id === item.experience_id);
        return (
          <DetailCard key={item.id}>
            <div className="flex flex-wrap items-start justify-between gap-2"><h2 className="text-lg font-semibold">{item.title}</h2>{item.status && <Pill>{readable(item.status)}</Pill>}</div>
            <dl className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="Type" value={readable(item.kind)} />
              <Field label="Period" value={period(item)} />
              <Field label="Experience" value={experience ? `${experience.title}${experience.organization ? ` · ${experience.organization}` : ""}` : null} />
            </dl>
            <Pills items={item.domains} />
            <dl className="mt-5 space-y-4">
              <Field label="Goal" value={item.goal} />
              <Field label="Your contribution" value={item.contribution} />
              <Field label="Result" value={item.result} />
              <Field label="Attribution" value={item.attribution} />
              <Field label="Impact" value={item.impact_note} />
            </dl>
            <Related label="Skills" names={namesByIds(s.skills, s.projectSkills.filter((link) => link.project_id === item.id).map((link) => link.skill_id))} />
            <Related label="Tools" names={namesByIds(s.tools, s.projectTools.filter((link) => link.project_id === item.id).map((link) => link.tool_id))} />
          </DetailCard>
        );
      })}
    </div>
  );
}

function Skills({ snapshot: s }: { snapshot: DashboardSnapshot }) {
  if (!s.skills.length) return <EmptySection title="Skills" />;
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {skillsByEvidence(s.skills).map((item) => (
        <DetailCard key={item.id}>
          <div className="flex flex-wrap items-start justify-between gap-2"><h2 className="text-lg font-semibold">{item.title}</h2>{item.usage_stage && <Pill>{readable(item.usage_stage)}</Pill>}</div>
          <dl className="mt-5 grid gap-4 sm:grid-cols-2">
            <Field label="Kind" value={readable(item.kind)} />
            <Field label="Level" value={readable(item.level)} />
            {item.want_to_develop && <Field label="Development" value="Interested in developing further" />}
          </dl>
          <Pills items={item.categories} />
          <dl className="mt-5 space-y-4"><Field label="Description" value={item.description} /><Field label="Evidence" value={item.evidence_note} /></dl>
          <Related label="Supporting experiences" names={namesByIds(s.experiences, s.experienceSkills.filter((link) => link.skill_id === item.id).map((link) => link.experience_id))} />
          <Related label="Supporting projects" names={namesByIds(s.projects, s.projectSkills.filter((link) => link.skill_id === item.id).map((link) => link.project_id))} />
          <Related label="Related tools" names={namesByIds(s.tools, s.skillTools.filter((link) => link.skill_id === item.id).map((link) => link.tool_id))} />
        </DetailCard>
      ))}
    </div>
  );
}

function Tools({ snapshot: s }: { snapshot: DashboardSnapshot }) {
  if (!s.tools.length) return <EmptySection title="Tools" />;
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {[...s.tools].sort((a, b) => a.title.localeCompare(b.title)).map((item) => (
        <DetailCard key={item.id}>
          <div className="flex flex-wrap items-start justify-between gap-2"><h2 className="text-lg font-semibold">{item.title}</h2>{item.usage_stage && <Pill>{readable(item.usage_stage)}</Pill>}</div>
          <dl className="mt-5 grid gap-4 sm:grid-cols-2">
            <Field label="Type" value={readable(item.kind)} />
            <Field label="Level" value={readable(item.level)} />
            <Field label="Last used" value={item.last_used_label} />
            {item.want_to_develop && <Field label="Development" value="Interested in developing further" />}
          </dl>
          <Pills items={item.categories} />
          <dl className="mt-5 space-y-4"><Field label="Functions used" value={item.functions_used} /></dl>
          <Related label="Experiences" names={namesByIds(s.experiences, s.experienceTools.filter((link) => link.tool_id === item.id).map((link) => link.experience_id))} />
          <Related label="Projects" names={namesByIds(s.projects, s.projectTools.filter((link) => link.tool_id === item.id).map((link) => link.project_id))} />
          <Related label="Related skills" names={namesByIds(s.skills, s.skillTools.filter((link) => link.tool_id === item.id).map((link) => link.skill_id))} />
        </DetailCard>
      ))}
    </div>
  );
}

function Education({ snapshot: s }: { snapshot: DashboardSnapshot }) {
  if (!s.education.length) return <EmptySection title="Education" />;
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {recentFirst(s.education).map((item) => (
        <DetailCard key={item.id}>
          <div className="flex flex-wrap items-start justify-between gap-2"><h2 className="text-lg font-semibold">{item.title}</h2>{item.status && <Pill>{readable(item.status)}</Pill>}</div>
          <dl className="mt-5 grid gap-4 sm:grid-cols-2">
            <Field label="Institution" value={item.institution} />
            <Field label="Instructor" value={item.instructor} />
            <Field label="Type" value={readable(item.kind)} />
            <Field label="Period" value={period(item)} />
            <Field label="Qualification" value={item.qualification} />
            <Field label="Program" value={item.program} />
            <Field label="Study mode" value={readable(item.study_mode)} />
            {item.applied_in_practice === true && <Field label="Practice" value="Recorded as applied in practice" />}
          </dl>
          <Pills items={item.domains} />
          <dl className="mt-5 space-y-4">
            <Field label="Learning" value={item.learning_notes} />
            <Field label="Practical application" value={item.practice_notes} />
            <Field label="Results" value={item.results_note} />
          </dl>
          <Related label="Skills studied or developed" names={namesByIds(s.skills, s.educationSkills.filter((link) => link.education_id === item.id).map((link) => link.skill_id))} />
          <Related label="Tools" names={namesByIds(s.tools, s.educationTools.filter((link) => link.education_id === item.id).map((link) => link.tool_id))} />
          <Related label="Projects" names={namesByIds(s.projects, s.educationProjects.filter((link) => link.education_id === item.id).map((link) => link.project_id))} />
          <Related label="Languages" names={namesByIds(s.languages, s.educationLanguages.filter((link) => link.education_id === item.id).map((link) => link.language_id))} />
        </DetailCard>
      ))}
    </div>
  );
}

function Languages({ snapshot: s }: { snapshot: DashboardSnapshot }) {
  if (!s.languages.length) return <EmptySection title="Languages" />;
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {[...s.languages].sort((a, b) => a.title.localeCompare(b.title)).map((item) => (
        <DetailCard key={item.id}>
          <div className="flex flex-wrap items-start justify-between gap-2"><h2 className="text-lg font-semibold">{item.title}</h2>{item.native_language && <Pill>Native language</Pill>}</div>
          <dl className="mt-5 grid gap-4 sm:grid-cols-2">
            <Field label="Overall" value={readable(item.overall_level)} />
            <Field label="Speaking" value={readable(item.speaking_level)} />
            <Field label="Comprehension" value={readable(item.comprehension_level)} />
            <Field label="Reading" value={readable(item.reading_level)} />
            <Field label="Writing" value={readable(item.writing_level)} />
            {item.want_to_develop && <Field label="Development" value="Interested in developing further" />}
          </dl>
          <dl className="mt-5 space-y-4"><Field label="Usage" value={item.usage_notes} /></dl>
          <Related label="Experiences" names={namesByIds(s.experiences, s.experienceLanguages.filter((link) => link.language_id === item.id).map((link) => link.experience_id))} />
        </DetailCard>
      ))}
    </div>
  );
}

function Directions({ snapshot: s }: { snapshot: DashboardSnapshot }) {
  if (!s.directions.length) return <EmptySection title="Professional Directions" />;
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {[...s.directions].sort((a, b) => a.title.localeCompare(b.title)).map((item) => {
        const directionSkills = s.directionSkills.filter((link) => link.direction_id === item.id);
        const skillNames = (relationType: string) => namesByIds(s.skills, directionSkills.filter((link) => link.relation_type === relationType).map((link) => link.skill_id));
        return (
          <DetailCard key={item.id}>
            <div className="flex flex-wrap items-start justify-between gap-2"><h2 className="text-lg font-semibold">{item.title}</h2>{item.status && <Pill>{readable(item.status)}</Pill>}</div>
            <dl className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="Type" value={readable(item.kind)} />
              <Field label="Interest" value={readable(item.interest)} />
              <Field label="Compatibility" value={readable(item.compatibility)} />
            </dl>
            <Pills items={item.domains} />
            <dl className="mt-5 space-y-4">
              <Field label="Description" value={item.description} />
              <Field label="Advantages" value={item.advantages} />
              <Field label="Considerations" value={item.disadvantages} />
              <Field label="Conclusion" value={item.conclusion} />
              <Field label="Next step" value={item.next_step} />
            </dl>
            <Related label="Skills already held" names={skillNames("detinuta")} />
            <Related label="Skills required" names={skillNames("necesara")} />
            <Related label="Skills to develop" names={skillNames("de_dezvoltat")} />
            <Related label="Relevant experiences" names={namesByIds(s.experiences, s.directionExperiences.filter((link) => link.direction_id === item.id).map((link) => link.experience_id))} />
            <Related label="Supporting projects" names={namesByIds(s.projects, s.directionProjects.filter((link) => link.direction_id === item.id).map((link) => link.project_id))} />
          </DetailCard>
        );
      })}
    </div>
  );
}

export function SectionContent({ section, snapshot }: Props) {
  switch (section) {
    case "experiences": return <Experiences snapshot={snapshot} />;
    case "projects": return <Projects snapshot={snapshot} />;
    case "skills": return <Skills snapshot={snapshot} />;
    case "tools": return <Tools snapshot={snapshot} />;
    case "education": return <Education snapshot={snapshot} />;
    case "languages": return <Languages snapshot={snapshot} />;
    case "professional-directions": return <Directions snapshot={snapshot} />;
    default: return null;
  }
}

import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, FolderKanban, Layers3, Lightbulb } from "lucide-react";
import { DataState } from "@/components/profile/data-state";
import { Pill, Pills } from "@/components/profile/primitives";
import { period, readable, recentFirst, skillsByEvidence } from "@/lib/data/format";
import { getDashboardSnapshot } from "@/lib/data/profile";

export default async function OverviewPage() {
  const snapshot = await getDashboardSnapshot();
  if (snapshot.kind !== "ok") return <DataState kind={snapshot.kind} />;

  const { profile, experiences, projects, skills, tools, education, languages, directions } = snapshot;
  const recentExperiences = recentFirst(experiences).slice(0, 2);
  const recentProjects = recentFirst(projects).slice(0, 3);
  const datedExperiences = experiences.some((item) => item.started_on || item.start_year);
  const datedProjects = projects.some((item) => item.started_on || item.start_year);
  const highlightedSkills = skillsByEvidence(skills).slice(0, 6);
  const highlightedTools = [...tools].sort((a, b) => a.title.localeCompare(b.title)).slice(0, 6);
  const highlights = [
    { title: "Experiences", count: experiences.length, href: "/experiences", icon: BriefcaseBusiness },
    { title: "Projects", count: projects.length, href: "/projects", icon: FolderKanban },
    { title: "Skills", count: skills.length, href: "/skills", icon: Lightbulb },
    { title: "Tools", count: tools.length, href: "/tools", icon: Layers3 },
  ];

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12 lg:py-11">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Your workspace</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Overview</h1>
        <p className="mt-2 text-sm text-slate-500 sm:text-base">A concise view of your professional profile.</p>
      </header>

      <section className="relative mt-9 overflow-hidden rounded-[28px] bg-[#18243a] px-7 py-9 text-white sm:px-10 sm:py-11">
        <div className="absolute -right-12 -top-24 size-72 rounded-full border border-white/10" aria-hidden="true" />
        <div className="absolute -right-2 -top-12 size-56 rounded-full border border-white/10" aria-hidden="true" />
        <div className="relative max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4f18f]">Professional identity</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{profile.display_name || profile.full_name}</h2>
          {profile.summary && <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-200">{profile.summary}</p>}
          <div className="mt-6 flex flex-wrap gap-2">
            {[profile.city, profile.country, profile.preferred_employment, profile.preferred_work_mode, profile.preferred_industry]
              .filter((value): value is string => Boolean(value?.trim()))
              .map((value, index) => <span key={`${value}-${index}`} className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-slate-200">{readable(value)}</span>)}
          </div>
        </div>
      </section>

      <section className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Profile counts">
        {highlights.map(({ title, count, href, icon: Icon }) => (
          <Link key={title} href={href} className="rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-slate-300">
            <div className="flex items-center justify-between"><span className="grid size-10 place-items-center rounded-xl bg-[#edf4e6] text-[#496d38]"><Icon size={20} /></span><ArrowRight size={16} className="text-slate-400" /></div>
            <p className="mt-4 text-2xl font-semibold">{count}</p><p className="text-sm text-slate-500">{title}</p>
          </Link>
        ))}
      </section>

      {(profile.objectives || profile.preferences) && (
        <section className="mt-8 grid gap-4 md:grid-cols-2">
          {profile.objectives && <div className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="font-semibold">Objectives</h2><p className="mt-3 whitespace-pre-line text-sm leading-6 text-slate-600">{profile.objectives}</p></div>}
          {profile.preferences && <div className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="font-semibold">Preferences</h2><p className="mt-3 whitespace-pre-line text-sm leading-6 text-slate-600">{profile.preferences}</p></div>}
        </section>
      )}

      <div className="mt-8 grid gap-5 xl:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-center justify-between"><h2 className="font-semibold">{datedExperiences ? "Recent experiences" : "Experiences"}</h2><Link href="/experiences" className="text-xs font-medium text-slate-500 hover:text-slate-900">View all</Link></div>
          {recentExperiences.length ? <div className="mt-4 divide-y divide-slate-100">{recentExperiences.map((item) => <div key={item.id} className="py-4 first:pt-0 last:pb-0"><p className="font-medium">{item.title}</p><p className="mt-1 text-sm text-slate-500">{[item.organization, period(item)].filter(Boolean).join(" · ")}</p></div>)}</div> : <p className="mt-4 text-sm text-slate-500">No experiences recorded yet.</p>}
        </section>
        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-center justify-between"><h2 className="font-semibold">{datedProjects ? "Recent projects" : "Projects"}</h2><Link href="/projects" className="text-xs font-medium text-slate-500 hover:text-slate-900">View all</Link></div>
          {recentProjects.length ? <div className="mt-4 divide-y divide-slate-100">{recentProjects.map((item) => <div key={item.id} className="py-4 first:pt-0 last:pb-0"><p className="font-medium">{item.title}</p><p className="mt-1 text-sm text-slate-500">{[readable(item.status), period(item)].filter(Boolean).join(" · ")}</p>{item.result && <p className="mt-2 line-clamp-2 text-sm text-slate-600">{item.result}</p>}</div>)}</div> : <p className="mt-4 text-sm text-slate-500">No projects recorded yet.</p>}
        </section>
        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-center justify-between"><h2 className="font-semibold">Skills & knowledge</h2><Link href="/skills" className="text-xs font-medium text-slate-500 hover:text-slate-900">View all</Link></div>
          <p className="mt-2 text-xs text-slate-400">Shown by recorded usage stage, then title.</p>
          {highlightedSkills.length ? <div className="mt-4 flex flex-wrap gap-2">{highlightedSkills.map((item) => <Pill key={item.id}>{item.title}{item.usage_stage ? ` · ${readable(item.usage_stage)}` : ""}</Pill>)}</div> : <p className="mt-4 text-sm text-slate-500">No skills recorded yet.</p>}
        </section>
        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-center justify-between"><h2 className="font-semibold">Tools</h2><Link href="/tools" className="text-xs font-medium text-slate-500 hover:text-slate-900">View all</Link></div>
          {highlightedTools.length ? <div className="mt-4 flex flex-wrap gap-2">{highlightedTools.map((item) => <Pill key={item.id}>{item.title}</Pill>)}</div> : <p className="mt-4 text-sm text-slate-500">No tools recorded yet.</p>}
        </section>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-3">
        <section className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="font-semibold">Languages</h2>{languages.length ? <Pills items={languages.map((item) => `${item.title}${item.overall_level ? ` · ${readable(item.overall_level)}` : ""}`)} /> : <p className="mt-4 text-sm text-slate-500">No languages recorded yet.</p>}</section>
        <section className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="font-semibold">Education highlights</h2>{education.length ? <div className="mt-4 space-y-4">{recentFirst(education).slice(0, 2).map((item) => <div key={item.id}><p className="text-sm font-medium">{item.title}</p><p className="mt-1 text-xs text-slate-500">{[item.institution, period(item)].filter(Boolean).join(" · ")}</p></div>)}</div> : <p className="mt-4 text-sm text-slate-500">No education recorded yet.</p>}</section>
        <section className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="font-semibold">Professional directions</h2>{directions.length ? <div className="mt-4 space-y-3">{[...directions].sort((a, b) => a.title.localeCompare(b.title)).slice(0, 3).map((item) => <div key={item.id}><p className="text-sm font-medium">{item.title}</p>{item.next_step && <p className="mt-1 line-clamp-2 text-xs text-slate-500">Next step: {item.next_step}</p>}</div>)}</div> : <p className="mt-4 text-sm text-slate-500">No directions recorded yet.</p>}</section>
      </div>
    </div>
  );
}

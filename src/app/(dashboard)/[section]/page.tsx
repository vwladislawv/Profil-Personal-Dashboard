import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DataState } from "@/components/profile/data-state";
import { SectionContent } from "@/components/profile/section-content";
import { getDashboardSnapshot } from "@/lib/data/profile";
import { sections } from "@/lib/sections";

type Props = { params: Promise<{ section: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section: slug } = await params;
  const section = sections.find((item) => item.slug === slug);
  return { title: section?.title ?? "Section" };
}

export default async function SectionPage({ params }: Props) {
  const { section: slug } = await params;
  const section = sections.find((item) => item.slug === slug);
  if (!section) notFound();

  const snapshot = await getDashboardSnapshot();
  if (snapshot.kind !== "ok") return <DataState kind={snapshot.kind} />;

  const Icon = section.icon;
  const next = sections[(sections.findIndex((item) => item.slug === slug) + 1) % sections.length];
  const count = {
    experiences: snapshot.experiences.length,
    projects: snapshot.projects.length,
    skills: snapshot.skills.length,
    tools: snapshot.tools.length,
    education: snapshot.education.length,
    languages: snapshot.languages.length,
    "professional-directions": snapshot.directions.length,
  }[slug];

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12 lg:py-11">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"><ArrowLeft size={16} /> Overview</Link>
      <header className="mt-8 flex flex-wrap items-start gap-4">
        <div className="grid size-14 place-items-center rounded-2xl bg-[#e8f1df] text-[#496d38]"><Icon size={27} strokeWidth={1.7} /></div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Profile section · {count} recorded</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">{section.title}</h1>
          <p className="mt-2 text-sm text-slate-500 sm:text-base">{section.description}</p>
        </div>
      </header>

      <section className="mt-9" aria-label={section.title}>
        <SectionContent section={slug} snapshot={snapshot} />
      </section>

      <Link href={`/${next.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">Explore {next.title} <ArrowRight size={16} /></Link>
    </div>
  );
}

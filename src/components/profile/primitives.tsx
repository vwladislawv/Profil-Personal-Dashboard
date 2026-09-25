import type { ReactNode } from "react";
import { readable } from "@/lib/data/format";

export function DetailCard({ children }: { children: ReactNode }) {
  return <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.025)]">{children}</article>;
}

export function Field({ label, value }: { label: string; value?: string | number | null }) {
  if (value === null || value === undefined || String(value).trim() === "") return null;
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</dt>
      <dd className="mt-1 whitespace-pre-line text-sm leading-6 text-slate-700">{value}</dd>
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{children}</span>;
}

export function Pills({ items }: { items?: (string | null | undefined)[] | null }) {
  const values = items?.filter((item): item is string => Boolean(item?.trim())) ?? [];
  if (!values.length) return null;
  return <div className="mt-4 flex flex-wrap gap-2">{values.map((item, index) => <Pill key={`${item}-${index}`}>{readable(item)}</Pill>)}</div>;
}

export function Related({ label, names }: { label: string; names: string[] }) {
  if (!names.length) return null;
  return (
    <div className="mt-5 border-t border-slate-100 pt-4">
      <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</h3>
      <div className="mt-2 flex flex-wrap gap-2">{names.map((name, index) => <Pill key={`${name}-${index}`}>{name}</Pill>)}</div>
    </div>
  );
}

export function EmptySection({ title }: { title: string }) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white px-6 py-16 text-center">
      <h2 className="text-lg font-semibold">No {title.toLowerCase()} recorded yet</h2>
      <p className="mt-2 text-sm text-slate-500">This section will show information when it is added to the profile.</p>
    </div>
  );
}

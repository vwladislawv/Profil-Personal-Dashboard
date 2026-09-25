export function readable(value: string | null | undefined) {
  if (!value?.trim()) return null;
  const labels: Record<string, string> = {
    studiat: "Studied",
    exersat: "Practiced",
    aplicat: "Applied",
    demonstrat: "Demonstrated",
    necesara: "Required",
    detinuta: "Already held",
    de_dezvoltat: "To develop",
    competenta: "Skill",
    cunostinta: "Knowledge",
    soft_skill: "Soft skill",
  };
  return labels[value] ?? value.replaceAll("_", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function period(record: {
  period_label?: string | null;
  start_year?: number | null;
  end_year?: number | null;
  started_on?: string | null;
  ended_on?: string | null;
}) {
  if (record.period_label?.trim()) return record.period_label;
  const start = record.start_year ?? record.started_on?.slice(0, 4);
  const end = record.end_year ?? record.ended_on?.slice(0, 4);
  if (start && end) return `${start}–${end}`;
  if (start) return `From ${start}`;
  if (end) return `Until ${end}`;
  return null;
}

export function recentFirst<T extends {
  start_year?: number | null;
  started_on?: string | null;
  created_at: string;
}>(items: T[]) {
  return [...items].sort((a, b) => {
    const aDate = a.started_on ?? (a.start_year ? `${a.start_year}-01-01` : "");
    const bDate = b.started_on ?? (b.start_year ? `${b.start_year}-01-01` : "");
    return bDate.localeCompare(aDate) || a.created_at.localeCompare(b.created_at);
  });
}

export function skillsByEvidence<T extends { usage_stage: string | null; title: string }>(items: T[]) {
  const rank: Record<string, number> = { demonstrat: 4, aplicat: 3, exersat: 2, studiat: 1 };
  return [...items].sort((a, b) =>
    (rank[b.usage_stage ?? ""] ?? 0) - (rank[a.usage_stage ?? ""] ?? 0) ||
    a.title.localeCompare(b.title),
  );
}

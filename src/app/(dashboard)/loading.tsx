export default function DashboardLoading() {
  return (
    <div className="mx-auto max-w-7xl animate-pulse px-5 py-8 sm:px-8 lg:px-12 lg:py-11" aria-label="Loading profile">
      <div className="h-4 w-24 rounded bg-slate-200" />
      <div className="mt-4 h-10 w-64 max-w-full rounded bg-slate-200" />
      <div className="mt-9 h-52 rounded-[28px] bg-slate-200" />
      <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[0, 1, 2, 3].map((item) => <div key={item} className="h-32 rounded-2xl bg-slate-200" />)}
      </div>
    </div>
  );
}

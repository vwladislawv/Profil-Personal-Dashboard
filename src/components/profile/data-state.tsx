export function DataState({ kind }: { kind: "error" | "no-access" }) {
  const noAccess = kind === "no-access";
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
      <div className="rounded-[24px] border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-semibold tracking-tight">
          {noAccess ? "No profile is linked to this account" : "We could not load your profile"}
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500">
          {noAccess
            ? "Your account is signed in, but it does not have access to a profile. Ask the profile owner to check your access."
            : "The profile data is temporarily unavailable. Refresh the page or try again shortly."}
        </p>
      </div>
    </div>
  );
}

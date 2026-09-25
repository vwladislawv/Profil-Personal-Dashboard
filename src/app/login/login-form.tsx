"use client";

import { useActionState } from "react";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { signIn, type LoginState } from "@/lib/auth/actions";

const initialState: LoginState = { error: null };

export function LoginForm() {
  const [state, action, pending] = useActionState(signIn, initialState);

  return (
    <form action={action} className="mt-8 space-y-5">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-700 focus:ring-2 focus:ring-slate-200" />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
        <input id="password" name="password" type="password" autoComplete="current-password" required className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-700 focus:ring-2 focus:ring-slate-200" />
      </div>
      {state.error && <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{state.error}</p>}
      <button type="submit" disabled={pending} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#18243a] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#26364f] disabled:opacity-60">
        {pending ? "Signing in…" : "Sign in"}<ArrowRight size={16} aria-hidden="true" />
      </button>
      <p className="flex items-center justify-center gap-2 text-xs text-slate-500"><LockKeyhole size={13} aria-hidden="true" /> Private dashboard</p>
    </form>
  );
}

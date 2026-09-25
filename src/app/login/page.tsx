import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { LoginForm } from "./login-form";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = { title: "Sign in" };

export default async function LoginPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  if (data?.claims) redirect("/");

  return (
    <main className="grid min-h-screen place-items-center px-5 py-12">
      <div className="w-full max-w-md rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-10">
        <div className="grid size-12 place-items-center rounded-xl bg-[#18243a] text-xl font-bold text-[#d4f18f]">P</div>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Personal Profile</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Welcome back</h1>
        <p className="mt-3 text-sm leading-6 text-slate-500">Sign in to view your private professional dashboard.</p>
        <LoginForm />
      </div>
    </main>
  );
}

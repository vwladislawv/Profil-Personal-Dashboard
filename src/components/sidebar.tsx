"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, LogOut, PanelLeftClose } from "lucide-react";
import { overview, sections } from "@/lib/sections";
import { signOut } from "@/lib/auth/actions";

const navigation = [overview, ...sections];

function NavigationLinks({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();

  return navigation.map(({ slug, title, icon: Icon }) => {
    const href = slug ? `/${slug}` : "/";
    const active = pathname === href;

    return (
      <Link
        key={title}
        href={href}
        aria-current={active ? "page" : undefined}
        className={`flex shrink-0 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
          active
            ? mobile ? "bg-slate-900 text-white" : "bg-white/12 text-white"
            : mobile ? "text-slate-600 hover:bg-slate-100" : "text-slate-400 hover:bg-white/8 hover:text-white"
        }`}
      >
        <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
        <span>{title}</span>
      </Link>
    );
  });
}

export function Sidebar() {
  return (
    <>
      <aside className="hidden w-72 shrink-0 flex-col bg-[#111a2c] px-5 py-7 text-white lg:flex">
        <div className="flex items-center gap-3 px-3">
          <div className="grid size-10 place-items-center rounded-xl bg-[#d4f18f] text-lg font-bold text-[#17241a]">P</div>
          <div>
            <p className="text-sm font-semibold tracking-wide">Personal Profile</p>
            <p className="text-xs text-slate-400">Your career workspace</p>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          <span>Workspace</span><PanelLeftClose size={15} aria-hidden="true" />
        </div>
        <nav aria-label="Main navigation" className="mt-4 flex flex-col gap-1"><NavigationLinks /></nav>

        <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="mb-3 grid size-8 place-items-center rounded-lg bg-[#d4f18f] text-[#17241a]"><ArrowUpRight size={18} aria-hidden="true" /></div>
          <p className="text-sm font-semibold">Your profile at a glance</p>
          <p className="mt-1 text-xs leading-5 text-slate-400">Browse your experience, projects, skills, and directions in one space.</p>
        </div>
        <form action={signOut} className="mt-4 px-3">
          <button type="submit" className="flex items-center gap-2 py-2 text-sm text-slate-400 transition-colors hover:text-white"><LogOut size={16} /> Sign out</button>
        </form>
        <p className="mt-5 px-3 text-xs text-slate-500">Profile dashboard · v0.1</p>
      </aside>

      <div className="border-b border-slate-200 bg-white lg:hidden">
        <div className="flex items-center gap-2 px-5 py-4">
          <div className="grid size-8 place-items-center rounded-lg bg-slate-900 text-sm font-bold text-[#d4f18f]">P</div>
          <span className="text-sm font-semibold text-slate-900">Personal Profile</span>
        </div>
        <nav aria-label="Main navigation" className="flex gap-1 overflow-x-auto px-3 pb-3"><NavigationLinks mobile /></nav>
        <form action={signOut} className="px-5 pb-3">
          <button type="submit" className="flex items-center gap-2 text-xs font-medium text-slate-500"><LogOut size={14} /> Sign out</button>
        </form>
      </div>
    </>
  );
}

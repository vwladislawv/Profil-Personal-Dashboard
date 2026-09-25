import "server-only";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function getCurrentProfile() {
  const supabase = await createClient();
  const { data: auth, error: authError } = await supabase.auth.getUser();

  if (authError || !auth.user) redirect("/login");

  const { data: access, error } = await supabase
    .from("profile_access")
    .select("profile_id, access_role")
    .eq("user_id", auth.user.id);

  if (error) {
    console.error("Unable to resolve profile access:", error);
    return { kind: "error" as const };
  }

  if (!access?.length) return { kind: "no-access" as const };

  const preferred = access.find((entry) => entry.access_role === "owner") ?? access[0];
  return { kind: "ok" as const, supabase, profileId: preferred.profile_id };
}

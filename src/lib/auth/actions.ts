"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type LoginState = { error: string | null };

export async function signIn(
  _previousState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "Enter your email and password." };
  }

  const supabase = await createClient();
  console.info("Supabase sign-in request", {
    urlConfigured: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL),
    publishableKeyConfigured: Boolean(process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY),
  });
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    console.error("Supabase sign-in failed", {
      code: error.code,
      status: error.status,
      message: error.message,
    });
    return { error: "Sign-in failed. Check your email and password, then try again." };
  }

  redirect("/");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}

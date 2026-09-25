import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import type { Database } from "./database.types";
import { getSupabaseConfig } from "./config";

export async function updateSession(request: NextRequest) {
  const { url, key } = getSupabaseConfig();
  let response = NextResponse.next({ request });

  const supabase = createServerClient<Database>(url, key, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet, headers) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options),
        );
        Object.entries(headers).forEach(([name, value]) =>
          response.headers.set(name, value),
        );
      },
    },
  });

  const { data } = await supabase.auth.getClaims();
  const signedIn = Boolean(data?.claims);
  const onLogin = request.nextUrl.pathname === "/login";

  if ((!signedIn && !onLogin) || (signedIn && onLogin)) {
    const destination = request.nextUrl.clone();
    destination.pathname = signedIn ? "/" : "/login";
    destination.search = "";
    const redirect = NextResponse.redirect(destination);
    response.cookies.getAll().forEach((cookie) =>
      redirect.cookies.set(cookie.name, cookie.value, cookie),
    );
    redirect.headers.set("Cache-Control", "private, no-store");
    for (const name of ["Expires", "Pragma"]) {
      const value = response.headers.get(name);
      if (value) redirect.headers.set(name, value);
    }
    return redirect;
  }

  response.headers.set("Cache-Control", "private, no-store");
  return response;
}

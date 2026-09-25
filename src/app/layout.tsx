import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Overview | Personal Profile", template: "%s | Personal Profile" },
  description: "A workspace for your professional profile.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}

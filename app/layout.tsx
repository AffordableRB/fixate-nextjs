import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Fixate - Missed Call Recovery & AI Intake System",
  description:
    "Fixate recovers missed calls and completes intake automatically. Built for plumbers and trades. Never lose a job again.",
  keywords:
    "missed call recovery, AI intake, plumbing software, call management, job intake",
  openGraph: {
    title: "Fixate - Missed Call Recovery & AI Intake System",
    description:
      "Fixate recovers missed calls and completes intake automatically. Built for plumbers and trades.",
    url: "https://usefixate.com",
    siteName: "Fixate",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fixate - Missed Call Recovery & AI Intake System",
    description:
      "Fixate recovers missed calls and completes intake automatically. Built for plumbers and trades.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

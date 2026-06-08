import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Rate Limit Tracker — Monitor Rate Limits Across Services",
  description:
    "Track API rate limits across multiple services. Get alerted before hitting limits. Built for backend developers and DevOps teams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="89974b02-213a-428a-9ea7-e858004913df"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Content Plagiarism Defender — Monitor Web for Unauthorized Use of Your Content",
  description: "Scans the internet for copies of your content and sends DMCA takedown notices automatically. Built for bloggers, content creators, and digital agencies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e847e4a2-9d3b-40b1-9c13-a65c12f135ea"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import PageLoadReveal from "@/components/PageLoadReveal";

export const metadata: Metadata = {
  title: "Rise at Seven | Award winning Search-first Content Marketing Agency",
  description: "Frontend recreation of the Rise at Seven homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageLoadReveal />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}

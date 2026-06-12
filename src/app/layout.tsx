import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { CommandMenu } from "@/components/shared/CommandMenu";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fendi Andriyanto | Full Stack Developer & Infrastructure Engineer",
  description: "Building mobile apps, web applications, AI-powered systems, and self-hosted infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} dark antialiased`}>
      <body className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-accent-cyan">
        {children}
        <CommandMenu />
      </body>
    </html>
  );
}

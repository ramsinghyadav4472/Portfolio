import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ram Singh Yadav | Enterprise Cloud & DevOps Engineer",
  description: "Architecting high-availability infrastructure, automated CI/CD pipelines, and robust Kubernetes deployments. Specializing in OCI and AWS.",
  keywords: ["Cloud Engineer", "DevOps", "Kubernetes", "AWS", "OCI", "Ram Singh Yadav", "Cloud Architect"],
  authors: [{ name: "Ram Singh Yadav" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Ram Singh Yadav | Enterprise Cloud & DevOps Engineer",
    description: "Architecting high-availability infrastructure, automated CI/CD pipelines, and robust Kubernetes deployments.",
    url: "http://3.91.58.246",
    siteName: "Ram Singh Yadav Portfolio",
    images: [
      {
        url: "/assets/images/rsyadav.jpeg",
        width: 1200,
        height: 630,
        alt: "Ram Singh Yadav Profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ram Singh Yadav | Enterprise Cloud & DevOps Engineer",
    description: "Architecting high-availability infrastructure, automated CI/CD pipelines, and robust Kubernetes deployments.",
    images: ["/assets/images/rsyadav.jpeg"],
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

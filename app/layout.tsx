import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Arif Chitou | Portfolio",
    template: "%s | Arif Chitou",
  },
  description: "Développeur web fullstack spécialisé en création d'applications modernes et performantes",
  keywords: ["développement web", "fullstack", "Next.js", "React", "portfolio", "Arif Chitou"],
  authors: [{ name: "Arif Chitou" }],
  creator: "Arif Chitou",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://arifchitou.vercel.app",
    siteName: "Arif Chitou | Portfolio",
    title: "Arif Chitou | Développeur Web Fullstack",
    description: "Découvrez mon travail et mes projets de développement web",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arif Chitou | Portfolio",
    description: "Développeur web fullstack",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
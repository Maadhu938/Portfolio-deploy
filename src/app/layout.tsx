import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

const siteUrl = "https://maadhuavati.in";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a0e17" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0e17" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Maadhu Avati | Full-Stack Developer",
    template: "%s | Maadhu Avati",
  },
  description:
    "Full-stack developer building web and mobile applications with React, Capacitor, Flask, and PostgreSQL. Specializing in RAG systems and AI-powered apps.",
  keywords: [
    "Maadhu Avati",
    "Full-Stack Developer",
    "React Developer",
    "Python Developer",
    "Flask",
    "Capacitor",
    "Mobile App Developer",
    "RAG",
    "AI Applications",
    "PostgreSQL",
    "Web Developer India",
    "Portfolio",
  ],
  authors: [{ name: "Maadhu Avati", url: siteUrl }],
  creator: "Maadhu Avati",
  publisher: "Maadhu Avati",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Maadhu Avati Portfolio",
    title: "Maadhu Avati | Full-Stack Developer",
    description:
      "Full-stack developer building web and mobile applications with React, Capacitor, Flask, and PostgreSQL.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maadhu Avati - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maadhu Avati | Full-Stack Developer",
    description:
      "Full-stack developer building web and mobile applications with React, Capacitor, Flask, and PostgreSQL.",
    images: ["/og-image.png"],
    creator: "@maadhu_839",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <JsonLd />
      </head>
      <body className="antialiased">
        <div className="noise" />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

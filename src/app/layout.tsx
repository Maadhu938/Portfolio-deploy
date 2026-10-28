import type { Metadata, Viewport } from "next";
import { Fredoka, DM_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { ThemeProvider } from "@/components/ThemeProvider";

const siteUrl = "https://maadhuavati.in";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e6ecef" },
    { media: "(prefers-color-scheme: dark)", color: "#1d2331" },
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
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
    google: "your-google-verification-code",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-primary selection:text-primary-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <JsonLd />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/ui/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CASH OUT - Quit Gambling for Good",
  description: "Join thousands using CASH OUT to quit gambling, track progress, and recover for life. Download now on iOS.",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '96x96', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon.ico', color: '#10b981' }
    ]
  },
  keywords: [
    "quit gambling",
    "gambling addiction recovery",
    "gambling addiction help",
    "stop gambling app",
    "gambling recovery app",
    "addiction recovery",
    "gambling support",
    "clean streak tracker",
    "gambling sobriety",
    "recovery community"
  ],
  authors: [{ name: "CASH OUT" }],
  creator: "CASH OUT",
  publisher: "CASH OUT",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cashout.app",
    siteName: "CASH OUT",
    title: "CASH OUT - Quit Gambling for Good",
    description: "Join thousands using CASH OUT to quit gambling, track progress, and recover for life. Download now on iOS.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "CASH OUT - Quit Gambling for Good",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cashoutapp",
    creator: "@cashoutapp",
    title: "CASH OUT - Quit Gambling for Good",
    description: "Join thousands using CASH OUT to quit gambling, track progress, and recover for life. Download now on iOS.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "https://cashout.app",
  },
  category: "Health & Wellness",
  manifest: "/manifest.json",
  metadataBase: new URL("https://cashout.app"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#10b981" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "CASH OUT",
    "description": "The #1 app for quitting gambling and staying clean—designed to help you break the habit and build a better future.",
    "url": "https://cashout.app",
    "applicationCategory": "HealthApplication",
    "operatingSystem": ["iOS"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1247"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CASH OUT",
      "url": "https://cashout.app"
    },
    "about": {
      "@type": "MedicalCondition",
      "name": "Gambling Addiction",
      "alternateName": ["Problem Gambling", "Gambling Disorder", "Compulsive Gambling"]
    },
    "audience": {
      "@type": "PeopleAudience",
      "audienceType": "People struggling with gambling addiction"
    },
    "featureList": [
      "Neuroscience-based habit reset",
      "Clean streak tracking",
      "Daily check-ins",
      "Community support forum",
      "Relapse recovery tools",
      "Personalized growth programs"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {/* Skip to main content link for keyboard navigation */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--color-primary)] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--color-primary)]"
        >
          Skip to main content
        </a>
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

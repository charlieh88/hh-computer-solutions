import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Professional Website Builder & Web Development | H&H Computer Solutions UK",
  description: "Expert website builders creating custom websites, e-commerce stores, and professional web solutions in the UK. Fast, reliable website development with 24/7 support. Get your business online today!",
  keywords: "website builder UK, web development, custom websites, e-commerce development, professional website design, web developer, website creation, business websites, website builder near me, cheap website builder",
  authors: [{ name: "H&H Computer Solutions" }],
  creator: "H&H Computer Solutions",
  publisher: "H&H Computer Solutions", 
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://hh-computersolutions.com",
    siteName: "H&H Computer Solutions - Website Builders UK",
    title: "Professional Website Builder & Web Development Services UK",
    description: "Expert website builders creating custom websites, e-commerce stores, and professional web solutions in the UK with 24/7 support.",
    images: [
      {
        url: "/hh-logo-large.png",
        width: 800,
        height: 800,
        alt: "H&H Computer Solutions - Professional Website Builders UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Website Builder & Web Development UK",
    description: "Expert website builders creating custom websites and e-commerce solutions with 24/7 support across the UK.",
    images: ["/hh-logo-large.png"],
  },
  alternates: {
    canonical: "https://hh-computersolutions.com",
  },
  icons: [
    {
      rel: 'icon',
      url: '/favicon-light.png',
      media: '(prefers-color-scheme: light)',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/favicon-dark.png', 
      media: '(prefers-color-scheme: dark)',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
      sizes: 'any',
    },
    {
      rel: 'shortcut icon',
      url: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      url: '/favicon-light.png',
      sizes: '180x180',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

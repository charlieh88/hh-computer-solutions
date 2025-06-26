import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "H&H Computer Solutions - Professional Web Development",
  description: "Professional web development services that help businesses succeed online. From concept to deployment, we create websites that work.",
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
      url: '/favicon.ico', // Fallback for older browsers
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

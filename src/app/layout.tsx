import "@fontsource/inter/index.css";
import "@fontsource/merriweather/700.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"


import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Taste of Morocco | Moroccan Cuisine, Catering & Artisanal Goods in Canada',
  description: 'Experience the richness of Moroccan culture with Taste of Morocco. Enjoy authentic halal meals, catering, cooking classes, and shop handcrafted goods made by Moroccan artisans, including Berber rugs, ceramics, and leather products.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

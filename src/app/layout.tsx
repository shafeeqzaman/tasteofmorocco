import "@fontsource/inter/index.css";
import "@fontsource/merriweather/700.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import SocialMediaButton from "@/components/SocialMediaButton"; // <-- Import here!

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Taste of Morocco | Moroccan Cuisine, Catering & Artisanal Goods in Canada',
  description: 'Experience the richness of Moroccan culture with Taste of Morocco. Enjoy authentic halal meals, catering, cooking classes, and shop handcrafted goods made by Moroccan artisans, including Berber rugs, ceramics, and leather products.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Sidebar />
        {children}
        {/* Social Media Floating Buttons */}
		<SocialMediaButton
		  type="whatsapp"
		  href="https://wa.me/15198045902?text=Hello%2C%20I%20have%20an%20inquiry"
		  style={{ bottom: 120 }}
		/>
		<SocialMediaButton
		  type="instagram"
		  href="https://www.instagram.com/tasteofmorocco_"
		  style={{ bottom: 68 }}
		/>
		<SocialMediaButton
		  type="tiktok"
		  href="https://www.tiktok.com/@taste.of.morocco.ca"
		  style={{ bottom: 16 }}
		/>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

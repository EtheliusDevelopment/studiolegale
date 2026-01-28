import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const outfit = Outfit({
  variable: "--font-header",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio Legale Iannilli & Partners | Diritto Civile, Penale e Societario",
  description: "Lo Studio Legale Iannilli & Partners offre consulenza legale esperta e pluridisciplinare per privati e aziende. Professionalità, competenza e risultati.",
  keywords: ["avvocato", "studio legale", "diritto civile", "diritto penale", "consulenza legale", "aziende"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

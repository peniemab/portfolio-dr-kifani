import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#1e3a8a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Dr. Kifani Bénie | Médecin Généraliste à Kinshasa - Centre Médical de la Mongala",
    template: "%s | Dr. Kifani Bénie"
  },
  description: "Consultez le Dr. Kifani Bénie, médecin généraliste au Centre Médical de la Mongala, Kinshasa. Expertise en médecine générale, pédiatrie et suivi de santé rigoureux.",
  keywords: ["Médecin Kinshasa", "Généraliste Kinshasa", "Dr. Kifani Bénie", "Centre Médical de la Mongala", "Consultation médicale Gombe", "Santé Kinshasa"],
  authors: [{ name: "Dr. Kifani Bénie" }],
  creator: "Dr. Kifani Bénie",
  publisher: "Centre Médical de la Mongala",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_CD",
    url: "https://dr-kifani-benie.com", // À remplacer par l'URL finale
    siteName: "Dr. Kifani Bénie - Portfolio Médical",
    title: "Dr. Kifani Bénie | Votre parcours de santé à Kinshasa",
    description: "Approche humaine et rigoureuse pour votre santé au quotidien au Centre Médical de la Mongala.",
    images: [
      {
        url: "/images/doctor_portrait.png",
        width: 1200,
        height: 630,
        alt: "Dr. Kifani Bénie - Médecin Généraliste",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Kifani Bénie | Médecin Généraliste",
    description: "Expertise médicale et écoute active au Centre Médical de la Mongala, Kinshasa.",
    images: ["/images/doctor_portrait.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        {/* Fallback pour certains outils de scan si Next metadata traîne */}
        <title>Dr. Kifani Bénie | Médecin Généraliste à Kinshasa</title>
        <meta name="description" content="Consultez le Dr. Kifani Bénie au Centre Médical de la Mongala, Kinshasa." />
      </head>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

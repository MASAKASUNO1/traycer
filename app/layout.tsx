import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Programming Learning Game",
  description:
    "An interactive programming learning platform with gamified challenges and progress tracking.",
  keywords: [
    "programming",
    "learning",
    "game",
    "coding",
    "education",
    "challenges",
  ],
  authors: [{ name: "Programming Learning Game Team" }],
  creator: "Programming Learning Game",
  publisher: "Programming Learning Game",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://programming-learning-game.web.app"),
  openGraph: {
    title: "Programming Learning Game",
    description:
      "An interactive programming learning platform with gamified challenges and progress tracking.",
    url: "https://programming-learning-game.web.app",
    siteName: "Programming Learning Game",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Programming Learning Game",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Programming Learning Game",
    description:
      "An interactive programming learning platform with gamified challenges and progress tracking.",
    images: ["/og-image.png"],
    creator: "@programminggame",
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Navigation />
            <main className="container mx-auto px-4 py-8">{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}

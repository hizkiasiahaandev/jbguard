import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JB GUARD | Database Penipu & Midman Terpercaya 2026",
  description: "Cek list penipu (blacklist) dan daftar Midman terverifikasi di JB GUARD. Portal keamanan transaksi jual beli online aman tanpa takut ditipu.",
  keywords: ["jb guard", "database penipu", "cek penipu online", "midman terpercaya", "rekening penipu", "jual beli aman"],
  authors: [{ name: "JB GUARD Admin" }],
  openGraph: {
    title: "JB GUARD - Portal Keamanan Transaksi JB Online",
    description: "Lacak database penipu dan cek keaslian Midman JB terintegrasi komunitas.",
    url: "https://jbguard.vercel.app/", 
    siteName: "JB GUARD",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JB GUARD | Database Penipu & Midman Terpercaya",
    description: "Cek list penipu dan daftar Midman terverifikasi sebelum transaksi.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Murasaki Sushi | Culinária Japonesa Premium em Uberlândia",
  description:
    "Restaurante japonês em Uberlândia/MG com culinária autoral, menu degustação, pratos sofisticados, delivery e experiência premium no Fundinho.",
  keywords:
    "sushi Uberlândia, restaurante japonês Uberlândia, Murasaki Sushi, japonês no Fundinho, menu degustação japonês, sushi premium Uberlândia, delivery japonês Uberlândia",
  openGraph: {
    title: "Murasaki Sushi | Culinária Japonesa Premium em Uberlândia",
    description:
      "Restaurante japonês em Uberlândia/MG com culinária autoral e experiência premium no Fundinho.",
    type: "website",
    locale: "pt_BR",
    siteName: "Murasaki Sushi",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

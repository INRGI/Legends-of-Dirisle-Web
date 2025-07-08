import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

export const metadata: Metadata = {
  title: "Legends of Dirisle | PvE сервер DayZ",
  description:
    "Legends of Dirisle — PvE сервер DayZ для поціновувачів атмосферного виживання. Унікальна карта Deerisle, баланс між хардкором і комфортом, кастомні івенти, моди, економіка та тепла спільнота без рейдів.",
  keywords: [
    "DayZ сервер",
    "DayZ PvE",
    "PvE DayZ",
    "PvE DayZ сервер",
    "Український DayZ сервер",
    "PvE DayZ сервер Україна",
    "Deerisle сервер",
    "Legends of Dirisle",
    "DayZ моди",
    "DayZ Ukraine",
    "DayZ комфортний сервер",
    "DayZ survival",
  ],
  metadataBase: new URL("https://legends-of-dirisle.vercel.app/"),
  alternates: {
    canonical: "https://legends-of-dirisle.vercel.app/",
  },
  openGraph: {
    title: "Legends of Dirisle — PvE DayZ сервер",
    description:
      "PvE сервер на мапі Deerisle з кастомною економікою, подіями, унікальними модами та дружньою атмосферою без рейдів.",
    url: "https://legends-of-dirisle.vercel.app/",
    siteName: "Legends of Dirisle",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: "https://legends-of-dirisle.vercel.app/logo2.png",
        width: 800,
        height: 600,
      },
    ]
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#0f0f0f",
  robots: "index, follow",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}

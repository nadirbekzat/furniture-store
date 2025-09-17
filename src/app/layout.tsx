// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.example.com"),
  title: {
    default: "Treestan - магазин мебели",
    template: "%s | Treestan - магазин мебели",
  },
  description:
    "Современная мебель для дома и офиса: диваны, столы, стулья, шкафы. Доставка и сборка.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.example.com/",
    title: "Магазин мебели",
    description: "Современная мебель для дома и офиса. Доставка и сборка.",
    siteName: "Магазин мебели",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Магазин мебели",
    description:
      "Современная мебель для дома и офиса. Доставка и сборка.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-dvh">{children}</main>
      </body>
    </html>
  );
}

// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Магазин мебели | Furniture Store",
    template: "%s | Магазин мебели",
  },
  description:
    "Современная мебель для дома и офиса: диваны, столы, стулья, шкафы. Доставка и сборка.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/", // будет резолвиться относительно metadataBase
    title: "Магазин мебели",
    description: "Современная мебель для дома и офиса. Доставка и сборка.",
    siteName: "Магазин мебели",
    locale: "ru_RU",
    // при желании добавь дефолтную OG-картинку:
    // images: [{ url: "/og.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Магазин мебели",
    description:
      "Современная мебель для дома и офиса. Доставка и сборка.",
    // images: ["/og.png"],
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

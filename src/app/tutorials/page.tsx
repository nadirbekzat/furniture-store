import type { Metadata } from "next";
import TutorialCard from "@/components/tutorial-card";
import { getAllTutorials } from "@/data/tutorials";

export const metadata: Metadata = {
  title: "Tutorials — видео и инструкции",
  description:
    "Видео-уроки и письменные инструкции Treestan: уход, настройка и лайфхаки по мебели из массива.",
  alternates: { canonical: "/tutorials" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Tutorials — Treestan",
    description:
      "Уход за массивом, настройка опор, профилактика — смотрите уроки и читайте инструкции.",
    url: "https://www.example.com/tutorials",
    siteName: "Treestan",
    locale: "ru_RU",
  },
  twitter: { card: "summary_large_image" },
};

export default function TutorialsPage() {
  const items = getAllTutorials();
  return (
    <div className="w-full bg-[#F5F5DC]">
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-4xl font-semibold tracking-tight text-center">
          Туториалы
        </h1>
        <p className="mt-3 text-black/70 dark:text-white/70 text-center">
          Видео и пошаговые инструкции: уход, регулировка и полезные советы.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <TutorialCard key={item.slug} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

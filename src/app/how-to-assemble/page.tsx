import type { Metadata } from "next";
import AssembleCard from "@/components/assemble-card";
import { assemblyItems } from "@/data/assembly";

export const metadata: Metadata = {
  title: "How to Assemble — инструкции по сборке",
  description:
    "Пошаговые видео-инструкции по сборке изделий Treestan: столики, полки, подставки и другое.",
  alternates: { canonical: "/how-to-assemble" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "How to Assemble — Treestan",
    description:
      "Видео-уроки по сборке мебели Treestan: советы, безопасность и обслуживание.",
    url: "https://www.example.com/how-to-assemble",
    siteName: "Treestan",
    locale: "ru_RU",
  },
  twitter: { card: "summary_large_image" },
};

export default function HowToAssemblePage() {
  return (
    // Внешняя полоса на всю ширину экрана с бэкграундом
    <section
      aria-labelledby="assemble-title"
      className="relative left-[calc(-50vw+50%)] w-screen bg-[#F5F5DC]"
    >
      {/* Центрированный контейнер */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 id="assemble-title" className="text-4xl font-semibold tracking-tight text-center">
          Сборка
        </h1>
        <p className="mt-3 text-black/70 dark:text-white/70 text-center">
          Пошаговые руководства и видеоинструкции по сборке различных видов мебели.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {assemblyItems.map((item) => (
            <AssembleCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

// src/app/how-to-assemble/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { assemblyItems } from "@/data/assembly";

const BASE_URL = "https://www.example.com"; // ← замени на прод-домен

type RouteParams = { slug: string };

// Утилита для поиска элемента по slug
function getItem(slug: string) {
  return assemblyItems.find((i) => i.slug === slug);
}

// Предгенерация статических путей
export async function generateStaticParams() {
  return assemblyItems.map((i) => ({ slug: i.slug }));
}

// В Next 15 params приходят как Promise — делаем await
export async function generateMetadata(
  props: { params: Promise<RouteParams> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const item = getItem(slug);

  if (!item) {
    return { title: "Инструкция не найдена", robots: { index: false, follow: false } };
  }

  const title = item.title;
  const description = item.description ?? "Видео-инструкция по сборке от Treestan.";
  const url = `${BASE_URL}/how-to-assemble/${item.slug}`;
  const og = item.cover?.src ? [{ url: `${BASE_URL}${item.cover.src}` }] : undefined;

  return {
    title,
    description,
    alternates: { canonical: `/how-to-assemble/${item.slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      images: og,
      siteName: "Treestan",
      locale: "ru_RU",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: og?.[0]?.url ? [og[0].url] : undefined,
    },
    robots: { index: true, follow: true },
  };
}

// Страница также получает params как Promise — делаем await
export default async function HowToAssembleItemPage(
  props: { params: Promise<RouteParams> }
) {
  const { slug } = await props.params;
  const item = getItem(slug);
  if (!item) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: item.title,
    description: item.description ?? "Видео-инструкция по сборке.",
    step: [
      { "@type": "HowToStep", name: "Подготовка", text: "Распакуйте детали и разложите крепеж." },
      { "@type": "HowToStep", name: "Сборка", text: "Следуйте инструкции из видео шаг за шагом." },
      { "@type": "HowToStep", name: "Финиш", text: "Проверьте устойчивость и протяните крепёж." },
    ],
    ...(item.videoUrl && {
      video: {
        "@type": "VideoObject",
        name: item.title,
        description: item.description ?? "Видео-инструкция по сборке.",
        thumbnailUrl: item.cover?.src ? [`${BASE_URL}${item.cover.src}`] : undefined,
        uploadDate: "2024-01-01",
        contentUrl: item.videoUrl,
        embedUrl: item.videoUrl,
      },
    }),
  };

  return (
    <div className="bg-[#F5F5DC] min-h-screen">
      <section className="mx-auto max-w-4xl px-4 py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <h1 className="text-2xl md:text-4xl font-semibold tracking-tight">{item.title}</h1>

        <p className="mt-3 text-black/70 dark:text-white/70">
          Ниже — видео, показывающее процесс сборки. Если возникнут вопросы —
          напишите нам в WhatsApp или Instagram.
        </p>

        {item.videoUrl ? (
          <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-black/10 dark:ring-white/10">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                src={item.videoUrl}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        ) : (
          <div className="mt-6 rounded-2xl bg-black/5 p-6 text-sm dark:bg-white/5">
            Видео ещё не добавлено.
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={item.productSlug ? `/products/${item.productSlug}` : "/products"}
            className="rounded-full bg-[#fcba03] px-5 py-2 text-black dark:bg-white dark:text-black border-black border-3"
          >
            Перейти к продукту
          </Link>

          <a
            href="https://wa.me/00000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full ring-1 ring-black/10 px-5 py-2 dark:ring-white/10 bg-[#5bf573] border-black border-3"
            aria-label="Задать вопрос в WhatsApp"
          >
            Задать вопрос в WhatsApp
          </a>

          <a
            href="https://ig.me/m/treestan"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full ring-1 ring-black/10 px-5 py-2 dark:ring-white/10 border-3 border-black bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"
            aria-label="Задать вопрос в Instagram"
          >
            Задать вопрос в Instagram
          </a>
        </div>
      </section>
    </div>
  );
}

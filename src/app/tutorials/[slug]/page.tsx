// src/app/tutorials/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllTutorials, getTutorialBySlug } from "@/data/tutorials";

// ⚠️ заменишь на реальный прод-домен
const BASE_URL = "https://www.example.com";

type RouteParams = { slug: string };

export async function generateStaticParams() {
  return getAllTutorials().map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getTutorialBySlug(slug);
  if (!item) {
    return { title: "Туториал не найден", robots: { index: false, follow: false } };
  }

  const title = item.seo?.title ?? item.title;
  const description = item.seo?.description ?? item.description ?? "Туториал от Treestan.";
  const url = `${BASE_URL}/tutorials/${item.slug}`;
  const og = item.cover?.src ? [{ url: `${BASE_URL}${item.cover.src}` }] : undefined;

  return {
    title,
    description,
    alternates: { canonical: `/tutorials/${item.slug}` },
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

export default async function TutorialItemPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;

  const item = getTutorialBySlug(slug);
  if (!item) return notFound();

  // JSON-LD VideoObject (если есть видео)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: item.title,
    description: item.description ?? "Видео туториала.",
    thumbnailUrl: item.cover?.src ? [`${BASE_URL}${item.cover.src}`] : undefined,
    uploadDate: "2024-01-01",
    contentUrl: item.videoUrl,
    embedUrl: item.videoUrl,
  };

  return (
    <section className="w-full min-h-screen bg-[#F5F5DC] py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-2xl md:text-4xl font-semibold tracking-tight">{item.title}</h1>

        {item.description && (
          <p className="mt-3 text-black/70 dark:text-white/70">{item.description}</p>
        )}

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
      </div>
    </section>
  );
}

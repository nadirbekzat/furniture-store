// src/app/our-story/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE_URL = "https://www.example.com"; // ← замени на прод-домен

export const metadata: Metadata = {
  title: "About Us — наша история | Treestan",
  description:
    "Treestan — мастерская из Алматы (с 2021). Мы создаём мебель из массива дерева, делая упор на ручную работу и уникальный характер каждой вещи.",
  alternates: { canonical: "/our-story" },
  openGraph: {
    type: "website",
    title: "About Us — наша история | Treestan",
    description:
      "Мастерская Treestan: мебель из массива дерева, основано в 2021. Ручная работа, уникальные изделия.",
    url: `${BASE_URL}/our-story`,
    images: [{ url: `${BASE_URL}/about/67.png` }],
    siteName: "Treestan",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — наша история | Treestan",
    description: "Мастерская Treestan — про ручную работу и характер дерева.",
    images: [`${BASE_URL}/about/67.png`],
  },
  robots: { index: true, follow: true },
};

export default function OurStoryPage() {
  const storyImages = [
    { src: "/about/story-1.png", alt: "Treestan — процесс изготовления" },
    { src: "/about/story-2.png", alt: "Treestan — детали и текстура массива" },
    { src: "/about/story-3.png", alt: "Treestan — готовые изделия в интерьере" },
  ].filter(Boolean);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Us — наша история",
      url: `${BASE_URL}/our-story`,
      mainEntity: {
        "@type": "Organization",
        name: "Treestan",
        foundingDate: "2021",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Алматы",
          addressCountry: "KZ",
        },
      },
      image: [`${BASE_URL}/about/67.png`],
      inLanguage: "ru",
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Treestan",
      url: BASE_URL,
      logo: `${BASE_URL}/favicon.ico`,
      sameAs: ["https://instagram.com/yourshop", "https://wa.me/00000000000"],
    },
  ];

  return (
    <div className="w-full bg-[#F5F5DC]">
      <article className="mx-auto max-w-5xl px-4 pb-16">
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Хиро-блок на всю ширину */}
        <section className="relative h-[90vh] w-screen left-[calc(-50vw+50%)]">
          <Image
            src="/about/67.png"
            alt="Treestan — мастерская и изделия из массива"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            {/* можно оставить пустым или добавить слоган */}
          </div>
        </section>

        {/* Заголовки */}
        <header className="mt-12 text-center">
          <h1 className="text-4xl font-semibold tracking-tight">Наша История</h1>
        </header>

        {/* Текстовые блоки */}
        <section className="prose prose-neutral mx-auto mt-8 dark:prose-invert">
          <p>
            В Treestan мы верим в естественную красоту дерева и силу ручной работы.
            Каждое изделие — это начало истории: волокна, рисунок годовых колец,
            нюансы кромки — всё это задаёт индивидуальность предмету и пространству,
            в котором он живёт.
          </p>

          {/* Фото 1 */}
          {storyImages[0] && (
            <figure className="not-prose my-8 overflow-hidden rounded-2xl ring-1 ring-black/10 dark:ring-white/10">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={storyImages[0].src}
                  alt={storyImages[0].alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 768px, 100vw"
                />
              </div>
            </figure>
          )}

          <p>
            Наша мастерская родилась в Алматы в 2021 году из уважения к простоте
            и индивидуальности. Мы работаем с массивом — карагач, дуб, орех —
            отбирая ламели, подчёркивая фактуру и оставляя тактильно приятные поверхности.
            Отличительная черта Treestan — преобладание ручных операций,
            благодаря которым каждый стол, столик или стул получается по-настоящему уникальным.
          </p>

          {/* Фото 2 */}
          {storyImages[1] && (
            <figure className="not-prose my-8 overflow-hidden rounded-2xl ring-1 ring-black/10 dark:ring-white/10">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={storyImages[1].src}
                  alt={storyImages[1].alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 768px, 100vw"
                />
              </div>
            </figure>
          )}

          <p>
            Каждый из нас несёт потребность создавать и формировать своё окружение.
            Мы делаем предметы, которые помогают выразить характер дома:
            от обеденных столов и журнальных столиков до стульев и лёгких стеллажей.
            Размеры, отделки и опоры — подбираются под ваш сценарий жизни.
          </p>

          {/* Фото 3 */}
          {storyImages[2] && (
            <figure className="not-prose my-8 overflow-hidden rounded-2xl ring-1 ring-black/10 dark:ring-white/10">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={storyImages[2].src}
                  alt={storyImages[2].alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 768px, 100vw"
                />
              </div>
            </figure>
          )}

          <p>
            Мы — больше, чем мастерская мебели. Мы за то, чтобы предметы
            становились частью вашей истории. Когда вы привносите в изделие
            своё видение — оно обретает смысл, становится чем-то большим,
            чем просто вещь в комнате.
          </p>
          <p>
            Вы приобретаете не просто мебель. Вы помогаете пространству говорить вашим языком.
          </p>
        </section>

        {/* Кнопки */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/products"
            className="rounded-full bg-[#fcba03] px-5 py-2 text-black dark:bg:white dark:text-black border-black border-3"
          >
            Смотреть каталог
          </Link>
          <a
            href="https://wa.me/00000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full ring-1 ring-black/10 px-5 py-2 dark:ring-white/10 bg-[#5bf573] border-black border-3"
          >
            Задать вопрос в WhatsApp
          </a>
          <a
            href="https://instagram.com/yourshop"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full ring-1 ring-black/10 px-5 py-2 dark:ring-white/10 border-3 border-black bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"
          >
            Задать вопрос в Instagram
          </a>
        </div>
      </article>
    </div>
  );
}

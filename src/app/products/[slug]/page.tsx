// src/app/products/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug } from "@/data/products";
import Gallery from "@/components/gallery";

type Params = { slug: string };
type Props = { params: Promise<Params> };

// ⚠️ ЗАМЕНИ на реальный прод-домен
const BASE_URL = "https://www.example.com";

export async function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Товар не найден",
      robots: { index: false, follow: false },
    };
  }

  const title = product.seo?.title ?? `${product.name} — Treestan`;
  const description =
    product.seo?.description ??
    `${product.name}: ручная работа из массива дерева. Индивидуальные размеры и отделки.`;

  const canonicalPath = `/products/${product.slug}`;
  const absoluteUrl = `${BASE_URL}${canonicalPath}`;
  const ogImageUrl = product.images[0]?.src
    ? `${BASE_URL}${product.images[0].src}`
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: "website",
      title,
      description,
      url: absoluteUrl,
      images: ogImageUrl ? [{ url: ogImageUrl }] : undefined,
      siteName: "Treestan",
      locale: "ru_RU",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImageUrl ? [ogImageUrl] : undefined,
    },
    robots: { index: true, follow: true },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return notFound();

  // JSON-LD для Product (SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((i) => `${BASE_URL}${i.src}`),
    brand: { "@type": "Brand", name: "Treestan" },
    ...(product.priceFrom && {
      offers: {
        "@type": "Offer",
        priceCurrency: "KZT",
        price: product.priceFrom,
        availability: "https://schema.org/PreOrder",
        url: `${BASE_URL}/products/${product.slug}`,
      },
    }),
  };

  return (
    // full-bleed + вертикаль (минимум 100vh)
    <section className="relative left-[calc(-50vw+50%)] w-screen min-h-screen bg-[#F5F5DC]">
      <script
        type="application/ld+json"
        // опасный HTML нужен для JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Центрированный контейнер */}
      <article className="mx-auto max-w-6xl px-4 py-12">
        {/* 2 колонки: слева фото, справа инфо */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,640px)_1fr] xl:grid-cols-[minmax(0,720px)_1fr]">
          {/* Галерея: сдвиг левее (визуальный край) */}
          <div className="lg:-ml-6 xl:-ml-10 2xl:-ml-16">
            {/* Новая версия галереи с горизонтальным скроллом */}
            <Gallery images={product.images} />
          </div>

          {/* ====== ИНФОБЛОК ====== */}
          <div>
            <h1 className="text-2xl md:text-4xl font-semibold">{product.name}</h1>

            {product.summary ? (
              <p className="mt-3 text-black/70 dark:text-white/70">
                {product.summary}
              </p>
            ) : null}

            {product.priceFrom ? (
              <p className="mt-5 text-xl font-semibold">
                Цена от {product.priceFrom.toLocaleString()} KZT
              </p>
            ) : null}

            {product.priceBySize ? (
              <div className="mt-4">
                <h2 className="text-lg font-medium">Размеры и цены</h2>
                <ul className="mt-2 space-y-1 text-sm">
                  {Object.entries(product.priceBySize).map(([label, price]) => (
                    <li
                      key={label}
                      className="flex justify-between border-b border-black/10 py-2 dark:border-white/10"
                    >
                      <span>{label}</span>
                      <span className="font-medium">
                        {price.toLocaleString()} KZT
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-6 prose prose-neutral dark:prose-invert">
              <p>{product.description}</p>
              {product.materials?.length ? (
                <p>
                  <strong>Материалы:</strong> {product.materials.join(", ")}
                </p>
              ) : null}
              {product.finishes?.length ? (
                <p>
                  <strong>Отделки:</strong> {product.finishes.join(", ")}
                </p>
              ) : null}
              {product.madeToOrder ? <p>Изготавливается на заказ.</p> : null}
            </div>

            {/* Кнопки: одна линия, одинаковая высота */}
            <div className="mt-8 flex items-center gap-4 flex-wrap md:flex-nowrap">
              <a
                href="https://wa.me/00000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-full px-5 text-black dark:bg-white dark:text-black border-3 border-black bg-[#5bf573]"
              >
                Заказать в WhatsApp
              </a>
              <a
                href="https://instagram.com/yourshop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-full ring-1 ring-black/10 px-5 dark:ring-white/10 border-3 border-black bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"
              >
                Заказать в Instagram
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

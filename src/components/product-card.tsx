// src/components/product-card.tsx
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/catalog";

export default function ProductCard({ product }: { product: Product }) {
  const cover = product.cardImage ?? product.images[0];
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block overflow-hidden rounded-2xl bg-white ring-1 ring-black/10 transition hover:shadow-lg dark:ring-white/10"
    >
      {cover && (
        <div className="relative aspect-square w-full">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            className="object-cover transition group-hover:scale-[1.02]"
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            priority={false}
          />
        </div>
      )}
      <div className="p-4">
        {/* 2 строки: короткие занимают высоту двух строк, длинные — с многоточием */}
        <h3 className="text-lg font-semibold leading-snug min-h-[3.5rem] line-clamp-2">
          {product.name}
        </h3>

        {product.summary && (
          <p className="mt-1 text-sm text-black/70 dark:text-white/70 line-clamp-2">
            {product.summary}
          </p>
        )}

        {product.priceFrom && (
          <p className="mt-3 text-sm font-medium">от {product.priceFrom.toLocaleString()} KZT</p>
        )}
      </div>
    </Link>
  );
}

// src/components/assemble-card.tsx
import Image from "next/image";
import Link from "next/link";
import type { AssemblyItem } from "@/types/assembly";

export default function AssembleCard({ item }: { item: AssemblyItem }) {
  return (
    <article className="group overflow-hidden rounded-2xl ring-1 ring-black/10 transition hover:shadow-lg dark:ring-white/10 bg-white dark:bg-neutral-950">
      {/* Картинка */}
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={item.cover.src}
          alt={item.cover.alt}
          fill
          className="object-cover transition group-hover:scale-[1.02]"
          sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
        />
      </div>

      {/* Текст */}
      <div className="p-5">
        <p className="text-sm text-black/60 dark:text-white/60">Инструкция по сборке</p>
        <h3 className="mt-1 text-lg font-semibold">
          {item.title}
        </h3>

        {/* Кнопка */}
        <div className="mt-4">
          <Link
            href={`/how-to-assemble/${item.slug}`}
            className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium ring-1 ring-black/10 transition-colors hover:bg-black/5 dark:ring-white/10 dark:hover:bg-white/5"
          >
            Узнать как
          </Link>
        </div>
      </div>
    </article>
  );
}

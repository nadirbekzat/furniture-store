// src/components/category-tiles.tsx
import Image from "next/image";
import Link from "next/link";

type Tile = {
  title: string;
  href: string;
  img: { src: string; alt: string };
};

const TILES: Tile[] = [
  {
    title: "Столы",
    href: "/products",
    img: { src: "/categories/stol.png", alt: "Стол из массива — коллекция Treestan" },
  },
  {
    title: "Журнальные столики",
    href: "/products",
    img: { src: "/categories/stolik.png", alt: "Журнальный столик — коллекция Treestan" },
  },
  {
    title: "Стулья",
    href: "/products",
    img: { src: "/categories/stul.png", alt: "Стул из массива — коллекция Treestan" },
  },
  {
    title: "Стеллажи",
    href: "/products",
    img: { src: "/categories/sh.png", alt: "Лёгкий стеллаж — коллекция Treestan" },
  },
];

export default function CategoryTiles() {
  return (
    <section
      aria-labelledby="category-tiles-title"
      className="relative left-[calc(-50vw+50%)] w-screen bg-[#F5F5DC]"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2
          id="category-tiles-title"
          className="text-2xl md:text-4xl font-semibold tracking-tight text-center"
        >
          Категории
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {TILES.map((tile) => (
            <Link
              key={tile.title}
              href={tile.href}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-950 transition hover:shadow-lg"
              aria-label={`${tile.title} — перейти в каталог`}
            >
              {/* рамка */}
              <div className="border-2 border-[#F3E8D7] dark:border-[#3B3026] rounded-2xl overflow-hidden">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={tile.img.src}
                    alt={tile.img.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                  />
                </div>

                {/* Нижняя подпись */}
                <div className="flex items-center justify-center p-4 bg-[#F3E8D7] text-black dark:bg-[#3B3026] dark:text-white">
                  <span className="text-sm md:text-base font-medium">
                    {tile.title}
                  </span>
                </div>
              </div>

              <span className="absolute inset-0 rounded-2xl ring-0 ring-offset-0 focus-within:ring-2 focus-within:ring-black/30 dark:focus-within:ring-white/40" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

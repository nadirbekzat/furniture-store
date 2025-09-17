// src/components/materials.tsx
import Image from "next/image";

type Tile = {
  title: string;
  subtitle: string;
  img: { src: string; alt: string };
};

const TILES: Tile[] = [
  {
    title: "Карагач",
    subtitle: "Выразительная текстура, стабильность при правильной сушке.",
    // Можешь заменить позже на /materials/karagach.jpg
    img: { src: "/materials/karagach.png", alt: "Текстура карагача крупным планом" },
  },
  {
    title: "Масла",
    subtitle: "Тёплый тактильный финиш, легко обновлять локально.",
    // Можешь заменить позже на /materials/oil.jpg
    img: { src: "/materials/oil.png", alt: "Масляной финиш на массиве дерева" },
  },
  {
    title: "Лаки",
    subtitle: "Устойчивость к износу, практично для активных зон.",
    // Можешь заменить позже на /materials/lacquer.jpg
    img: { src: "/materials/vosk.png", alt: "Лаковый финиш на столешнице" },
  },
];

export default function Materials() {
  return (
    <section
      aria-labelledby="materials-title"
      // Полноэкранная полоса без отступов, как Hero
      className="relative left-[calc(-50vw+50%)] w-screen"
    >
      <h2 id="materials-title" className="sr-only">
        Материалы и отделки
      </h2>

      {/* Ряд из трёх карточек, высота как у Hero */}
      <div className="grid h-[90vh] grid-cols-1 md:grid-cols-3 gap-0">
        {TILES.map((tile) => (
          <article key={tile.title} className="relative isolate">
            {/* Фоновое изображение, без затемнения */}
            <Image
              src={tile.img.src}
              alt={tile.img.alt}
              fill
              priority={false}
              className="object-cover"
              sizes="(min-width:1024px) 33vw, 100vw"
            />

            {/* Текст у нижнего края, без подложек и затемнений */}
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
              <div className="select-none">
                <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                  {tile.title}
                </h3>
                <p className="mt-1 text-xs md:text-sm text-white/95 drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]">
                  {tile.subtitle}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

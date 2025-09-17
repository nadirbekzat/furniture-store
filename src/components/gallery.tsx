"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import type { ImageVariant } from "@/types/catalog";

export default function Gallery({ images }: { images: ImageVariant[] }) {
  // Хуки — безусловно
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const thumbsRef = useRef<HTMLDivElement | null>(null);

  const hasImages = Array.isArray(images) && images.length > 0;
  const total = hasImages ? images.length : 0;

  const scrollToIndex = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track || !hasImages) return;
      const clamped = Math.max(0, Math.min(index, total - 1));
      const x = clamped * track.clientWidth;
      track.scrollTo({ left: x, behavior: "smooth" });
    },
    [hasImages, total]
  );

  // Следим за скроллом основной ленты
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !hasImages) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const idx = Math.round(track.scrollLeft / track.clientWidth);
        setActive((prev) => (prev !== idx ? idx : prev));
        ticking = false;
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [hasImages]);

  // Автопрокрутка превью при смене active
  useEffect(() => {
    if (!hasImages) return;
    const thumbs = thumbsRef.current;
    if (!thumbs) return;
    const thumb = thumbs.querySelector<HTMLButtonElement>(
      `button[data-index="${active}"]`
    );
    if (thumb) {
      const tb = thumb.getBoundingClientRect();
      const cb = thumbs.getBoundingClientRect();
      if (tb.left < cb.left || tb.right > cb.right) {
        thumbs.scrollTo({
          left: thumb.offsetLeft - thumbs.clientWidth / 2 + thumb.clientWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [active, hasImages]);

  // Горячие клавиши ← / →
  useEffect(() => {
    if (!hasImages) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollToIndex(active - 1);
      if (e.key === "ArrowRight") scrollToIndex(active + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, hasImages, scrollToIndex]);

  if (!hasImages) return null;

  return (
    <div className="space-y-4">
      {/* Основная лента */}
      <div
        ref={trackRef}
        className="
          relative w-full overflow-x-auto overflow-y-hidden
          snap-x snap-mandatory
          scroll-smooth
          rounded-2xl ring-1 ring-black/10 dark:ring-white/10
        "
        style={{ scrollbarWidth: "none" }}
        aria-live="polite"
      >
        <div className="flex h-auto w-full">
          {images.map((img, i) => (
            <div
              key={`slide-${i}`}
              className="relative snap-center shrink-0 w-full aspect-square lg:h-[640px] lg:w-[640px] xl:h-[720px] xl:w-[720px]"
              aria-hidden={i !== active}
              aria-roledescription="slide"
              aria-label={`Фото ${i + 1} из ${total}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(min-width:1280px) 720px, (min-width:1024px) 640px, 100vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Превью */}
      <div
        ref={thumbsRef}
        className="flex items-center gap-3 overflow-x-auto"
        style={{ scrollbarWidth: "thin" }}
        aria-label="Миниатюры изображений"
      >
        {images.map((img, i) => {
          const isActive = i === active;
          return (
            <button
              key={`thumb-${i}`}
              type="button"
              data-index={i}
              onClick={() => scrollToIndex(i)}
              className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-xl ring-2 transition
                ${isActive ? "ring-black/40 dark:ring-white/60" : "ring-black/10 hover:opacity-90 dark:ring-white/10"}`}
              aria-label={`Показать фото ${i + 1}`}
              aria-pressed={isActive}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="112px"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

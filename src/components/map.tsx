// src/components/map.tsx
import React from "react";

/**
 * Карта с оверлеем адреса слева поверх неё.
 * Масштабирование — только кнопками (scroll=false).
 */
export default function MapSection() {
  return (
    <section
      aria-label="Карта — как нас найти"
      className="relative left-[calc(-50vw+50%)] w-screen bg-[#F5F5DC]"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        {/* Карта */}
        <div className="relative h-[90vh] w-full overflow-hidden rounded-2xl bg-white ring-1 ring-black/10 dark:bg-neutral-950 dark:ring-white/10">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Af5c0da93248cba7a9d1b3757e5f7bf3d471b37e354b20a8723bd5a7768bd6ec6&amp;source=constructor&amp;scroll=false&amp;controls=zoomControl"
            title="Карта проезда к Treestan"
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            frameBorder="0"
          />

          {/* Оверлей с адресом */}
          <div className="absolute top-8 left-8 z-10 max-w-sm rounded-2xl bg-white/90 p-6 shadow-lg backdrop-blur-sm dark:bg-black/70">
            <h2 className="text-lg font-semibold mb-3">
              Ждём вас в нашей мастерской
            </h2>
            <p className="text-sm leading-relaxed text-black/80 dark:text-white/80">
              Улица Отрарская, 9, Алатауский район, Алматы, 050061
            </p>
            <a
              href="https://yandex.ru/maps/-/CDvciZkC" // замени на актуальную ссылку
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-lg bg-black px-4 py-2 text-xs font-medium text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80"
            >
              Показать на карте
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

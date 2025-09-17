// src/components/craft-highlights.tsx
import React from "react";

type Item = {
  emoji: string;
  title: string;
  text: string;
};

const items: Item[] = [
  {
    emoji: "🪵",
    title: "Ручная работа из массива",
    text:
      "Каждый стол, столик и стул мы делаем вручную в Алматы. Подбираем ламели по текстуре, сохраняем тактильную кромку — в итоге вещь с характером, а не «как у всех».",
  },
  {
    emoji: "🎛️",
    title: "Индивидуальные размеры и отделка",
    text:
      "Подстроим изделие под ваш интерьер: длина, толщина столешницы, тип опор, тон и финиш (масло, воск, лак). Покажем образцы, дадим рекомендации по сочетаниям.",
  },
  {
    emoji: "⏱️",
    title: "Честные сроки и сопровождение",
    text:
      "Согласуем срок изготовления, держим в курсе этапов и помогаем с доставкой/сборкой. После покупки — советы по уходу и поддержка в WhatsApp.",
  },
  {
    emoji: "🌿",
    title: "Экологичные материалы",
    text:
      "Работаем с тщательно высушенным массивом и безопасными составами. Масла и воски подчёркивают текстуру, защищая поверхность без резкого запаха.",
  },
  {
    emoji: "🚚",
    title: "Доставка и аккуратная сборка",
    text:
      "Привезём в удобное время, аккуратно поднимем и соберём на месте. Проверим геометрию, выставим по уровню и дадим рекомендации по эксплуатации.",
  },
  {
    emoji: "🛠️",
    title: "Гарантия и пост-уход",
    text:
      "Предоставляем гарантию производителя и помогаем с обслуживанием: реставрация масла, обновление финиша, мелкие настройки в процессе эксплуатации.",
  },
];

export default function CraftHighlights() {
  return (
    // Полоса на всю ширину с фоном персика
    <section
      aria-labelledby="craft-highlights-title"
      className="relative left-[calc(-50vw+50%)] w-screen bg-[#F5F5DC]"
    >
      {/* Центровщик контента */}
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 id="craft-highlights-title" className="sr-only">
          Про ремесло и характер
        </h2>

        {/* 1 колонка на мобилке, 2 на md, 3 на lg */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {items.map((it) => (
            <article
              key={it.title}
              className="group flex flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-neutral-950"
            >
              {/* Эмодзи + заголовок */}
              <div className="flex items-center gap-3">
                <span className="text-3xl md:text-4xl" aria-hidden="true">
                  {it.emoji}
                </span>
                <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                  {it.title}
                </h3>
              </div>

              {/* Описание */}
              <p className="mt-4 text-sm md:text-base leading-relaxed text-black/70 dark:text-white/70">
                {it.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

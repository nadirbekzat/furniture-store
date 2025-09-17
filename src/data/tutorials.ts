import type { TutorialItem } from "@/types/tutorial";

export const tutorials: TutorialItem[] = [
  {
    slug: "care-oiled-wood",
    title: "Уход за мебелью из массива (масло/воск)",
    cover: { src: "/tutorials/tut1.png", alt: "Уход за массивом — масло/воск" },
    productSlug: "aurora",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "Как правильно ухаживать за столами и столиками с масляной/восковой отделкой.",
    seo: {
      title: "Уход за мебелью из массива | Treestan",
      description: "Инструкция по уходу за масляной/восковой отделкой мебели из массива.",
      keywords: ["уход за мебелью", "масло воск", "treestan tutorials"],
    },
  },
  {
    slug: "leveling-table",
    title: "Как выставить стол по уровню и убрать шаткость",
    cover: { src: "/tutorials/tut2.png", alt: "Выставление стола по уровню" },
    productSlug: "guardian",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "Быстрый способ проверить геометрию опор, компенсировать неровности пола и убрать шаткость.",
  },
  {
    slug: "care-endgrain",
    title: "Уход за торцевым спилом (журнальные столики)",
    cover: { src: "/tutorials/tut3.png", alt: "Уход за торцевым спилом" },
    productSlug: "lounge",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "Что важно знать про торцевой спил: сезонные движения, микротрещины и профилактика.",
  },
  {
    slug: "care-oiled-wood1",
    title: "Уход за мебелью из массива (масло/воск)",
    cover: { src: "/tutorials/tut1.png", alt: "Уход за массивом — масло/воск" },
    productSlug: "aurora",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "Как правильно ухаживать за столами и столиками с масляной/восковой отделкой.",
    seo: {
      title: "Уход за мебелью из массива | Treestan",
      description: "Инструкция по уходу за масляной/восковой отделкой мебели из массива.",
      keywords: ["уход за мебелью", "масло воск", "treestan tutorials"],
    },
  },
  {
    slug: "leveling-table1",
    title: "Как выставить стол по уровню и убрать шаткость",
    cover: { src: "/tutorials/tut2.png", alt: "Выставление стола по уровню" },
    productSlug: "guardian",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "Быстрый способ проверить геометрию опор, компенсировать неровности пола и убрать шаткость.",
  },
  {
    slug: "care-endgrain1",
    title: "Уход за торцевым спилом (журнальные столики)",
    cover: { src: "/tutorials/tut3.png", alt: "Уход за торцевым спилом" },
    productSlug: "lounge",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:
      "Что важно знать про торцевой спил: сезонные движения, микротрещины и профилактика.",
  },
];

export function getAllTutorials() {
  return tutorials;
}

export function getTutorialBySlug(slug: string) {
  return tutorials.find((t) => t.slug === slug) ?? null;
}

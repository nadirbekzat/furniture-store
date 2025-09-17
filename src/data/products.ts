import type { Product } from "@/types/catalog";

/**
 * Каталог именных продуктов Treestan
 *
 * Примечания:
 * - slug используется в URL и папках с изображениями в /public/products/<slug>
 * - пути к изображениям начинаются с "/" относительно папки /public
 * - поля priceBySize имеют формат «Длина×Толщина см» и цены в KZT
 */

export const products: Product[] = [
  /** 1) Стол Aurora’s */
  {
    id: "aurora",
    slug: "aurora",
    name: "Стол Aurora’s",
    shortName: "Aurora’s",
    category: "tables",
    tags: ["обеденный стол", "массив", "карагaч"],
    summary:
      "Обеденный стол из массива с выразительным рисунком годовых колец и естественными краями.",
    description:
      "Aurora’s — стол ручной работы из тщательно подобранных ламелей массива. Мы подчёркиваем естественную текстуру древесины и оставляем тактильно приятную кромку. Подходит для семейных ужинов и гостевых зон; доступна кастомизация по размерам, типу опор и отделке.",
    materials: ["карагaч (массив)", "сталь (опоры по желанию)", "латунь (аксценты по запросу)"],
    finishes: ["масло с твёрдым воском", "натуральное масло", "лак матовый"],
    madeToOrder: true,
    leadTimeDays: 14,
    priceFrom: 320_000,
    priceBySize: {
      "140×4 см": 320_000,
      "160×4 см": 360_000,
      "180×5 см": 420_000,
    },
    images: [
      { src: "/products/aurora/aurora1.webp", alt: "Стол Aurora’s — общий вид" },
      { src: "/products/aurora/aurora2.webp", alt: "Aurora’s — текстура столешницы" },
      { src: "/products/aurora/aurora3.webp", alt: "Aurora’s — натуральная кромка" },
      { src: "/products/aurora/aurora4.webp", alt: "Aurora’s — опоры и торец" },
    ],
    seo: {
      title: "Стол Aurora’s — мебель из массива Treestan",
      description:
        "Ручной обеденный стол Aurora’s из массива с настраиваемыми размерами, опорами и отделкой. Производство в Алматы.",
      keywords: ["стол из массива", "карагaч", "treestan", "aurora"]
    },
  },

  /** 2) Стол Guardian */
  {
    id: "guardian",
    slug: "guardian",
    name: "Стол Guardian",
    shortName: "Guardian",
    category: "tables",
    tags: ["повседневное использование", "премиум-сборка"],
    summary:
      "Усиленная столешница и устойчивые опоры — надёжный центр кухни или кабинета.",
    description:
      "Guardian создавался как рабочая лошадка: мощная столешница из массива, выверенная геометрия и стабильные опоры. Отлично переносит ежедневные нагрузки, оставаясь при этом эстетичным. Рекомендуется для семейных кухонь и домашних кабинетов.",
    materials: ["дуб (массив)", "сталь (опоры)", "фурнитура скрытого монтажа"],
    finishes: ["масло-натур", "лак матовый"],
    madeToOrder: true,
    leadTimeDays: 18,
    priceFrom: 390_000,
    priceBySize: {
      "150×4 см": 390_000,
      "180×4 см": 450_000,
      "200×5 см": 520_000,
    },
    images: [
      { src: "/products/guardian/guardian1.webp", alt: "Стол Guardian — общий вид" },
      { src: "/products/guardian/guardian2.webp", alt: "Guardian — массив дуба вблизи" },
      { src: "/products/guardian/guardian3.webp", alt: "Guardian — массивные опоры" },
    ],
    seo: {
      title: "Стол Guardian — прочный стол из массива",
      description:
        "Guardian — устойчивый стол из массива дуба для ежедневного использования. Идеален для кухни и кабинета.",
      keywords: ["стол дуб", "прочный стол", "treestan guardian"],
    },
  },

  /** 3) Журнальный столик Lounge */
  {
    id: "lounge",
    slug: "lounge",
    name: "Журнальный столик Lounge",
    shortName: "Lounge",
    category: "coffee-tables",
    tags: ["торцевой спил", "уникальный рисунок"],
    summary: "Выразительный журнальный столик из торцевого спила карагача.",
    description:
      "Lounge — компактный акцент в гостиной: массивный торцевой спил с неповторимым рисунком годовых колец. Каждый экземпляр уникален по форме и оттенку; возможно регулирование высоты опор и подбор фурнитуры.",
    materials: ["карагaч (торцевой спил)", "сталь/латунь (опоры)", "пробковые демпферы"],
    finishes: ["масло с твёрдым воском", "натуральная пропитка"],
    madeToOrder: true,
    leadTimeDays: 10,
    priceFrom: 180_000,
    images: [
      { src: "/products/lounge/lounge1.webp", alt: "Lounge — общий вид" },
      { src: "/products/lounge/lounge2.webp", alt: "Lounge — рисунок торцевого спила" },
      { src: "/products/lounge/lounge3.webp", alt: "Lounge — кромка и текстура" },
      { src: "/products/lounge/lounge4.webp", alt: "Lounge — опоры" },
    ],
    seo: {
      title: "Журнальный столик Lounge — торцевой спил",
      description:
        "Lounge — журнальный столик из торцевого спила карагача. Каждый экземпляр уникален.",
      keywords: ["журнальный столик", "торцевой спил", "treestan lounge"],
    },
  },

  /** 4) Журнальный стол Soul */
  {
    id: "soul",
    slug: "soul",
    name: "Журнальный стол Soul",
    shortName: "Soul",
    category: "coffee-tables",
    tags: ["минимализм", "органическая форма"],
    summary:
      "Минималистичный журнальный стол с мягкими радиусами и тёплой фактурой массива.",
    description:
      "Soul — о спокойствии и тактильности. Сглаженные радиусы, тонко снятые фаски и тёплая отделка создают объект, который не отвлекает, а дополняет пространство. Хорошо сочетается с диванами из текстиля и кожи.",
    materials: ["орех/дуб (массив)", "защитные felt-пятачки"],
    finishes: ["масло ультрамат", "натуральный воск"],
    madeToOrder: true,
    leadTimeDays: 12,
    priceFrom: 165_000,
    priceBySize: {
      "90×3 см": 165_000,
      "110×3 см": 190_000,
    },
    images: [
      { src: "/products/soul/soul1.heic", alt: "Журнальный стол Soul — общий вид" },
      { src: "/products/soul/soul2.heic", alt: "Soul — мягкие радиусы кромки" },
      { src: "/products/soul/soul3.heic", alt: "Soul — мягкие радиусы кромки" },
      { src: "/products/soul/soul4.heic", alt: "Soul — мягкие радиусы кромки" },
      { src: "/products/soul/soul5.heic", alt: "Soul — мягкие радиусы кромки" },
      { src: "/products/soul/soul6.heic", alt: "Soul — мягкие радиусы кромки" },
    ],
    seo: {
      title: "Журнальный стол Soul — минимализм и массив",
      description:
        "Soul — минималистичный журнальный стол из массива с мягкими радиусами и тёплой отделкой.",
      keywords: ["журнальный стол", "минимализм", "treestan soul"],
    },
  },

  /** 5) Стол Spur */
  {
    id: "spur",
    slug: "spur",
    name: "Стол Spur",
    shortName: "Spur",
    category: "tables",
    tags: ["скульптурные опоры", "акцентный стол"],
    summary:
      "Акцентный обеденный стол с выразительными, словно выточенными, опорами.",
    description:
      "Spur — про динамику в интерьере. Скульптурные опоры задают ритм, а столешница из массива сохраняет практичность. Хорошо работает в просторных столовых и шоу-румах, где важен визуальный характер объекта.",
    materials: ["дуб/карагaч (массив)", "сталь (крепёж)"],
    finishes: ["масло тонированное", "лак полу-мат"],
    madeToOrder: true,
    leadTimeDays: 20,
    priceFrom: 440_000,
    priceBySize: {
      "160×4 см": 440_000,
      "200×5 см": 560_000,
      "240×5 см": 640_000,
    },
    images: [
      { src: "/products/spur/spur1.webp", alt: "Стол Spur — общий вид" },
      { src: "/products/spur/spur2.webp", alt: "Spur — скульптурные опоры" },
      { src: "/products/spur/spur3.webp", alt: "Spur — скульптурные опоры" },
    ],
    seo: {
      title: "Стол Spur — акцентная геометрия",
      description:
        "Spur — акцентный стол из массива с выразительными опорами. Индивидуальные размеры и тонировки.",
      keywords: ["обеденный стол", "скульптурные опоры", "treestan spur"],
    },
  },

  /** 6) Обеденный стол на роликах Sunset */
  {
    id: "sunset",
    slug: "sunset",
    name: "Обеденный стол на роликах Sunset",
    shortName: "Sunset",
    category: "tables",
    tags: ["мобильность", "кастерные ролики"],
    summary:
      "Функциональный стол с малошумными промышленными роликами — легко перемещать в пределах помещения.",
    description:
      "Sunset объединяет эстетику массива и удобство мобильной базы. Ролики с фиксаторами позволяют быстро менять сценарии: от семейного ужина до импровизированной мастерской. Рекомендуем для креативных пространств и квартир-студий.",
    materials: ["дуб/ясень (массив)", "сталь (рама)", "ролики с фиксаторами"],
    finishes: ["масло износостойкое", "лак матовый"],
    madeToOrder: true,
    leadTimeDays: 16,
    priceFrom: 410_000,
    priceBySize: {
      "160×4 см": 410_000,
      "180×4 см": 460_000,
      "200×5 см": 530_000,
    },
    images: [
      { src: "/products/sunset/sunset1.webp", alt: "Sunset — стол на роликах" },
      { src: "/products/sunset/sunset2.webp", alt: "Sunset — фиксаторы роликов" },
    ],
    seo: {
      title: "Sunset — мобильный обеденный стол",
      description:
        "Обеденный стол Sunset на роликах: эстетика массива и мобильность. Отличный выбор для гибких пространств.",
      keywords: ["стол на роликах", "мобильный стол", "treestan sunset"],
    },
  },

  /** 7) Журнальный столик Labbri */
  {
    id: "labbri",
    slug: "labbri",
    name: "Журнальный столик Labbri",
    shortName: "Labbri",
    category: "coffee-tables",
    tags: ["современный", "компактный"],
    summary:
      "Современный журнальный столик с тонкой кромкой и лёгкими опорами.",
    description:
      "Labbri — визуально лёгкий столик, который оставляет простор комнате. Тонкая кромка столешницы и аккуратные опоры добавляют изящества, не перегружая интерьер.",
    materials: ["дуб/орех (массив)", "сталь (опоры)", "фетровые подпятники"],
    finishes: ["масло ультрамат", "воск"]
    ,
    madeToOrder: true,
    leadTimeDays: 9,
    priceFrom: 150_000,
    images: [
      { src: "/products/labbri/labbri1.webp", alt: "Labbri — общий вид" },
      { src: "/products/labbri/labbri2.webp", alt: "Labbri — профиль тонкой кромки" },
      { src: "/products/labbri/labbri3.webp", alt: "Labbri — общий вид" },
      { src: "/products/labbri/labbri4.webp", alt: "Labbri — профиль тонкой кромки" },
    ],
    seo: {
      title: "Labbri — лёгкий журнальный столик",
      description:
        "Журнальный столик Labbri с тонкой кромкой и лёгкими опорами. Идеален для современных гостиных.",
      keywords: ["журнальный столик", "лёгкий дизайн", "treestan labbri"],
    },
  },

  /** 8) Эксклюзивный стул Dyionusus */
  {
    id: "dionysus",
    slug: "dionysus",
    name: "Эксклюзивный стул Dionysus",
    shortName: "Dionysus",
    category: "chairs",
    tags: ["эргономика", "скульптурная спинка"],
    summary:
      "Авторская форма сиденья, плавные линии спинки и тщательно вылизанные стыки.",
    description:
      "Dyionusus — про комфорт и пластику. Сиденье и спинка подогнаны с учётом эргономики, а переходы между элементами отполированы до шёлковистого касания. Стул уместен как в столовой, так и в кабинете.",
    materials: ["орех/дуб (массив)", "латунные вставки (опционально)"],
    finishes: ["масло с твёрдым воском", "тон прозрачный"] ,
    madeToOrder: true,
    leadTimeDays: 14,
    priceFrom: 120_000,
    images: [
      { src: "/products/dionysus/dionysus1.webp", alt: "Стул Dionysus — общий вид" },
      { src: "/products/dionysus/dionysus2.webp", alt: "Стул Dionysus — общий вид" },
      { src: "/products/dionysus/dionysus3.webp", alt: "Стул Dionysus — общий вид" },
      { src: "/products/dionysus/dionysus4.webp", alt: "Стул Dionysus — общий вид" },
    ],
    seo: {
      title: "Стул Dionysus — авторская форма",
      description:
        "Эксклюзивный стул Dionysus с пластичной спинкой и комфортной посадкой. Ручная обработка кромок.",
      keywords: ["стул из массива", "эргономичный стул", "treestan dionysus"],
    },
  },
  
] as const;

/** Утилиты выборки */
export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug) ?? null;
}

export function getProductsByCategory(category?: Product["category"]) {
  return category ? products.filter((p) => p.category === category) : products;
}

export type ImageVariant = {
  src: string;           // путь из /public (например, "/products/auroras/1.jpg")
  alt: string;
  width?: number;        // опционально, если знаешь размеры
  height?: number;
};

export type PriceBySize = {
  // пример: ключ — «длина×толщина», значение — цена в KZT
  // например: "160×4 см": 240000
  [sizeLabel: string]: number;
};

export type Product = {
  id: string;            // стабильный id (uuid/slug-like)
  slug: string;          // для URL
  name: string;          // «Стол Aurora’s»
  shortName?: string;    // «Aurora’s»
  category: "tables" | "coffee-tables" | "chairs" | "shelving";
  tags?: string[];
  summary: string;       // краткое описание для карточки
  description: string;   // полное описание
  materials: string[];   // «карагaч», «массив дуба» и т.п.
  finishes?: string[];   // «масло-натур», «лак матовый»
  madeToOrder?: boolean; // на заказ
  leadTimeDays?: number; // срок изготовления
  price?: number;        // базовая цена, если есть от...
  priceFrom?: number;    // «от …»
  priceBySize?: PriceBySize;
  images: ImageVariant[];     // все фото для галереи
  cardImage?: ImageVariant;   // обложка карточки (если хочешь отдельно)
  sku?: string;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
};

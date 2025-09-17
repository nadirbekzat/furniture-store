export type AssemblyItem = {
  slug: string;           // уникальный URL (how-to-assemble/[slug])
  title: string;          // "How to Assemble Side Table"
  cover: { src: string; alt: string };
  productSlug?: string;   // связанный продукт (если есть)
  videoUrl?: string;      // YouTube/Vimeo/MP4
  description?: string;   // для SEO
};

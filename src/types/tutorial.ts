export type TutorialItem = {
  slug: string;        // уникальный URL (/tutorials/[slug])
  title: string;       // "Уход за мебелью"
  cover: { src: string; alt: string };
  productSlug?: string;
  videoUrl?: string;   // YouTube/Vimeo/MP4 embed
  description?: string; // для SEO и превью
  // SEO
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
};

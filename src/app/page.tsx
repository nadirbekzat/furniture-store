// src/app/page.tsx
import Hero from "@/components/hero";
import MapSection from "@/components/map";
import CraftHighlights from "@/components/craft-highlights";
import CategoryTiles from "@/components/category-tiles";
import Materials from "@/components/materials"; // ← добавь

export default function Home() {
  return (
    <main className="min-h-dvh">
      <Hero />
      <CategoryTiles />

      {/* Новая секция: Материалы и отделки */}
      <Materials />

      <CraftHighlights />

      <MapSection />
    </main>
  );
}

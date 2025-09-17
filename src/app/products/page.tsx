import ProductCard from "@/components/product-card";
import { getAllProducts } from "@/data/products";

export const metadata = {
  title: "Каталог — Магазин мебели",
  description:
    "Каталог мебели Treestan: столы из массива, журнальные столики, стулья и стеллажи. Ручная работа, индивидуальные размеры.",
  alternates: { canonical: "/products" },
  robots: { index: true, follow: true },
};

export default function ProductsPage() {
  const items = getAllProducts();
  return (
    <section className="bg-[#F5F5DC] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-4xl font-semibold tracking-tight text-center">Каталог</h1>

        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

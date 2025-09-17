import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full">
      {/* Фоновая картинка */}
      <Image
        src="/33.png"
        alt="Мебель Treestan"
        fill
        priority
        className="object-cover"
      />

      {/* Контент сверху */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Treestan – Мебель из массива дерева
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl font-light drop-shadow">
          Уникальные изделия ручной работы из массива дерева.  
          Каждая вещь – неповторима.
        </p>
      </div>
    </section>
  );
}

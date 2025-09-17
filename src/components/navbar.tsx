// ./src/components/navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type NavItem = { label: string; href: string };

const NAV_LINKS: NavItem[] = [
  { label: "Главная", href: "/" },
  { label: "Каталог", href: "/products" },
  { label: "Сборка", href: "/how-to-assemble" },
  { label: "Туториалы", href: "/tutorials" },
  { label: "О нас", href: "/our-story" },
];

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.5 0 .19 5.31.19 11.86c0 2.09.55 4.15 1.59 5.96L0 24l6.35-1.63a11.82 11.82 0 0 0 5.71 1.46h.01c6.56 0 11.87-5.31 11.87-11.86 0-3.17-1.23-6.16-3.42-8.45ZM12.07 21.3h-.01a9.46 9.46 0 0 1-4.82-1.31l-.35-.2-3.76.97 1.01-3.67-.23-.38a9.42 9.42 0 0 1-1.45-5.02c0-5.22 4.25-9.47 9.49-9.47 2.53 0 4.9.98 6.69 2.77a9.41 9.41 0 0 1 2.78 6.7c0 5.23-4.26 9.47-9.55 9.47Zm5.48-7.1c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.67.15-.19.3-.77.98-.95 1.18-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.6-.92-2.19-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.38-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.11 3.22 5.1 4.52.71.31 1.27.5 1.7.64.71.23 1.35.2 1.86.12.57-.08 1.78-.73 2.03-1.44.25-.71.25-1.31.17-1.44-.08-.13-.28-.2-.58-.35Z"
      />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.9.25 2.35.42.59.23 1.01.5 1.45.94.44.44.71.86.94 1.45.17.45.36 1.15.42 2.35.07 1.35.07 1.7.07 4.92s0 3.57-.07 4.92c-.06 1.2-.25 1.9-.42 2.35-.23.59-.5 1.01-.94 1.45-.44.44-.86.71-1.45.94-.45.17-1.15.36-2.35.42-1.35.07-1.7.07-4.9.07s-3.53 0-4.77-.07c-1.2-.06-1.9-.25-2.35-.42a3.84 3.84 0 0 1-1.45-.94 3.84 3.84 0 0 1-.94-1.45c-.17-.45-.36-1.15-.42-2.35C2.2 15.57 2.2 15.2 2.2 12s0-3.57.07-4.92c.06-1.2.25-1.9.42-2.35.23-.59.5-1.01.94-1.45.44-.44.86-.71 1.45-.94.45-.17 1.15-.36 2.35-.42C8.43 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.16 0-3.53 0-4.77.07-1.03.05-1.59.22-1.96.37-.49.19-.83.42-1.2.79-.37.37-.6.71-.79 1.2-.15.37-.32.93-.37 1.96-.07 1.24-.07 1.61-.07 4.77s0 3.53.07 4.77c.05 1.03.22 1.59.37 1.96.19.49.42.83.79 1.2.37.37.71.6 1.2.79.37.15.93.32 1.96.37 1.24.07 1.61.07 4.77.07s3.53 0 4.77-.07c1.03-.05 1.59-.22 1.96-.37.49-.19.83-.42 1.2-.79.37-.37.6-.71.79-1.2.15-.37.32-.93.37-1.96.07-1.24.07-1.61.07-4.77s0-3.53-.07-4.77c-.05-1.03-.22-1.59-.37-1.96a3.05 3.05 0 0 0-.79-1.2 3.05 3.05 0 0 0-1.2-.79c-.37-.15-.93-.32-1.96-.37-1.24-.07-1.61-.07-4.77-.07Zm0 3.6a6.4 6.4 0 1 1 0 12.8 6.4 6.4 0 0 1 0-12.8Zm0 1.8a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm6.6-2.16a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z"
      />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const prevOverflow = root.style.overflow;
    const prevOb = body.style.overscrollBehavior;

    if (open) {
      root.style.overflow = "hidden";
      body.style.overscrollBehavior = "contain";
    } else {
      root.style.overflow = prevOverflow || "";
      body.style.overscrollBehavior = prevOb || "";
    }
    return () => {
      root.style.overflow = prevOverflow || "";
      body.style.overscrollBehavior = prevOb || "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#7c3003] text-white">
        <div className="w-full">
          <div className="flex h-16 items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:gap-4">
            {/* Лого */}
            <div className="justify-self-start pl-2">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[19px] font-bold tracking-tight"
                aria-label="На главную"
              >
                <Image
                  src="/logo.png"
                  alt="Treestan — логотип"
                  width={28}
                  height={28}
                  className="h-10 w-10"
                  priority
                />
                <span>Treestan</span>
              </Link>
            </div>

            {/* Центр: ссылки */}
            <nav
              className="hidden justify-self-center md:flex md:items-center md:gap-8"
              aria-label="Главная навигация"
            >
              {NAV_LINKS.map(({ label, href }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`text-[17px] font-medium text-white transition-colors duration-200 hover:text-amber-200 ${
                      active ? "font-semibold" : ""
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            {/* Соцсети */}
            <div className="hidden items-center justify-self-end gap-2 md:flex pr-2">
              <a
                href="https://wa.me/00000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[17px] font-medium border-3 border-black bg-[#5bf573] text-black"
                aria-label="Написать в WhatsApp"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/yourshop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[17px] font-medium border-3 text-black border-black bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"
                aria-label="Открыть Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
            </div>

            {/* Мобильный бургер */}
            <div className="md:hidden pr-2">
              <button
                type="button"
                aria-label={open ? "Закрыть меню" : "Открыть меню"}
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen((s) => !s);
                }}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border-3 border-white"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                  {open ? (
                    <path
                      fill="currentColor"
                      d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3 1.4 1.4Z"
                    />
                  ) : (
                    <path
                      fill="currentColor"
                      d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Мобильное меню */}
      {open && (
        <>
          {/* Оверлей */}
          <button
            aria-hidden
            tabIndex={-1}
            className="fixed inset-x-0 bottom-0 top-16 z-[55] bg-black/40 md:hidden"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
            className="fixed inset-x-0 bottom-0 top-16 z-[60] md:hidden"
          >
            <div
              ref={panelRef}
              className="flex h-full w-full flex-col bg-[#F5F5DC]"
            >
              <h2 id="mobile-menu-title" className="sr-only">
                Меню навигации
              </h2>

              <div className="w-full px-4 py-4 overflow-y-auto">
                {/* Разделители между пунктами меню */}
                <nav className="flex flex-col divide-y divide-black" aria-label="Навигация по разделам">
                  {NAV_LINKS.map(({ label, href }) => {
                    const active = pathname === href;
                    return (
                      <Link
                        key={href}
                        href={href}
                        className={`block px-3 py-3 text-[17px] transition-colors ${
                          active ? "font-semibold text-black" : "text-black/80 hover:text-black"
                        }`}
                        aria-current={active ? "page" : undefined}
                      >
                        {label}
                      </Link>
                    );
                  })}

                  <div className="pt-3 flex items-center gap-2">
                    <a
                      href="https://wa.me/00000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2 text-[17px] font-medium border-black border-3 bg-[#5bf573]"
                      aria-label="Написать в WhatsApp"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      WhatsApp
                    </a>
                    <a
                      href="https://instagram.com/yourshop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2 text-[17px] font-medium border-3 border-black bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"
                      aria-label="Открыть Instagram"
                    >
                      <InstagramIcon className="h-4 w-4" />
                      Instagram
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

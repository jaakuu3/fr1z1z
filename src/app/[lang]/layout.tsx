import type { Metadata } from "next";
import { isLang, type Lang } from "@/lib/i18n";
import Header from "@/components/Header";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = isLang(params.lang) ? (params.lang as Lang) : "ru";
  return {
    title: lang === "ru" ? "Инструкции по играм" : "Game Instructions",
    description: lang === "ru" ? "Выберите инструкцию для игры." : "Pick a game instruction."
  };
}

export default function LangLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!isLang(params.lang)) {
    // Next сам покажет 404 в page, но layout оставим безопасным
  }
  const lang = (isLang(params.lang) ? params.lang : "ru") as Lang;

  return (
    <main className="mx-auto w-full max-w-[960px] px-4 py-8">
      <Header lang={lang} />
      {children}
      <footer className="mt-10 pb-6 text-center text-xs text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} Guides
      </footer>
    </main>
  );
}

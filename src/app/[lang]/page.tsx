import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLang, type Lang } from "@/lib/i18n";
import GameList from "@/components/GameList";
import ImportantInfo from "@/components/ImportantInfo";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = isLang(params.lang) ? (params.lang as Lang) : "ru";
  return {
    title: lang === "ru" ? "Выберите инструкцию" : "Choose an instruction",
    description: lang === "ru" ? "Список инструкций по играм." : "List of game instructions."
  };
}

export default function LangHome({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang as Lang;

  const h1 = lang === "ru" ? "Выберите инструкцию для игры" : "Choose an instruction for the game";

  return (
    <section className="mt-8">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{h1}</h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
        {lang === "ru"
          ? "Нажмите на игру, чтобы открыть страницу с шагами."
          : "Click a game to open the step-by-step instructions."}
      </p>

      <GameList lang={lang} />
      <ImportantInfo lang={lang} />
    </section>
  );
}

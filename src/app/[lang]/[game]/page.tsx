import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { games } from "@/content/games";
import { isLang, type Lang } from "@/lib/i18n";
import ImportantInfo from "@/components/ImportantInfo";
import BackButton from "@/components/BackButton";

export function generateMetadata({
  params
}: {
  params: { lang: string; game: string };
}): Metadata {
  const lang = isLang(params.lang) ? (params.lang as Lang) : "ru";
  const game = games.find((g) => g.slug === params.game);

  if (!game) return { title: "Not found" };

  return {
    title: `${game.title[lang]} — ${lang === "ru" ? "Инструкция" : "Instructions"}`,
    description:
      lang === "ru"
        ? `Инструкция по активации для ${game.title[lang]}.`
        : `Activation instructions for ${game.title[lang]}.`
  };
}

export default function GamePage({
  params
}: {
  params: { lang: string; game: string };
}) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang as Lang;

  const game = games.find((g) => g.slug === params.game);
  if (!game) notFound();

  return (
    <section className="mt-8">
      <BackButton fallbackHref={`/${lang}`} />

      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {game.title[lang]}
      </h1>

      <h2 className="mt-3 text-base font-semibold text-zinc-700 dark:text-zinc-200">
        {lang === "ru" ? "Инструкция по активации:" : "Activation instructions:"}
      </h2>

      <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-soft dark:border-zinc-800 dark:bg-zinc-950">
        <ul className="space-y-4 text-sm text-zinc-800 dark:text-zinc-100">
          {game.steps[lang].map((step, i) => {
            if (step.type === "text") {
              return (
                <li key={i} className="ml-5 list-disc">
                  {step.value}
                </li>
              );
            }

            return (
              <li key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={step.value}
                  alt=""
                  className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800"
                />
              </li>
            );
          })}
        </ul>
      </div>

      <ImportantInfo lang={lang} />
    </section>
  );
}

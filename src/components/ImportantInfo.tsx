import type { Lang } from "@/lib/i18n";
import { importantInfo } from "@/content/games";



export default function ImportantInfo({ lang }: { lang: Lang }) {
  const title = lang === "ru" ? "Важная информация" : "Important information";

  return (
    <section className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/40">
      <h2 className="text-base font-semibold">{title}</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
        {importantInfo[lang].map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </section>
  );
}

import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { games } from "@/content/games";

export default function GameList({ lang }: { lang: Lang }) {
  const list = games.filter((g) => g.showOnHome);

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-soft dark:border-zinc-800 dark:bg-zinc-950">
      <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
        {list.map((g) => (
          <li key={g.slug}>
            <Link
              href={`/${lang}/${g.slug}`}
              className="flex items-center justify-between px-5 py-4 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:hover:bg-zinc-900"
            >
              <span className="text-base font-medium">{g.title[lang]}</span>
              <span className="text-zinc-500 dark:text-zinc-400">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

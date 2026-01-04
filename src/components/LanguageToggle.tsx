import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { LANGS, langLabel } from "@/lib/i18n";

export default function LanguageToggle({ lang }: { lang: Lang }) {
  return (
    <div className="inline-flex rounded-xl border border-zinc-200 p-1 dark:border-zinc-800">
      {LANGS.map((l) => {
        const active = l === lang;
        return (
          <Link
            key={l}
            href={`/${l}`}
            className={[
              "rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400",
              active
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                : "hover:bg-zinc-50 dark:hover:bg-zinc-900"
            ].join(" ")}
            aria-label={`Switch language to ${langLabel(l)}`}
          >
            {langLabel(l)}
          </Link>
        );
      })}
    </div>
  );
}

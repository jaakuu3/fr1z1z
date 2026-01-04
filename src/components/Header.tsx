import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import type { Lang } from "@/lib/i18n";

export default function Header({ lang }: { lang: Lang }) {
  const profileUrl = "https://funpay.com/users/507295/"; // <-- замени на ссылку на свой профиль

  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* LEFT */}
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 hover:opacity-90"
        aria-label="Открыть профиль FanPay"
      >
        {/* AVATAR (кликабельный вместе с текстом) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://avatars.fastly.steamstatic.com/b1f21f9218993e75718d908a216436748da97bab_full.jpg"
          alt="FR1Z1Z FanPay profile"
          className="h-12 w-12 rounded-full border border-zinc-300 transition-transform group-hover:scale-[1.02] dark:border-zinc-700"
        />

        <div className="leading-tight">
          <div className="text-sm text-zinc-500 dark:text-zinc-400">
            Инструкция от
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="text-lg font-semibold tracking-tight">FR1Z1Z</div>

            {/* BADGE */}
            <div className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
              <span aria-hidden="true">⭐</span>
              <span className="font-semibold">5/5</span>
              <span className="text-zinc-500 dark:text-zinc-400">
                (3137 отзывов)
              </span>
            </div>
          </div>

          <div className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
            Нажмите, чтобы открыть профиль
          </div>
        </div>
      </a>

      {/* RIGHT */}
      <div className="flex flex-wrap items-center gap-2">
        <LanguageToggle lang={lang} />
        <ThemeToggle />
      </div>
    </header>
  );
}

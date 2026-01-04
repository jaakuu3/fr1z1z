"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ fallbackHref }: { fallbackHref: string }) {
  const router = useRouter();

  function goBack() {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  }

  return (
    <button
      type="button"
      onClick={goBack}
      className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:text-zinc-400 dark:hover:text-zinc-100"
      aria-label="Вернуться назад"
    >
      <span className="text-lg leading-none">←</span>
      <span>Назад</span>
    </button>
  );
}

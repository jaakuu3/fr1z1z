export type Lang = "ru" | "en";

export const LANGS: Lang[] = ["ru", "en"];

export function isLang(v: string): v is Lang {
  return v === "ru" || v === "en";
}

export function langLabel(lang: Lang) {
  return lang === "ru" ? "Русский" : "English";
}

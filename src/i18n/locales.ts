export type Locale = 'ru' | 'en';

/** Строка на всех поддерживаемых языках — для данных каталога и магазина */
export type Localized = Record<Locale, string>;

/** Язык при первом посещении */
export const DEFAULT_LOCALE: Locale = 'ru';

/** Языки в переключателе: короткая подпись и полное название на самом языке */
export const LOCALES: readonly { code: Locale; short: string; name: string }[] = [
  { code: 'ru', short: 'RU', name: 'Русский' },
  { code: 'en', short: 'EN', name: 'English' },
];

const STORAGE_KEY = 'home-of-furniture:locale';

function isLocale(value: unknown): value is Locale {
  return value === 'ru' || value === 'en';
}

/** Сохранённый выбор языка; если его нет или хранилище недоступно — язык по умолчанию */
export function readStoredLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isLocale(stored) ? stored : DEFAULT_LOCALE;
  } catch {
    return DEFAULT_LOCALE;
  }
}

export function storeLocale(locale: Locale): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Хранилище недоступно (приватный режим, запрет cookies) — выбор действует до перезагрузки
  }
}

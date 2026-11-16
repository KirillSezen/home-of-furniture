import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

import { STORE } from '../data/store';
import { I18nContext } from './context';
import { readStoredLocale, storeLocale } from './locales';
import type { Locale } from './locales';
import { MESSAGES } from './messages';

function setMeta(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute('content', content);
}

/**
 * Хранит выбранный язык: при первом посещении — русский,
 * ручной выбор сохраняется в localStorage. При смене языка обновляет
 * lang документа, заголовок вкладки и описание страницы без перезагрузки.
 */
function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    storeLocale(next);
  }, []);

  const t = MESSAGES[locale];

  useEffect(() => {
    const title = `${STORE.name ?? t.contacts.placeholders.name} — ${t.meta.title}`;
    document.documentElement.lang = locale;
    document.title = title;
    setMeta('meta[name="description"]', t.meta.description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', t.meta.description);
    setMeta('meta[property="og:locale"]', locale === 'ru' ? 'ru_RU' : 'en_US');
  }, [locale, t]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export default LanguageProvider;

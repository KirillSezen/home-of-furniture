import { createContext } from 'react';

import type { Locale } from './locales';
import type { Messages } from './messages';

export type I18nValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** Тексты интерфейса на текущем языке */
  t: Messages;
};

export const I18nContext = createContext<I18nValue | null>(null);

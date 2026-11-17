import { useContext } from 'react';

import { I18nContext } from './context';
import type { I18nValue } from './context';

/** Текущий язык, его смена и тексты интерфейса */
export function useI18n(): I18nValue {
  const value = useContext(I18nContext);
  if (!value) {
    throw new Error('useI18n must be used inside <LanguageProvider>');
  }
  return value;
}

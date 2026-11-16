import { LOCALES } from '../i18n/locales';
import { useI18n } from '../i18n/useI18n';

import './LanguageSwitcher.css';

/**
 * Переключатель RU/EN. Кнопки с aria-pressed: выбранный язык выделен
 * заливкой и объявляется скринридером как «нажата».
 */
function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div className="lang-switcher" role="group" aria-label={t.header.languageLabel}>
      {LOCALES.map((item) => (
        <button
          key={item.code}
          type="button"
          className="lang-switcher__button"
          lang={item.code}
          aria-pressed={locale === item.code}
          onClick={() => setLocale(item.code)}
        >
          {item.short}
          <span className="visually-hidden"> — {item.name}</span>
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;

import { STORE } from '../data/store';
import { useI18n } from '../i18n/useI18n';
import { NAV_ITEMS } from '../navigation';
import LanguageSwitcher from './LanguageSwitcher';

import './SiteHeader.css';

function SiteHeader() {
  const { t } = useI18n();

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        {/* Название — из src/data/store.ts; знак — заглушка до утверждения логотипа */}
        <a className="site-header__brand" href="/">
          <span className="site-header__brand-mark" aria-hidden="true" />
          <span>{STORE.name ?? t.contacts.placeholders.name}</span>
        </a>

        <nav className="site-header__nav" aria-label={t.header.navLabel}>
          <ul className="site-nav">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a className="site-nav__link" href={`#${item.id}`}>
                  {t.nav[item.labelKey]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  );
}

export default SiteHeader;

import { STORE } from '../data/store';
import { useI18n } from '../i18n/useI18n';
import { NAV_ITEMS } from '../navigation';
import StoreValue from './StoreValue';

import './SiteFooter.css';

function SiteFooter() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  const name = STORE.name ?? t.contacts.placeholders.name;

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__about">
          <p className="site-footer__brand">{name}</p>
          <p className="site-footer__note">{t.footer.tagline}</p>
        </div>

        <nav className="site-footer__section" aria-label={t.footer.sectionsLabel}>
          <h2 className="site-footer__heading">{t.footer.sectionsHeading}</h2>
          <ul className="site-footer__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{t.nav[item.labelKey]}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__section">
          <h2 className="site-footer__heading">{t.footer.contactsHeading}</h2>
          {/* Значения — из src/data/store.ts */}
          <ul className="site-footer__list site-footer__list--contacts">
            <li>
              <StoreValue field="phone" linkAs="tel" />
            </li>
            <li>
              <StoreValue field="email" linkAs="mailto" />
            </li>
            <li>
              <StoreValue field="address" />
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <p className="site-footer__copy">
          © {year} {name}
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;

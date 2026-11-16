import { STORE, storeText } from '../data/store';
import { NAV_ITEMS } from '../navigation';
import StoreValue from './StoreValue';

import './SiteFooter.css';

function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__about">
          <p className="site-footer__brand">{storeText(STORE.name)}</p>
          <p className="site-footer__note">Мебель для дома</p>
        </div>

        <nav className="site-footer__section" aria-label="Разделы страницы">
          <h2 className="site-footer__heading">Разделы</h2>
          <ul className="site-footer__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__section">
          <h2 className="site-footer__heading">Контакты</h2>
          {/* Значения — из src/data/store.ts; пока там заглушки */}
          <ul className="site-footer__list site-footer__list--contacts">
            <li>
              <StoreValue field={STORE.phone} linkAs="tel" />
            </li>
            <li>
              <StoreValue field={STORE.email} linkAs="mailto" />
            </li>
            <li>
              <StoreValue field={STORE.address} />
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <p className="site-footer__copy">
          © {year} {storeText(STORE.name)}
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;

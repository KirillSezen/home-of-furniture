import { STORE, storeText } from '../data/store';
import { NAV_ITEMS } from '../navigation';

import './SiteHeader.css';

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        {/* Название — из src/data/store.ts; знак — заглушка до утверждения логотипа */}
        <a className="site-header__brand" href="/">
          <span className="site-header__brand-mark" aria-hidden="true" />
          <span>{storeText(STORE.name)}</span>
        </a>

        <nav className="site-header__nav" aria-label="Основная навигация">
          <ul className="site-nav">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a className="site-nav__link" href={`#${item.id}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;

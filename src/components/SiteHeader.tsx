import { NAV_ITEMS } from '../navigation';

import './SiteHeader.css';

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        {/* Заглушка: название и логотип магазина пока не утверждены */}
        <a className="site-header__brand" href="/">
          <span className="site-header__brand-mark" aria-hidden="true" />
          <span>Название магазина</span>
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

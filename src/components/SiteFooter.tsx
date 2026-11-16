import { NAV_ITEMS } from '../navigation';

import './SiteFooter.css';

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        {/* Заглушки: название, контакты и реквизиты пока не предоставлены */}
        <div className="site-footer__about">
          <p className="site-footer__brand">Название магазина</p>
          <p className="site-footer__note">Контакты и реквизиты появятся позже.</p>
        </div>

        <nav aria-label="Разделы сайта">
          <ul className="site-footer__nav">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default SiteFooter;

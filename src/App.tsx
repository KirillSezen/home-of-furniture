import { useState } from 'react';

import AboutSection from './components/AboutSection';
import CatalogSection from './components/CatalogSection';
import CategoriesSection from './components/CategoriesSection';
import ContactsSection from './components/ContactsSection';
import Hero from './components/Hero';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import type { CatalogFilter } from './data/showcase';
import { useI18n } from './i18n/useI18n';

function App() {
  const { t } = useI18n();
  // Общий фильтр: его меняют и кнопки каталога, и карточки категорий
  const [catalogFilter, setCatalogFilter] = useState<CatalogFilter>('all');

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipLink}
      </a>

      <SiteHeader />

      <main id="main">
        <Hero />
        <CategoriesSection onSelect={setCatalogFilter} />
        <CatalogSection filter={catalogFilter} onFilterChange={setCatalogFilter} />
        <AboutSection />
        <ContactsSection />
      </main>

      <SiteFooter />
    </>
  );
}

export default App;

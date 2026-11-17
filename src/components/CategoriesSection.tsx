import { CATEGORIES } from '../data/showcase';
import type { CategoryId } from '../data/showcase';
import { useI18n } from '../i18n/useI18n';
import ImageSlot from './ImageSlot';
import PageSection from './PageSection';

import './CategoriesSection.css';

type CategoriesSectionProps = {
  /** Включает фильтр каталога; переход к #catalog делает сама ссылка */
  onSelect: (category: CategoryId) => void;
};

function CategoriesSection({ onSelect }: CategoriesSectionProps) {
  const { locale, t } = useI18n();

  return (
    <PageSection id="categories" title={t.categories.title} lead={t.categories.lead}>
      <ul className="card-grid categories__grid">
        {CATEGORIES.map((category) => (
          <li key={category.id} className="category-card">
            <ImageSlot
              className="category-card__media"
              src={category.image?.src}
              alt={category.image?.alt[locale]}
            />
            <div className="category-card__body">
              <h3>
                {/* Ссылка растянута на всю карточку (::after), клик включает фильтр */}
                <a
                  className="category-card__link"
                  href="#catalog"
                  onClick={() => onSelect(category.id)}
                >
                  {category.title[locale]}
                  <span className="visually-hidden"> — {t.categories.cardAction}</span>
                </a>
              </h3>
              <p className="category-card__text">{category.description[locale]}</p>
              <span className="category-card__action" aria-hidden="true">
                {t.categories.cardAction} →
              </span>
            </div>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}

export default CategoriesSection;

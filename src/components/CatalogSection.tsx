import { CATEGORIES, PRODUCTS, categoryTitle, productsFor } from '../data/showcase';
import type { CatalogFilter } from '../data/showcase';
import { useI18n } from '../i18n/useI18n';
import ImageSlot from './ImageSlot';
import PageSection from './PageSection';

import './CatalogSection.css';

type CatalogSectionProps = {
  filter: CatalogFilter;
  onFilterChange: (filter: CatalogFilter) => void;
};

/** Каталог на главной: фильтр по категориям и карточки из src/data/showcase.ts. */
function CatalogSection({ filter, onFilterChange }: CatalogSectionProps) {
  const { locale, t } = useI18n();
  const visible = productsFor(filter);

  const options: { id: CatalogFilter; label: string }[] = [
    { id: 'all', label: t.catalog.all },
    ...CATEGORIES.map((category) => ({ id: category.id, label: category.title[locale] })),
  ];

  return (
    <PageSection id="catalog" title={t.catalog.title} lead={t.catalog.lead} tone="muted">
      <div className="catalog__toolbar">
        <div className="catalog__filters" role="group" aria-label={t.catalog.filterLabel}>
          {options.map((option) => {
            const selected = filter === option.id;
            return (
              <button
                key={option.id}
                type="button"
                className="filter-chip"
                aria-pressed={selected}
                onClick={() => onFilterChange(option.id)}
              >
                <svg
                  className="filter-chip__check"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M3 8.5l3.2 3L13 4.5" />
                </svg>
                {option.label}
                <span className="filter-chip__count">{productsFor(option.id).length}</span>
              </button>
            );
          })}
        </div>
        <p className="catalog__status" aria-live="polite">
          {t.catalog.status(visible.length, PRODUCTS.length)}
        </p>
      </div>

      {visible.length === 0 ? (
        <p className="catalog__empty">{t.catalog.empty}</p>
      ) : (
        <ul className="card-grid catalog__grid">
          {visible.map((product) => (
            <li key={product.id}>
              <article className="product-card" aria-labelledby={`product-${product.id}`}>
                <ImageSlot
                  className="product-card__media"
                  src={product.image?.src}
                  alt={product.image?.alt[locale]}
                />
                <div className="product-card__body">
                  <span className="tag">{t.catalog.tag}</span>
                  <h3 id={`product-${product.id}`}>{product.name[locale]}</h3>
                  <dl className="product-card__specs">
                    <div className="product-card__spec">
                      <dt>{t.catalog.specRoom}</dt>
                      <dd>{categoryTitle(product.categories[0])[locale]}</dd>
                    </div>
                    <div className="product-card__spec">
                      <dt>{t.catalog.specType}</dt>
                      <dd>{product.type[locale]}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </PageSection>
  );
}

export default CatalogSection;

import { PRODUCTS } from '../data/showcase';
import ImageSlot from './ImageSlot';
import PageSection from './PageSection';

import './CollectionSection.css';

function CollectionSection() {
  return (
    <PageSection
      id="collection"
      title="Подборка мебели"
      lead="Демонстрационные карточки: показывают, как будет выглядеть подборка. Реальные товары и фотографии появятся позже."
      tone="muted"
    >
      <ul className="card-grid collection__grid">
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <article className="product-card" aria-labelledby={`product-${product.id}`}>
              <ImageSlot className="product-card__media" image={product.image} />
              <div className="product-card__body">
                <span className="tag">Пример</span>
                <h3 id={`product-${product.id}`}>{product.name}</h3>
                <dl className="product-card__specs">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="product-card__spec">
                      <dt>{spec.label}</dt>
                      <dd>{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}

export default CollectionSection;

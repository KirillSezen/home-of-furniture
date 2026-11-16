import { CATEGORIES } from '../data/showcase';
import ImageSlot from './ImageSlot';
import PageSection from './PageSection';

import './CategoriesSection.css';

function CategoriesSection() {
  return (
    <PageSection
      id="categories"
      title="Категории"
      lead="Примеры комнат и типов мебели. Актуальный ассортимент уточняйте в магазине."
    >
      <ul className="card-grid categories__grid">
        {CATEGORIES.map((category) => (
          <li key={category.id} className="category-card">
            <ImageSlot
              className="category-card__media"
              image={category.image}
              art={category.art}
              tone={category.tone}
              label="Фото"
            />
            <div className="category-card__body">
              <h3>{category.title}</h3>
              <p className="category-card__text">{category.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}

export default CategoriesSection;

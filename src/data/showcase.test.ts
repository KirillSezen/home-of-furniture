import { describe, expect, it } from 'vitest';

import { CATEGORIES, PRODUCTS, categoryTitle, productsFor } from './showcase';
import type { CatalogFilter } from './showcase';

const ids = (filter: CatalogFilter) => productsFor(filter).map((product) => product.id);

describe('productsFor — фильтр каталога', () => {
  it('«все» возвращает все товары в исходном порядке', () => {
    expect(ids('all')).toEqual(['sofa', 'armchair', 'coffee-table', 'bed', 'chest', 'dining-set']);
  });

  it.each<[CatalogFilter, string[]]>([
    ['living-room', ['sofa', 'armchair', 'coffee-table']],
    ['bedroom', ['bed', 'chest']],
    ['dining-room', ['dining-set']],
    ['storage', ['chest']],
  ])('категория %s показывает только свои товары', (filter, expected) => {
    expect(ids(filter)).toEqual(expected);
  });

  it('товар из нескольких категорий виден в каждой из них', () => {
    expect(ids('bedroom')).toContain('chest');
    expect(ids('storage')).toContain('chest');
  });

  it('ни одна категория из раздела «Категории» не даёт пустой каталог', () => {
    for (const category of CATEGORIES) {
      expect(productsFor(category.id).length, category.id).toBeGreaterThan(0);
    }
  });

  it('каждый товар попадает хотя бы в одну категорию', () => {
    const shown = new Set(CATEGORIES.flatMap((category) => ids(category.id)));
    expect([...shown].sort()).toEqual(PRODUCTS.map((product) => product.id).sort());
  });
});

describe('categoryTitle', () => {
  it('возвращает название категории на обоих языках', () => {
    expect(categoryTitle('living-room')).toEqual({ ru: 'Гостиная', en: 'Living room' });
    expect(categoryTitle('storage')).toEqual({ ru: 'Хранение', en: 'Storage' });
  });
});

describe('данные каталога', () => {
  it('содержит четыре основные категории', () => {
    expect(CATEGORIES.map((category) => category.title.ru)).toEqual([
      'Гостиная',
      'Спальня',
      'Столовая',
      'Хранение',
    ]);
  });

  it('id товаров уникальны', () => {
    const productIds = PRODUCTS.map((product) => product.id);
    expect(new Set(productIds).size).toBe(productIds.length);
  });

  it('у каждой категории и товара есть тексты и описание фото на обоих языках', () => {
    const items = [
      ...CATEGORIES.map((c) => ({ id: c.id, texts: [c.title, c.description], image: c.image })),
      ...PRODUCTS.map((p) => ({ id: p.id, texts: [p.name, p.type], image: p.image })),
    ];

    for (const item of items) {
      for (const text of [...item.texts, item.image?.alt]) {
        expect(text?.ru.trim(), item.id).toBeTruthy();
        expect(text?.en.trim(), item.id).toBeTruthy();
      }
      expect(item.image?.src, item.id).toBeTruthy();
    }
  });
});
